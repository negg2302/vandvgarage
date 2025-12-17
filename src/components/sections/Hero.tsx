import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// const services = [
//   "Telegram-бот",
//   "Сайт или веб-сервис",
//   "MVP или прототип",
//   "Интеграция сервисов",
//   "AI-помощник",
//   "Решение для мероприятия",
//   "Техническая консультация",
// ];

const services = [
  "Telegram-бот",
  "Сайт или веб-сервис",
  "MVP или прототип",
  "Интеграция сервисов",
  "AI-помощник для процессов",
  "IT решение для мероприятия",
  "Техническая консультация",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 grainy">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
      
      {/* Minimal geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-muted to-transparent opacity-60 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/20 to-transparent opacity-40 blur-3xl" />
      </div>

      <div className="container max-w-4xl text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
            <span className="text-muted-foreground">Срочно требуется </span>
            <br />
            <span 
              className={`inline-block w-full max-w-[520px] min-h-[3.6em] transition-all duration-200 ${
                isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {services[currentIndex]}?
            </span>
            <br />
            <span className="text-foreground">— Сделаем</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Небольшая команда full-stack разработчиков. Создаём решения для бизнеса, ивентов, автоматизации и AI-интеграций.
          </p>
          
          <a 
            href="https://t.me/mc_vhs" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2">
              <Send className="w-4 h-4" />
              Обсудить задачу
            </Button>
          </a>
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-4 mt-20 animate-fade-in-up">
          <div className="p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-medium mb-1">MVP за 1–4 недели</h3>
            <p className="text-sm text-muted-foreground">Быстрый запуск продукта</p>
          </div>
          
          <div className="p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="font-medium mb-1">Бизнес-аналитики</h3>
            <p className="text-sm text-muted-foreground">Прозрачность на каждом этапе</p>
          </div>
          
          <div className="p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
            <div className="text-2xl mb-3">🛠</div>
            <h3 className="font-medium mb-1">Поддержка</h3>
            <p className="text-sm text-muted-foreground">Сопровождаем после запуска</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
