import { Code2, Share2 } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">CodeCraft</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 size={16} />
            <span>Share</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;