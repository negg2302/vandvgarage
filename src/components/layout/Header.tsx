import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container flex items-center justify-between h-14 px-4">
        <a href="/" className="font-semibold text-lg">
          V&V Garage
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Услуги
          </a>
          <a href="#formats" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Форматы
          </a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Процесс
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            О нас
          </a>
        </nav>

        <a 
          href="https://t.me/mc_vhs" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button size="sm" className="gap-2">
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Написать</span>
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
