"use client";

import {
  User,
  MessageCircle,
  Phone,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { useBooking } from "./BookingContext";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date: Date): string {
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function buildWhatsAppUrl(
  whatsapp: string,
  name: string,
  service: string,
  date: string,
  time: string,
): string {
  const message = encodeURIComponent(
    `Hi,\n\nI'd like to request an appointment.\n\nName: ${name}\nService: ${service}\nPreferred Date: ${date}\nPreferred Time: ${time}\n\nThank you.`,
  );
  return `https://wa.me/${whatsapp}?text=${message}`;
}

export default function DetailsStep() {
  const { state, setName, goBack, close } = useBooking();

  const handleSubmit = () => {
    if (!state.provider || !state.service || !state.date || !state.time) return;

    const dateStr = formatDate(state.date);

    if (
      state.provider.bookingMethod === "whatsapp" &&
      state.provider.whatsapp
    ) {
      const url = buildWhatsAppUrl(
        state.provider.whatsapp,
        state.name,
        state.service.title,
        dateStr,
        state.time,
      );
      window.open(url, "_blank", "noopener,noreferrer");
      close();
    } else if (
      state.provider.bookingMethod === "website" &&
      state.provider.bookingUrl
    ) {
      window.open(state.provider.bookingUrl, "_blank", "noopener,noreferrer");
      close();
    } else if (
      state.provider.bookingMethod === "phone" &&
      state.provider.phone
    ) {
      window.location.href = `tel:${state.provider.phone.replace(/\s/g, "")}`;
      close();
    }
  };

  const isReady =
    state.name.trim().length >= 2 &&
    state.service &&
    state.provider &&
    state.date &&
    state.time;

  const getSubmitLabel = () => {
    switch (state.provider?.bookingMethod) {
      case "whatsapp":
        return "Continue on WhatsApp";
      case "website":
        return "Go to Provider Website";
      case "phone":
        return `Call ${state.provider?.phone || "Provider"}`;
      default:
        return "Continue";
    }
  };

  const getSubmitIcon = () => {
    switch (state.provider?.bookingMethod) {
      case "whatsapp":
        return <MessageCircle size={16} />;
      case "website":
        return <ExternalLink size={16} />;
      case "phone":
        return <Phone size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-5">
        <button
          type="button"
          onClick={goBack}
          className="mb-2 text-xs font-semibold text-[#0d9488] hover:text-[#0f766e] transition-colors"
        >
          ← Back to schedule
        </button>
        <h3 className="text-lg font-bold text-[#0f172a]">Your details</h3>
      </div>

      <div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-5">
        {/* Name input */}
        <div>
          <label
            htmlFor="booking-name"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d9488]"
          >
            Your Name
          </label>
          <div className="relative">
            <User
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]"
            />
            <input
              id="booking-name"
              type="text"
              value={state.name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] py-3 pl-9 pr-4 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors focus:border-[#0d9488] focus:bg-white"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#64748b]">
            Appointment Summary
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#64748b]">Service</span>
              <span className="font-semibold text-[#0f172a]">
                {state.service?.title}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Provider</span>
              <span className="font-semibold text-[#0f172a]">
                {state.provider?.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Preferred Date</span>
              <span className="font-semibold text-[#0f172a]">
                {state.date ? formatDate(state.date) : "—"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Preferred Time</span>
              <span className="font-semibold text-[#0f172a]">
                {state.time || "—"}
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex gap-3 rounded-xl bg-[#f0faf9] p-4">
          <ShieldCheck
            size={21}
            strokeWidth={1.8}
            className="mt-0.5 shrink-0 text-[#0d9488]"
          />
          <p className="text-sm leading-6 text-[#475569]">
            Your preferred date and time are requests, not a confirmed booking.
            Continuing takes you to {state.provider?.name ?? "the provider"} so
            they can confirm the appointment with you.
          </p>
        </div>
      </div>

      {/* Submit */}
      <div className="pt-4 mt-auto">
        <button
          type="button"
          disabled={!isReady}
          onClick={handleSubmit}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0d9488] py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#0f766e] disabled:cursor-not-allowed disabled:bg-[#cbd5e1]"
        >
          {getSubmitIcon()}
          {getSubmitLabel()}
        </button>
      </div>
    </div>
  );
}
