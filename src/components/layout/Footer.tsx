import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-1">V&V Garage</h3>
            <p className="text-sm text-muted-foreground">
              Разработка и автоматизация для бизнеса
            </p>
          </div>
          
          <a 
            href="https://t.me/mc_vhs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Send className="w-4 h-4" />
            <span className="text-sm">@mc_vhs</span>
          </a>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} V&V Garage
        </div>
      </div>
    </footer>
  );
};

export default Footer;
