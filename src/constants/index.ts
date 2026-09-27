// App-wide constants
export const APP_NAME = 'Thymus';
export const APP_DESCRIPTION = 'A Next.js application';

// API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

// Routes
export const ROUTES = {
  HOME: '/',
} as const;

// Environment
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
