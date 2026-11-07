import type { ReactNode } from "react";

// Re-export all types from their dedicated modules
export type { ServiceItem, TreatmentItem } from "./service";
export type { Clinic, WorkingHours } from "./clinic";
export type {
  BookingProvider,
  BookingState,
  BookingStep,
  BookingMethod,
  ProviderType,
} from "./booking";

export interface MetricItem {
  icon: ReactNode;
  value: string;
  label: string;
}