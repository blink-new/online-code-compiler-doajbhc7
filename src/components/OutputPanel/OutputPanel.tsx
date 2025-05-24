import { ScrollArea } from "../ui/scroll-area";

interface OutputPanelProps {
  output: string;
  isRunning: boolean;
}

const OutputPanel = ({ output, isRunning }: OutputPanelProps) => {
  return (
    <div className="flex h-full w-full flex-col rounded-md border bg-black">
      <div className="border-b px-4 py-2">
        <div className="flex items-center">
          <div className="text-sm font-medium text-white">Output</div>
          {isRunning && (
            <div className="ml-2 flex items-center">
              <div className="mr-1 h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span className="text-xs text-green-500">Running...</span>
            </div>
          )}
        </div>
      </div>
      
      <ScrollArea className="h-full">
        <div className="p-4">
          {output ? (
            <pre className="whitespace-pre-wrap break-words font-mono text-sm text-white">
              {output}
            </pre>
          ) : (
            <div className="text-sm italic text-gray-500">
              Click "Run" to see the output
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default OutputPanel;