import { Rocket, Package, Users, Search } from "lucide-react";

const formats = [
  {
    icon: Rocket,
    title: "MVP/быстрый запуск",
    description: "Фиксируем результат, делаем за короткий срок",
  },
  {
    icon: Package,
    title: "Проект под ключ",
    description: "От аналитики до релиза и поддержки",
  },
  {
    icon: Users,
    title: "Команда в помощь",
    description: "Outstaff/part-time: backend, frontend, AI",
  },
  {
    icon: Search,
    title: "Аудит и план",
    description: "Разбираем хаос, даём карту улучшений",
  },
];

const WorkFormats = () => {
  return (
    <section className="py-24 px-4" id="formats">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Форматы работы</h2>
          <p className="text-muted-foreground">Выберите подходящий формат</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {formats.map((format, index) => (
            <div
              key={format.title}
              className="p-6 text-center group animate-fade-in-up border border-border/40 rounded-xl bg-card/40 hover:bg-card/80 transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                <format.icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium mb-1">{format.title}</h3>
              <p className="text-sm text-muted-foreground">{format.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFormats;
