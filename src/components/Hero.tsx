import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ChevronDown, ShieldCheck, Sparkles, TrendingUp, Cpu, Award, MessageSquare, Phone, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onSelectPersona: (persona: string) => void;
  onOpenBooking: () => void;
}

export default function Hero({ onSelectPersona, onOpenBooking }: HeroProps) {
  const { scrollY } = useScroll();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { t } = useLanguage();

  // Transform elements on scroll for an immersive "surfacing" feel
  const contentY = useTransform(scrollY, [0, 600], [0, 120]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Transform background color transition from deep sea to next section's background (slate-50 / #f8fafc)
  const bgOverlayColor = useTransform(
    scrollY,
    [0, 500, 850],
    ["rgba(10, 16, 29, 0)", "rgba(13, 38, 48, 0.5)", "rgba(248, 250, 252, 1)"]
  );

  const [activePersona, setActivePersona] = useState<string>("default");

  const personas = [
    {
      id: "trust",
      label: t.hero.labels.trust,
      pillLabel: t.hero.pills.trust,
      headline: t.hero.headlines.trust,
      description: t.hero.descriptions.trust,
      icon: TrendingUp,
      accentText: t.hero.accents.trust,
      cta: t.hero.pills.trust
    },
    {
      id: "story",
      label: t.hero.labels.story,
      pillLabel: t.hero.pills.story,
      headline: t.hero.headlines.story,
      description: t.hero.descriptions.story,
      icon: Award,
      accentText: t.hero.accents.story,
      cta: t.hero.pills.story
    },
    {
      id: "automation",
      label: t.hero.labels.automation,
      pillLabel: t.hero.pills.automation,
      headline: t.hero.headlines.automation,
      description: t.hero.descriptions.automation,
      icon: Cpu,
      accentText: t.hero.accents.automation,
      cta: t.hero.pills.automation
    },
    {
      id: "security",
      label: t.hero.labels.security,
      pillLabel: t.hero.pills.security,
      headline: t.hero.headlines.security,
      description: t.hero.descriptions.security,
      icon: ShieldCheck,
      accentText: t.hero.accents.security,
      cta: t.hero.pills.security
    }
  ];

  const currentContent = personas.find((p) => p.id === activePersona) || {
    id: "default",
    headline: t.hero.defaultHeadline,
    description: t.hero.defaultDescription,
    accentText: t.hero.defaultAccent,
    cta: t.hero.defaultCta
  };


  // Canvas Animation: slow gradient shimmer + diagonal rays + rising ambient particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particleCount = 40;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
      colorType: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.35 + 0.08), // Slow upward movement
        speedX: (Math.random() * 0.15 - 0.07) - 0.05, // Slight left diagonal drift
        opacity: Math.random() * 0.6 + 0.1,
        colorType: Math.random() > 0.45 ? 0 : 1, // Gold vs Teal
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;
    const render = () => {
      time += 0.0015; // Extremely slow, ambient motion

      // 1. Shifting background gradient (Navy to soft teal)
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, "#050913"); // Deep navy
      const middleStop = 0.5 + Math.sin(time * 2) * 0.08;
      grad.addColorStop(middleStop, "#091724"); // Deep navy-teal transition
      grad.addColorStop(1, "#0a262c"); // Soft ocean teal
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Diagonal sunlight rays filtering through water from top-right to bottom-left
      const rayCount = 4;
      for (let i = 0; i < rayCount; i++) {
        const shift = Math.sin(time * 1.5 + i * 2.5) * 35;
        const widthFactor = 160 + Math.cos(time + i) * 25;
        const startX = width * 0.65 + i * (width * 0.12) + shift - 80;

        ctx.beginPath();
        ctx.moveTo(startX, -50);
        ctx.lineTo(startX + widthFactor, -50);
        ctx.lineTo(startX + widthFactor - 350, height + 50);
        ctx.lineTo(startX - 350, height + 50);
        ctx.closePath();

        const rayGrad = ctx.createLinearGradient(startX, 0, startX - 250, height);
        const pulse = 0.035 + Math.sin(time * 2.2 + i) * 0.015;

        if (i % 2 === 0) {
          // Vivid brand gold ray
          rayGrad.addColorStop(0, `rgba(209, 165, 60, ${pulse * 3.5})`);
          rayGrad.addColorStop(0.5, `rgba(209, 165, 60, ${pulse * 1.5})`);
          rayGrad.addColorStop(1, "rgba(209, 165, 60, 0)");
        } else {
          // Vivid ocean teal ray
          rayGrad.addColorStop(0, `rgba(13, 148, 136, ${pulse * 3.0})`);
          rayGrad.addColorStop(0.5, `rgba(13, 148, 136, ${pulse * 1.2})`);
          rayGrad.addColorStop(1, "rgba(13, 148, 136, 0)");
        }

        ctx.fillStyle = rayGrad;
        ctx.fill();
      }

      // 3. Drifting particles with vivid, high-contrast visibility
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;

        // Warp bounds
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.opacity = 0;
        }
        if (p.x < -10) {
          p.x = width + 10;
        } else if (p.x > width + 10) {
          p.x = -10;
        }

        if (p.opacity < 0.9) {
          p.opacity += 0.005;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 1.2, 0, Math.PI * 2);

        if (p.colorType === 0) {
          ctx.fillStyle = `rgba(255, 215, 0, ${Math.min(1, p.opacity * 0.85)})`; // vivid gold
        } else {
          ctx.fillStyle = `rgba(45, 212, 191, ${Math.min(1, p.opacity * 0.85)})`; // vivid teal
        }
        
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.colorType === 0 ? "rgba(255,215,0,0.5)" : "rgba(45,212,191,0.5)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050913] text-white">
      {/* Immersive Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Dynamic Scroll Surfacing Transition Overlay */}
      <motion.div
        style={{ backgroundColor: bgOverlayColor }}
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-300"
      />

      {/* Floating abstract soft golden glow layer */}
      <div className="absolute right-[8%] top-[12%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-br from-teal-500/15 via-transparent to-gold-500/10 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "12s" }} />

      {/* Hero Content Wrapper */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto px-6 relative z-10 pt-32 pb-24 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Copy and beautiful golden CTA bar */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            
            {/* Elegant Floating Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500/20 to-teal-500/20 border border-gold-400 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_4px_30px_rgba(209,165,60,0.1)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-300 font-medium">
                {t.hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline Block */}
            <div className="h-auto min-h-[140px] md:min-h-[160px] lg:min-h-[200px] w-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentContent.headline}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif leading-[1.15] text-white tracking-tight text-left"
                >
                  {currentContent.headline.includes(" — ") ? (
                    currentContent.headline.split(" — ").map((part, index) => (
                      <span key={index} className="block first:font-medium last:text-gold-300 last:font-normal last:italic">
                        {part}
                        {index === 0 && " — "}
                      </span>
                    ))
                  ) : (
                    <span className="block font-medium text-white">{currentContent.headline}</span>
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Description Sub-headline */}
            <div className="min-h-[90px] md:min-h-[80px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentContent.description}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-normal max-w-2xl text-left"
                >
                  {currentContent.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Premium Restyled CTA Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-3 w-full"
            >
              {/* Primary: Book Slot */}
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-gold-950 font-sans font-semibold uppercase tracking-wider text-xs px-7 py-4.5 rounded-xl transition-all duration-300 shadow-[0_4px_18px_rgba(209,165,60,0.22)] hover:shadow-[0_8px_25px_rgba(209,165,60,0.35)] active:scale-97"
              >
                <Calendar className="w-4 h-4 text-gold-950 group-hover:scale-110 transition-transform" />
                <span>{currentContent.cta || t.hero.defaultCta}</span>
              </button>

              {/* Secondary: WhatsApp */}
              <a
                href="https://wa.me/918001195515"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2.5 border border-white/20 hover:border-gold-400 bg-white/10 hover:bg-gold-500/10 backdrop-blur-sm px-6 py-4.5 rounded-xl text-xs uppercase tracking-wider font-mono text-white hover:text-gold-300 transition-all duration-300 group"
              >
                <MessageSquare className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>

              {/* Tertiary: Direct Call */}
              <a
                href="tel:+918001195515"
                className="inline-flex items-center space-x-2.5 border border-white/20 hover:border-gold-400 bg-white/10 hover:bg-gold-500/10 backdrop-blur-sm px-6 py-4.5 rounded-xl text-xs uppercase tracking-wider font-mono text-white hover:text-gold-300 transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <span>{t.contact.callNow}</span>
              </a>
            </motion.div>

            {/* Philosophical Quote Accent */}
            <div className="h-[24px] pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentContent.accentText}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.35 }}
                  className="text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "10s" }} />
                  <span>{currentContent.accentText}</span>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Persona Interactive Pathway Selector Card */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md bg-[#0c1926] backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
            >
              {/* Subtle gold glow inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold-400/10 blur-2xl pointer-events-none" />

              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-gold-400 block mb-2">{t.hero.interactivePathway}</span>
                <h3 className="text-xl font-display font-medium text-white">{t.hero.interactiveTitle}</h3>
                <p className="text-xs text-slate-100 mt-1">{t.hero.interactiveDesc}</p>
              </div>

              {/* Persona Selection list */}
              <div className="space-y-3">
                {personas.map((p) => {
                  const IconComponent = p.icon;
                  const isSelected = activePersona === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActivePersona(p.id);
                        onSelectPersona(p.id);
                      }}
                      className={`w-full text-left flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group border relative overflow-hidden ${
                        isSelected
                          ? "bg-gradient-to-r from-gold-500/20 to-teal-500/15 border-gold-400 shadow-[0_0_15px_rgba(209,165,60,0.2)]"
                          : "bg-white/10 border-white/10 hover:bg-white/15 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center space-x-3.5 relative z-10">
                        <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                          isSelected ? "bg-gold-500/25 text-gold-300" : "bg-white/10 text-slate-200 group-hover:text-white"
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <p className={`text-sm font-sans font-medium transition-colors duration-300 ${
                            isSelected ? "text-white" : "text-slate-100 group-hover:text-white"
                          }`}>
                            {p.pillLabel}
                          </p>
                          <p className="text-[11px] text-slate-200 mt-0.5 font-light">
                            {p.label}
                          </p>
                        </div>
                      </div>

                      <div className="relative z-10">
                        {isSelected ? (
                          <motion.div
                            layoutId="active-indicator"
                            className="w-2 h-2 rounded-full bg-gold-400 shadow-[0_0_8px_#d1a53c]"
                          />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-200 group-hover:text-white -rotate-90" />
                        )}
                      </div>

                      {isSelected && (
                        <motion.div
                          layoutId="pill-glow"
                          className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-teal-500/10 pointer-events-none"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Reset perspective trigger */}
              {activePersona !== "default" && (
                <button
                  onClick={() => {
                    setActivePersona("default");
                    onSelectPersona("default");
                  }}
                  className="mt-5 w-full text-center text-xs font-mono text-slate-100 hover:text-gold-400 transition-colors py-1 block"
                >
                  {t.hero.returnUniversal}
                </button>
              )}
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer z-10"
          onClick={() => {
            document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-slate-100 hover:text-gold-400 transition-colors">
            {t.hero.descendWork}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-gold-400" />
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
