import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  Menu,
  MessageCircle,
  Phone,
  X,
  Sparkles,
  Layers3,
  Palette,
  MonitorSmartphone,
  Megaphone,
  Lightbulb,
  PenTool,
  Hammer,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

type Lang = "en" | "bn" | "hi";

const copy = {
  en: {
    nav: { work: "Work", services: "Services", process: "Process", about: "About", start: "Start a Project" },
    hero: {
      eyebrow: "DIGITAL SOLUTIONS • CRAFTED FOR BUSINESS",
      title: "Your idea,",
      title2: "now digital.",
      sub: "Websites, landing pages, branding and digital creatives built around the real needs of your business.",
      bn: "আপনার Idea, এবার Digital হোক।",
      cta: "Start a Project",
      explore: "Let’s Talk",
      founder: "Founder-led • Durgapur, West Bengal",
      visualTitle: "IDEA → DESIGN → BUILD → GROW",
      visualText: "A clear digital journey from business idea to a useful, credible online presence."
    },
    audience: {
      eyebrow: "BUILT FOR BUSINESS OWNERS",
      title: "You have the business.",
      title2: "We help shape its digital presence.",
      desc: "CraftVanta is designed for ambitious local businesses, growing SMEs, professionals and founders who want their business to look clear, credible and ready for what comes next.",
      cards: [
        ["01", "Need a professional website", "Turn your business information into a digital presence people can trust."],
        ["02", "Need a focused landing page", "Create one clear digital experience around one important business objective."],
        ["03", "Need a stronger brand", "Bring logo, identity and communication into one recognisable system."],
        ["04", "Need better digital creatives", "Create campaign-ready visuals for social media, promotions and everyday business communication."]
      ]
    },
    services: {
      eyebrow: "WHAT WE CRAFT",
      title: "Simple services. Thoughtful execution.",
      desc: "The front door stays simple. Advanced digital capability sits behind it when your business needs more.",
      items: [
        ["Websites", "Professional websites that build credibility and make your business easier to discover.", "WEBSITE", "web"],
        ["Landing Pages", "Focused digital experiences designed around one clear action or business objective.", "LANDING", "landing"],
        ["Branding", "Logos, visual identity and brand systems that make your business recognisable.", "IDENTITY", "brand"],
        ["Digital Creatives", "Social posts, banners, campaigns and promotional visuals built for consistent communication.", "CREATIVE", "creative"]
      ]
    },
    work: {
      eyebrow: "SELECTED WORK",
      title: "Visual thinking. Business purpose.",
      desc: "A growing studio portfolio should show how ideas become useful digital experiences. Real client stories and verified outcomes will be added as they are available.",
      filters: ["ALL", "WEBSITES", "LANDING PAGES", "BRANDING", "DIGITAL CREATIVES"],
      items: [
        ["Business Website", "WEBSITE", "A clean, credibility-first digital presence for a growing business.", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"],
        ["Focused Landing Page", "LANDING PAGE", "A single-purpose experience designed around clarity and conversion.", "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85"],
        ["Brand & Creative System", "BRANDING", "A visual direction that keeps logo, message and campaign communication connected.", "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85"]
      ]
    },
    process: {
      eyebrow: "THE CRAFTVANTA METHOD",
      title: "IDEA → DESIGN → BUILD → GROW",
      desc: "A simple four-stage journey that keeps the business objective visible at every step.",
      items: [
        ["IDEA", "Understand the business behind the idea.", "You bring the idea. We clarify the need, audience and objective.", Lightbulb],
        ["DESIGN", "Turn strategy into visual direction.", "We shape the experience, identity and communication.", PenTool],
        ["BUILD", "Make the solution real.", "Design becomes a working digital experience.", Hammer],
        ["GROW", "Make it a business asset.", "We refine, maintain and extend the digital presence as needs evolve.", TrendingUp]
      ]
    },
    insight: {
      eyebrow: "BEYOND THE FRONT DOOR",
      title: "Need something more?",
      desc: "CraftVanta can also support custom digital solutions when a standard website or creative is not enough.",
      items: ["Custom digital interfaces", "AI-assisted experiences", "Business automation", "Data & reporting systems", "Digital operations"]
    },
    principles: {
      eyebrow: "OUR PRINCIPLES",
      title: "Business before decoration.",
      items: [
        ["01", "Business Before Design", "Every design decision should have a purpose."],
        ["02", "Clarity Before Complexity", "Simple experiences are easier to understand and use."],
        ["03", "Purpose Before Trends", "A trend is useful only when it serves the business."],
        ["04", "Craft Before Compromise", "Details matter when your brand is on the line."],
        ["05", "Build for Tomorrow", "Digital work should be useful today and ready to evolve."]
      ]
    },
    about: {
      eyebrow: "ABOUT CRAFTVANTA",
      title: "A founder-led digital solutions brand.",
      desc: "CraftVanta helps businesses turn ideas into professional, purposeful digital experiences. The approach combines strategy, design and technology without making technology the story.",
      founder: "Tanmay Mukherjee",
      role: "Founder, CraftVanta",
      location: "Durgapur, West Bengal, India"
    },
    cta: {
      eyebrow: "READY WHEN YOU ARE",
      title: "Got an idea?",
      title2: "Let's craft what's next.",
      bn: "আপনার Idea, এবার Digital হোক।",
      button: "Start a Project",
      whatsapp: "Let’s Talk",
      call: "Call / WhatsApp"
    },
    footer: {
      descriptor: "Digital Solutions. Crafted for Business.",
      services: "Websites • Landing Pages • Branding • Digital Creatives",
      process: "IDEA → DESIGN → BUILD → GROW",
      founder: "Founder: Tanmay Mukherjee",
      location: "Durgapur, West Bengal, India"
    }
  },
  bn: {
    nav: { work: "কাজ", services: "সার্ভিস", process: "প্রক্রিয়া", about: "আমাদের কথা", start: "Project শুরু করুন" },
    hero: {
      eyebrow: "DIGITAL SOLUTIONS • CRAFTED FOR BUSINESS",
      title: "আপনার Idea,",
      title2: "এবার Digital হোক।",
      sub: "আপনার business-এর বাস্তব প্রয়োজনকে কেন্দ্র করে Websites, Landing Pages, Branding এবং Digital Creatives।",
      bn: "আপনার Idea, এবার Digital হোক।",
      cta: "Project শুরু করুন",
      explore: "Let’s Talk",
      founder: "Founder-led • Durgapur, West Bengal",
      visualTitle: "IDEA → DESIGN → BUILD → GROW",
      visualText: "Business idea থেকে একটি পরিষ্কার, বিশ্বাসযোগ্য digital presence-এর যাত্রা।"
    },
    audience: {
      eyebrow: "BUSINESS OWNER-দের জন্য",
      title: "আপনার business আছে।",
      title2: "আমরা তার digital presence গড়তে সাহায্য করি।",
      desc: "Ambitious local businesses, growing SMEs, professionals এবং founders-দের জন্য CraftVanta—যারা চান তাঁদের business online-এ পরিষ্কার, বিশ্বাসযোগ্য এবং future-ready দেখাক।",
      cards: [
        ["01", "Professional website দরকার", "Business information-কে এমন digital presence-এ রূপ দিন, যেটি মানুষ বিশ্বাস করতে পারে।"],
        ["02", "Focused landing page দরকার", "একটি গুরুত্বপূর্ণ business objective-এর জন্য একটি পরিষ্কার digital experience তৈরি করুন।"],
        ["03", "Brand আরও শক্তিশালী করা দরকার", "Logo, identity এবং communication-কে একটি recognisable system-এ আনুন।"],
        ["04", "Better digital creatives দরকার", "Social media, promotions এবং everyday business communication-এর জন্য consistent visual তৈরি করুন।"]
      ]
    },
    services: {
      eyebrow: "WHAT WE CRAFT",
      title: "সহজ service. চিন্তাশীল execution.",
      desc: "সামনের দরজা সহজ থাকবে। Business-এর প্রয়োজনে advanced digital capability থাকবে তার পিছনে।",
      items: [
        ["Websites", "Professional website যা credibility তৈরি করে এবং business-কে online-এ সহজে খুঁজে পেতে সাহায্য করে।", "WEBSITE", "web"],
        ["Landing Pages", "একটি clear action বা business objective-কে কেন্দ্র করে focused digital experience।", "LANDING", "landing"],
        ["Branding", "Logo, visual identity এবং brand system—যা business-কে recognisable করে।", "IDENTITY", "brand"],
        ["Digital Creatives", "Social posts, banners, campaigns এবং promotional visuals—consistent communication-এর জন্য।", "CREATIVE", "creative"]
      ]
    },
    work: {
      eyebrow: "SELECTED WORK",
      title: "Visual thinking. Business purpose.",
      desc: "Studio portfolio-তে idea কীভাবে useful digital experience-এ পরিণত হয় সেটাই দেখানো হবে। Genuine client stories এবং verified outcomes পাওয়া গেলে যোগ করা হবে।",
      filters: ["সব", "WEBSITES", "LANDING PAGES", "BRANDING", "DIGITAL CREATIVES"],
      items: [
        ["Business Website", "WEBSITE", "Growing business-এর জন্য clean, credibility-first digital presence।", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"],
        ["Focused Landing Page", "LANDING PAGE", "Clarity এবং conversion-কে কেন্দ্র করে একটি focused experience।", "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85"],
        ["Brand & Creative System", "BRANDING", "Logo, message এবং campaign communication-কে connected রাখার visual direction।", "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85"]
      ]
    },
    process: {
      eyebrow: "THE CRAFTVANTA METHOD",
      title: "IDEA → DESIGN → BUILD → GROW",
      desc: "চারটি সহজ stage—যেখানে প্রতিটি ধাপে business objective সামনে থাকে।",
      items: [
        ["IDEA", "Idea-র পিছনের business-কে বুঝি।", "আপনার idea থেকে need, audience এবং objective পরিষ্কার করি।", Lightbulb],
        ["DESIGN", "Strategy-কে visual direction-এ আনি।", "Experience, identity এবং communication-এর shape তৈরি করি।", PenTool],
        ["BUILD", "Solution-কে বাস্তব করি।", "Design একটি working digital experience-এ পরিণত হয়।", Hammer],
        ["GROW", "Digital presence-কে business asset করি।", "প্রয়োজন বদলালে refine, maintain এবং extend করি।", TrendingUp]
      ]
    },
    insight: {
      eyebrow: "BEYOND THE FRONT DOOR",
      title: "আরও কিছু দরকার?",
      desc: "Standard website বা creative যথেষ্ট না হলে CraftVanta custom digital solutions-এও সাহায্য করতে পারে।",
      items: ["Custom digital interfaces", "AI-assisted experiences", "Business automation", "Data & reporting systems", "Digital operations"]
    },
    principles: {
      eyebrow: "OUR PRINCIPLES",
      title: "Decoration-এর আগে business.",
      items: [
        ["01", "Business Before Design", "প্রতিটি design decision-এর একটি উদ্দেশ্য থাকা উচিত।"],
        ["02", "Clarity Before Complexity", "Simple experience বোঝা এবং ব্যবহার করা সহজ।"],
        ["03", "Purpose Before Trends", "Trend তখনই দরকার যখন তা business-এর কাজে লাগে।"],
        ["04", "Craft Before Compromise", "আপনার brand যখন সামনে থাকে, তখন detail গুরুত্বপূর্ণ।"],
        ["05", "Build for Tomorrow", "আজ useful এবং আগামী দিনের জন্য ready—এমন digital work।"]
      ]
    },
    about: {
      eyebrow: "ABOUT CRAFTVANTA",
      title: "একটি founder-led digital solutions brand.",
      desc: "CraftVanta business-এর idea-কে professional, purposeful digital experience-এ রূপ দিতে সাহায্য করে। Strategy, design এবং technology একসঙ্গে কাজ করে—technology-কে গল্প বানানো হয় না।",
      founder: "তন্ময় মুখার্জী",
      role: "Founder, CraftVanta",
      location: "Durgapur, West Bengal, India"
    },
    cta: {
      eyebrow: "READY WHEN YOU ARE",
      title: "কোনও Idea আছে?",
      title2: "চলুন, পরেরটা craft করি।",
      bn: "আপনার Idea, এবার Digital হোক।",
      button: "Project শুরু করুন",
      whatsapp: "Let’s Talk",
      call: "Call / WhatsApp"
    },
    footer: {
      descriptor: "Digital Solutions. Crafted for Business.",
      services: "Websites • Landing Pages • Branding • Digital Creatives",
      process: "IDEA → DESIGN → BUILD → GROW",
      founder: "Founder: তন্ময় মুখার্জী",
      location: "Durgapur, West Bengal, India"
    }
  },
  hi: {
    nav: { work: "Work", services: "Services", process: "Process", about: "About", start: "Project शुरू करें" },
    hero: {
      eyebrow: "DIGITAL SOLUTIONS • CRAFTED FOR BUSINESS",
      title: "आपका Idea,",
      title2: "अब Digital हो।",
      sub: "आपके business की वास्तविक जरूरतों के अनुसार Websites, Landing Pages, Branding और Digital Creatives।",
      bn: "आपका Idea, अब Digital हो।",
      cta: "Project शुरू करें",
      explore: "Let’s Talk",
      founder: "Founder-led • Durgapur, West Bengal",
      visualTitle: "IDEA → DESIGN → BUILD → GROW",
      visualText: "Business idea से एक स्पष्ट और भरोसेमंद digital presence तक का सफर।"
    },
    audience: {
      eyebrow: "BUSINESS OWNERS के लिए",
      title: "आपका business है।",
      title2: "हम उसकी digital presence को shape करने में मदद करते हैं।",
      desc: "Ambitious local businesses, growing SMEs, professionals और founders के लिए CraftVanta—ताकि उनका business online साफ, भरोसेमंद और future-ready दिखे।",
      cards: [
        ["01", "Professional website चाहिए", "Business information को ऐसी digital presence में बदलें जिस पर लोग भरोसा कर सकें।"],
        ["02", "Focused landing page चाहिए", "एक महत्वपूर्ण business objective के लिए एक clear digital experience बनाएं।"],
        ["03", "Brand को मजबूत करना है", "Logo, identity और communication को एक recognisable system में लाएं।"],
        ["04", "Better digital creatives चाहिए", "Social media, promotions और daily business communication के लिए consistent visuals बनाएं।"]
      ]
    },
    services: {
      eyebrow: "WHAT WE CRAFT",
      title: "Simple services. Thoughtful execution.",
      desc: "Front door simple रहेगा। Business को जरूरत होने पर advanced digital capability पीछे उपलब्ध रहेगी।",
      items: [
        ["Websites", "Professional websites जो credibility बनाते हैं और business को online discoverable बनाते हैं।", "WEBSITE", "web"],
        ["Landing Pages", "एक clear action या business objective के लिए focused digital experience।", "LANDING", "landing"],
        ["Branding", "Logo, visual identity और brand systems जो business को recognisable बनाते हैं।", "IDENTITY", "brand"],
        ["Digital Creatives", "Social posts, banners, campaigns और promotional visuals के लिए consistent communication।", "CREATIVE", "creative"]
      ]
    },
    work: {
      eyebrow: "SELECTED WORK",
      title: "Visual thinking. Business purpose.",
      desc: "Portfolio में दिखेगा कि ideas useful digital experiences कैसे बनते हैं। Genuine client stories और verified outcomes उपलब्ध होने पर जोड़े जाएंगे।",
      filters: ["ALL", "WEBSITES", "LANDING PAGES", "BRANDING", "DIGITAL CREATIVES"],
      items: [
        ["Business Website", "WEBSITE", "Growing business के लिए clean, credibility-first digital presence।", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"],
        ["Focused Landing Page", "LANDING PAGE", "Clarity और conversion पर आधारित focused experience।", "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85"],
        ["Brand & Creative System", "BRANDING", "Logo, message और campaign communication को connected रखने की visual direction।", "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85"]
      ]
    },
    process: {
      eyebrow: "THE CRAFTVANTA METHOD",
      title: "IDEA → DESIGN → BUILD → GROW",
      desc: "चार simple stages—जहाँ हर कदम पर business objective सामने रहता है।",
      items: [
        ["IDEA", "Idea के पीछे के business को समझना।", "Need, audience और objective को स्पष्ट करना।", Lightbulb],
        ["DESIGN", "Strategy को visual direction में बदलना।", "Experience, identity और communication को shape करना।", PenTool],
        ["BUILD", "Solution को real बनाना।", "Design को working digital experience में बदलना।", Hammer],
        ["GROW", "Digital presence को business asset बनाना।", "Needs बदलने पर refine, maintain और extend करना।", TrendingUp]
      ]
    },
    insight: {
      eyebrow: "BEYOND THE FRONT DOOR",
      title: "कुछ और चाहिए?",
      desc: "जब standard website या creative पर्याप्त न हो, CraftVanta custom digital solutions में भी मदद कर सकता है।",
      items: ["Custom digital interfaces", "AI-assisted experiences", "Business automation", "Data & reporting systems", "Digital operations"]
    },
    principles: {
      eyebrow: "OUR PRINCIPLES",
      title: "Decoration से पहले business.",
      items: [
        ["01", "Business Before Design", "हर design decision का एक उद्देश्य होना चाहिए।"],
        ["02", "Clarity Before Complexity", "Simple experiences समझने और इस्तेमाल करने में आसान होते हैं।"],
        ["03", "Purpose Before Trends", "Trend तभी उपयोगी है जब वह business की मदद करे।"],
        ["04", "Craft Before Compromise", "जब आपका brand सामने हो, तो details मायने रखती हैं।"],
        ["05", "Build for Tomorrow", "आज useful और कल के लिए ready digital work।"]
      ]
    },
    about: {
      eyebrow: "ABOUT CRAFTVANTA",
      title: "एक founder-led digital solutions brand.",
      desc: "CraftVanta businesses को ideas से professional, purposeful digital experiences तक ले जाने में मदद करता है। Strategy, design और technology साथ काम करते हैं—technology कहानी नहीं बनती।",
      founder: "तन्मय मुखर्जी",
      role: "Founder, CraftVanta",
      location: "Durgapur, West Bengal, India"
    },
    cta: {
      eyebrow: "READY WHEN YOU ARE",
      title: "कोई Idea है?",
      title2: "आइए, अगला कदम craft करें।",
      bn: "आपका Idea, अब Digital हो।",
      button: "Project शुरू करें",
      whatsapp: "WhatsApp",
      call: "Call"
    },
    footer: {
      descriptor: "Digital Solutions. Crafted for Business.",
      services: "Websites • Landing Pages • Branding • Digital Creatives",
      process: "IDEA → DESIGN → BUILD → GROW",
      founder: "Founder: तन्मय मुखर्जी",
      location: "Durgapur, West Bengal, India"
    }
  }
} as const;

const serviceIcons: Record<string, typeof MonitorSmartphone> = {
  web: MonitorSmartphone,
  landing: Layers3,
  brand: Palette,
  creative: Megaphone,
};

export default function App() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const lang = (language === "bn" || language === "hi" ? language : "en") as Lang;
  const t = copy[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveFilter(0);
  }, [lang]);

  const filteredWork = useMemo(() => {
    if (activeFilter === 0) return t.work.items;
    const target = t.work.filters[activeFilter];
    return t.work.items.filter((item) => item[1] === target || (activeFilter === 2 && item[1] === "LANDING PAGE") || (activeFilter === 3 && item[1] === "BRANDING"));
  }, [activeFilter, t]);

  const navTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const startProject = () => {
    window.open("https://wa.me/918001195515?text=Hello%20CraftVanta%2C%20I%27d%20like%20to%20discuss%20a%20project.", "_blank");
  };
  const talk = () => {
    window.open("https://wa.me/918001195515", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#07101d] text-white antialiased selection:bg-[#d7a84b] selection:text-[#07101d]">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#07101d]/90 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => navTo("hero")} className="flex items-center">
            <img src="/craftvanta-logo.png" alt="CraftVanta" className="h-[78px] w-[78px] sm:h-[92px] sm:w-[92px] object-contain" />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {[["work", t.nav.work], ["services", t.nav.services], ["process", t.nav.process], ["about", t.nav.about]].map(([id, label]) => (
              <button key={id} onClick={() => navTo(id)} className="text-[11px] uppercase tracking-[0.2em] text-white/80 hover:text-[#e2b65d] transition-colors">{label}</button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-xl border border-white/15 bg-white/5 p-1">
              {(["en", "bn", "hi"] as Lang[]).map((code) => (
                <button key={code} onClick={() => setLanguage(code)} className={`min-w-9 rounded-lg px-2 py-1.5 text-[10px] font-bold transition ${lang === code ? "bg-[#d7a84b] text-[#07101d]" : "text-white/70 hover:text-white"}`}>
                  {code === "bn" ? "বাংলা" : code === "hi" ? "हिं" : "EN"}
                </button>
              ))}
            </div>
            <button onClick={startProject} className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#d7a84b] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#07101d] hover:bg-[#f0ca72] transition">
              {t.nav.start}<ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <button onClick={() => setMenuOpen((v) => !v)} className="lg:hidden rounded-xl border border-white/15 bg-white/5 p-2.5">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="lg:hidden mx-4 mt-3 rounded-2xl border border-white/10 bg-[#0b1625]/95 p-4 backdrop-blur-xl">
              <div className="grid gap-2">
                {[["work", t.nav.work], ["services", t.nav.services], ["process", t.nav.process], ["about", t.nav.about]].map(([id, label]) => (
                  <button key={id} onClick={() => navTo(id)} className="rounded-xl px-4 py-3 text-left text-sm text-white/85 hover:bg-white/5">{label}</button>
                ))}
                <div className="flex items-center gap-2 border-t border-white/10 pt-3">
                  {(["en", "bn", "hi"] as Lang[]).map((code) => (
                    <button key={code} onClick={() => { setLanguage(code); setMenuOpen(false); }} className={`rounded-lg border px-3 py-2 text-xs ${lang === code ? "border-[#d7a84b] text-[#f0ca72]" : "border-white/10 text-white/70"}`}>
                      {code === "bn" ? "বাংলা" : code === "hi" ? "हिंदी" : "EN"}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="hero" className="relative min-h-[820px] overflow-hidden bg-[#07101d] pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(28,104,167,0.24),transparent_34%),radial-gradient(circle_at_20%_70%,rgba(215,168,75,0.08),transparent_30%)]" />
          <div className="absolute inset-0 opacity-25" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",backgroundSize:"72px 72px"}} />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-12">
            <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7a84b]/40 bg-[#d7a84b]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f0ca72]">
                <Sparkles className="h-3.5 w-3.5" /> {t.hero.eyebrow}
              </div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl [text-shadow:0_2px_0_rgba(255,255,255,.08),0_10px_28px_rgba(0,0,0,.35)]">
                {t.hero.title}<br />
                <span className="text-[#e2b65d] [text-shadow:0_2px_0_rgba(255,255,255,.16),0_8px_22px_rgba(215,168,75,.22)]">{t.hero.title2}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{t.hero.sub}</p>
              <p className="mt-4 text-lg font-medium text-white">{t.hero.bn}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={startProject} className="inline-flex items-center gap-2 rounded-xl bg-[#d7a84b] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#07101d] hover:bg-[#f0ca72] transition">{t.hero.cta}<ArrowUpRight className="h-4 w-4" /></button>
                <button onClick={talk} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-white/10 transition"><MessageCircle className="h-4 w-4 text-emerald-400" />{t.hero.explore}</button>
              </div>
              <p className="mt-7 text-[10px] uppercase tracking-[0.18em] text-white/45">{t.hero.founder}</p>
            </motion.div>

            <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}} className="lg:col-span-5">
              <div className="relative mx-auto max-w-[520px]">
                <div className="absolute -inset-6 rounded-[3rem] bg-[#d7a84b]/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0d1a2b] shadow-2xl">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85" alt="Modern digital workspace" className="h-full w-full object-cover opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101d] via-[#07101d]/20 to-transparent" />
                  </div>
                  <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-white/15 bg-[#07101d]/85 p-5 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#e2b65d]">{t.hero.visualTitle}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{t.hero.visualText}</p>
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {["01","02","03","04"].map((n,i)=><div key={n} className="rounded-lg border border-white/10 bg-white/5 py-2 text-center text-[9px] font-mono text-white/55">{n}</div>)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="audience" className="bg-[#f7f5ef] py-24 text-[#111827]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a77a21]">{t.audience.eyebrow}</span>
                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{t.audience.title}<br/><span className="text-[#a77a21]">{t.audience.title2}</span></h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">{t.audience.desc}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {t.audience.cards.map(([num,title,desc])=>(
                  <motion.div whileHover={{y:-4}} key={num} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#a77a21]">{num}</span>
                    <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f7f5ef] pb-24 text-[#111827]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-12 border-t border-slate-200 pt-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a77a21]">{t.services.eyebrow}</span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{t.services.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">{t.services.desc}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {t.services.items.map(([title,desc,tag,key],i)=>{
                const Icon=serviceIcons[key];
                return <motion.div whileHover={{y:-6}} key={title} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d7a84b]/10 blur-3xl" />
                  <div className="relative flex items-start justify-between">
                    <div className="rounded-2xl bg-[#07101d] p-3 text-[#e2b65d]"><Icon className="h-5 w-5"/></div>
                    <span className="text-[9px] font-mono tracking-[0.2em] text-slate-400">{tag}</span>
                  </div>
                  <h3 className="relative mt-12 font-serif text-3xl">{title}</h3>
                  <p className="relative mt-3 max-w-md text-sm leading-6 text-slate-500">{desc}</p>
                  <div className="relative mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a77a21]">Explore <ArrowUpRight className="h-3.5 w-3.5"/></div>
                </motion.div>
              })}
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#0a1320] py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2b65d]">{t.work.eyebrow}</span>
                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{t.work.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/55">{t.work.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.work.filters.map((f,i)=><button key={f} onClick={()=>setActiveFilter(i)} className={`rounded-xl border px-3 py-2 text-[9px] font-bold tracking-wider transition ${activeFilter===i ? "border-[#d7a84b] bg-[#d7a84b] text-[#07101d]" : "border-white/10 bg-white/5 text-white/55 hover:text-white"}`}>{f}</button>)}
              </div>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {filteredWork.map(([title,category,desc,img],i)=><motion.article layout initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} key={title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1a2b]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={img} alt={title} className="h-full w-full object-cover opacity-85 transition duration-700 hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101d] via-transparent to-transparent"/>
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07101d]/75 px-3 py-1.5 text-[9px] font-bold tracking-widest text-[#f0ca72] backdrop-blur">{category} • STUDIO CONCEPT</span>
                  <span className="absolute bottom-5 left-5 text-4xl font-serif text-white/20">0{i+1}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#e2b65d]">Concept direction <ArrowUpRight className="h-3.5 w-3.5"/></div>
                </div>
              </motion.article>)}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#07101d] py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2b65d]">{t.process.eyebrow}</span>
              <h2 className="mt-4 font-serif text-4xl sm:text-6xl">{t.process.title}</h2>
              <p className="mt-5 text-sm leading-7 text-white/55">{t.process.desc}</p>
            </div>
            <div className="mt-14 grid gap-4 lg:grid-cols-4">
              {t.process.items.map(([num,title,desc,Icon])=><motion.div whileHover={{y:-5}} key={num} className="rounded-[2rem] border border-white/10 bg-[#0c1827] p-6">
                <div className="flex items-center justify-between"><span className="text-[10px] font-mono text-[#e2b65d]">{num}</span><Icon className="h-5 w-5 text-[#e2b65d]"/></div>
                <h3 className="mt-10 font-serif text-2xl">{title}</h3>
                <p className="mt-2 text-sm font-medium text-white/80">{desc}</p>
              </motion.div>)}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm font-mono text-white/45">
              {["IDEA","DESIGN","BUILD","GROW"].map((x,i)=><span key={x} className="flex items-center gap-3"><span className="rounded-full border border-[#d7a84b]/30 px-4 py-2 text-[#e2b65d]">{x}</span>{i<3&&<span>→</span>}</span>)}
            </div>
          </div>
        </section>

        <section className="bg-[#0a1320] py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
              <div className="lg:col-span-5 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#13263a] to-[#0a1320] p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2b65d]">{t.insight.eyebrow}</span>
                <h2 className="mt-4 font-serif text-4xl">{t.insight.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/55">{t.insight.desc}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
                {t.insight.items.map((item)=><div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"><Check className="h-4 w-4 shrink-0 text-[#e2b65d]"/><span className="text-sm text-white/75">{item}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f5ef] py-24 text-[#111827]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5"><span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a77a21]">{t.principles.eyebrow}</span><h2 className="mt-4 font-serif text-4xl sm:text-5xl">{t.principles.title}</h2></div>
              <div className="space-y-3 lg:col-span-7">
                {t.principles.items.map(([n,title,desc])=><div key={n} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#d7a84b]/60"><div className="flex gap-5"><span className="font-mono text-[10px] text-[#a77a21]">{n}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-slate-500">{desc}</p></div></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#07101d] py-24 text-white">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2b65d]">{t.about.eyebrow}</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-6xl">{t.about.title}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/55">{t.about.desc}</p>
            <div className="mx-auto mt-10 inline-flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d7a84b]/40 bg-[#d7a84b]/10 text-[#e2b65d]"><Globe2 className="h-6 w-6"/></div>
              <p className="mt-4 font-serif text-2xl">{t.about.founder}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#e2b65d]">{t.about.role}</p>
              <p className="mt-2 text-xs text-white/40">{t.about.location}</p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#d7a84b] py-24 text-[#07101d]">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl"/>
          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]">{t.cta.eyebrow}</span>
            <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-7xl">{t.cta.title}<br/><span className="text-white">{t.cta.title2}</span></h2>
            <p className="mt-5 text-lg font-medium">{t.cta.bn}</p>
            <button onClick={startProject} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#07101d] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-[#13263a] transition">{t.cta.button}<ArrowUpRight className="h-4 w-4"/></button>
            <div className="mt-7 flex flex-col items-center gap-3">
              <div className="flex justify-center gap-3">
                <a href="https://wa.me/918001195515" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#07101d]/20 bg-white/20 px-4 py-2 text-xs font-semibold"><MessageCircle className="h-4 w-4 text-emerald-600"/>{t.cta.whatsapp}</a>
                <a href="tel:+918001195515" className="inline-flex items-center gap-2 rounded-xl border border-[#07101d]/20 bg-white/20 px-4 py-2 text-xs font-semibold"><Phone className="h-4 w-4"/>{t.cta.call}</a>
              </div>
              <a href="tel:+918001195515" className="text-sm font-semibold tracking-[0.12em] text-[#07101d]">Call / WhatsApp&nbsp;&nbsp; 8001195515</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#050b14] px-5 py-12 pb-28 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div><img src="/craftvanta-logo.png" alt="CraftVanta" className="h-24 w-24 object-contain"/><p className="mt-4 text-sm font-medium">{t.footer.descriptor}</p></div>
          <div><p className="text-[10px] uppercase tracking-[0.2em] text-[#e2b65d]">Services</p><p className="mt-3 text-sm leading-6 text-white/50">{t.footer.services}</p></div>
          <div><p className="text-[10px] uppercase tracking-[0.2em] text-[#e2b65d]">Method</p><p className="mt-3 text-sm text-white/50">{t.footer.process}</p></div>
          <div><p className="text-[10px] uppercase tracking-[0.2em] text-[#e2b65d]">Founder</p><p className="mt-3 text-sm text-white/50">{t.footer.founder}<br/>{t.footer.location}</p></div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/30">© {new Date().getFullYear()} CraftVanta. Digital Solutions. Crafted for Business.</div>
      </footer>

      <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-2xl border border-white/10 bg-[#07101d]/90 p-1.5 shadow-2xl backdrop-blur-xl">
        <a href="https://wa.me/918001195515" target="_blank" rel="noreferrer" className="rounded-xl p-3 text-white/70 hover:bg-white/10 hover:text-[#e2b65d]"><MessageCircle className="h-4 w-4"/></a>
        <a href="tel:+918001195515" className="rounded-xl p-3 text-white/70 hover:bg-white/10 hover:text-[#e2b65d]"><Phone className="h-4 w-4"/></a>
        <button onClick={startProject} className="rounded-xl bg-[#d7a84b] px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#07101d]">{t.nav.start}</button>
      </div>
    </div>
  );
}
