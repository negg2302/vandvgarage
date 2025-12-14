const steps = [
  { number: "01", title: "Короткий созвон", description: "Цель, ограничения, сроки" },
  { number: "02", title: "Формируем ТЗ", description: "Что делаем сейчас, что позже" },
  { number: "03", title: "Прототип/дизайн", description: "Если нужно" },
  { number: "04", title: "Разработка", description: "Спринтами + демо" },
  { number: "05", title: "Тестирование", description: "И релиз" },
  { number: "06", title: "Поддержка", description: "И развитие" },
];

const Process = () => {
  return (
    <section className="py-24 px-4 bg-muted/30" id="process">
      <div className="container max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-muted-foreground">Стандартный процесс от идеи до запуска</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-card border-2 border-primary rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-primary text-lg shadow-sm relative z-10">
                  {step.number}
                </div>
                <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
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
