import { NextResponse } from "next/server";

type BookingPayload = {
  siteName?: string;
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  comment?: string;
};

function escapeTelegramHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as BookingPayload;

    const siteName = payload.siteName?.trim() ?? "";
    const name = payload.name?.trim() ?? "";
    const phone = payload.phone?.trim() ?? "";
    const service = payload.service?.trim() ?? "";
    const date = payload.date?.trim() ?? "";
    const comment = payload.comment?.trim() ?? "";

    if (!siteName || !name || !phone || !service || !date) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram env vars are missing.");
      return NextResponse.json({ error: "Telegram is not configured." }, { status: 500 });
    }

    const message = [
      "<b>Новая заявка с сайта</b>",
      "",
      `<b>Страница:</b> ${escapeTelegramHtml(siteName)}`,
      `<b>Имя:</b> ${escapeTelegramHtml(name)}`,
      `<b>Телефон:</b> ${escapeTelegramHtml(phone)}`,
      `<b>Услуга:</b> ${escapeTelegramHtml(service)}`,
      `<b>Дата:</b> ${escapeTelegramHtml(date)}`,
      `<b>Комментарий:</b> ${escapeTelegramHtml(comment || "—")}`,
    ].join("\n");

    // Здесь позже можно добавить параллельную отправку в WhatsApp, CRM или email.
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        parse_mode: "HTML",
        text: message,
      }),
    });

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();
      console.error("Telegram API error:", telegramError);
      return NextResponse.json({ error: "Telegram request failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Booking route error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
