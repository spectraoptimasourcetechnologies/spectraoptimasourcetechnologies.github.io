import translationEN from "@/i18n/lang/en.json";
import translationID from "@/i18n/lang/id.json";

export const languages = {
  en: "English",
  id: "Indonesia",
};

export const defaultLang = "en";

export const ui = {
  en: translationEN,
  id: translationID,
} as const;

export const showDefaultLang = false;

export const routes = {
  en: {
    about: "about",
  },
  id: {
    about: "tentang",
  },
};
