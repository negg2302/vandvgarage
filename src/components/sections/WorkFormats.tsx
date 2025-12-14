import { Rocket, Package, Users, Search } from "lucide-react";

const formats = [
  {
    icon: Rocket,
    title: "MVP/быстрый запуск",
    description: "Фиксируем результат, делаем за короткий срок",
    shape: "rounded-full",
    color: "bg-primary",
  },
  {
    icon: Package,
    title: "Проект под ключ",
    description: "От аналитики до релиза и поддержки",
    shape: "rounded-2xl",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "Команда в помощь",
    description: "Outstaff/part-time: backend, frontend, AI research",
    shape: "rounded-lg rotate-45",
    color: "bg-destructive",
  },
  {
    icon: Search,
    title: "Аудит и план",
    description: "Разбираем текущий хаос, даём карту улучшений",
    shape: "rounded-full",
    color: "bg-accent",
  },
];

const WorkFormats = () => {
  return (
    <section className="py-24 px-4" id="formats">
      <div className="container max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Форматы работы</h2>
          <p className="text-muted-foreground">Выберите подходящий формат сотрудничества</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((format, index) => (
            <div
              key={format.title}
              className="relative p-6 text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 ${format.color} ${format.shape === 'rounded-lg rotate-45' ? 'rounded-lg' : format.shape} mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${format.shape === 'rounded-lg rotate-45' ? 'rotate-45' : ''}`}>
                <format.icon className={`w-8 h-8 text-primary-foreground ${format.shape === 'rounded-lg rotate-45' ? '-rotate-45' : ''}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{format.title}</h3>
              <p className="text-sm text-muted-foreground">{format.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFormats;
