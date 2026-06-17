# Редактирование контента

Основной файл сайта:

```txt
index.html
```

## Где менять текст

Тексты секций находятся прямо в HTML-разметке:

- Hero: заголовок, подзаголовок, CTA.
- KPI: цифры `1500+`, `30 000+`, `200+`, `12`.
- About: описание компании.
- Services: карточки услуг.
- Technology: блок технологий.
- Cases: карточки проектов.
- Requisites: реквизиты компании.
- Contact: финальный CTA.

Ищите нужный текст через поиск по файлу.

## Где менять контакты

Сейчас используются:

```txt
Телефон: +7 (812) 336-87-01
Email: prodgekt-1100@yandex.ru
WhatsApp: https://wa.me/79816838475
Telegram: https://t.me/dyksiv
```

При смене публичных контактов проверьте:

- header;
- section `#requisites`;
- section `#contact`;
- `mailto:` ссылки;
- WhatsApp/Telegram ссылки.

Важно: видимая почта на сайте может отличаться от email, куда реально уходят заявки. Получатель заявок задается в `api/callback.js` и `api/ai-lead.js` через `FORM_TARGET`.

## Где менять изображения

Основные изображения сайта:

```txt
project1100/images/site/
  route-clearance.png
  team-briefing.png
  vehicle-detection.png
  field-survey-wide.png
  marked-clearance.png
  vehicle-clearance-wide.png
```

Hero poster:

```html
poster="project1100/images/site/route-clearance.png"
```

## Где менять видео

Hero video подключено так:

```html
<source src="project1100/video/hero.mp4" type="video/mp4" />
```

Если видео нет, показывается poster/image fallback.

## AI-оператор

Тексты AI-оператора находятся в объекте `aiCopy` в нижнем `<script type="module">` внутри `index.html`.

Основные фразы:

- первое сообщение;
- вопросы по полям;
- финальное сообщение перед отправкой.
