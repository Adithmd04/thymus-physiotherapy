// App-wide constants
export const APP_NAME = "Thymus Health";
export const APP_DESCRIPTION =
  "Thymus Health — Healthcare designed around you.";

// Mobile app store links. Leave empty until the real listings exist —
// MobileAppSection renders the buttons as inactive when a URL is empty.
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "";
export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "";

// Re-export service/treatment data for backward compatibility
export { SERVICES, TREATMENTS } from "@/data/services";