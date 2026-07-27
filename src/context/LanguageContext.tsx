import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationSchema } from "../i18n/translations";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  detectedLang: Language | null;
  showLanguageToast: boolean;
  dismissToast: () => void;
  acceptToast: () => void;
  copyEmailToClipboard: (textToCopy?: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [detectedLang, setDetectedLang] = useState<Language | null>(null);
  const [showLanguageToast, setShowLanguageToast] = useState(false);
  
  const [showEmailToast, setShowEmailToast] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  useEffect(() => {
    if (showEmailToast) {
      const timer = setTimeout(() => {
        setShowEmailToast(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showEmailToast]);

  const copyEmailToClipboard = (textToCopy = "tanmay.mukherjee715@gmail.com") => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedText(textToCopy);
    setShowEmailToast(true);
  };

  useEffect(() => {
    // 1. Check for stored preferred language
    const savedLang = localStorage.getItem("preferred_lang") as Language | null;
    const toastStatus = localStorage.getItem("lang_toast_status");

    if (savedLang && (savedLang === "en" || savedLang === "bn" || savedLang === "hi")) {
      setLanguageState(savedLang);
    } else {
      // 2. No saved preference, auto-detect browser language
      const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || "";
      const lowerBrowserLang = browserLang.toLowerCase();

      let detected: Language | null = null;
      if (lowerBrowserLang.startsWith("bn")) {
        detected = "bn";
      } else if (lowerBrowserLang.startsWith("hi")) {
        detected = "hi";
      }

      // Default is English as per guidelines.
      setLanguageState("en");

      if (detected && detected !== "en" && toastStatus !== "interacted") {
        setDetectedLang(detected);
        // Delay slightly for premium feeling
        const timer = setTimeout(() => {
          setShowLanguageToast(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_lang", lang);
    localStorage.setItem("lang_toast_status", "interacted");
    setShowLanguageToast(false);
  };

  const dismissToast = () => {
    localStorage.setItem("preferred_lang", "en"); // Stay on default English
    localStorage.setItem("lang_toast_status", "interacted");
    setShowLanguageToast(false);
  };

  const acceptToast = () => {
    if (detectedLang) {
      setLanguage(detectedLang);
    }
    setShowLanguageToast(false);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        detectedLang,
        showLanguageToast,
        dismissToast,
        acceptToast,
        copyEmailToClipboard
      }}
    >
      {children}
      
      {/* Universal Clipboard Feedback Toast */}
      <AnimatePresence>
        {showEmailToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 md:bottom-8 right-4 left-4 md:left-auto md:right-8 z-[100] max-w-sm bg-[#0a111c] border border-gold-500/30 px-4 py-3.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center space-x-3.5 text-white"
          >
            <div className="p-2 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20 shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-200">
                {language === "bn" ? "ইমেল কপি করা হয়েছে!" : (language === "hi" ? "ईमेल कॉपी किया गया!" : "Email Copied!")}
              </p>
              <p className="text-[10px] font-mono text-gold-400 mt-0.5 truncate">
                {copiedText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
