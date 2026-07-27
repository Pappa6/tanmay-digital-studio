import { useState } from "react";
import { ProcessStage } from "../types";
import { CheckCircle2, ChevronDown, Compass, Scroll, Palette, Codepen, Rocket, LineChart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const [expandedStep, setExpandedStep] = useState<string>("understand");
  const { t, language } = useLanguage();

  const stages: ProcessStage[] = [
    {
      id: "understand",
      number: "01",
      title: t.process.stages.understand.title,
      description: t.process.stages.understand.description,
      bullets: t.process.stages.understand.bullets
    },
    {
      id: "plan",
      number: "02",
      title: t.process.stages.plan.title,
      description: t.process.stages.plan.description,
      bullets: t.process.stages.plan.bullets
    },
    {
      id: "design",
      number: "03",
      title: t.process.stages.design.title,
      description: t.process.stages.design.description,
      bullets: t.process.stages.design.bullets
    },
    {
      id: "build",
      number: "04",
      title: t.process.stages.build.title,
      description: t.process.stages.build.description,
      bullets: t.process.stages.build.bullets
    },
    {
      id: "launch",
      number: "05",
      title: t.process.stages.launch.title,
      description: t.process.stages.launch.description,
      bullets: t.process.stages.launch.bullets
    },
    {
      id: "grow",
      number: "06",
      title: t.process.stages.grow.title,
      description: t.process.stages.grow.description,
      bullets: t.process.stages.grow.bullets
    }
  ];

  const getStageIcon = (id: string) => {
    switch (id) {
      case "understand": return <Compass className="w-5 h-5 text-gold-400" />;
      case "plan": return <Scroll className="w-5 h-5 text-gold-400" />;
      case "design": return <Palette className="w-5 h-5 text-gold-400" />;
      case "build": return <Codepen className="w-5 h-5 text-gold-400" />;
      case "launch": return <Rocket className="w-5 h-5 text-gold-400" />;
      case "grow": return <LineChart className="w-5 h-5 text-gold-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#0a101d] text-white relative overflow-hidden">
      
      {/* Decorative Wave Ambient Background */}
      <div className="absolute top-1/4 right-[-10%] w-[50vw] h-[50vw] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[40vw] h-[40vw] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-400 font-semibold mb-3.5 block">
            {t.process.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            {t.process.heading}
          </h2>
          <p className="text-slate-100 text-sm md:text-base font-normal mt-4 leading-relaxed">
            {t.process.description}
          </p>
        </div>

        {/* Process Roadmap Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Interactive Steps List - Left Side */}
          <div className="lg:col-span-7 space-y-4">
            {stages.map((stage) => {
              const isExpanded = expandedStep === stage.id;
              return (
                <div
                  key={stage.id}
                  onClick={() => setExpandedStep(stage.id)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "bg-[#0f1b29] border-gold-500/50 shadow-lg"
                      : "bg-[#0f1b29]/80 border-white/15 hover:border-white/30"
                  }`}
                >
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Number tag */}
                      <span className="font-mono text-xs text-gold-300 bg-gold-500/15 border border-gold-500/30 px-3 py-1 rounded-lg font-bold">
                        {stage.number}
                      </span>
                      {/* Icon */}
                      <div className="p-2 bg-white/10 rounded-xl text-gold-300">
                        {getStageIcon(stage.id)}
                      </div>
                      {/* Title */}
                      <h3 className="font-display font-semibold text-base sm:text-lg text-white">
                        {stage.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-white font-semibold transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-gold-400" : ""
                      }`}
                    />
                  </div>

                  {/* Expanded detail list */}
                  <div
                    className={`transition-all duration-300 ${
                      isExpanded ? "max-h-[500px] border-t border-white/10" : "max-h-0 pointer-events-none"
                    }`}
                  >
                    <div className="p-6 space-y-4">
                      <p className="text-slate-100 text-sm font-sans leading-relaxed font-normal">
                        {stage.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-widest font-mono text-gold-400 font-semibold block mb-3">
                          {language === "bn" ? "মূল ডেলিভারেবলসমূহ:" : (language === "hi" ? "मुख्य वितरण योग्य:" : "Key Deliverables:")}
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {stage.bullets?.map((bullet, idx) => (
                            <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-100 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side Explainer Display - Right Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-[#0f1b29] border border-white/20 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />
              
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gold-400 font-semibold block mb-1">
                  {language === "bn" ? "রোডম্যাপ মাইলস্টোন" : (language === "hi" ? "रोडमैप मील का पत्थर" : "Roadmap Milestone")}
                </span>
                <h3 className="text-xl font-display font-semibold text-white">
                  {t.process.whyStructureCounts}
                </h3>
                <p className="text-xs text-slate-200 mt-1 font-normal">
                  {t.process.structureDesc}
                </p>
              </div>

              {/* Status Board */}
              <div className="space-y-4 pt-4 border-t border-white/15">
                {[
                  { label: t.process.standards.s1.label, value: t.process.standards.s1.value },
                  { label: t.process.standards.s2.label, value: t.process.standards.s2.value },
                  { label: t.process.standards.s3.label, value: t.process.standards.s3.value },
                  { label: t.process.standards.s4.label, value: t.process.standards.s4.value }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="text-slate-100 font-sans font-normal">{item.label}</span>
                    <span className="font-mono text-gold-300 font-bold bg-gold-500/15 border border-gold-500/30 px-2.5 py-1 rounded-md">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className="w-full text-center block bg-white/5 hover:bg-gold-500 hover:text-gold-950 border border-white/10 hover:border-gold-400 text-xs uppercase tracking-widest font-mono py-4 rounded-xl mt-8 transition-all duration-300"
              >
                {t.process.scopingCta}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
