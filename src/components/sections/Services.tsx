import { Cog, Calendar, MessageCircle, Zap, Brain, Sparkles } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "ПО для реорганизации процессов",
    description: "Заявки, статусы, согласования, отчёты, личные кабинеты, интеграции.",
    result: "Меньше ручной работы, больше прозрачности.",
  },
  {
    icon: Calendar,
    title: "Решения для ивент-агентств",
    description: "Регистрация, билеты, QR-чек-ин, расписание, голосования, networking.",
    result: "Консультации и разработка под ключ.",
  },
  {
    icon: MessageCircle,
    title: "Telegram-боты",
    description: "Поддержка, продажи, запись, опросы, уведомления, интеграции с CRM.",
    result: "WebApp внутри Telegram при необходимости.",
  },
  {
    icon: Zap,
    title: "Скрипты и автоматизация",
    description: "Google Sheets, Notion, CRM, почта, мессенджеры, платежи, API.",
    result: "Заявка → сделка → уведомление → документ.",
  },
  {
    icon: Brain,
    title: "AI-интеграция",
    description: "Поиск по документам, суммаризация, классификация, черновики писем.",
    result: "Прикладная польза и контроль качества.",
  },
  {
    icon: Sparkles,
    title: "AI-проекты под ключ",
    description: "От прототипа до продакшена: NLP, CV, аналитика данных.",
    result: "Если есть данные и цель — сделаем.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 grainy" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-background" />
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Чем мы занимаемся</h2>
          <p className="text-muted-foreground">Полный цикл разработки: от идеи до запуска</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-border/40 hover:border-border transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
              <p className="text-xs text-muted-foreground/70">{service.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
