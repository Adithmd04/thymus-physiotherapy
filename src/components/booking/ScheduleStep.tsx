"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBooking } from "./BookingContext";

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function ScheduleStep() {
  const { state, selectDate, selectTime, setStep, goBack } = useBooking();
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    return d < todayStart;
  };

  const isSunday = (day: number) => {
    return new Date(viewYear, viewMonth, day).getDay() === 0;
  };

  const canContinue = state.date && state.time;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <button
          type="button"
          onClick={goBack}
          className="mb-3 text-xs font-semibold text-[#0d9488] hover:text-[#0f766e] transition-colors"
        >
          ← Back to providers
        </button>
        <h3 className="text-lg font-bold text-[#0f172a] mb-1">
          Select your preferred schedule
        </h3>
        <p className="text-sm text-[#64748b]">
          Choose a preferred date and time for your appointment request
        </p>
      </div>

      <div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-5">
        {/* Calendar */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d9488] mb-3">
            Preferred Date
          </p>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-4">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={prevMonth}
                className="flex h-7 w-7 items-center justify-center rounded-full text-[#475569] hover:bg-[#f1f5f9] transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-sm font-bold text-[#0f172a]">
                {MONTHS[viewMonth]} {viewYear}
              </span>
              <button
                type="button"
                onClick={nextMonth}
                className="flex h-7 w-7 items-center justify-center rounded-full text-[#475569] hover:bg-[#f1f5f9] transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {DAYS.map((d) => (
                <div
                  key={d}
                  className="text-center text-[10px] font-semibold text-[#94a3b8] py-1"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                (day) => {
                  const date = new Date(viewYear, viewMonth, day);
                  const past = isPast(day);
                  const sunday = isSunday(day);
                  const disabled = past || sunday;
                  const selected =
                    state.date && isSameDay(state.date, date);

                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={disabled}
                      onClick={() => selectDate(date)}
                      className={`h-8 w-full rounded-lg text-xs font-medium transition-all duration-150 ${
                        selected
                          ? "bg-[#0d9488] text-white font-bold shadow-sm"
                          : disabled
                            ? "text-[#cbd5e1] cursor-not-allowed"
                            : "text-[#334155] hover:bg-[#e8f7f5] hover:text-[#0d9488]"
                      }`}
                    >
                      {day}
                    </button>
                  );
                },
              )}
            </div>
          </div>
        </div>

        {/* Time slots */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d9488] mb-3">
            Preferred Time
          </p>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => selectTime(slot)}
                className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all duration-150 ${
                  state.time === slot
                    ? "border-[#0d9488] bg-[#0d9488] text-white shadow-sm"
                    : "border-[#e2e8f0] bg-white text-[#475569] hover:border-[#0d9488] hover:text-[#0d9488]"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-[11px] text-[#94a3b8] leading-5">
          These are preferred times. The provider will confirm actual
          availability when processing your request.
        </p>
      </div>

      {/* Continue button */}
      <div className="pt-4 mt-auto">
        <button
          type="button"
          disabled={!canContinue}
          onClick={() => setStep("details")}
          className="w-full rounded-xl bg-[#0d9488] py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#0f766e] disabled:cursor-not-allowed disabled:bg-[#cbd5e1]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
