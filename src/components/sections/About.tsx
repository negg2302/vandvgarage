import { Check } from "lucide-react";

const advantages = [
  "Быстро запускаем MVP, прозрачность, цены ниже рыночных",
  "Можем выступить в роли технических консультантов",
  "Помогаем организовать процессы с готовыми решениями",
];

const About = () => {
  return (
    <section className="py-24 px-4 grainy" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="container max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">О V&V Garage</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Небольшая команда full-stack разработки для бизнеса и ивентов. 
              Делаем автоматизацию, ботов, веб/мобайл и AI-интеграции.
            </p>
            
            <div className="space-y-3">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{advantage}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            {/* Minimal geometric composition */}
            <div className="relative w-full aspect-square max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/60 to-muted/20 rounded-3xl" />
              <div className="absolute top-8 left-8 w-24 h-24 border border-border/60 rounded-2xl" />
              <div className="absolute bottom-12 right-8 w-20 h-20 border border-border/40 rounded-full" />
              
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-card rounded-2xl border border-border flex items-center justify-center">
                  <span className="text-2xl font-semibold text-muted-foreground">V&V</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
