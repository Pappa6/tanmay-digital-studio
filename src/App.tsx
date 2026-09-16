/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Principles from "./components/Principles";
import Sectors from "./components/Sectors";
import Process from "./components/Process";
import ContactBar from "./components/ContactBar";
import CustomContactModal from "./components/CustomContactModal";
import LanguageToast from "./components/LanguageToast";
import AIChatWidget from "./components/AIChatWidget";
import { ArrowUpRight, Heart, Calendar } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const [selectedPersona, setSelectedPersona] = useState<string>("default");
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const { t, language, copyEmailToClipboard } = useLanguage();

  const handleSelectPersona = (persona: string) => {
    setSelectedPersona(persona);
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a101d] text-white selection:bg-gold-500 selection:text-gold-950 font-sans antialiased">
      
      {/* Brand Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Hero with Ocean visual & Persona Selector */}
      <Hero onSelectPersona={handleSelectPersona} onOpenBooking={handleOpenBooking} />

      {/* Case Studies Section */}
      <CaseStudies selectedPersona={selectedPersona} />

      {/* Testimonials Section */}
      <Testimonials selectedPersona={selectedPersona} />

      {/* Principles Section */}
      <Principles />

      {/* Process Section */}
      <Process />

      {/* Sectors Section */}
      <Sectors />

      {/* Editorial Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a101d] to-slate-900 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center space-y-10">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-400 font-semibold">
              {t.contact.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-slate-100 text-sm md:text-base font-light">
              {t.contact.desc}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0d1a29] to-[#0a101d] border border-white/20 p-8 sm:p-10 rounded-3xl max-w-xl mx-auto space-y-6 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto text-gold-400">
              <Calendar className="w-6 h-6" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-display font-medium text-white">{t.contact.cardTitle}</h3>
              <p className="text-xs text-slate-100 font-light">
                {t.contact.cardDesc}
              </p>
            </div>

            <button
              onClick={handleOpenBooking}
              className="w-full inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-gold-950 font-sans font-medium uppercase tracking-widest text-xs py-4.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(209,165,60,0.15)]"
            >
              <span>{t.contact.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-[#050914] text-slate-100 py-16 border-t border-white/10 relative pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12 items-start">
            
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold-950" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <span className="text-white font-display font-semibold text-sm">CraftVanta</span>
              </div>
              <p className="text-xs text-slate-100 max-w-sm leading-relaxed font-light">
                {t.footer.studioDesc}
              </p>
            </div>

            <div className="md:col-span-3 space-y-3 text-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold-400">{t.footer.channels}</span>
              <p className="font-sans font-light">Email: <button onClick={() => copyEmailToClipboard("tanmay.mukherjee715@gmail.com")} className="text-white hover:text-gold-400 transition-colors text-left focus:outline-none font-medium">tanmay.mukherjee715@gmail.com</button></p>
              <p className="font-sans font-light">WhatsApp: <a href="https://wa.me/918001195515" target="_blank" rel="noreferrer" className="text-white hover:text-gold-400 transition-colors font-medium">{t.footer.chatPortal}</a></p>
            </div>

            <div className="md:col-span-4 space-y-3 text-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold-400">{t.footer.commitmentTitle}</span>
              <p className="font-sans font-light leading-relaxed text-slate-100">
                {t.footer.commitmentDesc}
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-xs">
            <p className="font-sans font-light text-slate-100">
              &copy; {new Date().getFullYear()} CraftVanta. {t.footer.copyright}
            </p>
            <div className="flex items-center space-x-1 text-slate-200">
              <span>{t.footer.craftedWith}</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
              <span>{language === "bn" ? "আন্তর্জাতিক পারফরম্যান্সের জন্য।" : (language === "hi" ? "अंतरराष्ट्रीय प्रदर्शन के लिए।" : "for international performance.")}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Auto-detected language notification toast */}
      <LanguageToast />

      {/* Floating AI chat assistant widget */}
      <AIChatWidget />

      {/* Floating Persistant Contact/Booking Bar (Bottom) */}
      <ContactBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking/Scheduling Modal */}
      <CustomContactModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialPersona={selectedPersona}
      />

    </div>
  );
}
