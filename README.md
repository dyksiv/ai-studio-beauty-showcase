# ПРОЕКТ 1100 — документация проекта

Сайт компании ООО «ПРОЕКТ 1100»: гуманитарное разминирование, инженерная безопасность, обследование и очистка территорий.

Production URL:

```txt
https://project-1100-three.vercel.app
```

## Что внутри

```txt
index.html                  Главная страница, стили, UI и клиентская логика
api/
  callback.js               Обратный звонок: проверка Turnstile и отправка заявки
  ai-lead.js                AI-оператор: проверка Turnstile и отправка AI-заявки
  turnstile-config.js       Отдает публичный Turnstile site key на клиент
project1100/
  images/                   Изображения, логотипы, визуальные материалы
  video/hero.mp4            Видео для hero, если добавлено
docs/                       Техническая документация проекта
```

## Основные функции

- Premium industrial landing page в светлом стиле.
- Hero-блок с видео/постером.
- Контактный блок с email, WhatsApp, Telegram.
- Форма обратного звонка.
- Cloudflare Turnstile для защиты форм.
- AI-оператор для предварительного сбора заявки.
- Vercel Serverless API для обработки заявок.

## Быстрый старт

Для локальной статической проверки можно открыть `index.html` в браузере. Для проверки API лучше использовать Vercel Preview/Production, потому что serverless-функции работают через Vercel.

Проверка API-синтаксиса:

```bash
node --check api/callback.js
node --check api/ai-lead.js
node --check api/turnstile-config.js
```

Production build:

```bash
vercel build --yes
```

Deploy:

```bash
vercel deploy --prod --yes
```

## Документация

- [Архитектура](docs/ARCHITECTURE.md)
- [Редактирование контента](docs/CONTENT_EDITING.md)
- [Формы и заявки](docs/FORMS.md)
- [AI-оператор](docs/AI_OPERATOR.md)
- [Деплой и переменные окружения](docs/DEPLOYMENT.md)

