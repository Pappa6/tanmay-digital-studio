export type Language = "en" | "bn" | "hi";

export interface TranslationSchema {
  header: {
    caseStudies: string;
    principles: string;
    process: string;
    sectors: string;
    bookConsultation: string;
  };
  hero: {
    eyebrow: string;
    defaultHeadline: string;
    defaultDescription: string;
    defaultAccent: string;
    defaultCta: string;
    interactivePathway: string;
    interactiveTitle: string;
    interactiveDesc: string;
    returnUniversal: string;
    descendWork: string;
    pills: {
      trust: string;
      story: string;
      automation: string;
      security: string;
    };
    labels: {
      trust: string;
      story: string;
      automation: string;
      security: string;
    };
    headlines: {
      trust: string;
      story: string;
      automation: string;
      security: string;
    };
    descriptions: {
      trust: string;
      story: string;
      automation: string;
      security: string;
    };
    accents: {
      trust: string;
      story: string;
      automation: string;
      security: string;
    };
  };
  caseStudies: {
    eyebrow: string;
    heading: string;
    allEngagements: string;
    webIdentity: string;
    dataAutomation: string;
    customizedViewActive: string;
    showingHighlighted: string;
    in: string;
    learnMoreCta: string;
    items: {
      healthcare: {
        category: string;
        challenge: string;
        solution: string;
        outcome: string;
        metrics: string;
      };
      automation: {
        category: string;
        challenge: string;
        solution: string;
        outcome: string;
        metrics: string;
      };
      finance: {
        category: string;
        challenge: string;
        solution: string;
        outcome: string;
        metrics: string;
      };
    };
  };
  principles: {
    eyebrow: string;
    heading: string;
    description: string;
    principleLabel: string;
    items: {
      p1: { title: string; description: string };
      p2: { title: string; description: string };
      p3: { title: string; description: string };
      p4: { title: string; description: string };
      p5: { title: string; description: string };
    };
    ctaBox: {
      title: string;
      desc: string;
      link: string;
    };
  };
  process: {
    eyebrow: string;
    heading: string;
    description: string;
    whyStructureCounts: string;
    structureDesc: string;
    keyDeliverables: string;
    scopingCta: string;
    standards: {
      s1: { label: string; value: string };
      s2: { label: string; value: string };
      s3: { label: string; value: string };
      s4: { label: string; value: string };
    };
    stages: {
      understand: {
        title: string;
        description: string;
        bullets: string[];
      };
      plan: {
        title: string;
        description: string;
        bullets: string[];
      };
      design: {
        title: string;
        description: string;
        bullets: string[];
      };
      build: {
        title: string;
        description: string;
        bullets: string[];
      };
      launch: {
        title: string;
        description: string;
        bullets: string[];
      };
      grow: {
        title: string;
        description: string;
        bullets: string[];
      };
    };
  };
  sectors: {
    eyebrow: string;
    heading: string;
    description: string;
    zeroTemplates: string;
    bespoke: string;
    complianceBox: {
      title: string;
      desc: string;
      cta: string;
    };
    items: {
      healthcare: { name: string; description: string };
      education: { name: string; description: string };
      finance: { name: string; description: string };
      retail: { name: string; description: string };
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    desc: string;
    cardTitle: string;
    cardDesc: string;
    ctaButton: string;
    whatsapp: string;
    callNow: string;
  };
  footer: {
    studioDesc: string;
    channels: string;
    chatPortal: string;
    commitmentTitle: string;
    commitmentDesc: string;
    copyright: string;
    craftedWith: string;
    performance: string;
  };
  modal: {
    title: string;
    subtitle: string;
    pickDate: string;
    pickTime: string;
    projectDetails: string;
    fullName: string;
    fullNamePlaceholder: string;
    emailAddress: string;
    emailPlaceholder: string;
    primaryObjective: string;
    projectNotes: string;
    projectNotesPlaceholder: string;
    cancel: string;
    submitEmail: string;
    submitWhatsApp: string;
    thankYouTitle: string;
    thankYouText: string;
    alertMessage: string;
  };
  toast: {
    detected: string;
    switchButton: string;
    dismiss: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    header: {
      caseStudies: "Case Studies",
      principles: "Principles",
      process: "Our Process",
      sectors: "Sectors",
      bookConsultation: "Book Consultation"
    },
    hero: {
      eyebrow: "Business Identity & Digital Growth Partner",
      defaultHeadline: "I partner with growing businesses to engineer digital identities built on genuine trust and uncompromised craft.",
      defaultDescription: "As your independent digital partner, I combine custom React engineering, strategic brand architecture, and intelligent operational automations to help your business scale. No middle-men, no bloated templates—just direct collaboration, meticulous code, and a shared dedication to your long-term commercial performance.",
      defaultAccent: "Crafted for longevity. Sculpted for commercial performance.",
      defaultCta: "Book Strategic Slot",
      interactivePathway: "Interactive Pathway",
      interactiveTitle: "Tell me what matters to you",
      interactiveDesc: "Select a perspective to customize the presentation of my work.",
      returnUniversal: "← Return to universal perspective",
      descendWork: "Descend Into the Work",
      pills: {
        trust: "Establish Brand Trust",
        story: "Tell Our Story",
        automation: "Automate & Scale",
        security: "Enterprise Quality"
      },
      labels: {
        trust: "📈 Growth & Trust",
        story: "🌊 Authentic Identity",
        automation: "🤖 AI & Intelligence",
        security: "🛡️ Solid Infrastructure"
      },
      headlines: {
        trust: "I build what people actually trust — not what looks good on a pitch.",
        story: "Behind every business is a story worth understanding first.",
        automation: "Smart systems liberate human creativity.",
        security: "Unyielding security meets highly responsive interfaces."
      },
      descriptions: {
        trust: "In a world of shallow templates and empty promises, real authority is built through meticulous details. I partner with growth-focused businesses to turn digital interactions into long-term commercial trust.",
        story: "Your digital presence should feel like a natural extension of your company's core values. We skip generic stock images and boilerplate slogans to craft a bespoke, highly refined brand narrative.",
        automation: "Integrating intelligent, AI-assisted workflows and secure cloud solutions directly into your custom workspace. Stop losing hours to manual tasks and let technology work for your bottom line.",
        security: "Delivering custom-coded, performant React & Node architectures built for scale. No bloated third-party plugins, no security vulnerabilities—just speed, safety, and pristine technical execution."
      },
      accents: {
        trust: "Trust is the ultimate commercial multiplier.",
        story: "A masterfully told story cannot be replicated.",
        automation: "Custom automations built specifically for your operations.",
        security: "Enterprise-grade stability for modern digital platforms."
      }
    },
    caseStudies: {
      eyebrow: "Bespoke Engagements",
      heading: "Proven results, delivered without compromise.",
      allEngagements: "All Engagements",
      webIdentity: "Web & Identity",
      dataAutomation: "Data & Automation",
      customizedViewActive: "Customized View Active",
      showingHighlighted: "Showing case studies highlighted for your interest in",
      in: "in",
      learnMoreCta: "Request Strategic Architecture Analysis",
      items: {
        healthcare: {
          category: "Healthcare • Editorial Architecture",
          challenge: "Fragmented online presence with low patient trust, outdated visuals, and complex, unclear medical service pathways that caused high appointment drop-off.",
          solution: "Engineered an editorial-grade website architecture centered on clarity. Created a transparent, searchable service catalogue, clean practitioner profile cards, and an integrated, lightweight appointment scheduling flow.",
          outcome: "Patient inquiries grew significantly within the first quarter. Overall patient trust increased, and the time-to-appointment dropped to a fraction of its previous duration across three physical locations.",
          metrics: "Patient enquiries up meaningfully; time-to-appointment reduced"
        },
        automation: {
          category: "Excel & Operations Automation",
          challenge: "Finance and operations teams spent dozens of hours manually copying and consolidating multi-source spreadsheets, leading to late reports and frequent data errors.",
          solution: "Engineered a custom automated script and data model pipeline. Constructed tailored dashboards that automatically ingest complex data models and turn hours of manual spreadsheet reporting into immediate visual dashboards.",
          outcome: "Eliminated operational overhead and manual report building. The company obtained real-time visual oversight on key metrics, freeing up talent to focus on actual strategy instead of data manipulation.",
          metrics: "98% reduction in report latency; 100% data accuracy verified"
        },
        finance: {
          category: "Finance & Wealth Advisory",
          challenge: "An elite asset manager required a secure, digital portal to convey absolute trust, manage client relationships discreetly, and display portfolio summaries elegantly.",
          solution: "Designed a premium, high-security client experience built with speed-optimized code. Integrated clean, custom D3 data charts, a hardened secure document transfer module, and tailored layouts matching high-end print design.",
          outcome: "Solidified investor confidence, establishing a premium reputation. Created a frictionless portal for client onboarding and quarterly reporting.",
          metrics: "+35% onboarding efficiency; zero security leaks"
        }
      }
    },
    principles: {
      eyebrow: "The Studio Standard",
      heading: "The principles behind every digital engagement.",
      description: "Five commitments that hold whether the work is a single high-conversion website or a multi-year technical advisory relationship.",
      principleLabel: "PRINCIPLE",
      items: {
        p1: {
          title: "Business Before Design",
          description: "Every visual detail, from margin dimensions to typography pairings, must serve a precise business objective. We reject design trends that don't directly convert attention into action."
        },
        p2: {
          title: "Business-First Thinking",
          description: "Strategy shapes every decision — technology is the instrument, never the objective. We spend hours deeply analyzing your user pathways before writing a single line of frontend code."
        },
        p3: {
          title: "Tailored Digital Solutions",
          description: "Strictly no bloated templates, pre-made themes, or slow pagebuilders. Every website, automation, and solution is custom-coded from scratch to run at peak performance."
        },
        p4: {
          title: "Long-Term Partnership",
          description: "We do not hand over files and vanish. We remain involved post-launch, fine-tuning analytics, integrating features, and keeping your infrastructure fast, secure, and modern."
        },
        p5: {
          title: "Trust is Verified with Metrics",
          description: "Confidence is maintained through absolute transparency. We integrate precise telemetry, track active conversion funnels, and construct clean dashboards so you see exactly what works."
        }
      },
      ctaBox: {
        title: "Have a unique standard of your own?",
        desc: "We custom-build workflows around specific corporate philosophies or sector-specific constraints. Let's design a collaboration that respects your rules.",
        link: "Explore custom terms"
      }
    },
    process: {
      eyebrow: "Our Delivery Engine",
      heading: "A calm, structured path from idea to commercial outcome.",
      description: "Every engagement follows six deliberate stages — designed to keep you completely informed, in absolute control, and fully confident at every single step.",
      whyStructureCounts: "Why structure counts.",
      structureDesc: "Creative work without rigorous engineering structures leads to late delivery and fragile architectures. We build for predictability and durability.",
      keyDeliverables: "Key Deliverables:",
      scopingCta: "Request a Custom Scoping Session",
      standards: {
        s1: { label: "Bespoke Custom Codebase", value: "Standardized React/TS" },
        s2: { label: "Project Management Mode", value: "Asynchronous Slack/Notion" },
        s3: { label: "Delivery Performance Guarantee", value: "Lighthouse Score > 90" },
        s4: { label: "Data Architecture Protection", value: "Hardened API Proxies" }
      },
      stages: {
        understand: {
          title: "Understand",
          description: "Discover goals, commercial constraints, competitive landscapes, and precise end-user needs. We sit down to extract the unique value story of your business.",
          bullets: [
            "In-depth discovery session & target audience audit",
            "Defining key performance indicators (KPIs)",
            "Reviewing existing technical architecture and assets",
            "Documenting core functional constraints & requirements"
          ]
        },
        plan: {
          title: "Plan",
          description: "Scope, site architecture, page map, and digital strategy are thoroughly defined. We map out the user journeys so that every link has a purpose.",
          bullets: [
            "Detailed sitemap structure and page flowcharts",
            "Wireframing critical viewport layouts",
            "Selecting the optimum tech stack for security & speed",
            "Comprehensive milestone timeline and deliverable sign-off"
          ]
        },
        design: {
          title: "Design",
          description: "Bespoke user interfaces that embody your brand with absolute elegance. We iterate on high-fidelity designs until your unique identity is perfectly represented.",
          bullets: [
            "Bespoke typographical pairings and visual themes",
            "High-fidelity UI mockups & component libraries",
            "Micro-interaction & transition prototype modeling",
            "Interactive previews on real-size layouts"
          ]
        },
        build: {
          title: "Build",
          description: "Hand-crafted, clean, and highly performant TypeScript code. We implement state-of-the-art architectures without relying on heavy plugins or slow page-builders.",
          bullets: [
            "Semantic, lightweight HTML5 & CSS structures",
            "Responsive, mobile-first React component building",
            "Strictly type-safe API, Database, and State integrations",
            "Comprehensive cross-device rendering & latency audits"
          ]
        },
        launch: {
          title: "Launch",
          description: "Meticulous checklist execution, technical testing, speed optimization, secure hosting configuration, and domain connection to go live flawlessly.",
          bullets: [
            "Rigorous form-validation & security threat audits",
            "Lighthouse performance, SEO, and accessibility tuning",
            "Cloud Run, Vercel, or custom server setups",
            "Domain routing, DNS tuning, and automated backups"
          ]
        },
        grow: {
          title: "Grow",
          description: "Continuous optimization, modern conversion tracking, intelligent analytics tracking, and scaling modules as your company conquers new milestones.",
          bullets: [
            "Live heatmaps and detailed user-session reviews",
            "Conversion rate optimization (CRO) A/B testing",
            "Scheduled visual & technical performance tune-ups",
            "Feature expansion planning & modular scaling"
          ]
        }
      }
    },
    sectors: {
      eyebrow: "Sector Coverage",
      heading: "Trusted across sectors.",
      description: "Serving organisations of every size — with the same commitment to absolute quality, visual precision, and data confidentiality.",
      zeroTemplates: "0% TEMPLATES",
      bespoke: "BESPOKE",
      complianceBox: {
        title: "Need sector-specific compliance?",
        desc: "We adhere to rigorous technical privacy guidelines, security models, and code validation standards.",
        cta: "Review Security Protocols"
      },
      items: {
        healthcare: {
          name: "Healthcare",
          description: "Medical associations, hospital systems, and clinics looking to foster clinical trust and clarify care pathways."
        },
        education: {
          name: "Education",
          description: "Digital learning academies, custom LMS setups, and specialized school portals centered on student engagement."
        },
        finance: {
          name: "Finance & Wealth",
          description: "Asset managers, advisory firms, and fintech companies that demand absolute data protection and professional visual polish."
        },
        retail: {
          name: "Premium Retail",
          description: "Direct-to-consumer flagship brands and localized retail chains building an editorial digital shopping experience."
        }
      }
    },
    contact: {
      eyebrow: "Ready to elevate?",
      title: "Let's create a digital identity built on trust.",
      desc: "Schedule an asynchronous video evaluation or standard Zoom call. Let's audit your objectives and map out a premium, custom-coded roadmap.",
      cardTitle: "Book a 30-Min Strategic Alignment",
      cardDesc: "Secure your slot in my digital calendar. Skip manual follow-ups and instantly reserve a direct video connection.",
      ctaButton: "Initialize Scheduler",
      whatsapp: "WhatsApp",
      callNow: "Call Now"
    },
    footer: {
      studioDesc: "An international boutique consultancy building high-converting digital identity, custom business automations, and trustworthy brand architectures. No templates. Pure custom craft.",
      channels: "Communication Channels",
      chatPortal: "Direct Chat Portal",
      commitmentTitle: "Commitment to Quality",
      commitmentDesc: "This digital asset is fully hand-coded without bloated third-party page builders or heavy dependencies. Built for absolute speed, responsive scaling, and maximum accessibility.",
      copyright: "CraftVanta. All rights reserved. Built with uncompromised precision.",
      craftedWith: "Crafted with",
      performance: "for international performance."
    },
    modal: {
      title: "Reserve Your Consultation",
      subtitle: "Let's explore how custom engineering and strategic brand architecture can elevate your commercial performance.",
      pickDate: "1. Pick a Date",
      pickTime: "2. Select Time (Your Local Time)",
      projectDetails: "3. Project Details",
      fullName: "Full Name",
      fullNamePlaceholder: "e.g. John Doe",
      emailAddress: "Email Address",
      emailPlaceholder: "e.g. john@company.com",
      primaryObjective: "Primary Objective",
      projectNotes: "Project Notes & Objectives",
      projectNotesPlaceholder: "Briefly describe your current digital bottleneck, operations process, or brand objectives...",
      cancel: "Cancel",
      submitEmail: "Confirm & Initialize via Email",
      submitWhatsApp: "Direct Connection via WhatsApp",
      thankYouTitle: "Consultation Request Initialized",
      thankYouText: "Thank you for reaching out. A calendar hold has been reserved. To complete your booking, please select one of the following secure channels to instantly send your details:",
      alertMessage: "Please fill in your name, email, and pick a convenient time slot."
    },
    toast: {
      detected: "We detected your browser language is",
      switchButton: "Switch",
      dismiss: "Dismiss"
    }
  },
  bn: {
    header: {
      caseStudies: "কেস স্টাডিজ",
      principles: "আদর্শসমূহ",
      process: "আমাদের কার্যপ্রণালী",
      sectors: "ক্ষেত্রসমূহ",
      bookConsultation: "পরামর্শ বুক করুন"
    },
    hero: {
      eyebrow: "Business Identity & Digital Growth Partner",
      defaultHeadline: "ডিজিটাল পরিচিতি এবং প্রবৃদ্ধির জন্য আমি গড়ে তুলি অকৃত্রিম বিশ্বাস ও আপসহীন দক্ষতার এক অনন্য মেলবন্ধন।",
      defaultDescription: "আপনার স্বাধীন ডিজিটাল পার্টনার হিসেবে, আমি কাস্টম React ইঞ্জিনিয়ারিং, কৌশলগত ব্র্যান্ড আর্কিটেকচার এবং ইন্টেলিজেন্ট অপারেশনাল অটোমেশনের সমন্বয় করি আপনার ব্যবসাকে বড় করতে। কোনো মধ্যস্বত্বভোগী নেই, কোনো ভারী টেমপ্লেট নেই—শুধুমাত্র সরাসরি অংশীদারিত্ব, সূক্ষ্ম কোড এবং আপনার দীর্ঘমেয়াদী ব্যবসায়িক প্রবৃদ্ধির জন্য একনিষ্ঠ প্রচেষ্টা।",
      defaultAccent: "দীর্ঘস্থায়িত্বের জন্য তৈরি। বাণিজ্যিক সাফল্যের জন্য নিবেদিত।",
      defaultCta: "শিডিউলার বুক করুন",
      interactivePathway: "কাস্টমাইজড পথ",
      interactiveTitle: "আপনার প্রধান লক্ষ্যটি বেছে নিন",
      interactiveDesc: "আমার কাজগুলো আপনার কাঙ্ক্ষিত দৃষ্টিকোণ থেকে দেখতে যেকোনো একটি অপশন বেছে নিন।",
      returnUniversal: "← সাধারণ দৃষ্টিকোণে ফিরে যান",
      descendWork: "কাজে প্রবেশ করুন",
      pills: {
        trust: "ব্র্যান্ডের প্রতি বিশ্বাস বৃদ্ধি",
        story: "আপনার গল্প বলুন",
        automation: "অটোমেশন ও স্কেল",
        security: "এন্টারপ্রাইজ মান"
      },
      labels: {
        trust: "📈 Growth & Trust",
        story: "🌊 Authentic Identity",
        automation: "🤖 AI & Intelligence",
        security: "🛡️ Solid Infrastructure"
      },
      headlines: {
        trust: "আমি তা-ই তৈরি করি যা মানুষ সত্যি বিশ্বাস করে — শুধু পিচ ডেকে যা চমৎকার দেখায় তা নয়।",
        story: "প্রতিটি ব্যবসার নেপথ্যে রয়েছে এমন এক গল্প যা সবার আগে বোঝা প্রয়োজন।",
        automation: "বুদ্ধিমান প্রযুক্তি মানুষের সৃজনশীলতাকে দেয় নতুন স্বাধীনতা।",
        security: "দৃঢ় নিরাপত্তা ও অতি গতিশীল ইন্টারফেসের নিখুঁত সহাবস্থান।"
      },
      descriptions: {
        trust: "সস্তা টেমপ্লেট আর ফাঁপা প্রতিশ্রুতির এই যুগে, আসল কর্তৃত্ব গড়ে ওঠে প্রতিটি খুঁটিনাটি বিষয়ের নিখুঁত রূপায়ণে। আমি প্রবৃদ্ধি-মুখী ব্যবসার সাথে যুক্ত হয়ে ডিজিটাল যোগাযোগকে দীর্ঘমেয়াদী ব্যবসায়িক বিশ্বাসে রূপান্তর করি।",
        story: "আপনার ডিজিটাল উপস্থিতি যেন আপনার কোম্পানির মূল আদর্শের একটি স্বাভাবিক প্রতিফলন হয়। আমরা সাধারণ স্টক ইমেজ এবং গৎবাঁধা স্লোগান বাদ দিয়ে আপনার ব্র্যান্ডের এক পরিশীলিত ও কাস্টম গল্প তৈরি করি।",
        automation: "আপনার কাস্টম ওয়ার্কস্পেসে সরাসরি যুক্ত করা হয় বুদ্ধিমান ও এআই-সহায়ক কাজের ধারা এবং নিরাপদ ক্লাউড সমাধান। ম্যানুয়াল কাজে ঘণ্টার পর ঘণ্টা নষ্ট না করে প্রযুক্তিকে আপনার ব্যবসার লাভের চাবিকাঠি হতে দিন।",
        security: "স্কেলিংয়ের জন্য কাস্টম-কোডেড ও উচ্চ ক্ষমতাসম্পন্ন React এবং Node আর্কিটেকচার প্রদান করছি। কোনো ভারী থার্ড-পার্টি প্লাগইন নেই, কোনো নিরাপত্তার ঝুঁকি নেই—শুধু গতি, নিরাপত্তা এবং নিখুঁত টেকনিক্যাল বাস্তবায়ন।"
      },
      accents: {
        trust: "বিশ্বাস হলো ব্যবসার চূড়ান্ত গুণক।",
        story: "দক্ষতার সাথে বলা একটি গল্প কখনো নকল করা যায় না।",
        automation: "আপনার ব্যবসার প্রয়োজন অনুযায়ী তৈরি কাস্টম অটোমেশন।",
        security: "আধুনিক ডিজিটাল প্ল্যাটফর্মের জন্য এন্টারপ্রাইজ-গ্রেড স্থায়িত্ব।"
      }
    },
    caseStudies: {
      eyebrow: "Bespoke Engagements",
      heading: "আপসহীনভাবে বিতরণকৃত প্রমাণিত ফলাফল।",
      allEngagements: "সকল কাজ",
      webIdentity: "ওয়েব ও পরিচিতি",
      dataAutomation: "ডেটা ও অটোমেশন",
      customizedViewActive: "কাস্টমাইজড ভিউ সক্রিয়",
      showingHighlighted: "আপনার পছন্দের বিষয়ের ওপর ভিত্তি করে কেস স্টাডি দেখানো হচ্ছে:",
      in: "এর মধ্যে",
      learnMoreCta: "কৌশলগত আর্কিটেকচার বিশ্লেষণ অনুরোধ করুন",
      items: {
        healthcare: {
          category: "Healthcare • Editorial Architecture",
          challenge: "কম রোগীর বিশ্বাস, পুরানো ভিজ্যুয়াল এবং জটিল, অস্পষ্ট চিকিৎসা পরিষেবা যা অ্যাপয়েন্টমেন্ট বাতিল করে দিচ্ছিল।",
          solution: "স্পষ্টতার ওপর ভিত্তি করে একটি সম্পাদকীয়-গ্রেডের ওয়েবসাইট আর্কিটেকচার তৈরি করা হয়েছে। একটি স্বচ্ছ, অনুসন্ধানযোগ্য পরিষেবা ক্যাটালগ এবং অ্যাপয়েন্টমেন্ট নির্ধারণের কাজ সহজ করা হয়েছে।",
          outcome: "প্রথম প্রান্তিকে রোগীর অনুসন্ধান উল্লেখযোগ্যভাবে বৃদ্ধি পেয়েছে। সামগ্রিক রোগীর বিশ্বাস বেড়েছে এবং অ্যাপয়েন্টমেন্টের সময় অনেক হ্রাস পেয়েছে।",
          metrics: "রোগীর অনুসন্ধান অর্থপূর্ণভাবে বৃদ্ধি; অ্যাপয়েন্টমেন্টের সময় হ্রাস"
        },
        automation: {
          category: "Excel & Operations Automation",
          challenge: "অর্থ ও ক্রিয়াকলাপের দলগুলো স্প্রেডশিট ম্যানুয়ালি কপি এবং একীভূত করতে ডজন ডজন ঘন্টা ব্যয় করছিল, যার ফলে রিপোর্ট প্রকাশে দেরি এবং ডেটাতে ভুল হতো।",
          solution: "একটি কাস্টম অটোমেটেড স্ক্রিপ্ট এবং ডেটা পাইপলাইন তৈরি করা হয়েছে। তৈরি করা হয়েছে বিশেষ ড্যাশবোর্ড যা জটিল ডেটা মডেল গ্রহণ করে ম্যানুয়াল রিপোর্টকে তাৎক্ষণিক ভিজ্যুয়াল ড্যাশবোর্ডে রূপান্তরিত করে।",
          outcome: "অপারেশনাল ওভারহেড এবং ম্যানুয়াল রিপোর্ট তৈরির ঝামেলা দূর করা হয়েছে। কোম্পানিটি মূল মেট্রিক্সের রিয়েল-টাইম ভিজ্যুয়াল ওভারসাইট পেয়েছে, ফলে কর্মীরা ডেটা ম্যানিপুলেশনের বদলে আসল কৌশলে মনোনিবেশ করতে পারছে।",
          metrics: "রিপোর্ট প্রকাশে ৯৮% সময় হ্রাস; ১০০% ডেটা নির্ভুলতা যাচাইকৃত"
        },
        finance: {
          category: "Finance & Wealth Advisory",
          challenge: "একজন অভিজাত সম্পদ পরিচালকের পরম বিশ্বাস প্রকাশ করতে, গ্রাহকদের সম্পর্ক গোপনে পরিচালনা করতে এবং পোর্টফোলিও সারাংশ সুন্দরভাবে প্রদর্শন করতে একটি নিরাপদ পোর্টালের প্রয়োজন ছিল।",
          solution: "গতি-অপ্টিমাইজড কোডের মাধ্যমে একটি প্রিমিয়াম, উচ্চ-নিরাপত্তাযুক্ত ক্লায়েন্ট অভিজ্ঞতা ডিজাইন করা হয়েছে। কাস্টম D3 ডেটা চার্ট, এবং অত্যন্ত নিরাপদ ডকুমেন্ট স্থানান্তর মডিউল সংহত করা হয়েছে।",
          outcome: "বিনিয়োগকারীদের আস্থা দৃঢ় হয়েছে, প্রিমিয়াম খ্যাতি তৈরি হয়েছে। ক্লায়েন্ট অনবোর্ডিং এবং ত্রৈমাসিক রিপোর্টিংয়ের জন্য একটি নিরবচ্ছিন্ন পোর্টাল তৈরি করা হয়েছে।",
          metrics: "+৩৫% অনবোর্ডিং দক্ষতা; শূন্য নিরাপত্তা লিক"
        }
      }
    },
    principles: {
      eyebrow: "The Studio Standard",
      heading: "প্রতিটি ডিজিটাল চুক্তির নেপথ্যের মূল আদর্শসমূহ।",
      description: "পাঁচটি প্রতিশ্রুতি যা অটুট থাকে, তা একটি একক উচ্চ-রূপান্তরকারী ওয়েবসাইট হোক বা বহু বছরের প্রযুক্তিগত উপদেষ্টা সম্পর্ক।",
      principleLabel: "আদর্শ",
      items: {
        p1: {
          title: "ডিজাইনের আগে ব্যবসা",
          description: "মার্জিনের মাত্রা থেকে শুরু করে টাইপোগ্রাফি পেয়ারিং পর্যন্ত প্রতিটি ভিজ্যুয়াল বিবরণ অবশ্যই একটি নির্দিষ্ট ব্যবসায়িক উদ্দেশ্য পূরণ করবে। আমরা এমন ডিজাইনের প্রবণতা প্রত্যাখ্যান করি যা মনোযোগকে সরাসরি পদক্ষেপে রূপান্তর করে না।"
        },
        p2: {
          title: "ব্যবসায়-প্রথম চিন্তা",
          description: "কৌশল প্রতিটি সিদ্ধান্তকে রূপ দেয় — প্রযুক্তি কেবল মাধ্যম, কখনই লক্ষ্য নয়। ফ্রন্টএন্ড কোডের একটি লাইন লেখার মধ্যেও আমরা ব্যবহারকারীর পথগুলো গভীরভাবে বিশ্লেষণ করতে কয়েক ঘন্টা ব্যয় করি।"
        },
        p3: {
          title: "কাস্টম ডিজিটাল সমাধান",
          description: "কোনো ভারী টেমপ্লেট, পূর্ব-তৈরি থিম বা ধীরগতির পেজ বিল্ডার সম্পূর্ণ নিষিদ্ধ। প্রতিটি ওয়েবসাইট, অটোমেশন এবং সমাধান শুরু থেকে কাস্টম-কোডেড করা হয়েছে যাতে তা সর্বোচ্চ গতিতে চলতে পারে।"
        },
        p4: {
          title: "দীর্ঘমেয়াদী অংশীদারিত্ব",
          description: "আমরা শুধু ফাইল হস্তান্তর করে অদৃশ্য হয়ে যাই না। আমরা লঞ্চের পরেও যুক্ত থাকি, অ্যানালিটিক্স সূক্ষ্মভাবে টিউন করি, নতুন বৈশিষ্ট্য যুক্ত করি এবং আপনার পরিকাঠামোকে দ্রুত, নিরাপদ ও আধুনিক রাখি।"
        },
        p5: {
          title: "মেট্রিক্সের মাধ্যমে বিশ্বাস যাচাই",
          description: "পরম স্বচ্ছতার মাধ্যমে আস্থা বজায় রাখা হয়। আমরা নিখুঁত টেলিমেট্রি সংহত করি, সক্রিয় রূপান্তর ফানেলগুলো ট্র্যাক করি এবং পরিষ্কার ড্যাশবোর্ড তৈরি করি যাতে আপনি ঠিক কী কাজ করছে তা দেখতে পান।"
        }
      },
      ctaBox: {
        title: "আপনার কি নিজস্ব কোনো অনন্য মানদণ্ড রয়েছে?",
        desc: "আমরা নির্দিষ্ট কর্পোরেট দর্শন বা সেক্টর-নির্দিষ্ট সীমাবদ্ধতার চারপাশে কাস্টম কাজের ধারা তৈরি করি। আসুন এমন একটি সহযোগিতা ডিজাইন করি যা আপনার নিয়মকে শ্রদ্ধা করে।",
        link: "কাস্টম শর্তাবলী অন্বেষণ করুন"
      }
    },
    process: {
      eyebrow: "Our Delivery Engine",
      heading: "পরিকল্পনা থেকে বাণিজ্যিক ফলাফলে পৌঁছানোর একটি শান্ত, সুগঠিত পথ।",
      description: "প্রতিটি সম্পৃক্ততা ছয়টি সুপরিকল্পিত পর্যায় অনুসরণ করে — যা প্রতিটি পদক্ষেপে আপনাকে সম্পূর্ণ অবহিত, পরম নিয়ন্ত্রণে এবং পুরোপুরি আত্মবিশ্বাসী রাখতে ডিজাইন করা হয়েছে।",
      whyStructureCounts: "গঠন কেন গুরুত্বপূর্ণ।",
      structureDesc: "কঠোর ইঞ্জিনিয়ারিং গঠন ছাড়া সৃজনশীল কাজ বিলম্বিত ডেলিভারি এবং দুর্বল আর্কিটেকচারের দিকে নিয়ে যায়। আমরা অনুমানযোগ্যতা এবং স্থায়িত্বের জন্য তৈরি করি।",
      keyDeliverables: "মূল ডেলিভারি সমূহ:",
      scopingCta: "একটি কাস্টম স্কোপিং সেশনের অনুরোধ করুন",
      standards: {
        s1: { label: "কাস্টম-কোডেড অনন্য কোডবেস", value: "Standardized React/TS" },
        s2: { label: "প্রজেক্ট ম্যানেজমেন্ট মোড", value: "Asynchronous Slack/Notion" },
        s3: { label: "ডেলিভারি পারফরম্যান্স গ্যারান্টি", value: "Lighthouse Score > ৯০" },
        s4: { label: "ডেটা আর্কিটেকচার সুরক্ষা", value: "Hardened API Proxies" }
      },
      stages: {
        understand: {
          title: "বোঝা",
          description: "লক্ষ্য, বাণিজ্যিক সীমাবদ্ধতা, প্রতিযোগিতামূলক ল্যান্ডস্কেপ এবং সুনির্দিষ্ট ব্যবহারকারীর চাহিদা আবিষ্কার করুন। আমরা আপনার ব্যবসার অনন্য মূল্যের গল্পটি বের করতে একসঙ্গে বসি।",
          bullets: [
            "গভীর আবিষ্কার সেশন এবং লক্ষ্য দর্শক অডিট",
            "মূল পারফরম্যান্স সূচক (KPIs) সংজ্ঞায়িত করা",
            "বিদ্যমান প্রযুক্তিগত আর্কিটেকচার এবং সম্পদ পর্যালোচনা",
            "মূল কার্যকরী সীমাবদ্ধতা এবং প্রয়োজনীয়তা নথিভুক্ত করা"
          ]
        },
        plan: {
          title: "পরিকল্পনা",
          description: "সুনির্দিষ্ট পরিধি, সাইটের আর্কিটেকচার, পেজ ম্যাপ এবং ডিজিটাল কৌশল সম্পূর্ণরূপে সংজ্ঞায়িত করা হয়। আমরা ব্যবহারকারীর যাত্রা ম্যাপ করি যাতে প্রতিটি লিঙ্কের একটি নির্দিষ্ট উদ্দেশ্য থাকে।",
          bullets: [
            "বিস্তারিত সাইটম্যাপ গঠন এবং পেজ ফ্লোচার্ট",
            "গুরুত্বপূর্ণ ভিউপোর্ট লেআউটের ওয়্যারফ্রেম তৈরি করা",
            "নিরাপত্তা ও গতির জন্য সর্বোত্তম প্রযুক্তি নির্বাচন",
            "ব্যাপক মাইলফলক টাইমলাইন এবং ডেলিভারি সাইন-অফ"
          ]
        },
        design: {
          title: "ডিজাইন",
          description: "অনন্য ইউজার ইন্টারফেস যা পরম কমনীয়তার সাথে আপনার ব্র্যান্ডকে মূর্ত করে। আমরা নিখুঁত হাই-ফিডেলিটি ডিজাইন তৈরি করি যতক্ষণ না আপনার পরিচয় নিখুঁত হয়।",
          bullets: [
            "অনন্য টাইপোগ্রাফি পেয়ারিং এবং ভিজ্যুয়াল থিম",
            "হাই-ফিডেলিটি UI মকআপ এবং উপাদান লাইব্রেরি",
            "মাইক্রো-ইন্টারঅ্যাকশন এবং ট্রানজিশন প্রোটোটাইপ মডেলিং",
            "বাস্তব আকারের লেআউটে ইন্টারেক্টিভ প্রিভিউ"
          ]
        },
        build: {
          title: "নির্মাণ",
          description: "হাতে তৈরি, পরিচ্ছন্ন এবং উচ্চ ক্ষমতাসম্পন্ন TypeScript কোড। আমরা ভারী প্লাগইন বা ধীরগতির পেজ-বিল্ডারের ওপর নির্ভর না করে অত্যাধুনিক আর্কিটেকচার বাস্তবায়ন করি।",
          bullets: [
            "অর্থপূর্ণ, হালকা ওজনের HTML5 এবং CSS কাঠামো",
            "প্রতিক্রিয়াশীল, মোবাইল-প্রথম React উপাদান তৈরি",
            "সম্পূর্ণ টাইপ-সেফ API, ডেটাবেস এবং স্টেট ইন্টিগ্রেশন",
            "ব্যাপক ক্রস-ডিভাইস রেন্ডারিং এবং লেটেন্সি অডিট"
          ]
        },
        launch: {
          title: "লঞ্চ",
          description: "নিখুঁত চেকলিস্ট সম্পাদন, প্রযুক্তিগত পরীক্ষা, গতি অপ্টিমাইজেশান, নিরাপদ হোস্টিং কনফিগারেশন এবং লাইভে যাওয়ার জন্য ডোমেন সংযোগ।",
          bullets: [
            "কঠোর ফর্ম-ভ্যালিডেশন এবং নিরাপত্তা হুমকি অডিট",
            "লাইটহাউস পারফরম্যান্স, এসইও এবং অ্যাক্সেসিবিলিটি টিউনিং",
            "Cloud Run, Vercel বা কাস্টম সার্ভার সেটআপ",
            "ডোমেন রাউটিং, ডিএনএস টিউনিং এবং স্বয়ংক্রিয় ব্যাকআপ"
          ]
        },
        grow: {
          title: "বৃদ্ধি",
          description: "ক্রমাগত অপ্টিমাইজেশান, রূপান্তর ট্র্যাকিং, বুদ্ধিমান অ্যানালিটিক্স ট্র্যাকিং এবং নতুন মাইলফলক অর্জনের সাথে মডিউল স্কেলিং।",
          bullets: [
            "লাইভ হিটম্যাপ এবং বিস্তারিত ব্যবহারকারী-সেশন পর্যালোচনা",
            "রূপান্তর হার অপ্টিমাইজেশান (CRO) A/B টেস্টিং",
            "নির্ধারিত ভিজ্যুয়াল এবং প্রযুক্তিগত কর্মক্ষমতা টিউন-আপ",
            "ফিচার সম্প্রসারণ পরিকল্পনা এবং মডুলার স্কেলিং"
          ]
        }
      }
    },
    sectors: {
      eyebrow: "Sector Coverage",
      heading: "বিভিন্ন সেক্টর জুড়ে বিশ্বস্ত।",
      description: "যেকোনো আকারের সংস্থাকে সেবা প্রদান — পরম গুণমান, ভিজ্যুয়াল নির্ভুলতা এবং ডেটা গোপনীয়তার প্রতি একই প্রতিশ্রুতি সহ।",
      zeroTemplates: "০% টেমপ্লেট",
      bespoke: "ইউনিক",
      complianceBox: {
        title: "সেক্টর-নির্দিষ্ট কমপ্লায়েন্স প্রয়োজন?",
        desc: "আমরা কঠোর প্রযুক্তিগত গোপনীয়তা নির্দেশিকা, নিরাপত্তা মডেল এবং কোড বৈধকরণ মান মেনে চলি।",
        cta: "নিরাপত্তা প্রোটোকল পর্যালোচনা"
      },
      items: {
        healthcare: {
          name: "স্বাস্থ্যসেবা",
          description: "চিকিৎসা সমিতি, হাসপাতাল ব্যবস্থা এবং ক্লিনিক যা চিকিৎসার বিশ্বাস বাড়াতে এবং সেবার পথ স্পষ্ট করতে চায়।"
        },
        education: {
          name: "শিক্ষা",
          description: "ডিজিটাল লার্নিং একাডেমি, কাস্টম এলএমএস সেটআপ এবং শিক্ষার্থীদের সম্পৃক্ততার ওপর দৃষ্টি নিবদ্ধ বিশেষ স্কুল পোর্টাল।"
        },
        finance: {
          name: "অর্থ ও সম্পদ",
          description: "সম্পদ ব্যবস্থাপক, উপদেষ্টা সংস্থা এবং ফিনটেক কোম্পানি যা পরম ডেটা সুরক্ষা এবং পেশাদার ভিজ্যুয়াল ফিনিশিং দাবি করে।"
        },
        retail: {
          name: "প্রিমিয়াম রিটেল",
          description: "ডাইরেক্ট-টু-কনজিউমার ফ্ল্যাগশিপ ব্র্যান্ড এবং স্থানীয় রিটেল চেইন যা সম্পাদকীয় ডিজিটাল কেনাকাটার অভিজ্ঞতা তৈরি করতে চায়।"
        }
      }
    },
    contact: {
      eyebrow: "উন্নতির জন্য প্রস্তুত?",
      title: "আসুন গড়ে তুলি বিশ্বাসের ওপর প্রতিষ্ঠিত একটি ডিজিটাল পরিচয়।",
      desc: "একটি অ্যাসিনক্রোনাস ভিডিও মূল্যায়ন বা সাধারণ জুম কল নির্ধারণ করুন। আসুন আপনার উদ্দেশ্যগুলো অডিট করি এবং একটি প্রিমিয়াম, কাস্টম-কোডেড রোডম্যাপ তৈরি করি।",
      cardTitle: "৩০ মিনিটের কৌশলগত সংযোগ বুক করুন",
      cardDesc: "আমার ডিজিটাল ক্যালেন্ডারে আপনার স্লটটি নিশ্চিত করুন। ম্যানুয়াল ফলো-আপ এড়ান এবং তাৎক্ষণিকভাবে সরাসরি ভিডিও সংযোগ সংরক্ষণ করুন।",
      ctaButton: "শিডিউলার চালু করুন",
      whatsapp: "WhatsApp",
      callNow: "Call Now"
    },
    footer: {
      studioDesc: "উচ্চ-রূপান্তরকারী ডিজিটাল পরিচিতি, কাস্টম ব্যবসায়িক অটোমেশন এবং বিশ্বস্ত ব্র্যান্ড আর্কিটেকচার তৈরির একটি আন্তর্জাতিক বুটিক কনসালটেন্সি। কোনো টেমপ্লেট নেই। সম্পূর্ণ কাস্টম কারিগরি।",
      channels: "যোগাযোগ মাধ্যম",
      chatPortal: "সরাসরি চ্যাট পোর্টাল",
      commitmentTitle: "গুণমানের প্রতি প্রতিশ্রুতি",
      commitmentDesc: "এই ডিজিটাল সম্পদটি কোনো ভারী থার্ড-পার্টি পেজ বিল্ডার বা ভারী নির্ভরতা ছাড়াই সম্পূর্ণরূপে হ্যান্ড-কোড করা হয়েছে। পরম গতি, প্রতিক্রিয়াশীল স্কেলিং এবং সর্বোচ্চ অ্যাক্সেসযোগ্যতার জন্য নির্মিত।",
      copyright: "CraftVanta. সর্বস্বত্ব সংরক্ষিত। আপসহীন নির্ভুলতার সাথে নির্মিত।",
      craftedWith: "যত্নে নির্মিত",
      performance: "আন্তর্জাতিক মানের জন্য।"
    },
    modal: {
      title: "আপনার পরামর্শ বুক করুন",
      subtitle: "আসুন অন্বেষণ করি কীভাবে কাস্টম ইঞ্জিনিয়ারিং এবং কৌশলগত ব্র্যান্ড আর্কিটেকচার আপনার বাণিজ্যিক কার্যক্ষমতা বাড়াতে পারে।",
      pickDate: "১. একটি তারিখ নির্বাচন করুন",
      pickTime: "২. সময় নির্বাচন করুন (আপনার স্থানীয় সময়)",
      projectDetails: "৩. প্রকল্পের বিবরণ",
      fullName: "সম্পূর্ণ নাম",
      fullNamePlaceholder: "যেমন: তানিম রহমান",
      emailAddress: "ইমেল ঠিকানা",
      emailPlaceholder: "যেমন: tanim@company.com",
      primaryObjective: "প্রাথমিক উদ্দেশ্য",
      projectNotes: "প্রকল্পের নোট এবং উদ্দেশ্যসমূহ",
      projectNotesPlaceholder: "আপনার বর্তমান ডিজিটাল সমস্যা, ক্রিয়াকলাপের প্রক্রিয়া বা ব্র্যান্ডের উদ্দেশ্যগুলো সংক্ষেপে বর্ণনা করুন...",
      cancel: "বাতিল",
      submitEmail: "নিশ্চিত করুন এবং ইমেলের মাধ্যমে শুরু করুন",
      submitWhatsApp: "সরাসরি হোয়াটসঅ্যাপে সংযোগ",
      thankYouTitle: "পরামর্শের অনুরোধ শুরু হয়েছে",
      thankYouText: "যোগাযোগ করার জন্য ধন্যবাদ। একটি ক্যালেন্ডার বুকিং সংরক্ষিত হয়েছে। আপনার বুকিং সম্পন্ন করতে, অনুগ্রহ করে তাত্ক্ষণিকভাবে আপনার বিবরণ পাঠাতে নিচের যেকোনো একটি সুরক্ষিত চ্যানেল নির্বাচন করুন:",
      alertMessage: "অনুগ্রহ করে আপনার নাম, ইমেল পূরণ করুন এবং একটি সুবিধাজনক সময় স্লট চয়ন করুন।"
    },
    toast: {
      detected: "আমরা শনাক্ত করেছি আপনার ব্রাউজার ভাষা হল",
      switchButton: "বদল করুন",
      dismiss: "বাতিল"
    }
  },
  hi: {
    header: {
      caseStudies: "केस स्टडीज",
      principles: "सिद्धांत",
      process: "हमारी प्रक्रिया",
      sectors: "क्षेत्र",
      bookConsultation: "परामर्श बुक करें"
    },
    hero: {
      eyebrow: "Business Identity & Digital Growth Partner",
      defaultHeadline: "मैं बढ़ते व्यवसायों के साथ जुड़कर वास्तविक विश्वास और अटूट शिल्प पर आधारित डिजिटल पहचान का निर्माण करता हूँ।",
      defaultDescription: "आपके स्वतंत्र डिजिटल पार्टनर के रूप में, मैं आपके व्यवसाय को बढ़ाने के लिए कस्टम React इंजीनियरिंग, रणनीतिक ब्रांड आर्किटेक्चर और इंटेलिजेंट ऑपरेशनल स्वचालन का समन्वय करता हूँ। कोई बिचौलिया नहीं, कोई भारी टेम्पलेट नहीं—केवल सीधा सहयोग, सूक्ष्म कोड और आपके दीर्घकालिक व्यावसायिक प्रदर्शन के लिए एक साझा समर्पण।",
      defaultAccent: "दीर्घायु के लिए निर्मित। व्यावसायिक प्रदर्शन के लिए तराशा गया।",
      defaultCta: "रणनीतिक स्लॉट बुक करें",
      interactivePathway: "इंटरैक्टिव मार्ग",
      interactiveTitle: "मुझे बताएं कि आपके लिए क्या मायने रखता है",
      interactiveDesc: "मेरे काम की प्रस्तुति को अनुकूलित करने के लिए एक दृष्टिकोण चुनें।",
      returnUniversal: "← सार्वभौमिक दृष्टिकोण पर लौटें",
      descendWork: "काम में उतरें",
      pills: {
        trust: "ब्रांड विश्वास स्थापित करें",
        story: "अपनी कहानी कहें",
        automation: "ऑटोमेशन और स्केल",
        security: "एंटरप्राइज गुणवत्ता"
      },
      labels: {
        trust: "📈 Growth & Trust",
        story: "🌊 Authentic Identity",
        automation: "🤖 AI & Intelligence",
        security: "🛡️ Solid Infrastructure"
      },
      headlines: {
        trust: "मैं वह बनाता हूँ जिस पर लोग वास्तव में भरोसा करते हैं — न कि वह जो केवल प्रस्तुति में अच्छा दिखता है।",
        story: "हर व्यवसाय के पीछे एक ऐसी कहानी होती है जिसे सबसे पहले समझना आवश्यक है।",
        automation: "स्मार्ट प्रणालियाँ मानव रचनात्मकता को स्वतंत्र करती हैं।",
        security: "अटूट सुरक्षा और अत्यधिक संवेदनशील इंटरफेस का संगम।"
      },
      descriptions: {
        trust: "सतही टेम्पलेट्स और खोखले वादों की इस दुनिया में, वास्तविक अधिकार सूक्ष्म विवरणों के माध्यम से बनाया जाता है। मैं विकास-केंद्रित व्यवसायों के साथ साझेदारी करके डिजिटल इंटरैक्शन को दीर्घकालिक व्यावसायिक विश्वास में बदलता हूँ।",
        story: "आपकी डिजिटल उपस्थिति आपकी कंपनी के मूल मूल्यों का एक स्वाभाविक विस्तार महसूस होनी चाहिए। हम आपके लिए एक परिष्कृत और कस्टम ब्रांड कहानी तैयार करने के लिए सामान्य स्टॉक इमेज और घिसे-पिटे नारों को छोड़ देते हैं।",
        automation: "आपके कस्टम वर्कस्पेस में सीधे इंटेलिजेंट, एआई-सहायक वर्कफ़्लो और सुरक्षित क्लाउड समाधानों को एकीकृत करना। मैन्युअल कार्यों में समय गंवाना बंद करें और तकनीक को अपने व्यवसाय के लाभ के लिए काम करने दें।",
        security: "स्केल के लिए बनाए गए कस्टम-कोडेड, उच्च प्रदर्शन वाले React और Node आर्किटेक्चर प्रदान करना। कोई भारी थर्ड-पार्टी प्लगइन नहीं, कोई सुरक्षा खामियां नहीं—केवल गति, सुरक्षा और त्रुटिहीन तकनीकी निष्पादन।"
      },
      accents: {
        trust: "विश्वास ही अंतिम व्यावसायिक गुणक है।",
        story: "कुशलता से बताई गई कहानी की नकल नहीं की जा सकती।",
        automation: "आपके संचालन के लिए विशेष रूप से निर्मित कस्टम ऑटोमेशन।",
        security: "एंटरप्राइज-ग्रेड स्थिरता के लिए आधुनिक डिजिटल प्लेटफॉर्म।"
      }
    },
    caseStudies: {
      eyebrow: "Bespoke Engagements",
      heading: "बिना समझौते के दिए गए प्रमाणित परिणाम।",
      allEngagements: "सभी अनुबंध",
      webIdentity: "वेब और पहचान",
      dataAutomation: "डेटा और ऑटोमेशन",
      customizedViewActive: "अनुकूलित दृश्य सक्रिय",
      showingHighlighted: "आपकी पसंद के आधार पर केस स्टडीज दिखाई जा रही हैं:",
      in: "के अंतर्गत",
      learnMoreCta: "रणनीतिक आर्किटेक्चर विश्लेषण का अनुरोध करें",
      items: {
        healthcare: {
          category: "Healthcare • Editorial Architecture",
          challenge: "कम रोगी विश्वास, पुराने दृश्यों और जटिल, अस्पष्ट चिकित्सा सेवा के कारण नियुक्तियों में गिरावट।",
          solution: "स्पष्टता पर केंद्रित एक संपादकीय-श्रेणी की वेबसाइट आर्किटेक्चर तैयार की गई है। एक पारदर्शी, खोजने योग्य सेवा कैटलॉग और नियुक्तियों को निर्धारित करना आसान किया गया है।",
          outcome: "पहली तिमाही में रोगी पूछताछ में काफी वृद्धि हुई। समग्र रोगी विश्वास बढ़ा और नियुक्ति के समय में भारी कमी आई।",
          metrics: "रोगी पूछताछ में महत्वपूर्ण वृद्धि; नियुक्ति का समय कम हुआ"
        },
        automation: {
          category: "Excel & Operations Automation",
          challenge: "वित्त और संचालन की टीमें स्प्रेडशीट्स को मैन्युअल रूप से कॉपी और समेकित करने में दर्जनों घंटे खर्च कर रही थीं, जिससे रिपोर्टों में देरी और डेटा में त्रुटियां होती थीं।",
          solution: "एक कस्टम स्वचालित स्क्रिप्ट और डेटा पाइपलाइन तैयार की गई है। विशेष डैशबोर्ड बनाए गए हैं जो जटिल डेटा मॉडल लेते हैं और मैन्युअल रिपोर्ट को तत्काल दृश्य डैशबोर्ड में बदल देते हैं।",
          outcome: "परिचालन ओवरहेड और मैन्युअल रिपोर्ट निर्माण को समाप्त कर दिया गया। कंपनी ने प्रमुख मेट्रिक्स का रीयल-टाइम दृश्य निरीक्षण प्राप्त किया, जिससे प्रतिभाएं डेटा हेरफेर के बजाय वास्तविक रणनीति पर ध्यान केंद्रित करने में सक्षम हुईं।",
          metrics: "रिपोर्ट देरी में 98% की कमी; 100% डेटा सटीकता सत्यापित"
        },
        finance: {
          category: "Finance & Wealth Advisory",
          challenge: "एक विशिष्ट संपत्ति प्रबंधक को पूर्ण विश्वास व्यक्त करने, ग्राहकों के संबंधों को गोपनीय रूप से प्रबंधित करने और पोर्टफोलियो सारांश को खूबसूरती से प्रदर्शित करने के लिए एक सुरक्षित पोर्टल की आवश्यकता थी।",
          solution: "गति-अनुकूलित कोड के माध्यम से एक प्रीमियम, उच्च-सुरक्षा क्लाइंट अनुभव डिज़ाइन किया गया है। कस्टम D3 डेटा चार्ट, और अत्यंत सुरक्षित दस्तावेज़ स्थानांतरण मॉड्यूल एकीकृत किया गया है।",
          outcome: "निवेशकों का विश्वास मजबूत हुआ, प्रीमियम प्रतिष्ठा बनी। क्लाइंट ऑनबोर्डिंग और त्रैमासिक रिपोर्टिंग के लिए एक सहज पोर्टल बनाया गया।",
          metrics: "+35% ऑनबोर्डिंग दक्षता; शून्य सुरक्षा लीक"
        }
      }
    },
    principles: {
      eyebrow: "The Studio Standard",
      heading: "हर डिजिटल अनुबंध के पीछे के सिद्धांत।",
      description: "पांच प्रतिबद्धताएं जो बनी रहती हैं, चाहे काम एक एकल उच्च-रूपांतरण वेबसाइट हो या बहु-वर्षीय तकनीकी सलाहकार संबंध।",
      principleLabel: "सिद्धांत",
      items: {
        p1: {
          title: "डिजाइन से पहले व्यवसाय",
          description: "मार्जिन आयामों से लेकर टाइपोग्राफी पेयरिंग तक हर विज़ुअल विवरण को एक सटीक व्यावसायिक उद्देश्य पूरा करना चाहिए। हम उन डिज़ाइन प्रवृत्तियों को अस्वीकार करते हैं जो ध्यान को सीधे कार्रवाई में नहीं बदलती हैं।"
        },
        p2: {
          title: "व्यवसाय-प्रथम सोच",
          description: "रणनीति हर निर्णय को आकार देती है — तकनीक साधन है, उद्देश्य कभी नहीं। फ्रंटएंड कोड की एक भी लाइन लिखने से पहले हम आपके उपयोगकर्ता पथों का गहराई से विश्लेषण करने में घंटों बिताते हैं।"
        },
        p3: {
          title: "कस्टम डिजिटल समाधान",
          description: "कोई भी भारी टेम्पलेट, पहले से बने थीम या धीमे पेज बिल्डर पूरी तरह से वर्जित हैं। प्रत्येक वेबसाइट, ऑटोमेशन और समाधान शुरू से ही कस्टम-कोडेड है ताकि वह उच्चतम गति पर चल सके।"
        },
        p4: {
          title: "दीर्घकालिक साझेदारी",
          description: "हम केवल फ़ाइलें सौंपकर गायब नहीं होते हैं। हम लॉन्च के बाद भी जुड़े रहते हैं, एनालिटिक्स को ठीक करते हैं, नई सुविधाएँ जोड़ते हैं और आपके बुनियादी ढांचे को तेज़, सुरक्षित और आधुनिक रखते हैं।"
        },
        p5: {
          title: "मेट्रिक्स के माध्यम से विश्वास का सत्यापन",
          description: "पूर्ण पारदर्शिता के माध्यम से विश्वास बनाए रखा जाता है। हम सटीक टेलीमेट्री को एकीकृत करते हैं, सक्रिय रूपांतरण फ़नल को ट्रैक करते हैं और स्पष्ट डैशबोर्ड बनाते हैं ताकि आप देख सकें कि वास्तव में क्या काम कर रहा है।"
        }
      },
      ctaBox: {
        title: "क्या आपका अपना कोई अनूठा मानक है?",
        desc: "हम विशिष्ट कॉर्पोरेट दर्शन या क्षेत्र-विशिष्ट सीमाओं के आसपास कस्टम कार्यप्रणाली का निर्माण करते हैं। आइए एक सहयोग डिज़ाइन करें जो आपके नियमों का सम्मान करे।",
        link: "कस्टम शर्तों का पता लगाएं"
      }
    },
    process: {
      eyebrow: "Our Delivery Engine",
      heading: "विचार से व्यावसायिक परिणाम तक पहुंचने का एक शांत, सुव्यवस्थित मार्ग।",
      description: "प्रत्येक जुड़ाव छह सुविचारित चरणों का पालन करता है — जो हर कदम पर आपको पूरी तरह से सूचित, पूर्ण नियंत्रण में और पूरी तरह से आश्वस्त रखने के लिए डिज़ाइन किया गया है।",
      whyStructureCounts: "संरचना क्यों मायने रखती है।",
      structureDesc: "सख्त इंजीनियरिंग संरचना के बिना रचनात्मक कार्य में देरी और कमजोर आर्किटेक्चर हो सकता है। हम पूर्वानुमेयता और स्थायित्व के लिए निर्माण करते हैं।",
      keyDeliverables: "मुख्य डिलिवरेबल्स:",
      scopingCta: "कस्टम स्कोपिंग सत्र का अनुरोध करें",
      standards: {
        s1: { label: "कस्टम-कोडेड अद्वितीय कोडबेस", value: "Standardized React/TS" },
        s2: { label: "परियोजना प्रबंधन मोड", value: "Asynchronous Slack/Notion" },
        s3: { label: "वितरण प्रदर्शन गारंटी", value: "Lighthouse Score > 90" },
        s4: { label: "डेटा आर्किटेक्चर सुरक्षा", value: "Hardened API Proxies" }
      },
      stages: {
        understand: {
          title: "समझना",
          description: "लक्ष्यों, व्यावसायिक सीमाओं, प्रतिस्पर्धी परिदृश्य और सटीक उपयोगकर्ता आवश्यकताओं की खोज करें। हम आपके व्यवसाय की अनूठी मूल्य कहानी को निकालने के लिए एक साथ बैठते हैं।",
          bullets: [
            "गहन खोज सत्र और लक्षित दर्शक ऑडिट",
            "मुख्य प्रदर्शन संकेतक (KPIs) को परिभाषित करना",
            "मौजूदा तकनीकी आर्किटेक्चर और संपत्तियों की समीक्षा",
            "मुख्य कार्यात्मक सीमाओं और आवश्यकताओं का दस्तावेजीकरण"
          ]
        },
        plan: {
          title: "योजना",
          description: "सटीक दायरा, साइट आर्किटेक्चर, पेज मैप और डिजिटल रणनीति पूरी तरह से परिभाषित की जाती है। हम उपयोगकर्ता यात्राओं का नक्शा बनाते हैं ताकि हर लिंक का एक उद्देश्य हो।",
          bullets: [
            "विस्तृत साइटमैप संरचना और पेज फ्लोचार्ट",
            "महत्वपूर्ण व्यूपोर्ट लेआउट का वायरफ्रेम बनाना",
            "सुरक्षा और गति के लिए सर्वोत्तम तकनीक का चयन",
            "व्यापक मील का पत्थर समयरेखा और वितरण साइन-ऑफ"
          ]
        },
        design: {
          title: "डिजाइन",
          description: "अद्वितीय यूजर इंटरफेस जो पूर्ण भव्यता के साथ आपके ब्रांड को प्रदर्शित करते हैं। हम तब तक उच्च-सटीकता वाले डिज़ाइनों पर काम करते हैं जब तक कि आपकी पहचान पूरी तरह से प्रस्तुत न हो जाए।",
          bullets: [
            "अद्वितीय टाइपोग्राफी पेयरिंग और विज़ुअल थीम",
            "उच्च-सटीकता UI मॉकअप और घटक पुस्तकालय",
            "माइक्रो-इंटरैक्शन और ट्रांज़िशन प्रोटोटाइप मॉडलिंग",
            "वास्तविक आकार के लेआउट पर इंटरैक्टिव पूर्वावलोकन"
          ]
        },
        build: {
          title: "निर्माण",
          description: "हाथ से निर्मित, स्वच्छ और उच्च प्रदर्शन वाला TypeScript कोड। हम भारी प्लगइन्स या धीमे पेज-बिल्डर्स पर निर्भर हुए बिना अत्याधुनिक आर्किटेक्चर लागू करते हैं।",
          bullets: [
            "सार्थक, हल्के HTML5 और CSS ढांचे",
            "उत्तरदायी, मोबाइल-प्रथम React घटक निर्माण",
            "पूरी तरह से टाइप-सुरक्षित API, डेटाबेस और स्टेट एकीकरण",
            "व्यापक क्रॉस-डिवाइस रेंडरिंग और लेटेंसी ऑडिट"
          ]
        },
        launch: {
          title: "लॉन्च",
          description: "त्रुटिहीन लाइव जाने के लिए सावधानीपूर्वक चेकलिस्ट निष्पादन, तकनीकी परीक्षण, गति अनुकूलन, सुरक्षित होस्टिंग कॉन्फ़िगरेशन और डोमेन कनेक्शन।",
          bullets: [
            "सख्त फॉर्म-सत्यापन और सुरक्षा खतरा ऑडिट",
            "लाइटहाउस प्रदर्शन, एसईओ और एक्सेसिबिलिटी ट्यूनिंग",
            "Cloud Run, Vercel या कस्टम सर्वर सेटअप",
            "डोमेन रूटिंग, डीएनएस ट्यूनिंग और स्वचालित बैकअप"
          ]
        },
        grow: {
          title: "विकास",
          description: "निरंतर अनुकूलन, आधुनिक रूपांतरण ट्रैकिंग, इंटेलिजेंट एनालिटिक्स ट्रैकिंग और नए मील के पत्थर हासिल करने के साथ मॉड्यूल स्केलिंग।",
          bullets: [
            "लाइव हेपमैप और विस्तृत उपयोगकर्ता-सत्र समीक्षा",
            "रूपांतरण दर अनुकूलन (CRO) A/B परीक्षण",
            "अनुसूचित दृश्य और तकनीकी प्रदर्शन ट्यून-अप",
            "सुविधा विस्तार योजना और मॉड्यूलर स्केलिंग"
          ]
        }
      }
    },
    sectors: {
      eyebrow: "Sector Coverage",
      heading: "सभी क्षेत्रों में विश्वसनीय।",
      description: "किसी भी आकार के संगठनों की सेवा — पूर्ण गुणवत्ता, दृश्य सटीकता और डेटा गोपनीयता के प्रति समान प्रतिबद्धता के साथ।",
      zeroTemplates: "0% टेम्पलेट",
      bespoke: "यूनिक",
      complianceBox: {
        title: "क्षेत्र-विशिष्ट अनुपालन की आवश्यकता है?",
        desc: "हम सख्त तकनीकी गोपनीयता निर्देशिका, सुरक्षा मॉडलों और कोड सत्यापन मानकों का पालन करते हैं।",
        cta: "सुरक्षा प्रोटोकॉल की समीक्षा करें"
      },
      items: {
        healthcare: {
          name: "स्वास्थ्य सेवा",
          description: "चिकित्सा संघ, अस्पताल प्रणाली और क्लिनिक जो चिकित्सा विश्वास बढ़ाना और देखभाल के मार्ग को स्पष्ट करना चाहते हैं।"
        },
        education: {
          name: "शिक्षा",
          description: "डिजिटल लर्निंग अकादमियाँ, कस्टम LMS सेटअप और छात्रों की भागीदारी पर केंद्रित विशिष्ट स्कूल पोर्टल।"
        },
        finance: {
          name: "वित्त और संपत्ति",
          description: "संपत्ति प्रबंधक, सलाहकार फर्म और फिनटेक कंपनियां जो पूर्ण डेटा सुरक्षा और पेशेवर विज़ुअल फ़िनिश की मांग करती हैं।"
        },
        retail: {
          name: "प्रीमियम खुदरा",
          description: "डायरेक्ट-टू-कंज्यूमर फ्लैगशिप ब्रांड और स्थानीय खुदरा श्रृंखलाएं जो संपादकीय डिजिटल खरीदारी का अनुभव बनाना चाहती हैं।"
        }
      }
    },
    contact: {
      eyebrow: "विकास के लिए तैयार हैं?",
      title: "आइए विश्वास पर आधारित एक डिजिटल पहचान का निर्माण करें।",
      desc: "एक अतुल्यकालिक वीडियो मूल्यांकन या सामान्य ज़ूम कॉल शेड्यूल करें। आइए आपके उद्देश्यों का ऑडिट करें और एक प्रीमियम, कस्टम-कोडेड रोडमैप तैयार करें।",
      cardTitle: "30 मिनट का रणनीतिक जुड़ाव बुक करें",
      cardDesc: "मेरे डिजिटल कैलेंडर में अपना स्लॉट सुरक्षित करें। मैन्युअल फॉलो-अप से बचें और तुरंत सीधे वीडियो कनेक्शन को आरक्षित करें।",
      ctaButton: "शेड्यूलर प्रारंभ करें",
      whatsapp: "WhatsApp",
      callNow: "Call Now"
    },
    footer: {
      studioDesc: "उच्च-रूपांतरण डिजिटल पहचान, कस्टम व्यावसायिक स्वचालन और विश्वसनीय ब्रांड आर्किटेक्चर बनाने वाली एक अंतरराष्ट्रीय बुटीक कंसल्टेंसी। कोई टेम्पलेट नहीं। पूरी तरह से कस्टम शिल्प।",
      channels: "संचार माध्यम",
      chatPortal: "सीधा चैट पोर्टल",
      commitmentTitle: "गुणवत्ता के प्रति प्रतिबद्धता",
      commitmentDesc: "यह डिजिटल संपत्ति बिना किसी भारी थर्ड-पार्टी पेज बिल्डर या भारी निर्भरता के पूरी तरह से हैंड-कोडेड है। पूर्ण गति, उत्तरदायी स्केलिंग और अधिकतम पहुंच के लिए निर्मित।",
      copyright: "CraftVanta. सर्वाधिकार सुरक्षित। अटूट सटीकता के साथ निर्मित।",
      craftedWith: "स्नेहपूर्वक निर्मित",
      performance: "अंतरराष्ट्रीय प्रदर्शन के लिए।"
    },
    modal: {
      title: "अपना परामर्श बुक करें",
      subtitle: "आइए जानें कि कैसे कस्टम इंजीनियरिंग और रणनीतिक ब्रांड आर्किटेक्चर आपके व्यावसायिक प्रदर्शन को बढ़ा सकते हैं।",
      pickDate: "1. एक तिथि चुनें",
      pickTime: "2. समय चुनें (आपका स्थानीय समय)",
      projectDetails: "3. परियोजना विवरण",
      fullName: "पूरा नाम",
      fullNamePlaceholder: "जैसे: राहुल शर्मा",
      emailAddress: "ईमेल पता",
      emailPlaceholder: "जैसे: rahul@company.com",
      primaryObjective: "प्राथमिक उद्देश्य",
      projectNotes: "परियोजना के नोट और उद्देश्य",
      projectNotesPlaceholder: "अपनी वर्तमान डिजिटल बाधा, संचालन प्रक्रिया या ब्रांड के उद्देश्यों का संक्षेप में वर्णन करें...",
      cancel: "रद्द करें",
      submitEmail: "पुष्टि करें और ईमेल के माध्यम से शुरू करें",
      submitWhatsApp: "सीधे व्हाट्सएप के माध्यम से जुड़ें",
      thankYouTitle: "परामर्श का अनुरोध प्रारंभ हुआ",
      thankYouText: "संपर्क करने के लिए धन्यवाद। एक कैलेंडर बुकिंग सुरक्षित कर ली गई है। अपनी बुकिंग पूरी करने के लिए, तुरंत अपना विवरण भेजने के लिए कृपया नीचे दिए गए सुरक्षित चैनलों में से किसी एक को चुनें:",
      alertMessage: "कृपया अपना नाम, ईमेल भरें और एक सुविधाजनक समय स्लॉट चुनें।"
    },
    toast: {
      detected: "हमने पाया कि आपके ब्राउज़र की भाषा है",
      switchButton: "बदलें",
      dismiss: "रद्द करें"
    }
  }
};
