import { useRef, useState } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { Language } from '../lib/languages';
import { Button } from './ui/button';
import { Play, Download, Copy, Trash } from 'lucide-react';
import { toast } from 'react-hot-toast';
import type monaco from 'monaco-editor';

interface CodeEditorProps {
  language: Language;
  code: string;
  onCodeChange: (code: string) => void;
  onRun: () => void;
  isRunning: boolean;
}

export function CodeEditor({ 
  language, 
  code, 
  onCodeChange, 
  onRun,
  isRunning 
}: CodeEditorProps) {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [isCopying, setIsCopying] = useState(false);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `code.${language.extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Code downloaded successfully');
  };

  const copyCode = async () => {
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(code);
      toast.success('Code copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy code');
      console.error(error);
    } finally {
      setIsCopying(false);
    }
  };

  const clearCode = () => {
    onCodeChange('');
    toast.success('Editor cleared');
  };

  return (
    <div className="flex flex-col h-full border rounded-md overflow-hidden">
      <div className="bg-muted/40 p-2 flex items-center justify-between border-b">
        <span className="font-medium text-sm">
          {language.name} Code Editor
        </span>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={copyCode}
            disabled={isCopying || !code}
            title="Copy code"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={downloadCode}
            disabled={!code}
            title="Download code"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={clearCode}
            disabled={!code}
            title="Clear editor"
          >
            <Trash className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onRun}
            disabled={isRunning || !code}
            className="bg-green-600 hover:bg-green-700"
          >
            <Play className="h-4 w-4 mr-1" />
            {isRunning ? 'Running...' : 'Run'}
          </Button>
        </div>
      </div>
      <div className="flex-grow">
        <Editor
          height="100%"
          language={language.monacoLanguage}
          value={code}
          onChange={(value) => onCodeChange(value || '')}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            renderLineHighlight: 'all',
            automaticLayout: true,
            tabSize: 2,
          }}
          onMount={handleEditorDidMount}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}