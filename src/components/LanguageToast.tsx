import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Globe, X } from "lucide-react";

export default function LanguageToast() {
  const {
    showLanguageToast,
    detectedLang,
    acceptToast,
    dismissToast,
    t
  } = useLanguage();

  const getLanguageName = (lang: string | null) => {
    if (lang === "bn") return "বাংলা (Bengali)";
    if (lang === "hi") return "हिन्दी (Hindi)";
    return "";
  };

  return (
    <AnimatePresence>
      {showLanguageToast && detectedLang && (
        <motion.div
          id="language-detection-toast"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-28 md:bottom-8 left-4 right-4 md:left-8 md:right-auto z-50 max-w-sm md:max-w-md bg-[#0f1b29]/95 backdrop-blur-xl border border-gold-500/30 p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-start space-x-4">
            {/* Animated Globe Icon */}
            <div className="p-2.5 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20 shrink-0">
              <Globe className="w-5 h-5 animate-[spin_8s_linear_infinite]" />
            </div>

            {/* Content and Buttons */}
            <div className="flex-1 space-y-3.5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold-400 font-semibold block">
                  Language Preference
                </span>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans font-light">
                  {t.toast.detected}{" "}
                  <strong className="text-gold-300 font-semibold">
                    {getLanguageName(detectedLang)}
                  </strong>
                  .
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={acceptToast}
                  className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-gold-950 font-sans font-semibold text-xs py-2.5 px-4 rounded-xl transition-all shadow-md active:scale-98"
                >
                  {t.toast.switchButton}
                </button>
                <button
                  onClick={dismissToast}
                  className="bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-sans text-xs py-2.5 px-4 rounded-xl border border-white/5 hover:border-white/10 transition-all active:scale-98"
                >
                  {t.toast.dismiss}
                </button>
              </div>
            </div>

            {/* Close button icon */}
            <button
              onClick={dismissToast}
              className="text-gray-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors shrink-0"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
