const steps = [
  { number: "01", title: "Созвон", description: "Цель, сроки" },
  { number: "02", title: "ТЗ", description: "Скоуп MVP" },
  { number: "03", title: "Прототип", description: "Если нужно" },
  { number: "04", title: "Разработка", description: "Спринты + демо" },
  { number: "05", title: "Тест", description: "И релиз" },
  { number: "06", title: "Поддержка", description: "И развитие" },
];

const Process = () => {
  return (
    <section className="py-24 px-4 grainy" id="process">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Как мы работаем</h2>
          <p className="text-muted-foreground">От идеи до запуска</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-border" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-16 h-16 bg-card border border-border rounded-full mx-auto mb-4 flex items-center justify-center font-medium text-muted-foreground relative z-10">
                  {step.number}
                </div>
                <h3 className="font-medium text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
