import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './components/ThemeProvider';

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center justify-center p-2 rounded-full bg-transparent focus:outline-none"
          aria-label="Toggle theme"
        >
          {/* Sun icon */}
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all ${
              theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}
          />
          {/* Moon icon */}
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === 'dark' ? 'opacity-100 scale-100 text-white' : 'opacity-0 scale-0 text-gray-700'
            }`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}
      >
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DarkMode;
