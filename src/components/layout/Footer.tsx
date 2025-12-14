import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">V&V Garage</h3>
            <p className="text-sm text-muted-foreground">
              Разработка и автоматизация для бизнеса
            </p>
          </div>
          
          <a 
            href="https://t.me/mc_vhs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Send className="w-5 h-5" />
            <span className="font-medium">@mc_vhs</span>
          </a>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} V&V Garage. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
