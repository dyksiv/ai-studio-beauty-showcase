import Image from "next/image";
import Link from "next/link";
import { beautySites } from "@/lib/beauty-sites";

const TELEGRAM_URL = "https://t.me/dyksiv";
const WHATSAPP_URL = "https://wa.me/79816838475";

const advantages = [
  "Дизайн в стиле premium beauty aesthetic",
  "Готовые секции: услуги, цены, отзывы, FAQ и запись",
  "Адаптация под телефон, где мастера получают больше заявок",
  "Подготовка формы под Telegram или WhatsApp-уведомления",
  "Быстрый запуск на Vercel и понятное редактирование контента",
  "Можно заменить тексты, цены и фото под конкретного мастера",
];

const packages = [
  {
    name: "Start",
    price: "15 000 ₽",
    description: "Одностраничный сайт на базе готовой beauty-структуры.",
    features: ["1 ниша", "до 6 блоков", "адаптив", "базовая SEO-настройка"],
  },
  {
    name: "Premium",
    price: "25 000 ₽",
    description: "Продающий лендинг с расширенными блоками и визуальной упаковкой.",
    features: ["до 10 блоков", "прайс и отзывы", "форма заявки", "подготовка к Vercel"],
    featured: true,
  },
  {
    name: "Atelier",
    price: "от 35 000 ₽",
    description: "Индивидуальный дизайн под студию, мастера или сеть beauty-услуг.",
    features: ["кастомная структура", "AI-визуалы", "несколько страниц", "интеграции"],
  },
];

const steps = [
  ["01", "Бриф", "Собираем нишу, услуги, цены, стиль, контакты и примеры сайтов."],
  ["02", "Прототип", "Собираем структуру страницы так, чтобы клиент быстро дошел до записи."],
  ["03", "Дизайн и код", "Делаем premium-визуал, адаптивную верстку и аккуратные анимации."],
  ["04", "Запуск", "Проверяем сборку, публикуем на Vercel и отдаем ссылку для рекламы."],
];

const faqs = [
  ["Что входит в сайт за 7 дней?", "Лендинг с hero, услугами, ценами, работами, отзывами, FAQ и формой заявки."],
  ["Можно ли заменить демо-контент?", "Да. Тексты, цены, фото, адрес и ссылки на мессенджеры меняются под мастера."],
  ["Будет ли сайт работать с телефона?", "Да, дизайн сразу делается адаптивным, потому что большинство заявок приходит с мобильных."],
  ["Можно подключить Telegram?", "Да, форма уже готовится так, чтобы позже подключить Telegram-уведомления через API route."],
  ["Для каких ниш подходит?", "Ресницы, маникюр, брови, косметология, массаж, макияж, hair-студии и небольшие beauty-салоны."],
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(240,183,191,0.24),transparent_28rem),radial-gradient(circle_at_82%_8%,rgba(185,131,114,0.18),transparent_30rem),radial-gradient(circle_at_55%_88%,rgba(159,174,156,0.13),transparent_34rem)]" />
      <Header />
      <Hero />
      <Advantages />
      <Showcase />
      <Pricing />
      <Steps />
      <Faq />
      <Contacts />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-[28px] px-4 py-3 md:px-6">
        <a className="text-lg font-semibold tracking-wide text-[#4a342d]" href="#">
          AI Studio
        </a>
        <div className="hidden items-center gap-7 text-sm text-[#6c544b] md:flex">
          <a className="transition hover:text-[#b06d78]" href="#advantages">Преимущества</a>
          <a className="transition hover:text-[#b06d78]" href="#showcase">Демо</a>
          <a className="transition hover:text-[#b06d78]" href="#pricing">Цены</a>
          <a className="transition hover:text-[#b06d78]" href="#contacts">Контакты</a>
        </div>
        <a
          className="premium-button rounded-full bg-[#3a2a25] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#b98372]/20 transition hover:-translate-y-0.5 hover:bg-[#4a342d]"
          href="#contacts"
        >
          Обсудить сайт
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="section-shell grid min-h-screen items-center gap-10 pb-16 pt-32 lg:grid-cols-[1.04fr_0.96fr] lg:pt-28">
      <div className="reveal">
        <p className="mb-5 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-[#9f625f] soft-border">
          AI Studio · beauty websites
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#34251f] md:text-7xl">
          Красивые сайты для мастеров красоты за 7 дней
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6c544b] md:text-xl">
          Создаем премиальные лендинги для beauty-мастеров: ресницы, маникюр, косметология и салоны. Сайт выглядит дорого, быстро показывает услуги и ведет клиента к записи.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            className="premium-button rounded-full bg-[#d08d98] px-8 py-4 text-center font-semibold text-white shadow-xl shadow-[#d08d98]/30 transition hover:-translate-y-1 hover:bg-[#c57b88]"
            href="#showcase"
          >
            Смотреть демо
          </a>
          <a
            className="rounded-full bg-white/65 px-8 py-4 text-center font-semibold text-[#4a342d] soft-border transition hover:-translate-y-1 hover:bg-white"
            href="#pricing"
          >
            Узнать стоимость
          </a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["4 готовых демо", "Запуск на Vercel", "Форма под заявки"].map((item) => (
            <div className="glass rounded-[24px] px-4 py-4 text-sm font-medium text-[#5f493f]" key={item}>
              ✓ {item}
            </div>
          ))}
        </div>
      </div>

      <div className="reveal relative min-h-[520px]">
        <div className="glow-orbit absolute -inset-4 rounded-[44px] bg-gradient-to-br from-[#f0b7bf]/70 via-[#fff7ef] to-[#b98372]/45 blur-2xl" />
        <div className="glass parallax-card absolute inset-0 overflow-hidden rounded-[40px] p-4">
          <div className="grid h-full grid-cols-2 gap-3">
            {beautySites.map((site) => (
              <Link className="group relative overflow-hidden rounded-[28px]" href={`/${site.slug}`} key={site.slug}>
                <Image
                  alt={site.heroAlt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  fill
                  sizes="(min-width: 1024px) 24vw, 50vw"
                  src={site.heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a2a25]/58 via-transparent to-white/10" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/78">{site.niche}</p>
                  <p className="mt-1 text-xl font-semibold text-white drop-shadow">{site.brand}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="section-shell reveal py-20" id="advantages">
      <SectionHeading eyebrow="Преимущества" title="Сайт, который продает запись, а не просто красиво выглядит" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((item, index) => (
          <article className="glass rounded-[30px] p-7 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#b98372]/20" key={item}>
            <span className="text-sm font-semibold text-[#d08d98]">0{index + 1}</span>
            <p className="mt-5 text-xl font-semibold leading-8 text-[#3a2a25]">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="section-shell reveal py-20" id="showcase">
      <SectionHeading eyebrow="Демо-сайты" title="4 готовых направления для индустрии красоты" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {beautySites.map((site) => (
          <article className="service-card glass group relative overflow-hidden rounded-[34px] p-5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#b98372]/24" key={site.slug}>
            <Link className="block" href={`/${site.slug}`}>
              <div className="relative min-h-72 overflow-hidden rounded-[28px]">
                <Image
                  alt={site.heroAlt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  src={site.heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a2a25]/46 via-transparent to-white/10" />
              </div>
              <div className="p-3 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b06d78]">{site.niche}</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#34251f]">{site.brand}</h2>
                <p className="mt-4 leading-7 text-[#70584f]">{site.heroSubtitle}</p>
                <div className="mt-6 inline-flex rounded-full bg-[#3a2a25] px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-[#d08d98]">
                  Открыть демо
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section-shell reveal py-20" id="pricing">
      <SectionHeading eyebrow="Цены" title="Пакеты для мастеров, которые хотят выглядеть дороже" />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {packages.map((item) => (
          <article
            className={`rounded-[32px] p-7 transition duration-500 hover:-translate-y-2 ${
              item.featured
                ? "border shadow-2xl"
                : "glass"
            }`}
            key={item.name}
            style={
              item.featured
                ? {
                    background: "#3a2a25",
                    borderColor: "rgba(106, 81, 72, 0.2)",
                    boxShadow: "0 28px 80px rgba(58, 42, 37, 0.22)",
                    color: "#ffffff",
                  }
                : undefined
            }
          >
            <p className={item.featured ? "text-[#f0b7bf]" : "text-[#b06d78]"}>{item.name}</p>
            <p className="mt-4 text-4xl font-semibold">{item.price}</p>
            <p className={`mt-4 min-h-20 leading-7 ${item.featured ? "text-white/76" : "text-[#70584f]"}`}>{item.description}</p>
            <div className="mt-7 grid gap-3">
              {item.features.map((feature) => (
                <p className={item.featured ? "text-white/82" : "text-[#5f493f]"} key={feature}>✓ {feature}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section-shell reveal py-20">
      <div className="rounded-[36px] bg-[#3a2a25] p-8 text-white shadow-2xl shadow-[#3a2a25]/20 md:p-12">
        <SectionHeading eyebrow="Этапы" title="От идеи до публичной ссылки за неделю" inverse />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <article className="rounded-[26px] bg-white/9 p-6 ring-1 ring-white/10" key={number}>
              <span className="text-sm text-[#f0b7bf]">{number}</span>
              <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/72">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section-shell reveal py-20">
      <SectionHeading eyebrow="FAQ" title="Ответы перед заказом сайта" />
      <div className="mt-10 grid gap-4">
        {faqs.map(([question, answer]) => (
          <details className="glass group rounded-[24px] p-6" key={question}>
            <summary className="cursor-pointer list-none text-lg font-semibold text-[#3a2a25]">
              <span className="flex items-center justify-between gap-4">
                {question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f3d8d5] text-[#9f625f] transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[#70584f]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section className="section-shell reveal py-20" id="contacts">
      <div className="grid gap-8 rounded-[36px] bg-gradient-to-br from-[#f4c9cf] via-[#fff7ef] to-[#e2c6b5] p-8 shadow-2xl shadow-[#b98372]/18 md:p-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#9f625f]">Контакты</p>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#34251f] md:text-5xl">
            Хотите такой сайт для beauty-мастера?
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-[#6c544b]">
            Напишите в мессенджер, покажите нишу и пару референсов. Я соберу страницу под вашу услугу, цены и стиль.
          </p>
        </div>
        <div className="grid content-center gap-3">
          <a
            className="premium-button rounded-full bg-[#3a2a25] px-8 py-4 text-center font-semibold text-white shadow-xl shadow-[#3a2a25]/15 transition hover:-translate-y-1"
            href={TELEGRAM_URL}
            rel="noreferrer"
            target="_blank"
          >
            Написать в Telegram
          </a>
          <a
            className="rounded-full bg-white/70 px-8 py-4 text-center font-semibold text-[#4a342d] soft-border transition hover:-translate-y-1 hover:bg-white"
            href={WHATSAPP_URL}
            rel="noreferrer"
            target="_blank"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  inverse?: boolean;
}) {
  return (
    <div>
      <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.28em] ${inverse ? "text-[#f0b7bf]" : "text-[#9f625f]"}`}>
        {eyebrow}
      </p>
      <h2 className={`max-w-3xl text-4xl font-semibold leading-tight md:text-5xl ${inverse ? "text-white" : "text-[#34251f]"}`}>
        {title}
      </h2>
    </div>
  );
}
