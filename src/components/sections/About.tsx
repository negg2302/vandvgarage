import { CheckCircle } from "lucide-react";

const advantages = [
  "Быстро запускаем MVP, прозрачность, широкий кругозор и цены ниже рыночных",
  "Можем не только разработать, но и выступить в роли технических консультантов",
  "Помогаем организовать процессы с готовыми решениями, если разработка обходится дорого",
];

const About = () => {
  return (
    <section className="py-24 px-4 bg-muted/30" id="about">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О V&V Garage</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Небольшая команда full-stack разработки для бизнеса и ивентов. 
              Делаем автоматизацию, ботов, веб/мобайл и AI-интеграции.
            </p>
            
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{advantage}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            {/* Geometric composition */}
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-2xl shadow-lg animate-float" />
              <div className="absolute top-20 right-0 w-24 h-24 bg-secondary rounded-full shadow-lg animate-float-delayed" />
              <div className="absolute bottom-10 left-10 w-28 h-28 bg-accent rounded-lg rotate-12 shadow-lg animate-spin-slow" />
              <div className="absolute bottom-0 right-10 w-20 h-20 bg-destructive/80 rounded-full shadow-lg animate-pulse-soft" />
              
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border">
                  <span className="text-3xl font-bold">V&V</span>
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
