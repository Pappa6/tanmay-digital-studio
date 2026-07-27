import { Principle } from "../types";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Principles() {
  const { t, language } = useLanguage();

  const principles: Principle[] = [
    {
      id: "business-first",
      number: "01",
      title: t.principles.items.p1.title,
      description: t.principles.items.p1.description
    },
    {
      id: "strategy-shaped",
      number: "02",
      title: t.principles.items.p2.title,
      description: t.principles.items.p2.description
    },
    {
      id: "tailored-solutions",
      number: "03",
      title: t.principles.items.p3.title,
      description: t.principles.items.p3.description
    },
    {
      id: "partnership",
      number: "04",
      title: t.principles.items.p4.title,
      description: t.principles.items.p4.description
    },
    {
      id: "trust-verified",
      number: "05",
      title: t.principles.items.p5.title,
      description: t.principles.items.p5.description
    }
  ];

  return (
    <section id="principles" className="py-24 bg-[#0a101d] text-white relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-0 w-[40vw] h-[40vw] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30vw] h-[30vw] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-400 font-semibold mb-3.5 block">
            {t.principles.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            {t.principles.heading}
          </h2>
          <div className="h-1.5 w-16 bg-gold-500 mt-6 rounded-full" />
          <p className="text-slate-100 text-base md:text-lg font-normal mt-6 max-w-2xl leading-relaxed">
            {t.principles.description}
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {principles.map((p) => (
            <div
              key={p.id}
              className="bg-[#0f1b29] border border-white/20 rounded-2xl p-8 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
            >
              {/* Giant Serif Number watermark */}
              <div className="absolute top-2 right-6 text-7xl md:text-8xl font-serif font-black text-white/[0.08] group-hover:text-gold-500/[0.12] select-none transition-colors duration-500">
                {p.number}
              </div>

              <div>
                {/* Visual Number Badge */}
                <div className="text-xs font-mono text-gold-400 font-bold mb-6 tracking-widest flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span>{language === "bn" ? `নীতিমালা ${p.number}` : (language === "hi" ? `सिद्धांत ${p.number}` : `PRINCIPLE ${p.number}`)}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-white mb-4 group-hover:text-gold-300 transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-slate-200 text-sm leading-relaxed font-normal font-sans">
                  {p.description}
                </p>
              </div>

              {/* Bottom Line decorative element */}
              <div className="w-full h-[1px] bg-white/20 group-hover:bg-gold-500/50 transition-colors mt-8" />
            </div>
          ))}

          {/* Call to action card */}
          <div className="bg-gradient-to-br from-gold-500/20 via-[#0f1b29] to-[#0a101d] border border-gold-500/40 rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden shadow-xl">
            <div className="absolute top-[-20%] right-[-20%] w-32 h-32 rounded-full bg-gold-500/20 blur-xl pointer-events-none" />
            
            <div>
              <div className="p-3 bg-gold-500/20 text-gold-300 rounded-xl w-fit mb-6 border border-gold-500/30">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                {t.principles.ctaBox.title}
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed font-sans font-normal mt-2">
                {t.principles.ctaBox.desc}
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gold-400 hover:text-white transition-colors duration-300 group-hover:translate-x-1"
            >
              <span>{t.principles.ctaBox.link}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
