import type { Text } from "../i18n";

/** Shorthand for trilingual copy: L(ka, en, ru). */
export const L = (ka: string, en: string, ru: string): Text => ({ ka, en, ru });
