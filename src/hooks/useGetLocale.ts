// src/hooks/useGetLocale.ts

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

// Custom hook to get the locale, with support for both SSR and CSR
export function useGetLocale(serverLocale?: "en" | "es"): "en" | "es" {
  const [locale, setLocale] = useState<"en" | "es">(serverLocale || "en");

  const translations = useTranslations("global");

  // On client side, update locale when the component mounts
  useEffect(() => {
    if (!serverLocale) {
      const clientLocale = translations("locale") as "en" | "es";
      setLocale(clientLocale);
    }
  }, [translations, serverLocale]);

  return locale;
}
