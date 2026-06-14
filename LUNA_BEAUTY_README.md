# Premium Beauty Landing Demo

Демо-пакет AI Studio: четыре premium landing page для beauty-ниши.

- `/` — Luna Beauty, салон красоты
- `/luna-beauty` — Luna Beauty, отдельная ссылка
- `/lash-muse` — Lash Muse, ресницы
- `/nude-nails` — Nude Nails, маникюр
- `/skin-atelier` — Skin Atelier, косметология

## Как запустить проект

```bash
npm install
npm run dev
```

После запуска Next.js покажет локальный адрес в терминале.

Для проверки production-сборки:

```bash
npm run lint
npm run build
```

## Как заменить тексты

Основной контент всех версий находится в `src/lib/beauty-sites.ts`.

В каждом объекте можно менять:

- `brand`
- `heroTitle`
- `heroSubtitle`
- `services`
- `benefits`
- `gallery`
- `prices`
- `reviews`
- `faq`
- `address`

## Как заменить цены

Цены меняются в `src/lib/beauty-sites.ts`:

- карточки услуг: поле `price` внутри `services`
- блок цен: массив `prices`

## Куда вставить реальные фото

Hero-изображения лежат в `public/images`.

Для замены:

1. Положите новый файл в `public/images`.
2. В `src/lib/beauty-sites.ts` замените поле `heroImage`.
3. Обновите `heroAlt`, чтобы описание соответствовало фото.

Сетка “До / После” сейчас использует премиальные градиентные заглушки. Реальные фото можно подключить в компоненте `Gallery` файла `src/components/beauty-landing.tsx`.

## Как подключить Telegram-уведомления позже

Форма находится в `src/components/booking-form.tsx`.

Внутри `handleSubmit` уже оставлен комментарий с местом подключения отправки:

```ts
await fetch("/api/booking", {
  method: "POST",
  body: JSON.stringify(payload),
});
```

Следующий шаг:

1. Создать `src/app/api/booking/route.ts`.
2. Принять JSON из формы.
3. Отправить сообщение в Telegram Bot API через `fetch`.
4. Хранить `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` в переменных окружения Vercel.
