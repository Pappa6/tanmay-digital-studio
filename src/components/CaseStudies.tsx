import { useState } from "react";
import { CaseStudy } from "../types";
import { ArrowUpRight, TrendingUp, Cpu, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface CaseStudiesProps {
  selectedPersona: string;
}

export default function CaseStudies({ selectedPersona }: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { t, language } = useLanguage();

  const caseStudies: CaseStudy[] = [
    {
      id: "healthcare",
      category: t.caseStudies.items.healthcare.category,
      title: "Regional Healthcare Group",
      challenge: t.caseStudies.items.healthcare.challenge,
      solution: t.caseStudies.items.healthcare.solution,
      outcome: t.caseStudies.items.healthcare.outcome,
      metrics: t.caseStudies.items.healthcare.metrics,
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "automation",
      category: t.caseStudies.items.automation.category,
      title: "Automated Corporate Analytics Engine",
      challenge: t.caseStudies.items.automation.challenge,
      solution: t.caseStudies.items.automation.solution,
      outcome: t.caseStudies.items.automation.outcome,
      metrics: t.caseStudies.items.automation.metrics,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "finance",
      category: t.caseStudies.items.finance.category,
      title: "Sovereign Wealth Management Portal",
      challenge: t.caseStudies.items.finance.challenge,
      solution: t.caseStudies.items.finance.solution,
      outcome: t.caseStudies.items.finance.outcome,
      metrics: t.caseStudies.items.finance.metrics,
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredStudies = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter(study => {
        if (activeTab === "digital") return study.id === "healthcare" || study.id === "finance";
        if (activeTab === "automation") return study.id === "automation";
        return true;
      });

  const getStudyPriority = (study: CaseStudy): number => {
    if (selectedPersona === "trust") {
      if (study.id === "finance") return 3;
      if (study.id === "healthcare") return 2;
      return 1;
    }
    if (selectedPersona === "story") {
      if (study.id === "healthcare") return 3;
      return 1;
    }
    if (selectedPersona === "automation") {
      if (study.id === "automation") return 3;
      return 1;
    }
    if (selectedPersona === "security") {
      if (study.id === "finance") return 3;
      if (study.id === "healthcare") return 2;
      return 1;
    }
    return 1;
  };

  const sortedStudies = [...filteredStudies].sort((a, b) => getStudyPriority(b) - getStudyPriority(a));

  return (
    <section id="case-studies" className="py-24 bg-slate-50 text-slate-900 relative transition-all duration-300">
      
      {/* Decorative top border representing rising from the sea */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0d2a33] to-slate-50 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-600 font-semibold mb-3.5 block">
              {t.caseStudies.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-950 tracking-tight leading-[1.15]">
              {t.caseStudies.heading}
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex bg-slate-200/80 p-1.5 rounded-2xl border border-slate-300">
            {[
              { id: "all", label: t.caseStudies.allEngagements },
              { id: "digital", label: t.caseStudies.webIdentity },
              { id: "automation", label: t.caseStudies.dataAutomation }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-mono font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-900 hover:text-black font-semibold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic highlights based on Hero selection */}
        {selectedPersona !== "default" && (
          <div className="mb-8 p-4 rounded-2xl bg-gold-50 border border-gold-200 flex items-start space-x-3.5 max-w-3xl animate-fadeIn">
            <div className="p-1.5 rounded-lg bg-gold-400/20 text-gold-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-gold-800 font-semibold">{t.caseStudies.customizedViewActive}</p>
              <p className="text-sm text-gold-900 font-light mt-0.5">
                {t.caseStudies.showingHighlighted}{" "}
                <strong className="font-semibold">
                  {selectedPersona === "trust" && t.hero.pills.trust}
                  {selectedPersona === "story" && t.hero.pills.story}
                  {selectedPersona === "automation" && t.hero.pills.automation}
                  {selectedPersona === "security" && t.hero.pills.security}
                </strong>.
              </p>
            </div>
          </div>
        )}

        {/* Grid of Case Studies */}
        <div className="space-y-20">
          {sortedStudies.map((study, idx) => {
            // Check if this case study matches the active persona
            const isHighlighted = 
              (selectedPersona === "trust" && (study.id === "finance" || study.id === "healthcare")) ||
              (selectedPersona === "story" && study.id === "healthcare") ||
              (selectedPersona === "automation" && study.id === "automation") ||
              (selectedPersona === "security" && (study.id === "finance" || study.id === "healthcare"));

            return (
              <div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch border-b border-slate-200 pb-16 last:border-b-0 last:pb-0 transition-all duration-500 ${
                  isHighlighted ? "scale-[1.01] bg-gold-50/20 rounded-3xl p-6 border-gold-200 shadow-md" : ""
                }`}
              >
                {/* Visual Artwork Column */}
                <div className="lg:col-span-5 relative group overflow-hidden rounded-3xl bg-slate-900 min-h-[250px] md:min-h-[350px]">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Color Overlay to match design */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-slate-950/90 backdrop-blur-md border border-white/20 px-4.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-gold-300 font-semibold">
                      {study.category}
                    </span>
                  </div>

                  {/* Highlights Indicator */}
                  {isHighlighted && (
                    <div className="absolute top-6 right-6 z-10 bg-gold-500 text-gold-950 font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-lg flex items-center space-x-1">
                      <TrendingUp className="w-3.5 h-3.5 animate-bounce" />
                      <span>{language === "bn" ? "সুপারিশকৃত" : (language === "hi" ? "अनुशंसित" : "Recommended")}</span>
                    </div>
                  )}

                  {/* Absolute Bottom Title Text */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="text-white font-mono text-xs block mb-1 font-semibold">0{idx + 1} // {language === "bn" ? "প্রকল্প" : (language === "hi" ? "अनुबंध" : "ENGAGEMENT")}</span>
                    <h3 className="text-2xl font-serif font-medium text-white tracking-tight">{study.title}</h3>
                  </div>
                </div>

                {/* Editorial Copy Column */}
                <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-2xl font-serif text-slate-950 tracking-tight font-semibold">
                          {study.title}
                        </h4>
                        <p className="text-xs font-mono text-slate-900 mt-1 uppercase tracking-wider font-semibold">
                          {language === "bn" ? "স্টুডিও স্ট্যান্ডার্ড স্পেসিফিকেশন" : (language === "hi" ? "स्टूडियो मानक विशिष्टता" : "STUDIO STANDARD SPECIFICATION")}
                        </p>
                      </div>
                      <a 
                        href="#contact" 
                        className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-900 hover:text-gold-600 hover:border-gold-400 transition-all group duration-300"
                        title={language === "bn" ? "এই প্রকল্প বিন্যাস সম্পর্কে জিজ্ঞাসা করুন" : (language === "hi" ? "इस परियोजना लेआउट के बारे में पूछताछ करें" : "Inquire about this project layout")}
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                      </a>
                    </div>

                    {/* Challenge Solution Outcome Block */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pt-2">
                      
                      {/* Challenge */}
                      <div className="border-l-2 border-slate-400 pl-4 space-y-1.5">
                        <span className="text-[10px] uppercase tracking-widest font-mono text-slate-900 font-bold block">{language === "bn" ? "চ্যালেঞ্জ" : (language === "hi" ? "चुनौती" : "Challenge")}</span>
                        <p className="text-slate-900 text-sm leading-relaxed font-normal">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="border-l-2 border-slate-400 pl-4 space-y-1.5">
                        <span className="text-[10px] uppercase tracking-widest font-mono text-gold-700 font-bold block">{language === "bn" ? "সমাধান" : (language === "hi" ? "समाधान" : "Solution")}</span>
                        <p className="text-slate-900 text-sm leading-relaxed font-normal">
                          {study.solution}
                        </p>
                      </div>

                      {/* Outcome */}
                      <div className="border-l-2 border-gold-400 pl-4 bg-gold-100/60 py-2.5 pr-2.5 rounded-r-xl space-y-1.5">
                        <span className="text-[10px] uppercase tracking-widest font-mono text-slate-950 font-bold block">{language === "bn" ? "ফলাফল" : (language === "hi" ? "परिणाम" : "Outcome")}</span>
                        <p className="text-slate-950 text-sm leading-relaxed font-medium">
                          {study.outcome}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Highlight Metrics Bar */}
                  <div className="bg-slate-200/80 border border-slate-300 rounded-2xl p-4.5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-3 text-slate-900 font-medium">
                      <Award className="w-5 h-5 text-gold-600" />
                      <span className="text-xs font-mono uppercase tracking-wider">{language === "bn" ? "মূল ফলাফল মেট্রিক" : (language === "hi" ? "मुख्य परिणाम मीट्रिक" : "Key Outcome Metric")}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm sm:text-base font-display font-semibold text-slate-950 bg-white border border-slate-300 px-4 py-1.5 rounded-xl shadow-sm block">
                        {study.metrics}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
