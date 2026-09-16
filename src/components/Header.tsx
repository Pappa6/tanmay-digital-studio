import { useState, useEffect } from "react";
import { Plus, HelpCircle, Mail, Phone, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../i18n/translations";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languagesList: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "bn", label: "বাং" },
    { code: "hi", label: "हिं" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a101d]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <a href="#hero" className="flex items-center space-x-3.5 group">
          {/* CraftVanta brand logo icon */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-[0_4px_12px_rgba(209,165,60,0.2)] group-hover:scale-105 transition-transform duration-300">
            {/* Minimalist abstract growth path SVG line */}
            <svg
              className="w-5 h-5 text-gold-950"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
            <div className="absolute inset-0 rounded-xl border border-white/20 animate-pulse" />
          </div>
          
          <div className="flex flex-col">
            <span className="text-base font-display font-semibold tracking-wide text-white group-hover:text-gold-300 transition-colors">
              CraftVanta
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-slate-200 font-medium">
              craftvanta.in
            </span>
          </div>
        </a>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#case-studies"
            className="text-xs uppercase tracking-widest font-mono text-white font-semibold hover:text-gold-300 transition-colors"
          >
            {t.header.caseStudies}
          </a>
          <a
            href="#principles"
            className="text-xs uppercase tracking-widest font-mono text-white font-semibold hover:text-gold-300 transition-colors"
          >
            {t.header.principles}
          </a>
          <a
            href="#process"
            className="text-xs uppercase tracking-widest font-mono text-white font-semibold hover:text-gold-300 transition-colors"
          >
            {t.header.process}
          </a>
          <a
            href="#sectors"
            className="text-xs uppercase tracking-widest font-mono text-white font-semibold hover:text-gold-300 transition-colors"
          >
            {t.header.sectors}
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-white/10 border border-white/20 rounded-xl p-0.5">
            {languagesList.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold transition-all duration-300 ${
                  language === lang.code
                    ? "bg-gold-500 text-gold-950 font-extrabold shadow-sm"
                    : "text-white hover:text-gold-300 hover:bg-white/10"
                }`}
                style={{ minWidth: "28px" }}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Quick interactive call to action */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-2 bg-white/5 hover:bg-gold-500 hover:text-gold-950 border border-white/10 hover:border-gold-400 px-4.5 py-2 rounded-xl text-xs uppercase tracking-wider font-mono font-medium text-white transition-all duration-300"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.header.bookConsultation}</span>
          </button>
          
          {/* Floating plus button matching screenshot */}
          <button
            onClick={onOpenBooking}
            className="w-9 h-9 rounded-xl bg-gold-500 hover:bg-gold-400 text-gold-950 flex items-center justify-center shadow-lg hover:rotate-90 transition-all duration-300 active:scale-90"
            title="Start a project"
          >
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </header>

  );
}
