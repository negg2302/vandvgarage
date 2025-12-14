import { Cog, Calendar, MessageCircle, Zap, Brain, Sparkles } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Создание ПО для реорганизации процессов",
    description: "Инструменты для упрощения операций: заявки, статусы, согласования, отчёты, личные кабинеты, интеграции.",
    result: "Меньше ручной работы, меньше ошибок, больше прозрачности.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Calendar,
    title: "Решения для ивент-агентств",
    description: "Регистрация, билеты, QR-чек-ин, расписание, голосования, networking, админка, промо-механики.",
    result: "Консультации и разработка под ключ.",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: MessageCircle,
    title: "Telegram-боты и мини-приложения",
    description: "Боты для поддержки, продаж, записи, опросов, уведомлений, интеграций с CRM и платежами.",
    result: "WebApp внутри Telegram при необходимости.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Zap,
    title: "Скрипты и автоматизация",
    description: "Соединяем ваши инструменты: Google Sheets, Notion, CRM, почта, мессенджеры, платежи, API.",
    result: "Заявка → сделка → уведомление → документ → клиент.",
    color: "bg-accent/30 text-accent-foreground",
  },
  {
    icon: Brain,
    title: "AI-интеграция в процессы",
    description: "Поиск по документам, ответы из базы знаний, суммаризация, классификация, черновики писем.",
    result: "Прикладная польза, метрики и контроль качества.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "AI-проекты под ключ",
    description: "Небольшой AI-продукт от прототипа до продакшена: NLP, CV, аналитика данных.",
    result: "Если есть данные и понятная цель — сделаем.",
    color: "bg-secondary/10 text-secondary",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-muted/30" id="services">
      <div className="container max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Чем мы занимаемся</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки: от идеи до запуска и поддержки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
              <p className="text-sm font-medium text-primary">{service.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
