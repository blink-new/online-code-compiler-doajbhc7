import { Code } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onThemeChange: (theme: 'light' | 'dark') => void;
}

export default function Header({ onThemeChange }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
      <div className="flex items-center gap-2">
        <Code className="h-6 w-6 text-primary-600" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
          CodePad
        </h1>
        <span className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
          Beta
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        <ThemeToggle onToggle={onThemeChange} />
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}