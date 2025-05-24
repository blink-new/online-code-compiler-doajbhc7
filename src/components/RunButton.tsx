import { Play, Loader2 } from 'lucide-react';

interface RunButtonProps {
  onClick: () => void;
  isRunning: boolean;
}

export default function RunButton({ onClick, isRunning }: RunButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isRunning}
      className="flex items-center gap-2 rounded-md bg-primary-600 px-3 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      {isRunning ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Running...</span>
        </>
      ) : (
        <>
          <Play className="h-4 w-4" />
          <span>Run</span>
        </>
      )}
    </button>
  );
}