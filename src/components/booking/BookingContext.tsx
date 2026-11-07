"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { BookingState, BookingStep } from "@/types/booking";
import type { ServiceItem } from "@/types/service";
import type { BookingProvider } from "@/types/booking";

interface BookingContextValue {
  isOpen: boolean;
  open: (initialService?: ServiceItem, initialProvider?: BookingProvider) => void;
  close: () => void;
  state: BookingState;
  setStep: (step: BookingStep) => void;
  selectService: (service: ServiceItem) => void;
  selectProvider: (provider: BookingProvider) => void;
  selectDate: (date: Date) => void;
  selectTime: (time: string) => void;
  setName: (name: string) => void;
  goBack: () => void;
  reset: () => void;
}

const initialState: BookingState = {
  step: "service",
  service: null,
  provider: null,
  date: null,
  time: null,
  name: "",
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<BookingState>(initialState);

  const open = useCallback((initialService?: ServiceItem, initialProvider?: BookingProvider) => {
    setState({
      ...initialState,
      service: initialService ?? null,
      provider: initialProvider ?? null,
      step: "service",
    });
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setState(initialState);
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  const setStep = useCallback((step: BookingStep) => {
    setState((prev) => ({ ...prev, step }));
  }, []);

  const selectService = useCallback((service: ServiceItem) => {
    setState((prev) => ({
      ...prev,
      service,
      // Clear downstream when service changes
      provider: null,
      date: null,
      time: null,
      step: "provider",
    }));
  }, []);

  const selectProvider = useCallback((provider: BookingProvider) => {
    setState((prev) => ({
      ...prev,
      provider,
      date: null,
      time: null,
      step: "schedule",
    }));
  }, []);

  const selectDate = useCallback((date: Date) => {
    setState((prev) => ({ ...prev, date }));
  }, []);

  const selectTime = useCallback((time: string) => {
    setState((prev) => ({ ...prev, time }));
  }, []);

  const setName = useCallback((name: string) => {
    setState((prev) => ({ ...prev, name }));
  }, []);

  const goBack = useCallback(() => {
    setState((prev) => {
      switch (prev.step) {
        case "provider":
          return { ...prev, step: "service" as BookingStep, provider: null, date: null, time: null };
        case "schedule":
          return { ...prev, step: "provider" as BookingStep, date: null, time: null };
        case "details":
          return { ...prev, step: "schedule" as BookingStep };
        case "complete":
          return { ...prev, step: "details" as BookingStep };
        default:
          return prev;
      }
    });
  }, []);

  return (
    <BookingContext value={{
      isOpen,
      open,
      close,
      state,
      setStep,
      selectService,
      selectProvider,
      selectDate,
      selectTime,
      setName,
      goBack,
      reset,
    }}>
      {children}
    </BookingContext>
  );
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return ctx;
}
