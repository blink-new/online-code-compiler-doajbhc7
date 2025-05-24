import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { LanguageOption } from '../lib/languageOptions';

interface LanguageSelectorProps {
  languages: LanguageOption[];
  selectedLanguage: LanguageOption;
  onSelectLanguage: (language: LanguageOption) => void;
}

export default function LanguageSelector({
  languages,
  selectedLanguage,
  onSelectLanguage,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelectLanguage = (language: LanguageOption) => {
    onSelectLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-sm hover:bg-accent transition-colors"
      >
        <span>{selectedLanguage.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 z-10 mt-1 w-48 origin-top-left rounded-md border border-border bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="max-h-60 overflow-auto py-1">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => handleSelectLanguage(language)}
                className={cn(
                  "flex w-full items-center px-3 py-2 text-sm hover:bg-accent transition-colors",
                  selectedLanguage.id === language.id && "bg-accent"
                )}
              >
                <span className="flex-1 text-left">{language.name}</span>
                {selectedLanguage.id === language.id && (
                  <Check className="h-4 w-4" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}