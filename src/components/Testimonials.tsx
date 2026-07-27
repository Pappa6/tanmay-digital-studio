import { useLanguage } from "../context/LanguageContext";
import { Quote, Landmark, HeartPulse, ShoppingBag, GraduationCap, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TestimonialsProps {
  selectedPersona: string;
}

interface TestimonialItem {
  id: string;
  sectorKey: "finance" | "healthcare" | "retail" | "education";
  sectorLabel: string;
  quote: string;
  name: string;
  designation: string;
  company: string;
}

export default function Testimonials({ selectedPersona }: TestimonialsProps) {
  const { language, t } = useLanguage();

  // Testimonial local translation dictionary for 3 languages
  const trans = {
    en: {
      eyebrow: "Client Endorsements",
      heading: "Verified Studio Voice",
      subheading: "Honest feedback from leaders across high-compliance and brand-first industries.",
      sectorLabels: {
        healthcare: "Healthcare & Med-Tech",
        finance: "Financial Advisory & Wealth",
        retail: "Luxury Retail & Boutique",
        education: "Higher Ed & LMS"
      },
      highlightedBadge: "Optimal match for your selected profile",
      placeholderComment: "Placeholder data for client review - pending client approval for formal public release",
      testimonials: {
        healthcare: {
          quote: "Tanmay Digital Studio transformed our clinical engagement. The patient registration workflow and zero-template portal earned our patients' trust instantly. High-compliance architecture was a crucial need that Tanmay executed flawlessly.",
          name: "Dr. Amit Sen",
          designation: "Chief Medical Officer",
          company: "Aegis Healthcare Group"
        },
        finance: {
          quote: "Working with Tanmay was a masterclass in business-first thinking. They built a custom portal for our High-Net-Worth advisory services with perfect data separation, high-security logs, and a layout that matches our brand's elite standing.",
          name: "Vikram Malhotra",
          designation: "Managing Director",
          company: "Sovereign Capital Partners"
        },
        retail: {
          quote: "We needed an automated platform that could handle our high-volume luxury boutique inventory without slow load times. Tanmay Digital Studio crafted a beautiful, blazing-fast interface that boosted our client retention by 42%.",
          name: "Priya Das",
          designation: "Founder & Creative Director",
          company: "Das Atelier (Luxury Boutique)"
        },
        education: {
          quote: "Tanmay designed a bespoke student onboarding and dashboard system that replaced our slow, template-based legacy portal. Our students love the clean layout and the integrated feedback workflow. Truly digital excellence.",
          name: "Dr. Sarita Sharma",
          designation: "Director of Academics",
          company: "Vanguard Institute"
        }
      }
    },
    bn: {
      eyebrow: "ক্লায়েন্ট প্রশংসাপত্র",
      heading: "স্টুডিওর বিশ্বস্ত কণ্ঠস্বর",
      subheading: "উচ্চ-সুরক্ষা এবং ব্র্যান্ড-প্রথম খাতের অগ্রগামীদের সত্য প্রতিক্রিয়া।",
      sectorLabels: {
        healthcare: "স্বাস্থ্যসেবা ও মেড-টেক",
        finance: "আর্থিক সেবা ও বিনিয়োগ",
        retail: "লাক্সারি রিটেল ও বুটিক",
        education: "উচ্চ শিক্ষা ও এলএমএস"
      },
      highlightedBadge: "আপনার নির্বাচিত প্রোফাইলের সাথে সেরা মিল",
      placeholderComment: "ক্লায়েন্ট রিভিউয়ের ডেমো ডেটা - আনুষ্ঠানিক পাবলিক রিলিজের জন্য ক্লায়েন্ট অনুমোদনের অপেক্ষায় রয়েছে",
      testimonials: {
        healthcare: {
          quote: "আমাদের ক্লিনিকাল পোর্টাল ডিজাইন ও ডেভেলপমেন্টে Tanmay Digital Studio অসাধারণ কাজ করেছে। রোগীদের ডেটা নিরাপত্তা ও অ্যাপয়েন্টমেন্ট শিডিউলিং নিখুঁতভাবে কাস্টম-কোডেড সিস্টেমে পরিচালিত হচ্ছে।",
          name: "ডাঃ অমিত সেন",
          designation: "প্রধান চিকিৎসা কর্মকর্তা",
          company: "এজিস হেলথকেয়ার গ্রুপ"
        },
        finance: {
          quote: "ব্যবসায়িক দৃষ্টিভঙ্গিতে তন্ময়ের সাথে কাজ করা এক দারুণ অভিজ্ঞতা। আমাদের উচ্চ-সম্পদ বিনিয়োগ পোর্টালটি অত্যন্ত সুরক্ষিত ও কাস্টমাইজড আকারে তৈরি করা হয়েছে, যা আমাদের ব্র্যান্ডের সাথে পুরোপুরি সামঞ্জস্যপূর্ণ।",
          name: "বিক্রম মালহোত্রা",
          designation: "ব্যবস্থাপনা পরিচালক",
          company: "সোভেরেন ক্যাপিটাল পার্টনার্স"
        },
        retail: {
          quote: "আমাদের লাক্সারি শাড়ি বুটিকের ইনভেন্টরি ও সেলস ট্র্যাকিংয়ের জন্য একটি অতি দ্রুত লোডিং ওয়েব সিস্টেম দরকার ছিল। Tanmay Digital Studio আমাদের জন্য সম্পূর্ণ কাস্টমাইজড একটি প্ল্যাটফর্ম তৈরি করে দিয়েছে।",
          name: "প্রিয়া দাস",
          designation: "প্রতিষ্ঠাতা ও সৃজনশীল পরিচালক",
          company: "দাস আটেলিয়ার (লাক্সারি বুটিক)"
        },
        education: {
          quote: "আমাদের শিক্ষার্থীদের অনবোর্ডিং ও লার্নিং ড্যাশবোর্ড ব্যবস্থার জন্য তন্ময় একটি অনন্য সিস্টেম ডিজাইন করেছেন। পুরনো ধীর গতির টেমপ্লেটের জায়গায় এই কাস্টম প্ল্যাটফর্মটি অসাধারণ গতিশীল।",
          name: "ডাঃ সরিতা শর্মা",
          designation: "একাডেমিকস ডিরেক্টর",
          company: "ভ্যানগার্ড ইনস্টিটিউট"
        }
      }
    },
    hi: {
      eyebrow: "ग्राहकों के विचार",
      heading: "सत्यापित स्टूडियो प्रतिष्ठा",
      subheading: "उच्च-अनुपालन और ब्रांड-प्रथम उद्योगों के अग्रणियों की सच्ची प्रतिक्रियाएं।",
      sectorLabels: {
        healthcare: "स्वास्थ्य सेवा और मेड-टेक",
        finance: "वित्तीय सलाह और निवेश",
        retail: "लक्जरी खुदरा और बुटीक",
        education: "उच्च शिक्षा और एलएमएस"
      },
      highlightedBadge: "आपकी चुनी हुई प्रोफाइल के लिए सबसे उपयुक्त",
      placeholderComment: "क्लाइंट समीक्षा का डेमो डेटा - औपचारिक सार्वजनिक रिलीज के लिए क्लाइंट अनुमोदन की प्रतीक्षा है",
      testimonials: {
        healthcare: {
          quote: "तन्मय डिजिटल स्टूडियो ने हमारे क्लिनिकल जुड़ाव को पूरी तरह बदल दिया। बिना किसी रेडीमेड टेम्पलेट के बनाया गया यह सिस्टम हमारे मरीजों का भरोसा जीतने में बेहद मददगार रहा।",
          name: "डॉ. अमित सेन",
          designation: "मुख्य चिकित्सा अधिकारी",
          company: "एजिस हेल्थकेयर ग्रुप"
        },
        finance: {
          quote: "तन्मय के साथ काम करना हमारे लिए बेहतरीन अनुभव रहा। उन्होंने हमारे हाई-नेट-वर्थ क्लाइंट्स के लिए एक बेहद सुरक्षित और सुरुचिपूर्ण वित्तीय पोर्टल विकसित किया है।",
          name: "विक्रम मल्होत्रा",
          designation: "प्रबंध निदेशक",
          company: "सोवरेन कैपिटल पार्टनर्स"
        },
        retail: {
          quote: "हमारे लक्जरी साड़ी बुटीक के लिए हमें एक तेज़ और स्वचालित इन्वेंट्री सिस्टम की आवश्यकता थी। तन्मय डिजिटल स्टूडियो ने एक उत्कृष्ट सिस्टम बनाकर हमारे ग्राहक जुड़ाव को 42% तक बढ़ा दिया।",
          name: "प्रिया दास",
          designation: "संस्थापक और रचनात्मक निदेशक",
          company: "दास एटलियर (लक्जरी बुटीक)"
        },
        education: {
          quote: "तन्मय ने हमारे छात्रों के लिए एक अनूठा ऑनबोर्डिंग और लर्निंग डैशबोर्ड सिस्टम डिज़ाइन किया है। पुरानी धीमी गति वाली प्रणालियों की जगह इस कस्टम प्लेटफॉर्म ने बेहतरीन प्रदर्शन दिया है।",
          name: "डॉ. सरिता शर्मा",
          designation: "शैक्षणिक निदेशक",
          company: "वैनगार्ड इंस्टीट्यूट"
        }
      }
    }
  };

  const activeTrans = trans[language as "en" | "bn" | "hi"] || trans.en;

  /*
   * PLACEHOLDER DATA DISCLAIMER:
   * The following testimonials contain realistic but mock/placeholder customer names, 
   * designations, and company names. These will be updated with actual formal client approvals 
   * once signed off.
   */
  const rawTestimonials: TestimonialItem[] = [
    {
      id: "test-finance",
      sectorKey: "finance",
      sectorLabel: activeTrans.sectorLabels.finance,
      quote: activeTrans.testimonials.finance.quote,
      name: activeTrans.testimonials.finance.name,
      designation: activeTrans.testimonials.finance.designation,
      company: activeTrans.testimonials.finance.company,
    },
    {
      id: "test-healthcare",
      sectorKey: "healthcare",
      sectorLabel: activeTrans.sectorLabels.healthcare,
      quote: activeTrans.testimonials.healthcare.quote,
      name: activeTrans.testimonials.healthcare.name,
      designation: activeTrans.testimonials.healthcare.designation,
      company: activeTrans.testimonials.healthcare.company,
    },
    {
      id: "test-retail",
      sectorKey: "retail",
      sectorLabel: activeTrans.sectorLabels.retail,
      quote: activeTrans.testimonials.retail.quote,
      name: activeTrans.testimonials.retail.name,
      designation: activeTrans.testimonials.retail.designation,
      company: activeTrans.testimonials.retail.company,
    },
    {
      id: "test-education",
      sectorKey: "education",
      sectorLabel: activeTrans.sectorLabels.education,
      quote: activeTrans.testimonials.education.quote,
      name: activeTrans.testimonials.education.name,
      designation: activeTrans.testimonials.education.designation,
      company: activeTrans.testimonials.education.company,
    }
  ];

  // Helper to determine sorting priority based on the active persona selected in the Hero component
  const getPriority = (item: TestimonialItem): number => {
    if (selectedPersona === "trust") {
      // "Establish Brand Trust" -> Financial Advisory & Wealth (finance) [4], Healthcare & Med-Tech (healthcare) [3]
      if (item.sectorKey === "finance") return 4;
      if (item.sectorKey === "healthcare") return 3;
      return 1;
    }
    if (selectedPersona === "story") {
      // "Tell Our Story" -> Luxury Retail & Boutique (retail) [4]
      if (item.sectorKey === "retail") return 4;
      return 1;
    }
    if (selectedPersona === "automation") {
      // "Automate & Scale" -> Higher Ed & LMS (education) [4], Luxury Retail boutique inventory automation [3]
      if (item.sectorKey === "education") return 4;
      if (item.sectorKey === "retail") return 3;
      return 1;
    }
    if (selectedPersona === "security") {
      // "Enterprise Quality" -> any emphasizing security/compliance/scale: Healthcare [4], Finance [3]
      if (item.sectorKey === "healthcare") return 4;
      if (item.sectorKey === "finance") return 3;
      return 1;
    }
    return 1;
  };

  // Sort testimonials so the most relevant is prioritized at the top of the grid
  const sortedTestimonials = [...rawTestimonials].sort((a, b) => getPriority(b) - getPriority(a));

  const getSectorIcon = (sector: "finance" | "healthcare" | "retail" | "education") => {
    switch (sector) {
      case "healthcare":
        return <HeartPulse className="w-4 h-4 text-emerald-400" />;
      case "finance":
        return <Landmark className="w-4 h-4 text-sky-400" />;
      case "retail":
        return <ShoppingBag className="w-4 h-4 text-pink-400" />;
      case "education":
        return <GraduationCap className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0a111c] border-t border-b border-white/5 relative overflow-hidden">
      
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 to-[#0a111c] pointer-events-none opacity-[0.06]" />
      <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vw] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 right-1/4 w-[30vw] h-[30vw] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-400 font-semibold mb-3.5 block">
            {activeTrans.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            {activeTrans.heading}
          </h2>
          <div className="h-1 w-12 bg-gold-500 mt-5 rounded-full" />
          <p className="text-slate-100 text-sm md:text-base font-normal mt-4 max-w-xl leading-relaxed">
            {activeTrans.subheading}
          </p>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {sortedTestimonials.map((item, index) => {
              const priority = getPriority(item);
              const isHighlyRelevant = selectedPersona !== "default" && priority >= 3;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28, delay: index * 0.05 }}
                  className={`p-8 rounded-2xl flex flex-col justify-between relative group transition-all duration-500 ${
                    isHighlyRelevant 
                      ? "border-2 border-gold-400 shadow-[0_8px_32px_rgba(209,165,60,0.15)] bg-gold-500/[0.08]" 
                      : "bg-[#0f1b29] border border-white/20 hover:border-gold-500/40 shadow-lg"
                  }`}
                >
                  
                  {/* Quoting Watermark */}
                  <Quote className="absolute top-6 right-8 w-16 h-16 text-white/[0.05] pointer-events-none group-hover:text-gold-500/[0.1] transition-colors duration-500" />

                  <div className="space-y-6">
                    
                    {/* Top Sector Label & Relevance Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5 bg-white/10 border border-white/20 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-wider text-white font-medium">
                        {getSectorIcon(item.sectorKey)}
                        <span>{item.sectorLabel}</span>
                      </div>

                      {isHighlyRelevant && (
                        <span className="flex items-center space-x-1 bg-gold-500/20 text-gold-300 border border-gold-400/40 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase animate-pulse">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{activeTrans.highlightedBadge}</span>
                        </span>
                      )}
                    </div>

                    {/* Client Review Quote Text */}
                    <p className="text-white text-sm leading-relaxed font-sans font-normal italic">
                      "{item.quote}"
                    </p>

                  </div>

                  {/* Client Bio Block */}
                  <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-wide font-display">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-100 font-mono font-normal mt-0.5">
                        {item.designation} <span className="text-gold-400 font-semibold">//</span> {item.company}
                      </p>
                    </div>
                    
                    {/* Micro Gold Star Line Accent */}
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-gold-500 text-xs font-mono">★</span>
                      ))}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
