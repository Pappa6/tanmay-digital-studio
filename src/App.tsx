import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Menu, MessageCircle, Mail, Phone, Sparkles, Globe2 } from "lucide-react";

type Lang = "en" | "bn" | "hi";

const copy = {
  en: {
    nav: ["Services", "Process", "Work", "Principles", "Contact"],
    eyebrow: "FOUNDER-LED DIGITAL STUDIO",
    hero: "Digital Solutions. Crafted for Business.",
    heroText: "CraftVanta helps businesses turn ideas into professional digital experiences—through websites, landing pages, branding and digital creatives.",
    servicesLine: "Websites • Landing Pages • Branding • Digital Creatives",
    processLine: "IDEA → DESIGN → BUILD → GROW",
    start: "Start a Project",
    work: "Explore Our Work",
    whoEy: "WHO WE ARE",
    whoTitle: "We turn ideas into digital experiences.",
    whoText: "CraftVanta is a founder-led digital solutions brand built around one simple belief: good digital work should look purposeful, feel clear and serve a real business need.",
    founder: "Founded by Tanmay Mukherjee · Founder, CraftVanta",
    serviceEy: "WHAT WE CRAFT",
    serviceTitle: "Digital work with a business purpose.",
    services: [
      ["01", "Websites", "Professional websites that build credibility, communicate value and help visitors take the next step."],
      ["02", "Landing Pages", "Focused digital experiences built around one clear business objective."],
      ["03", "Branding", "Logos, visual identity and brand systems that make a business recognisable."],
      ["04", "Digital Creatives", "Social creatives, banners, campaigns and promotional visuals designed for attention and clarity."]
    ],
    processEy: "OUR METHOD",
    processTitle: "IDEA → DESIGN → BUILD → GROW",
    process: [
      ["IDEA", "You bring the idea.", "We understand the business behind it, the audience and the objective."],
      ["DESIGN", "We shape the experience.", "Strategy becomes visual direction, structure and a clear digital story."],
      ["BUILD", "We make it real.", "Design becomes a responsive, working digital solution."],
      ["GROW", "We keep it moving.", "Your digital presence becomes a business asset that can evolve."]
    ],
    workEy: "SELECTED WORK",
    workTitle: "Real problems. Crafted solutions.",
    workText: "A growing portfolio of websites, landing pages, brand systems and digital creative work.",
    workCards: [
      ["BUSINESS WEBSITE", "Digital presence", "A clean, credible website architecture built around a business story."],
      ["LANDING PAGE", "Conversion experience", "A focused page designed to communicate one offer with clarity."],
      ["BRAND & CREATIVE", "Visual system", "A coherent visual direction for social, campaigns and customer touchpoints."]
    ],
    advancedEy: "CUSTOM DIGITAL SOLUTIONS",
    advancedTitle: "When the business needs more.",
    advancedText: "For projects that go beyond the front-end, CraftVanta can extend into custom interfaces, automation workflows, AI-assisted experiences, data-driven systems and tailored digital operations.",
    principlesEy: "OUR PRINCIPLES",
    principlesTitle: "How we work.",
    principles: [
      ["01", "Business Before Design", "Every design decision should have a purpose."],
      ["02", "Clarity Before Complexity", "Simple experiences are easier to understand and use."],
      ["03", "Purpose Before Trends", "We do not use a trend simply because it looks impressive."],
      ["04", "Craft Before Compromise", "Details matter when your brand is on the line."],
      ["05", "Build for Tomorrow", "Digital work should be useful today and ready to evolve tomorrow."]
    ],
    proofEy: "TRUSTED THROUGH THE WORK",
    proofTitle: "No invented testimonials. No inflated claims.",
    proofText: "CraftVanta is building its public portfolio carefully. Genuine client stories and verified outcomes will be added as they become available.",
    ctaEy: "START A PROJECT",
    ctaTitle: "Got an idea?",
    ctaText: "Let's craft what's next.",
    ctaBn: "আপনার Idea, এবার Digital হোক।",
    contact: "Talk to CraftVanta",
    footer: "Digital Solutions. Crafted for Business.",
    footerLine: "Websites • Landing Pages • Branding • Digital Creatives",
    language: "Language"
  },
  bn: {
    nav: ["সার্ভিস", "প্রসেস", "কাজ", "নীতিমালা", "যোগাযোগ"],
    eyebrow: "DIGITAL SOLUTIONS. CRAFTED FOR BUSINESS.",
    hero: "আপনার Idea, এবার Digital হোক।",
    heroText: "CraftVanta ব্যবসার Idea-কে professional digital experience-এ রূপ দেয়—Websites, Landing Pages, Branding এবং Digital Creatives-এর মাধ্যমে।",
    servicesLine: "Websites • Landing Pages • Branding • Digital Creatives",
    processLine: "IDEA → DESIGN → BUILD → GROW",
    start: "Start a Project",
    work: "আমাদের কাজ দেখুন",
    whoEy: "WHO WE ARE",
    whoTitle: "আমরা Idea-কে digital experience-এ রূপ দিই।",
    whoText: "CraftVanta একটি founder-led digital solutions brand। আমাদের লক্ষ্য—ডিজাইন যেন শুধু সুন্দর না হয়; তা যেন পরিষ্কার, purposeful এবং বাস্তব business need-এর জন্য তৈরি হয়।",
    founder: "Founded by Tanmay Mukherjee · Founder, CraftVanta",
    serviceEy: "WHAT WE CRAFT",
    serviceTitle: "Business purpose-সহ digital work.",
    services: [
      ["01", "Websites", "বিশ্বাসযোগ্যতা তৈরি করে এবং visitor-কে পরবর্তী পদক্ষেপে নিয়ে যায় এমন professional website।"],
      ["02", "Landing Pages", "একটি পরিষ্কার business objective-কে কেন্দ্র করে তৈরি focused digital experience।"],
      ["03", "Branding", "Logo, visual identity এবং brand system—যাতে business সহজে চিনে রাখা যায়।"],
      ["04", "Digital Creatives", "Social creatives, banners, campaigns এবং promotional visuals—attention ও clarity-র জন্য।"]
    ],
    processEy: "OUR METHOD",
    processTitle: "IDEA → DESIGN → BUILD → GROW",
    process: [
      ["IDEA", "আপনি Idea নিয়ে আসুন।", "আমরা business, audience এবং objective বুঝি।"],
      ["DESIGN", "আমরা experience তৈরি করি।", "Strategy থেকে visual direction ও clear digital story তৈরি হয়।"],
      ["BUILD", "আমরা সেটিকে বাস্তব করি।", "Design হয়ে ওঠে responsive, working digital solution।"],
      ["GROW", "আমরা এগিয়ে যেতে সাহায্য করি।", "আপনার digital presence একটি evolving business asset হয়ে ওঠে।"]
    ],
    workEy: "SELECTED WORK",
    workTitle: "Real problems. Crafted solutions.",
    workText: "Websites, landing pages, brand systems এবং digital creative work-এর growing portfolio।",
    workCards: [
      ["BUSINESS WEBSITE", "Digital presence", "Business story-কে কেন্দ্র করে clean ও credible website architecture।"],
      ["LANDING PAGE", "Conversion experience", "একটি offer-কে পরিষ্কারভাবে communicate করার জন্য focused page।"],
      ["BRAND & CREATIVE", "Visual system", "Social, campaigns ও customer touchpoints-এর জন্য coherent visual direction।"]
    ],
    advancedEy: "CUSTOM DIGITAL SOLUTIONS",
    advancedTitle: "Business-এর আরও বেশি দরকার হলে।",
    advancedText: "Front-end-এর বাইরে প্রয়োজন হলে custom interfaces, automation workflows, AI-assisted experiences, data-driven systems এবং tailored digital operations তৈরি করা যায়।",
    principlesEy: "OUR PRINCIPLES",
    principlesTitle: "আমরা যেভাবে কাজ করি।",
    principles: [
      ["01", "Business Before Design", "প্রতিটি design decision-এর একটি purpose থাকা উচিত।"],
      ["02", "Clarity Before Complexity", "Simple experience বোঝা ও ব্যবহার করা সহজ।"],
      ["03", "Purpose Before Trends", "শুধু trend বলে আমরা তা ব্যবহার করি না।"],
      ["04", "Craft Before Compromise", "Brand-এর প্রতিটি detail গুরুত্বপূর্ণ।"],
      ["05", "Build for Tomorrow", "আজ useful এবং আগামীকাল evolve করার মতো digital work।"]
    ],
    proofEy: "TRUSTED THROUGH THE WORK",
    proofTitle: "কোনও invented testimonial নয়। কোনও inflated claim নয়।",
    proofText: "CraftVanta তার public portfolio ধীরে ও সততার সঙ্গে তৈরি করছে। Genuine client stories এবং verified outcomes পাওয়া গেলে যুক্ত করা হবে।",
    ctaEy: "START A PROJECT",
    ctaTitle: "Got an idea?",
    ctaText: "Let's craft what's next.",
    ctaBn: "আপনার Idea, এবার Digital হোক।",
    contact: "CraftVanta-এর সঙ্গে কথা বলুন",
    footer: "Digital Solutions. Crafted for Business.",
    footerLine: "Websites • Landing Pages • Branding • Digital Creatives",
    language: "ভাষা"
  },
  hi: {
    nav: ["Services", "Process", "Work", "Principles", "Contact"],
    eyebrow: "DIGITAL SOLUTIONS. CRAFTED FOR BUSINESS.",
    hero: "Your idea, now digital.",
    heroText: "CraftVanta helps businesses turn ideas into professional digital experiences through websites, landing pages, branding and digital creatives.",
    servicesLine: "Websites • Landing Pages • Branding • Digital Creatives",
    processLine: "IDEA → DESIGN → BUILD → GROW",
    start: "Start a Project",
    work: "Explore Our Work",
    whoEy: "WHO WE ARE",
    whoTitle: "We turn ideas into digital experiences.",
    whoText: "CraftVanta is a founder-led digital solutions brand focused on purposeful, clear and business-ready digital work.",
    founder: "Founded by Tanmay Mukherjee · Founder, CraftVanta",
    serviceEy: "WHAT WE CRAFT",
    serviceTitle: "Digital work with a business purpose.",
    services: [
      ["01", "Websites", "Professional websites that build credibility and communicate value."],
      ["02", "Landing Pages", "Focused digital experiences built around one clear objective."],
      ["03", "Branding", "Logos, visual identity and brand systems that make businesses recognisable."],
      ["04", "Digital Creatives", "Social creatives, banners, campaigns and promotional visuals."]
    ],
    processEy: "OUR METHOD",
    processTitle: "IDEA → DESIGN → BUILD → GROW",
    process: [
      ["IDEA", "You bring the idea.", "We understand the business, audience and objective."],
      ["DESIGN", "We shape the experience.", "Strategy becomes visual direction and structure."],
      ["BUILD", "We make it real.", "Design becomes a responsive working solution."],
      ["GROW", "We keep it moving.", "Your digital presence becomes a business asset."]
    ],
    workEy: "SELECTED WORK",
    workTitle: "Real problems. Crafted solutions.",
    workText: "A growing portfolio of websites, landing pages, brand systems and digital creative work.",
    workCards: [
      ["BUSINESS WEBSITE", "Digital presence", "Clean, credible website architecture built around a business story."],
      ["LANDING PAGE", "Conversion experience", "A focused page designed to communicate one offer with clarity."],
      ["BRAND & CREATIVE", "Visual system", "A coherent visual direction for social, campaigns and customer touchpoints."]
    ],
    advancedEy: "CUSTOM DIGITAL SOLUTIONS",
    advancedTitle: "When the business needs more.",
    advancedText: "Custom interfaces, automation workflows, AI-assisted experiences, data-driven systems and tailored digital operations can be added when required.",
    principlesEy: "OUR PRINCIPLES",
    principlesTitle: "How we work.",
    principles: [
      ["01", "Business Before Design", "Every design decision should have a purpose."],
      ["02", "Clarity Before Complexity", "Simple experiences are easier to understand and use."],
      ["03", "Purpose Before Trends", "We do not use a trend simply because it looks impressive."],
      ["04", "Craft Before Compromise", "Details matter when your brand is on the line."],
      ["05", "Build for Tomorrow", "Digital work should be useful today and ready to evolve tomorrow."]
    ],
    proofEy: "TRUSTED THROUGH THE WORK",
    proofTitle: "No invented testimonials. No inflated claims.",
    proofText: "Genuine client stories and verified outcomes will be added as they become available.",
    ctaEy: "START A PROJECT",
    ctaTitle: "Got an idea?",
    ctaText: "Let's craft what's next.",
    ctaBn: "আপনার Idea, এবার Digital হোক।",
    contact: "Talk to CraftVanta",
    footer: "Digital Solutions. Crafted for Business.",
    footerLine: "Websites • Landing Pages • Branding • Digital Creatives",
    language: "Language"
  }
} as const;

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  const startUrl = "https://wa.me/918001195515?text=Hello%20CraftVanta%2C%20I%20would%20like%20to%20discuss%20a%20project.";
  const mailUrl = "mailto:tanmay.mukherjee715@gmail.com?subject=CraftVanta%20Project%20Enquiry";

  return (
    <div className="min-h-screen bg-[#07101d] text-white font-sans antialiased selection:bg-gold-400 selection:text-[#07101d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07101d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#hero" className="flex items-center">
            <img
              src="/craftvanta-logo.png"
              alt="CraftVanta"
              className="h-16 w-auto max-w-[250px] object-contain"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["#services", t.nav[0]],
              ["#process", t.nav[1]],
              ["#work", t.nav[2]],
              ["#principles", t.nav[3]],
              ["#contact", t.nav[4]]
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-[11px] uppercase tracking-[0.18em] text-slate-200 transition hover:text-gold-300">{label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-xl border border-white/10 bg-white/5 p-1 sm:flex">
              {(["en", "bn", "hi"] as Lang[]).map((code) => (
                <button key={code} onClick={() => setLang(code)} className={`rounded-lg px-2.5 py-1 text-[10px] font-semibold transition ${lang === code ? "bg-gold-400 text-[#07101d]" : "text-slate-200 hover:text-gold-300"}`}>
                  {code === "bn" ? "বাং" : code.toUpperCase()}
                </button>
              ))}
            </div>
            <a href={startUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-xl bg-gold-400 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#07101d] transition hover:bg-gold-300 sm:inline-flex">
              <MessageCircle className="h-3.5 w-3.5" /> {t.start}
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl border border-white/10 bg-white/5 p-2.5 lg:hidden" aria-label="Open menu">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07101d] px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {[
                ["#services", t.nav[0]],
                ["#process", t.nav[1]],
                ["#work", t.nav[2]],
                ["#principles", t.nav[3]],
                ["#contact", t.nav[4]]
              ].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-1 text-xs uppercase tracking-widest text-slate-200">{label}</a>
              ))}
              <div className="flex gap-2 pt-2 sm:hidden">
                {(["en", "bn", "hi"] as Lang[]).map((code) => (
                  <button key={code} onClick={() => setLang(code)} className={`rounded-lg border border-white/10 px-3 py-1.5 text-[10px] ${lang === code ? "bg-gold-400 text-[#07101d]" : "text-slate-200"}`}>
                    {code === "bn" ? "বাংলা" : code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="relative flex min-h-[760px] items-center overflow-hidden border-b border-white/10 pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(209,165,60,0.14),transparent_30%),radial-gradient(circle_at_15%_75%,rgba(13,148,136,0.10),transparent_30%)]" />
          <div className="absolute right-[-12%] top-[18%] h-[520px] w-[520px] rounded-full border border-gold-400/10 bg-gold-400/[0.025] blur-sm" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-24 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-8">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-300" />
                <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-gold-300">{t.eyebrow}</span>
              </div>
              <h1 className="max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                {t.hero}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{t.heroText}</p>
              <div className="mt-8 text-sm font-semibold tracking-wide text-gold-300">{t.servicesLine}</div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={startUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-gold-400 px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#07101d] shadow-[0_12px_40px_rgba(209,165,60,0.18)] transition hover:bg-gold-300">
                  {t.start} <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#work" className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:border-gold-400/50 hover:text-gold-300">
                  {t.work} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <div className="h-px w-12 bg-gold-400" />
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-300">{t.processLine}</span>
              </div>
            </div>

            <div className="hidden lg:col-span-4 lg:flex lg:items-end">
              <div className="w-full rounded-[28px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-sm">
                <Globe2 className="mb-16 h-7 w-7 text-gold-300" />
                <div className="font-serif text-3xl leading-tight text-white">Digital presence should feel like your business—not a template.</div>
                <div className="mt-6 h-px w-full bg-white/10" />
                <div className="mt-5 text-xs leading-6 text-slate-300">Founder-led. Purposeful. Crafted around the work that matters.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="who" className="bg-slate-50 py-24 text-slate-950 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gold-700">{t.whoEy}</div>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{t.whoTitle}</h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base leading-8 text-slate-600">{t.whoText}</p>
                <p className="mt-5 text-sm font-semibold text-slate-900">{t.founder}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 pb-28 text-slate-950">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gold-700">{t.serviceEy}</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{t.serviceTitle}</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {t.services.map(([num, title, desc]) => (
                <article key={num} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-gold-300">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-gold-700">{num}</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-gold-600" />
                  </div>
                  <h3 className="mt-12 font-serif text-3xl">{title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#0a101d] py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gold-300">{t.processEy}</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">{t.processTitle}</h2>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {t.process.map(([label, title, desc]) => (
                <article key={label} className="bg-[#0b1624] p-7">
                  <div className="font-mono text-xs font-bold tracking-[0.22em] text-gold-300">{label}</div>
                  <h3 className="mt-10 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-slate-50 py-28 text-slate-950">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gold-700">{t.workEy}</div>
                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{t.workTitle}</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-600">{t.workText}</p>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {t.workCards.map(([tag, title, desc], i) => (
                <article key={tag} className="relative min-h-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-[#0a101d] p-7 text-white shadow-xl">
                  <div className={`absolute inset-0 opacity-80 ${i === 0 ? "bg-[radial-gradient(circle_at_70%_20%,rgba(209,165,60,0.28),transparent_35%)]" : i === 1 ? "bg-[radial-gradient(circle_at_25%_80%,rgba(13,148,136,0.24),transparent_38%)]" : "bg-[radial-gradient(circle_at_70%_70%,rgba(209,165,60,0.16),transparent_40%)]"}`} />
                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] text-gold-300">{tag}</div>
                      <h3 className="mt-16 font-serif text-3xl">{title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{desc}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300">
                      Studio work <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0a101d] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gold-300">{t.advancedEy}</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{t.advancedTitle}</h2>
            </div>
            <div className="lg:col-span-7 lg:pt-7">
              <p className="text-base leading-8 text-slate-300">{t.advancedText}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Custom Interfaces", "Automation", "AI-assisted Experiences", "Data Systems", "Digital Operations"].map((x) => (
                  <span key={x} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">{x}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="principles" className="bg-[#07101d] py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gold-300">{t.principlesEy}</div>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{t.principlesTitle}</h2>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.principles.map(([num, title, desc]) => (
                <article key={num} className="rounded-2xl border border-white/10 bg-white/[0.035] p-7">
                  <div className="font-mono text-xs font-bold tracking-widest text-gold-300">PRINCIPLE {num}</div>
                  <h3 className="mt-7 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
                </article>
              ))}
              <article className="rounded-2xl border border-gold-400/30 bg-gold-400/[0.07] p-7">
                <Sparkles className="h-6 w-6 text-gold-300" />
                <h3 className="mt-7 font-display text-xl font-semibold">{t.proofTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{t.proofText}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-50 py-28 text-slate-950">
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gold-700">{t.ctaEy}</div>
            <h2 className="mt-5 font-serif text-5xl sm:text-7xl">{t.ctaTitle}</h2>
            <p className="mt-4 text-2xl font-serif text-slate-600">{t.ctaText}</p>
            <p className="mt-5 text-lg font-semibold text-slate-900">{t.ctaBn}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={startUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-[#0a101d] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-gold-700">
                <MessageCircle className="h-4 w-4" /> {t.contact}
              </a>
              <a href={mailUrl} className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-900 transition hover:border-gold-500">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href="tel:+918001195515" className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-900 transition hover:border-gold-500">
                <Phone className="h-4 w-4" /> 8001195515
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050914] py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/craftvanta-logo.png" alt="CraftVanta" className="h-12 w-12 object-contain" />
              <span className="font-display font-semibold">CraftVanta</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">{t.footer}</p>
            <p className="mt-2 text-xs text-slate-500">{t.footerLine}</p>
          </div>
          <div className="text-left text-xs text-slate-400 lg:text-right">
            <p>Founder: Tanmay Mukherjee</p>
            <p className="mt-1">Durgapur, West Bengal, India</p>
            <p className="mt-1">© {new Date().getFullYear()} CraftVanta</p>
          </div>
        </div>
      </footer>

      <a href={startUrl} target="_blank" rel="noreferrer" aria-label="Chat with CraftVanta on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-[#07101d] shadow-[0_12px_35px_rgba(209,165,60,0.3)] transition hover:scale-105 hover:bg-gold-300">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
