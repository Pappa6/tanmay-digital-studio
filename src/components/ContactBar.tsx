import { MessageSquare, Phone, Mail, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ContactBarProps {
  onOpenBooking: () => void;
}

export default function ContactBar({ onOpenBooking }: ContactBarProps) {
  const { t, language, copyEmailToClipboard } = useLanguage();
  const email = "tanmay.mukherjee715@gmail.com";
  const phone = "+918001195515"; // Updated contact details
  const whatsappUrl = "https://wa.me/918001195515?text=Hello%20Tanmay,%20I%27m%20interested%20in%20discussing%20a%20digital%20growth%20engagement.";

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-lg px-4 md:px-0">
      <div className="bg-[#0a101d]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-1">
        
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 rounded-xl text-gray-300 hover:text-gold-400 hover:bg-white/5 transition-all group"
        >
          <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-mono mt-1 font-medium tracking-wide">
            {t.contact.whatsapp}
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${phone}`}
          className="flex-1 flex flex-col items-center justify-center py-2 rounded-xl text-gray-300 hover:text-gold-400 hover:bg-white/5 transition-all group"
        >
          <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-mono mt-1 font-medium tracking-wide">
            {language === "bn" ? "কল" : (language === "hi" ? "कॉल" : "Call")}
          </span>
        </a>

        {/* Direct Email Button */}
        <button
          onClick={() => copyEmailToClipboard(email)}
          className="flex-1 flex flex-col items-center justify-center py-2 rounded-xl text-gray-300 hover:text-gold-400 hover:bg-white/5 transition-all group focus:outline-none"
        >
          <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-mono mt-1 font-medium tracking-wide">
            {language === "bn" ? "ইমেল" : (language === "hi" ? "ईमेल" : "Email")}
          </span>
        </button>

        {/* Book Button */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex flex-col items-center justify-center py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950 rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all font-medium shadow-md active:scale-95 group"
        >
          <Calendar className="w-4 h-4 text-gold-950 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-mono mt-1 font-bold tracking-wide">
            {language === "bn" ? "স্লট বুক করুন" : (language === "hi" ? "बुक स्लॉट" : "Book Slot")}
          </span>
        </button>

      </div>
    </div>
  );
}
