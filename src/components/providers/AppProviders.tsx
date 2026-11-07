"use client";

import type { ReactNode } from "react";
import { BookingProvider } from "@/components/booking/BookingContext";
import BookingModal from "@/components/booking/BookingModal";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BookingProvider>
      {children}
      <BookingModal />
    </BookingProvider>
  );
}
