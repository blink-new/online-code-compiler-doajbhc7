import { Trash, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { CompileResult } from '../lib/compiler';
import { toast } from 'react-hot-toast';

interface ConsoleProps {
  result: CompileResult | null;
  onClear: () => void;
}

export function Console({ result, onClear }: ConsoleProps) {
  const [isCopying, setIsCopying] = useState(false);

  const copyOutput = async () => {
    if (!result) return;
    
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(result.error || result.output);
      toast.success('Output copied to clipboard');
    } catch (_) {
      toast.error('Failed to copy output');
      console.error(_);
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <div className="flex flex-col h-full border rounded-md overflow-hidden">
      <div className="bg-muted/40 p-2 flex items-center justify-between border-b">
        <span className="font-medium text-sm">
          Console
          {result && result.executionTime > 0 && (
            <span className="text-xs text-muted-foreground ml-2">
              Execution time: {result.executionTime}ms
            </span>
          )}
        </span>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={copyOutput}
            disabled={isCopying || !result || (!result.output && !result.error)}
            title="Copy output"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClear}
            disabled={!result}
            title="Clear console"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-grow p-4 font-mono text-sm overflow-auto bg-black text-white dark:bg-zinc-900">
        {result ? (
          result.error ? (
            <pre className="text-red-400 whitespace-pre-wrap">{result.error}</pre>
          ) : (
            <pre className="whitespace-pre-wrap">{result.output}</pre>
          )
        ) : (
          <div className="text-muted-foreground">
            Run your code to see output here...
          </div>
        )}
      </div>
    </div>
  );
}