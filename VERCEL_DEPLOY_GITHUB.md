# Публикация на Vercel через GitHub

## 1. Подготовить репозиторий

1. Создайте новый репозиторий на GitHub.
2. Загрузите в него проект.
3. Убедитесь, что в репозиторий попали важные файлы:
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`
   - `tsconfig.json`
   - `postcss.config.mjs`
   - `eslint.config.mjs`
   - `src/**`
   - `public/images/**`

## 2. Проверить проект перед публикацией

```bash
npm install
npm run lint
npm run build
```

Если `npm run build` проходит успешно, проект готов к Vercel.

## 3. Импортировать проект в Vercel

1. Откройте Vercel Dashboard.
2. Нажмите `Add New` → `Project`.
3. Выберите GitHub-репозиторий с проектом.
4. Framework Preset должен определиться как `Next.js`.
5. Build Command оставьте стандартный:

```bash
npm run build
```

6. Install Command оставьте стандартный:

```bash
npm install
```

7. Output Directory не указывайте. Для Next.js Vercel настроит его автоматически.
8. Нажмите `Deploy`.

## 4. Проверить страницы после деплоя

После публикации откройте production URL и проверьте:

- `/`
- `/luna-beauty`
- `/lash-muse`
- `/nude-nails`
- `/skin-atelier`

Все страницы должны открываться без 404.

## 5. Как обновлять сайт

1. Измените контент или код локально.
2. Проверьте:

```bash
npm run build
```

3. Сделайте commit и push в GitHub.
4. Vercel автоматически запустит новый deploy.

## 6. Telegram-уведомления позже

Когда понадобится реальная отправка заявок:

1. Создайте API route `src/app/api/booking/route.ts`.
2. Добавьте переменные окружения в Vercel:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. В форме `src/components/booking-form.tsx` замените `console.info` на отправку `fetch("/api/booking")`.

Секреты нельзя хранить в коде или коммитить в GitHub.
