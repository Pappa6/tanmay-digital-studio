import { Sector } from "../types";
import { HeartPulse, GraduationCap, Landmark, ShoppingBag, BadgeCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Sectors() {
  const { t, language } = useLanguage();

  const sectors: Sector[] = [
    {
      id: "healthcare",
      name: t.sectors.items.healthcare.name,
      icon: "HeartPulse",
      description: t.sectors.items.healthcare.description
    },
    {
      id: "education",
      name: t.sectors.items.education.name,
      icon: "GraduationCap",
      description: t.sectors.items.education.description
    },
    {
      id: "finance",
      name: t.sectors.items.finance.name,
      icon: "Landmark",
      description: t.sectors.items.finance.description
    },
    {
      id: "retail",
      name: t.sectors.items.retail.name,
      icon: "ShoppingBag",
      description: t.sectors.items.retail.description
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartPulse": return <HeartPulse className="w-6 h-6 text-gold-400" />;
      case "GraduationCap": return <GraduationCap className="w-6 h-6 text-gold-400" />;
      case "Landmark": return <Landmark className="w-6 h-6 text-gold-400" />;
      case "ShoppingBag": return <ShoppingBag className="w-6 h-6 text-gold-400" />;
      default: return <BadgeCheck className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="sectors" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-600 font-semibold mb-3.5 block">
            {t.sectors.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-950 tracking-tight leading-[1.15]">
            {t.sectors.heading}
          </h2>
          <p className="text-slate-900 text-sm md:text-base font-normal mt-4 leading-relaxed">
            {t.sectors.description}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s) => (
            <div
              key={s.id}
              className="bg-white border border-slate-300 rounded-2xl p-6 hover:shadow-lg hover:border-gold-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-[#0a101d] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(s.icon)}
                </div>

                <h3 className="text-lg font-display font-semibold text-slate-950 mb-3 group-hover:text-gold-600 transition-colors">
                  {s.name}
                </h3>

                <p className="text-slate-900 text-xs sm:text-sm leading-relaxed font-normal">
                  {s.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-900 font-semibold">
                <span>{t.sectors.zeroTemplates}</span>
                <span className="text-gold-700 font-bold">{t.sectors.bespoke}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Accent Footer */}
        <div className="mt-16 bg-[#0a101d] text-white p-6 sm:p-8 rounded-3xl border border-white/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="p-2.5 rounded-lg bg-white/10 text-gold-400">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-sans font-semibold text-white">{t.sectors.complianceBox.title}</p>
              <p className="text-xs text-slate-200 font-normal mt-0.5">{t.sectors.complianceBox.desc}</p>
            </div>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950 font-sans font-medium text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:from-gold-400 hover:to-gold-500 transition-colors shadow-md"
          >
            {t.sectors.complianceBox.cta}
          </a>
        </div>

      </div>
    </section>
  );
}
