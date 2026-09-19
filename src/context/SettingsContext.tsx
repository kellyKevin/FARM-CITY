"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Language, translate } from "@/i18n/translations";

type Theme = "light" | "dark";

interface SettingsContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const THEME_KEY = "farm_city_theme";
const LANG_KEY = "farm_city_language";

const applyTheme = (theme: Theme) => {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguageState] = useState<Language>("en");

  // Hydrate from localStorage / system preference (the inline script in the
  // layout has already set the <html> class to avoid a flash).
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme: Theme = savedTheme ?? (prefersDark ? "dark" : "light");
      setTheme(initialTheme);
      applyTheme(initialTheme);

      const savedLang = localStorage.getItem(LANG_KEY) as Language | null;
      if (savedLang === "en" || savedLang === "sw") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch {
      /* localStorage may be unavailable — fall back to defaults */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "sw" : "en");
  }, [language, setLanguage]);

  const t = useCallback((key: string) => translate(key, language), [language]);

  return (
    <SettingsContext.Provider
      value={{ theme, toggleTheme, language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
