import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/booking-form";
import { beautySites, type BeautySite } from "@/lib/beauty-sites";

export function BeautyLanding({ site }: { site: BeautySite }) {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(240,183,191,0.24),transparent_28rem),radial-gradient(circle_at_82%_8%,rgba(185,131,114,0.18),transparent_30rem),radial-gradient(circle_at_55%_88%,rgba(159,174,156,0.13),transparent_34rem)]" />
      <Header site={site} />
      <Hero site={site} />
      <Services site={site} />
      <Benefits site={site} />
      <Gallery site={site} />
      <PriceList site={site} />
      <Reviews site={site} />
      <Booking site={site} />
      <Faq site={site} />
      <Footer site={site} />
    </main>
  );
}

function Header({ site }: { site: BeautySite }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-[28px] px-4 py-3 md:px-6">
        <Link className="text-lg font-semibold tracking-wide text-[#4a342d]" href={`/${site.slug}`}>
          {site.brand}
        </Link>
        <div className="hidden items-center gap-6 text-sm text-[#6c544b] lg:flex">
          {beautySites.map((item) => (
            <Link
              className={`transition hover:text-[#b06d78] ${item.slug === site.slug ? "font-semibold text-[#3a2a25]" : ""}`}
              href={`/${item.slug}`}
              key={item.slug}
            >
              {item.brand}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-6 text-sm text-[#6c544b] md:flex">
          <a href="#services">Услуги</a>
          <a href="#works">Работы</a>
          <a href="#price">Цены</a>
          <a href="#booking">Запись</a>
        </div>
        <a
          className="rounded-full bg-[#3a2a25] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#b98372]/20 transition hover:-translate-y-0.5 hover:bg-[#4a342d]"
          href="#booking"
        >
          Записаться
        </a>
      </nav>
    </header>
  );
}

function Hero({ site }: { site: BeautySite }) {
  return (
    <section className="section-shell grid min-h-screen items-center gap-10 pb-16 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:pt-28">
      <div className="reveal">
        <p className="mb-5 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-[#9f625f] soft-border">
          {site.brand} · {site.niche}
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-[#34251f] md:text-7xl">
          {site.heroTitle}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6c544b] md:text-xl">{site.heroSubtitle}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            className="premium-button rounded-full bg-[#d08d98] px-8 py-4 text-center font-semibold text-white shadow-xl shadow-[#d08d98]/30 transition hover:-translate-y-1 hover:bg-[#c57b88]"
            href="#booking"
          >
            Записаться
          </a>
          <a
            className="rounded-full bg-white/65 px-8 py-4 text-center font-semibold text-[#4a342d] soft-border transition hover:-translate-y-1 hover:bg-white"
            href="#works"
          >
            Посмотреть работы
          </a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {site.stats.map((item) => (
            <div className="glass rounded-[22px] px-4 py-3 text-sm font-medium text-[#5f493f]" key={item}>
              ✓ {item}
            </div>
          ))}
        </div>
      </div>

      <div className="reveal relative min-h-[500px]">
        <div className="glow-orbit absolute -inset-4 rounded-[44px] bg-gradient-to-br from-[#f0b7bf]/70 via-[#fff7ef] to-[#b98372]/45 blur-2xl" />
        <div className="glass parallax-card absolute inset-0 overflow-hidden rounded-[40px] p-4">
          <Image
            alt={site.heroAlt}
            className="h-full w-full rounded-[30px] object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            src={site.heroImage}
          />
          <div className="absolute inset-4 rounded-[30px] bg-gradient-to-t from-[#3a2a25]/35 via-transparent to-white/10" />
          <div className="absolute inset-x-8 bottom-8 rounded-[28px] border border-white/30 bg-white/5 p-6 shadow-xl backdrop-blur-[2px]">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-white drop-shadow">luxury beauty</p>
            <p className="mt-3 max-w-md text-3xl font-semibold text-white drop-shadow-lg">
              Дорогой сервис, который видно с первого экрана
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ site }: { site: BeautySite }) {
  return (
    <section className="section-shell reveal py-20" id="services">
      <SectionHeading eyebrow="Услуги" title="Карточки, которые продают процедуру до переписки" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {site.services.map((service) => (
          <article
            className="service-card glass group relative overflow-hidden rounded-[30px] p-7 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#b98372]/24"
            key={service.title}
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f0b7bf]/22 blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-[#d08d98]/30" />
            <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#f0b7bf] to-[#d7b29d] text-sm font-semibold text-white shadow-lg shadow-[#d08d98]/25 transition group-hover:rotate-3 group-hover:scale-105">
              {service.mark}
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#b06d78]">{service.effect}</p>
            <h3 className="text-2xl font-semibold text-[#3a2a25]">{service.title}</h3>
            <p className="mt-4 min-h-24 leading-7 text-[#70584f]">{service.description}</p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-lg font-semibold text-[#b06d78]">{service.price}</p>
              <a
                className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#4a342d] soft-border transition hover:bg-[#3a2a25] hover:text-white"
                href="#booking"
              >
                Выбрать
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Benefits({ site }: { site: BeautySite }) {
  return (
    <section className="section-shell reveal py-20">
      <div className="grid gap-8 rounded-[36px] bg-[#3a2a25] p-8 text-white shadow-2xl shadow-[#3a2a25]/20 md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="Преимущества" title={site.benefitsTitle} inverse />
        <div className="grid gap-4 sm:grid-cols-2">
          {site.benefits.map((benefit, index) => (
            <div className="rounded-[24px] bg-white/9 p-5 ring-1 ring-white/10" key={benefit}>
              <span className="text-sm text-[#f0b7bf]">0{index + 1}</span>
              <p className="mt-3 text-lg font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ site }: { site: BeautySite }) {
  return (
    <section className="section-shell reveal py-20" id="works">
      <SectionHeading eyebrow="До / После" title="Сетка под реальные фото результата" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.gallery.map((item, index) => (
          <div
            className="group relative min-h-72 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#f4c9cf] via-[#fff3ea] to-[#cda18d] p-6 shadow-xl shadow-[#b98372]/12 transition duration-500 hover:-translate-y-1"
            key={item}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.75),transparent_11rem)] transition duration-700 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#3a2a25]/22 to-transparent" />
            <p className="absolute bottom-6 left-6 text-2xl font-semibold text-[#3a2a25]">{item}</p>
            <span className="absolute right-6 top-6 rounded-full bg-white/60 px-4 py-2 text-sm text-[#9f625f]">
              0{index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PriceList({ site }: { site: BeautySite }) {
  return (
    <section className="section-shell reveal py-20" id="price">
      <SectionHeading eyebrow="Цены" title="Прайс без лишних шагов до записи" />
      <div className="glass mt-10 overflow-hidden rounded-[32px]">
        {site.prices.map(([name, price]) => (
          <div
            className="flex flex-col gap-2 border-b border-[#b98372]/12 px-6 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between md:px-8"
            key={name}
          >
            <span className="text-lg font-medium text-[#3a2a25]">{name}</span>
            <span className="text-lg font-semibold text-[#b06d78]">{price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews({ site }: { site: BeautySite }) {
  return (
    <section className="section-shell reveal py-20">
      <SectionHeading eyebrow="Отзывы" title="Социальное доказательство рядом с записью" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {site.reviews.map((review) => (
          <article className="glass rounded-[30px] p-6" key={review.name}>
            <p className="text-sm tracking-[0.18em] text-[#d08d98]">{review.rating}</p>
            <p className="mt-5 min-h-32 leading-7 text-[#5f493f]">{review.text}</p>
            <p className="mt-6 font-semibold text-[#3a2a25]">{review.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Booking({ site }: { site: BeautySite }) {
  return (
    <section className="section-shell reveal py-20" id="booking">
      <div className="grid gap-8 rounded-[36px] bg-gradient-to-br from-[#f4c9cf] via-[#fff7ef] to-[#e2c6b5] p-6 shadow-2xl shadow-[#b98372]/18 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="self-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#9f625f]">Онлайн-запись</p>
          <h2 className="text-4xl font-semibold leading-tight text-[#34251f] md:text-5xl">
            Запишитесь на удобное время
          </h2>
          <p className="mt-5 leading-8 text-[#6c544b]">
            Заявка отправляется через сайт и может сразу приходить в Telegram администратора.
          </p>
        </div>
        <BookingForm siteName={site.brand} services={site.services.map((service) => service.title)} />
      </div>
    </section>
  );
}

function Faq({ site }: { site: BeautySite }) {
  return (
    <section className="section-shell reveal py-20">
      <SectionHeading eyebrow="FAQ" title="Ответы, которые снимают сомнения перед записью" />
      <div className="mt-10 grid gap-4">
        {site.faq.map(([question, answer]) => (
          <details className="glass group rounded-[24px] p-6" key={question}>
            <summary className="cursor-pointer list-none text-lg font-semibold text-[#3a2a25]">
              <span className="flex items-center justify-between gap-4">
                {question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f3d8d5] text-[#9f625f] transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-4 leading-7 text-[#70584f]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer({ site }: { site: BeautySite }) {
  return (
    <footer className="section-shell pb-10 pt-14">
      <div className="glass rounded-[32px] p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-2xl font-semibold text-[#3a2a25]">{site.brand}</p>
            <p className="mt-3 max-w-sm leading-7 text-[#70584f]">
              Демо-кейс AI Studio для продажи premium landing page мастерам красоты.
            </p>
          </div>
          <div className="grid gap-4 text-[#6c544b] sm:grid-cols-2 md:grid-cols-3">
            <a href="#booking">Контакты</a>
            <a href="https://t.me/">Telegram</a>
            <a href="https://wa.me/">WhatsApp</a>
            <a href="#">Instagram</a>
            <span>{site.address}</span>
          </div>
        </div>
      </div>
    </footer>
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
      <h2 className={`max-w-2xl text-4xl font-semibold leading-tight md:text-5xl ${inverse ? "text-white" : "text-[#34251f]"}`}>
        {title}
      </h2>
    </div>
  );
}
