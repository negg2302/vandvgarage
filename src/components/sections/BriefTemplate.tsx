import { Copy, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const briefTemplate = `1) Что нужно сделать:
(бот / сайт / автоматизация / AI / ивент-приложение / консультация)

2) Задача и ожидаемый результат:
(в 1–3 предложениях)

3) Первая версия (2–5 функций):
—
—
—

4) Интеграции / сервисы (если есть):
(CRM, платежи, Google Sheets, API, Telegram и т.д.)

5) Срок запуска:
(дата или "в течение N недель")

6) Бюджет (если можете указать диапазон):
(например: 10 000 руб)

7) Ссылки / файлы / примеры (если есть):
(сайт, референсы, ТЗ, скрины, доступы)`;

const BriefTemplate = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(briefTemplate);
      setCopied(true);
      toast({
        title: "Скопировано!",
        description: "Шаблон брифа скопирован в буфер обмена",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Ошибка",
        description: "Не удалось скопировать текст",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-24 px-4" id="brief">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Готовы начать?</h2>
          <p className="text-muted-foreground">
            Заполните бриф — это ускорит начало работы
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-sm rounded-xl border border-border/40 overflow-hidden animate-fade-in-up">
          <div className="bg-muted/30 px-6 py-4 flex items-center justify-between border-b border-border/40">
            <span className="text-sm font-medium text-muted-foreground">Шаблон брифа</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Скопировано
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Копировать
                </>
              )}
            </Button>
          </div>
          <pre className="p-6 text-sm whitespace-pre-wrap font-mono text-muted-foreground leading-relaxed overflow-x-auto">
            {briefTemplate}
          </pre>
        </div>

        <div className="text-center mt-8 animate-fade-in">
          <a 
            href="https://t.me/mc_vhs" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2">
              <Send className="w-4 h-4" />
              Отправить в Telegram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BriefTemplate;
