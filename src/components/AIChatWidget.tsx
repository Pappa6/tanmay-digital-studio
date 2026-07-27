import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Sparkles, ArrowRight, CornerDownLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export default function AIChatWidget() {
  const { language, t, copyEmailToClipboard } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Local translations for the Chat Widget
  const chatT = {
    en: {
      title: "AI Growth Partner",
      subtitle: "20+ Years Studio Wisdom",
      placeholder: "Describe your business or ask a question...",
      send: "Send",
      offlineMsg: "Usually replies in real-time",
      welcome: "Hello! I am Tanmay's AI Growth Partner. Tell me about your business (e.g., 'I run a retail shop' or 'I am a doctor') or ask about our bespoke web systems and AI automation services.",
      whatsappCta: "Direct WhatsApp",
      bookCta: "Book Live Slot",
      emailCta: "Email RFPs/Docs",
      errorMsg: "Connection error. Please try again, or contact Tanmay directly on WhatsApp.",
      suggestedTitle: "Select your business type:",
      typingIndicator: "Tanmay's Assistant is typing...",
      chips: [
        { label: "Saree / Retail Business", prompt: "I run a premium retail/saree business. How can custom tech boost my sales and brand trust?" },
        { label: "Medical / Doctor Profile", prompt: "I'm a medical doctor looking to establish a high-trust digital presence and automate appointment workflows." },
        { label: "B2B / Tech Startup", prompt: "We are a tech startup looking for scale-ready web architecture and data pipeline automation." }
      ]
    },
    bn: {
      title: "এআই গ্রোথ পার্টনার",
      subtitle: "২০+ বছরের স্টুডিও অভিজ্ঞতা",
      placeholder: "আপনার ব্যবসা সম্পর্কে বলুন বা প্রশ্ন করুন...",
      send: "পাঠান",
      offlineMsg: "সাধারণত তাৎক্ষণিক উত্তর দেয়",
      welcome: "হ্যালো! আমি তন্ময়ের এআই গ্রোথ পার্টনার। আপনার ব্যবসা সম্পর্কে আমাকে জানান (যেমন: 'আমি একটি শাড়ির দোকান চালাই' বা 'আমি একজন চিকিৎসক') অথবা আমাদের কাস্টম ওয়েব সিস্টেম এবং এআই অটোমেশন পরিষেবা সম্পর্কে জানতে চান।",
      whatsappCta: "হোয়াটসঅ্যাপ চ্যাট",
      bookCta: "মিটিং বুক করুন",
      emailCta: "ইমেল করুন (নথিপত্র)",
      errorMsg: "সংযোগ ত্রুটি। অনুগ্রহ করে আবার চেষ্টা করুন, অথবা সরাসরি তন্ময়ের সাথে হোয়াটসঅ্যাপে যোগাযোগ করুন।",
      suggestedTitle: "আপনার ব্যবসার ধরণ নির্বাচন করুন:",
      typingIndicator: "তন্ময়-এর সহকারী লিখছেন...",
      chips: [
        { label: "শাড়ি / খুচরা ব্যবসা", prompt: "আমি একটি শাড়ি ও খুচরা ব্যবসা পরিচালনা করি। কাস্টম প্রযুক্তি কীভাবে আমার বিক্রি ও ব্র্যান্ডের বিশ্বাসযোগ্যতা বৃদ্ধি করতে পারে?" },
        { label: "চিকিৎসক / পেশাদার প্রোফাইল", prompt: "আমি একজন চিকিৎসক, একটি উচ্চ-বিশ্বাসযোগ্য ডিজিটাল উপস্থিতি তৈরি করতে এবং অ্যাপয়েন্টমেন্ট শিডিউলিং অটোমেট করতে চাই।" },
        { label: "টেক স্টার্টআপ / বি২বি", prompt: "আমরা একটি টেক স্টার্টআপ এবং আমাদের স্কেল-রেডি ওয়েব আর্কিটেকচার এবং ডাটা পাইপলাইন অটোমেশন প্রয়োজন।" }
      ]
    },
    hi: {
      title: "एआई ग्रोथ पार्टनर",
      subtitle: "20+ वर्षों का स्टूडियो अनुभव",
      placeholder: "अपने व्यवसाय के बारे में बताएं या प्रश्न पूछें...",
      send: "भेजें",
      offlineMsg: "आमतौर पर तुरंत उत्तर देता है",
      welcome: "नमस्ते! मैं तन्मय का एआई ग्रोथ पार्टनर हूं। मुझे अपने व्यवसाय के बारे में बताएं (जैसे, 'मैं एक खुदरा साड़ी की दुकान चलाता हूं' या 'मैं एक डॉक्टर हूं') या हमारी कस्टम वेब प्रणालियों और एआई स्वचालन सेवाओं के बारे में पूछें।",
      whatsappCta: "व्हाट्सएप चैट",
      bookCta: "मीटिंग बुक करें",
      emailCta: "ईमेल भेजें (दस्तावेज़)",
      errorMsg: "कनेक्शन त्रुटि। कृपया पुनः प्रयास करें, या सीधे व्हाट्सएप पर तन्मय से संपर्क करें।",
      suggestedTitle: "अपने व्यवसाय का प्रकार चुनें:",
      typingIndicator: "तन्मय के सहायक लिख रहे हैं...",
      chips: [
        { label: "साड़ी / खुदरा व्यापार", prompt: "मैं एक प्रीमियम खुदरा/साड़ी व्यवसाय चलाता हूँ। कस्टम तकनीक मेरी बिक्री और ब्रांड ट्रस्ट को कैसे बढ़ावा दे सकती है?" },
        { label: "चिकित्सक / पेशेवर प्रोफाइल", prompt: "मैं एक डॉक्टर हूँ जो एक उच्च-विश्वास डिजिटल उपस्थिति स्थापित करना और अपॉइंटमेंट वर्कफ़्लो को स्वचालित करना चाहता हूँ।" },
        { label: "टेक स्टार्टअप / बी2बी", prompt: "हम एक टेक स्टार्टअप हैं और हमें स्केल-रेडी वेब आर्किटेक्चर और डेटा पाइपलाइन ऑटोमेशन की आवश्यकता है।" }
      ]
    }
  };

  const activeT = chatT[language as "en" | "bn" | "hi"] || chatT.en;

  // Initialize welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "model",
          text: activeT.welcome,
          timestamp: new Date()
        }
      ]);
    }
  }, [language, messages.length]);

  // Handle auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Handle notifications
  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Keep only last 10 messages for token context efficiency
      const historyContext = messages
        .filter(m => m.id !== "welcome")
        .slice(-10)
        .map(m => ({
          role: m.role,
          text: m.text
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: textToSend,
          history: historyContext
        })
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the assistant server.");
      }

      const data = await response.json();

      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          role: "model",
          text: data.text,
          timestamp: new Date()
        }
      ]);

      if (!isOpen) {
        setHasNewMessage(true);
      }
    } catch (error) {
      console.error("Chat widget error:", error);
      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          role: "model",
          text: activeT.errorMsg,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div 
        id="ai-chat-trigger-container"
        className="fixed bottom-28 md:bottom-6 right-6 z-40 flex flex-col items-end"
      >
        <AnimatePresence>
          {hasNewMessage && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gold-500 text-gold-950 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg font-bold mb-2 shrink-0 border border-gold-400"
            >
              New Message
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-4 rounded-full shadow-[0_8px_32px_rgba(209,165,60,0.25)] flex items-center justify-center transition-all duration-300 border focus:outline-none ${
            isOpen 
              ? "bg-[#0f1b29] border-white/20 text-white" 
              : "bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950 border-gold-400 hover:from-gold-400 hover:to-gold-500"
          }`}
          aria-label="Toggle AI Growth Chat"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-panel"
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-44 md:bottom-24 right-4 md:right-6 z-45 w-[calc(100vw-2rem)] sm:w-96 h-[500px] bg-[#0a111c]/95 backdrop-blur-2xl border border-gold-500/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0f1b29] border-b border-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative p-2 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-[#0f1b29]"></span>
                </div>
                <div>
                  <h4 className="text-sm font-display font-semibold text-white tracking-wide">
                    {activeT.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-mono font-light">
                    {activeT.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1.5">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono font-medium">
                  LIVE
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Minimize Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Message History Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((message) => {
                const isModel = message.role === "model";
                return (
                  <div
                    key={message.id}
                    className={`flex ${isModel ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed font-sans font-light ${
                        isModel
                          ? "bg-white/5 border border-white/5 text-gray-200"
                          : "bg-gradient-to-br from-gold-500/10 to-gold-600/10 border border-gold-500/30 text-gold-200"
                      }`}
                    >
                      {/* Message Text (Preserve simple lists and paragraphs) */}
                      <div className="space-y-1.5 whitespace-pre-line">
                        {message.text}
                      </div>

                      {/* Message Meta / Timestamp */}
                      <div className="mt-1.5 flex justify-between items-center text-[9px] text-gray-500 font-mono">
                        <span>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        {isModel && message.id === "welcome" && (
                          <span className="text-gold-400 font-medium">Studio Assistant</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl px-4 py-3 text-xs text-gray-400 flex items-center space-x-2">
                    <span className="text-gold-400 animate-pulse font-mono font-medium">{activeT.typingIndicator}</span>
                    <span className="flex space-x-1">
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Context Quick-start Chips */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-2 pt-1 bg-[#0a111c]/95 border-t border-white/5">
                <p className="text-[10px] uppercase font-mono tracking-wider text-gold-400 mb-2">
                  {activeT.suggestedTitle}
                </p>
                <div className="flex flex-col gap-1.5">
                  {activeT.chips.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip.prompt)}
                      className="text-left w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold-500/20 px-3 py-2 rounded-xl text-[11px] text-gray-300 hover:text-white transition-all flex items-center justify-between group"
                    >
                      <span className="font-light">{chip.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Instant Channels (Always Accessible) */}
            <div className="px-4 py-2 bg-[#0c1624] border-t border-white/5 flex items-center justify-between text-[10px] font-mono gap-1.5">
              <a
                href="https://wa.me/918001195515"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-teal-600/10 hover:bg-teal-600/20 text-teal-400 border border-teal-500/20 py-1.5 rounded-lg text-center transition-colors font-medium"
              >
                {activeT.whatsappCta}
              </a>
              <button
                onClick={() => copyEmailToClipboard("tanmay.mukherjee715@gmail.com")}
                className="flex-1 bg-gold-500/5 hover:bg-gold-500/10 text-gold-400 border border-gold-500/20 py-1.5 rounded-lg text-center transition-colors font-medium focus:outline-none"
              >
                {activeT.emailCta}
              </button>
            </div>

            {/* Input Action Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="bg-[#0f1b29] p-3 border-t border-white/5 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={activeT.placeholder}
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs focus:border-gold-400 focus:outline-none transition-colors text-white placeholder:text-gray-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-2.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-gold-950 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                aria-label={activeT.send}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
