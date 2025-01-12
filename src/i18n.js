import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18n
i18n
  .use(HttpApi) // Load translations via HTTP
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    fallbackLng: "ar", // Default language
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag"], // Language detection
      caches: ["localStorage", "cookie"], // Cache the selected language
    },
    ns: ["common", "Navigation"], // Namespaces available
    defaultNS: "common", // Default namespace
    react: {
      useSuspense: false, // Disable suspense for now
    },
  });

// Handle direction (RTL/LTR)
i18n.on("languageChanged", (lng) => {
  const direction = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.dir = direction; // Update <html>'s dir attribute
  document.body.classList.remove("rtl", "ltr");
  document.body.classList.add(direction);
});

// Set initial direction on page load
const initialDirection = i18n.language === "ar" ? "rtl" : "ltr";
document.documentElement.dir = initialDirection;
document.body.classList.add(initialDirection);

export default i18n;
