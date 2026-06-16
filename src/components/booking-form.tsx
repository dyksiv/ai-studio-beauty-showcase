"use client";

import { FormEvent, useState } from "react";

type BookingFormProps = {
  siteName: string;
  services: string[];
  successMessage?: string;
};

export function BookingForm({
  siteName,
  services,
  successMessage = "Спасибо за заявку. Мы свяжемся с вами в ближайшее время.",
}: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      siteName,
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      date: String(formData.get("date") ?? ""),
      comment: String(formData.get("comment") ?? ""),
    };

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setErrorMessage("Не удалось отправить заявку. Попробуйте еще раз.");
      setIsSubmitting(false);
      return;
    }

    setSubmitted(true);
    setIsSubmitting(false);
    event.currentTarget.reset();
  }

  return (
    <form
      className="rounded-[30px] bg-white/68 p-5 shadow-xl shadow-[#b98372]/12 backdrop-blur-xl md:p-7"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Имя" name="name" placeholder="Анна" />
        <Field label="Телефон" name="phone" placeholder="+7 999 000-00-00" type="tel" />
        <label className="grid gap-2 text-sm font-medium text-[#5f493f] sm:col-span-2">
          Услуга
          <select
            className="min-h-14 rounded-2xl border border-[#b98372]/18 bg-white/72 px-4 text-base outline-none transition focus:border-[#d08d98] focus:ring-4 focus:ring-[#d08d98]/15"
            name="service"
            required
          >
            <option value="">Выберите услугу</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <Field label="Желаемая дата" name="date" placeholder="" type="date" />
        <label className="grid gap-2 text-sm font-medium text-[#5f493f]">
          Комментарий
          <input
            className="min-h-14 rounded-2xl border border-[#b98372]/18 bg-white/72 px-4 text-base outline-none transition focus:border-[#d08d98] focus:ring-4 focus:ring-[#d08d98]/15"
            name="comment"
            placeholder="Удобное время"
            type="text"
          />
        </label>
      </div>
      <button
        className="premium-button mt-5 w-full rounded-full bg-[#3a2a25] px-8 py-4 font-semibold text-white shadow-xl shadow-[#3a2a25]/15 transition hover:-translate-y-1 hover:bg-[#4a342d]"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Отправляем..." : "Отправить заявку"}
      </button>
      {submitted ? (
        <p className="mt-4 rounded-2xl bg-[#eef4ea] px-4 py-3 text-center font-medium text-[#586f54]">
          {successMessage}
        </p>
      ) : null}
      {errorMessage ? (
        <p className="mt-4 rounded-2xl bg-[#fff1f0] px-4 py-3 text-center font-medium text-[#9f625f]">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[#5f493f]">
      {label}
      <input
        className="min-h-14 rounded-2xl border border-[#b98372]/18 bg-white/72 px-4 text-base outline-none transition focus:border-[#d08d98] focus:ring-4 focus:ring-[#d08d98]/15"
        name={name}
        placeholder={placeholder}
        required={name !== "comment"}
        type={type}
      />
    </label>
  );
}
