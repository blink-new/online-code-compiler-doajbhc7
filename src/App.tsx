import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CodeEditor } from './components/CodeEditor';
import { LanguageSelector } from './components/LanguageSelector';
import { Console } from './components/Console';
import { compileCode, CompileResult } from './lib/compiler';
import { getDefaultLanguage, Language } from './lib/languages';
import { ResizablePanel, ResizablePanelGroup } from './components/ui/resizable';
import { Button } from './components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<Language>(getDefaultLanguage());
  const [code, setCode] = useState<string>(getDefaultLanguage().defaultCode);
  const [compileResult, setCompileResult] = useState<CompileResult | null>(null);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isVerticalLayout, setIsVerticalLayout] = useState(window.innerWidth < 768);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsVerticalLayout(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update code when language changes
  useEffect(() => {
    setCode(language.defaultCode);
    setCompileResult(null);
  }, [language]);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleRunCode = async () => {
    setIsCompiling(true);
    try {
      const result = await compileCode(code, language);
      setCompileResult(result);
    } catch (error) {
      console.error(error);
      setCompileResult({
        output: '',
        error: 'Failed to compile code. Please try again.',
        executionTime: 0,
      });
    } finally {
      setIsCompiling(false);
    }
  };

  const clearConsole = () => {
    setCompileResult(null);
  };

  const toggleLayout = () => {
    setIsVerticalLayout(!isVerticalLayout);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-4 flex-1 flex flex-col overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <LanguageSelector 
            selectedLanguage={language} 
            onLanguageChange={handleLanguageChange} 
          />
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLayout}
              className="hidden sm:flex items-center gap-1"
            >
              {isVerticalLayout ? (
                <>
                  <ArrowUp className="h-4 w-4" />
                  <span>Horizontal</span>
                </>
              ) : (
                <>
                  <ArrowDown className="h-4 w-4" />
                  <span>Vertical</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {isVerticalLayout ? (
          <div className="flex-1 flex flex-col gap-4 overflow-hidden">
            <div className="flex-1 min-h-[300px]">
              <CodeEditor
                language={language}
                code={code}
                onCodeChange={handleCodeChange}
                onRun={handleRunCode}
                isRunning={isCompiling}
              />
            </div>
            <div className="h-[300px]">
              <Console result={compileResult} onClear={clearConsole} />
            </div>
          </div>
        ) : (
          <ResizablePanelGroup
            direction="horizontal"
            className="flex-1 rounded-lg border overflow-hidden"
          >
            <ResizablePanel defaultSize={60} minSize={30}>
              <CodeEditor
                language={language}
                code={code}
                onCodeChange={handleCodeChange}
                onRun={handleRunCode}
                isRunning={isCompiling}
              />
            </ResizablePanel>
            <ResizablePanel defaultSize={40} minSize={20}>
              <Console result={compileResult} onClear={clearConsole} />
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>
    </div>
  );
}

export default App;