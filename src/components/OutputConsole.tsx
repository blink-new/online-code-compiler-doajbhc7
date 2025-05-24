import { useState, useEffect } from 'react';
import { Check, X, RotateCw } from 'lucide-react';

interface OutputConsoleProps {
  output: string;
  isLoading: boolean;
  isError: boolean;
  theme: 'vs-dark' | 'light';
  onClear: () => void;
}

export default function OutputConsole({ output, isLoading, isError, theme, onClear }: OutputConsoleProps) {
  const [formattedOutput, setFormattedOutput] = useState<string>(output);

  useEffect(() => {
    setFormattedOutput(output);
  }, [output]);

  return (
    <div className="h-full flex flex-col overflow-hidden rounded-md border border-border">
      <div className="flex items-center justify-between border-b border-border p-2">
        <h3 className="text-sm font-medium">Output</h3>
        <div className="flex items-center gap-2">
          {isLoading ? (
            <RotateCw className="h-4 w-4 animate-spin text-muted-foreground" />
          ) : isError ? (
            <X className="h-4 w-4 text-destructive" />
          ) : output ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : null}
          <button
            onClick={onClear}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
      <div 
        className={`flex-1 overflow-auto p-4 font-mono text-sm whitespace-pre-wrap ${
          theme === 'vs-dark' ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-800'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <RotateCw className="h-4 w-4 animate-spin" />
            <span>Running code...</span>
          </div>
        ) : formattedOutput ? (
          <div className={isError ? 'text-destructive' : ''}>{formattedOutput}</div>
        ) : (
          <div className="text-muted-foreground">Code output will appear here</div>
        )}
      </div>
    </div>
  );
}