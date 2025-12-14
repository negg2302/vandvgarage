import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-lg animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-accent/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-destructive/10 rounded-full animate-pulse-soft" />
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-primary/15 rounded-lg rotate-12 animate-bounce-soft" />
      </div>

      <div className="container max-w-4xl text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Разрабатываем софт и автоматизацию под ваши процессы
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Небольшая команда full-stack разработчиков. Создаём решения для реорганизации процессов, ивент-проектов, Telegram-ботов, мини-игр, приложений и AI-интеграций.
          </p>
          
          <a 
            href="https://t.me/mc_vhs" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="gap-2">
              <Send className="w-5 h-5" />
              Обсудить задачу
            </Button>
          </a>
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 animate-fade-in-up">
          <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">MVP за 1–4 недели</h3>
            <p className="text-sm text-muted-foreground">Быстрый запуск вашего продукта</p>
          </div>
          
          <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold mb-2">Бизнес-аналитики в команде</h3>
            <p className="text-sm text-muted-foreground">Прозрачность на каждом этапе</p>
          </div>
          
          <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🛠</span>
            </div>
            <h3 className="font-semibold mb-2">Поддержка</h3>
            <p className="text-sm text-muted-foreground">Сопровождаем после запуска</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
