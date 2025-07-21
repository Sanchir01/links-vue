import { computed } from "vue";
import type { WebApp } from "@twa-dev/types";

declare global {
  interface Window {
    Telegram?: {
      WebApp: WebApp;
    };
  }
}
export const useTelegram = () => {
  const isTelegram = typeof window !== "undefined" && window.Telegram?.WebApp;

  const tg = computed(() => {
    if (!isTelegram) {
      console.warn("Telegram WebApp is not available");
      return null;
    }
    return window.Telegram?.WebApp;
  });

  return {
    tg,
    isTelegram,
  };
};
