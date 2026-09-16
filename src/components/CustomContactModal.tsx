import { useState, useEffect, FormEvent } from "react";
import { X, Calendar, Clock, Check, ChevronRight, MessageSquare, Mail, Link as LinkIcon, Sparkles, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface CustomContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPersona?: string;
}

export default function CustomContactModal({ isOpen, onClose, initialPersona = "default" }: CustomContactModalProps) {
  const { t, language, copyEmailToClipboard } = useLanguage();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: initialPersona,
    lookingFor: "Web Design",
    date: "",
    time: "",
    notes: ""
  });

  const [availableDays, setAvailableDays] = useState<{ dateString: string; display: string; dayName: string }[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

  const isSlotInPast = (dateStr: string, slotStr: string): boolean => {
    if (!dateStr || !slotStr) return false;
    const now = new Date();
    
    // Check if dateStr is in the past relative to today's local date
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    
    if (dateStr < todayStr) {
      return true;
    }
    
    if (dateStr > todayStr) {
      return false;
    }
    
    // It's today. Parse slotStr, e.g., "10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"
    const match = slotStr.match(/^(\d+):(\d+)\s*(AM|PM)$/i);
    if (!match) return false;
    
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const ampm = match[3].toUpperCase();
    
    if (ampm === "PM" && hours < 12) {
      hours += 12;
    } else if (ampm === "AM" && hours === 12) {
      hours = 0;
    }
    
    const slotDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);
    
    return slotDate.getTime() <= now.getTime();
  };

  // Clear time slot and error message if date or time changes, or if it becomes invalid
  useEffect(() => {
    setErrorMessage(null);
  }, [formData.date, formData.time]);

  useEffect(() => {
    if (formData.date && formData.time && isSlotInPast(formData.date, formData.time)) {
      setFormData(prev => ({ ...prev, time: "" }));
    }
  }, [formData.date]);

  // Update form data if initialPersona changes
  useEffect(() => {
    if (initialPersona) {
      let defaultLookingFor = "Web Design";
      if (initialPersona === "story") defaultLookingFor = "Branding";
      if (initialPersona === "automation") defaultLookingFor = "Data & Automation";
      if (initialPersona === "security") defaultLookingFor = "AI Solutions";
      if (initialPersona === "trust") defaultLookingFor = "Consultation";

      setFormData(prev => ({ 
        ...prev, 
        service: initialPersona,
        lookingFor: defaultLookingFor
      }));
    }
  }, [initialPersona]);

  // Generate next 7 days (skipping Sundays) - fully timezone-safe and local-aware
  useEffect(() => {
    const days = [];
    const now = new Date();
    let count = 0;
    while (days.length < 7) {
      const current = new Date(now.getFullYear(), now.getMonth(), now.getDate() + count);
      count++;
      if (current.getDay() === 0) continue; // Skip Sunday
      
      const dayName = current.toLocaleDateString("en-US", { weekday: "short" });
      const display = current.toLocaleDateString("en-US", { day: "numeric", month: "short" });
      
      const year = current.getFullYear();
      const month = String(current.getMonth() + 1).padStart(2, '0');
      const day = String(current.getDate()).padStart(2, '0');
      const dateString = `${year}-${month}-${day}`;
      
      days.push({ dateString, display, dayName });
    }
    setAvailableDays(days);
    if (days.length > 0) {
      setFormData(prev => ({ ...prev, date: days[0].dateString }));
    }
  }, []);

  if (!isOpen) return null;

  const servicesList = [
    { id: "default", label: language === "bn" ? "সাধারণ প্রবৃদ্ধি পরামর্শ" : (language === "hi" ? "सामान्य विकास परामर्श" : "General Growth Consultation") },
    { id: "trust", label: t.hero.pills.trust },
    { id: "story", label: t.hero.pills.story },
    { id: "automation", label: t.hero.pills.automation },
    { id: "security", label: t.hero.pills.security }
  ];

  // Prefilled communications
  const formattedDate = formData.date 
    ? new Date(formData.date).toLocaleDateString(language === "bn" ? "bn-BD" : (language === "hi" ? "hi-IN" : "en-US"), { weekday: "long", month: "long", day: "numeric" })
    : "";

  const mailtoLink = `mailto:tanmay.mukherjee715@gmail.com?subject=${encodeURIComponent(`New Inquiry: ${formData.lookingFor}`)}&body=${encodeURIComponent(
    `Hello CraftVanta,

I would like to inquire regarding ${formData.lookingFor}.

Here are my project details:
- Name: ${formData.name}
- Email: ${formData.email}
- Category: ${formData.lookingFor}
- Strategic Perspective: ${servicesList.find(s => s.id === formData.service)?.label}
- Selected Date: ${formattedDate}
- Selected Time: ${formData.time}
- Project Message / Details: ${formData.notes}

Please let me know if this works.

Best regards,
${formData.name}`
)}`;

  const whatsappMessage = `Hello CraftVanta, my name is ${formData.name}. I'm looking for "${formData.lookingFor}". I've requested a consultation slot for ${formattedDate} at ${formData.time}. Brief details: ${formData.notes}`;
  const whatsappUrl = `https://wa.me/918001195515?text=${encodeURIComponent(whatsappMessage)}`; // Standard formatted link

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.time || !formData.date) {
      alert(t.modal.alertMessage);
      return;
    }

    if (isSlotInPast(formData.date, formData.time)) {
      setErrorMessage(
        language === "bn"
          ? "এই সময় স্লটটি ইতিমধ্যেই পার হয়ে গেছে। দয়া করে একটি উপলব্ধ তারিখ ও সময় নির্বাচন করুন।"
          : (language === "hi"
              ? "यह समय स्लॉट पहले ही बीत चुका है। कृपया उपलब्ध तिथि और समय का चयन करें।"
              : "This time slot has already passed. Please select an available date and time.")
      );
      return;
    }

    setErrorMessage(null);
    // Copy the email address to the visitor's clipboard and proceed
    copyEmailToClipboard("tanmay.mukherjee715@gmail.com");
    setStep(3); // Success Screen
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050914]/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] md:max-h-[90vh] flex flex-col bg-[#0d1a29] border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] text-white">
        
        {/* Top Gold Bar Decoration */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-500 to-teal-500 z-10" />
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/5 bg-[#0f1d2e] shrink-0 z-10">
          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-gold-400 font-medium">
              {language === "bn" ? "শিডিউলিং মডিউল" : (language === "hi" ? "शेड्यूलिंग मॉड्यूल" : "Bespoke Scheduling Module")}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step progress line */}
        {step < 3 && (
          <div className="flex bg-[#0a111c] border-b border-white/5 shrink-0">
            <button 
              onClick={() => setStep(1)}
              className={`flex-1 text-center py-3.5 text-xs font-mono uppercase tracking-widest transition-colors ${
                step === 1 ? "text-gold-400 font-medium border-b border-gold-400" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {language === "bn" ? "১. প্রাথমিক পরিচিতি" : (language === "hi" ? "1. प्राथमिक मानदंड" : "1. Discovery Parameters")}
            </button>
            <button 
              onClick={() => {
                if (formData.name && formData.email) setStep(2);
              }}
              disabled={!formData.name || !formData.email}
              className={`flex-1 text-center py-3.5 text-xs font-mono uppercase tracking-widest transition-colors ${
                step === 2 ? "text-gold-400 font-medium border-b border-gold-400" : "text-gray-500 disabled:opacity-50"
              }`}
            >
              {language === "bn" ? "২. সময় নিশ্চিতকরণ" : (language === "hi" ? "2. समय की पुष्टि" : "2. Slot Confirmation")}
            </button>
          </div>
        )}

        {/* Step 1: Discovery Parameters */}
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="p-6 space-y-5 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-mono text-gray-400">{t.modal.fullName} *</label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.fullNamePlaceholder}
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors placeholder:text-gray-600"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-mono text-gray-400">{t.modal.emailAddress} *</label>
                <input
                  type="email"
                  required
                  placeholder={t.modal.emailPlaceholder}
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors placeholder:text-gray-600"
                />
              </div>

            </div>

            {/* Service Type Selection */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-mono text-gray-400">{t.modal.primaryObjective}</label>
              <select
                value={formData.service}
                onChange={e => setFormData(prev => ({ ...prev, service: e.target.value }))}
                className="w-full bg-[#0d1a29] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors text-white"
              >
                {servicesList.map(s => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </div>

            {/* Smart Categorization Dropdown Field */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-mono text-gray-400">
                {language === "bn" ? "আপনি কি খুঁজছেন? *" : (language === "hi" ? "आप क्या ढूंढ रहे हैं? *" : "What are you looking for? *")}
              </label>
              <select
                value={formData.lookingFor}
                onChange={e => setFormData(prev => ({ ...prev, lookingFor: e.target.value }))}
                className="w-full bg-[#0d1a29] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors text-white"
              >
                <option value="Web Design">{language === "bn" ? "ওয়েব ডিজাইন (Web Design)" : (language === "hi" ? "वेब डिज़ाइन (Web Design)" : "Web Design")}</option>
                <option value="Branding">{language === "bn" ? "ব্র্যান্ডিং (Branding)" : (language === "hi" ? "ब्रांडिंग (Branding)" : "Branding")}</option>
                <option value="AI Solutions">{language === "bn" ? "এআই সলিউশন (AI Solutions)" : (language === "hi" ? "एआई सॉल्यूशंस (AI Solutions)" : "AI Solutions")}</option>
                <option value="Data & Automation">{language === "bn" ? "ডেটা ও অটোমেশন (Data & Automation)" : (language === "hi" ? "डेटा और ऑटोमेशन (Data & Automation)" : "Data & Automation")}</option>
                <option value="Consultation">{language === "bn" ? "পরামর্শ (Consultation)" : (language === "hi" ? "परामर्श (Consultation)" : "Consultation")}</option>
                <option value="Something else">{language === "bn" ? "অন্য কিছু (Something else)" : (language === "hi" ? "कुछ और (Something else)" : "Something else")}</option>
              </select>
            </div>

            {/* Brief notes */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-mono text-gray-400">{t.modal.projectNotes}</label>
              <textarea
                rows={3}
                placeholder={t.modal.projectNotesPlaceholder}
                value={formData.notes}
                onChange={e => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors placeholder:text-gray-600 resize-none"
              />
            </div>

            {/* Actions Footer */}
            <div className="pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-xs text-gray-500 font-light">{language === "bn" ? "* প্রয়োজনীয় ক্ষেত্র" : (language === "hi" ? "* आवश्यक फ़ील्ड" : "* Required fields")}</span>
              <button
                type="submit"
                disabled={!formData.name || !formData.email}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-gold-950 font-sans font-medium text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all disabled:opacity-50"
              >
                <span>{language === "bn" ? "পরবর্তী পদক্ষেপে যান" : (language === "hi" ? "शेड्यूल करने के लिए आगे बढ़ें" : "Proceed to Schedule")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Slot Confirmation */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto flex-1">
            
            {/* Pick a Day */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-mono text-gray-400 block">
                {t.modal.pickDate}
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {availableDays.map((day) => {
                  const isSelected = formData.date === day.dateString;
                  return (
                    <button
                      type="button"
                      key={day.dateString}
                      onClick={() => setFormData(prev => ({ ...prev, date: day.dateString }))}
                      className={`p-3 rounded-xl flex flex-col items-center justify-center border transition-all ${
                        isSelected
                          ? "bg-gold-500/15 border-gold-400 text-white"
                          : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      <span className="text-[10px] uppercase font-mono font-medium block">
                        {day.dayName}
                      </span>
                      <span className="text-sm font-semibold mt-1">
                        {day.display.split(" ")[0]}
                      </span>
                      <span className="text-[9px] text-gray-500 block mt-0.5">
                        {day.display.split(" ")[1]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pick a Time Slot */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-mono text-gray-400 block">
                {t.modal.pickTime}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {timeSlots.map((slot) => {
                  const isSelected = formData.time === slot;
                  const isPast = isSlotInPast(formData.date, slot);
                  return (
                    <button
                      type="button"
                      key={slot}
                      disabled={isPast}
                      onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                      className={`p-3 rounded-xl border text-xs font-mono font-medium transition-all ${
                        isPast
                          ? "bg-black/20 border-white/5 text-gray-600 cursor-not-allowed opacity-45 line-through"
                          : isSelected
                          ? "bg-gold-500/15 border-gold-400 text-white"
                          : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Error Message Display */}
            {errorMessage && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center space-x-3 text-red-400 text-xs font-medium animate-fadeIn">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Summary Panel */}
            <div className="p-4 bg-[#0a111c] border border-white/5 rounded-2xl flex items-center space-x-4">
              <div className="p-3 bg-white/5 text-gold-400 rounded-xl">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-0.5">
                <p className="text-gray-400">{language === "bn" ? "নির্বাচিত অ্যাপয়েন্টমেন্টের সংক্ষিপ্ত বিবরণ:" : (language === "hi" ? "चयनित नियुक्ति का विवरण:" : "Selected appointment overview:")}</p>
                <p className="text-white font-medium">
                  {formattedDate ? `${formattedDate} ${language === "bn" ? "তারিখ" : (language === "hi" ? "को" : "at")} ` : (language === "bn" ? "তারিখ নির্বাচন করুন — " : (language === "hi" ? "तिथि चुनें — " : "Select a date — ")) }
                  <span className="text-gold-300 font-semibold">{formData.time || (language === "bn" ? "সময় নির্বাচন" : (language === "hi" ? "समय चुनें" : "Pick time slot"))}</span>
                </p>
                <p className="text-[11px] text-gray-500">
                  {language === "bn" ? "মিটিং মোড: সুরক্ষিত এবং এনক্রিপ্ট করা জুম ভিডিও পোর্টাল" : (language === "hi" ? "बैठक का माध्यम: सुरक्षित एन्क्रिप्टेड ज़ूम वीडियो पोर्टल" : "Meeting Mode: Secure encrypted Zoom video portal")}
                </p>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="pt-4 border-t border-white/5 flex justify-between items-center">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {language === "bn" ? "তথ্য সংশোধনে ফিরে যান" : (language === "hi" ? "इनपुट पर वापस जाएं" : "Back to inputs")}
              </button>
              
              <button
                type="submit"
                disabled={!formData.date || !formData.time}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-gold-950 font-sans font-medium text-xs uppercase tracking-widest px-7 py-3.5 rounded-xl transition-all disabled:opacity-50"
              >
                <Check className="w-4 h-4" />
                <span>{language === "bn" ? "অ্যাপয়েন্টমেন্ট নিশ্চিত করুন" : (language === "hi" ? "अपॉइंटमेंट की पुष्टि करें" : "Confirm Appointment")}</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Screen */}
        {step === 3 && (
          <div className="p-8 text-center space-y-6 overflow-y-auto flex-1">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-400 flex items-center justify-center mx-auto text-gold-400 animate-bounce">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-400 font-semibold block">
                {language === "bn" ? "অনুরোধ পাঠানো হয়েছে" : (language === "hi" ? "अनुरोध भेजा गया" : "Request Initialized")}
              </span>
              <h3 className="text-2xl font-serif font-medium text-white tracking-tight">
                {t.modal.thankYouTitle}
              </h3>
              
              {/* Warm, personal confirmation message */}
              <div className="my-4 py-3 px-5 bg-gold-500/10 border border-gold-400/20 rounded-2xl inline-block max-w-md mx-auto">
                <p className="text-gold-300 text-sm font-medium">
                  {language === "bn" 
                    ? "ধন্যবাদ — আমি ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করব।" 
                    : (language === "hi" ? "धन्यवाद — मैं २४ घंटे के भीतर आपसे संपर्क करूँगा।" : "Thanks — I'll get back to you within 24 hours.")}
                </p>
              </div>

              <p className="text-gray-400 text-xs max-w-md mx-auto font-light leading-relaxed">
                {language === "bn"
                  ? `ধন্যবাদ, ${formData.name}। আমি ${formattedDate} তারিখে ${formData.time} সময়টি আপনার "${formData.lookingFor}" সংক্রান্ত কৌশলগত আলোচনার জন্য প্রস্তুত রেখেছি।`
                  : language === "hi"
                  ? `धन्यवाद, ${formData.name}। मैंने आपके "${formData.lookingFor}" के रणनीतिक मूल्यांकन के लिए ${formattedDate} को ${formData.time} बजे का समय चिह्नित किया है।`
                  : `Thank you, ${formData.name}. I have prepared ${formattedDate} at ${formData.time} for your strategic review on "${formData.lookingFor}".`}
              </p>
            </div>

            {/* Virtual Room Info */}
            <div className="p-5 bg-[#0a111c] border border-white/5 rounded-2xl max-w-lg mx-auto text-left space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400 font-mono">
                  {language === "bn" ? "রুম লিংক তৈরি করা হয়েছে:" : (language === "hi" ? "रूम लिंक जेनरेट किया गया:" : "ROOM LINK GENERATED:")}
                </span>
                <span className="font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded">
                  {language === "bn" ? "সুরক্ষিত পোর্টাল" : (language === "hi" ? "सुरक्षित पोर्टल" : "SECURE PORTAL")}
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10 justify-between">
                <div className="flex items-center space-x-2.5 text-xs text-gray-300">
                  <LinkIcon className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="font-mono truncate">meet.google.com/tanmay-digital-growth</span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("https://meet.google.com/tanmay-digital-growth");
                    alert(language === "bn" ? "ভার্চুয়াল মিটিং লিংক ক্লিপবোর্ডে কপি করা হয়েছে!" : (language === "hi" ? "वर्चुअल मीटिंग लिंक क्लिपबोर्ड पर कॉपी किया गया!" : "Virtual meeting link copied to clipboard!"));
                  }}
                  className="text-[10px] uppercase font-mono text-gold-400 hover:text-white shrink-0"
                >
                  {language === "bn" ? "কপি লিংক" : (language === "hi" ? "लिंक कॉपी करें" : "Copy Link")}
                </button>
              </div>
              <p className="text-[10px] text-gray-500 leading-normal font-light">
                {t.modal.thankYouText}
              </p>
            </div>

            {/* Quick Alternatives Grid */}
            <div className="space-y-3 max-w-lg mx-auto pt-2">
              <p className="text-[11px] uppercase tracking-widest font-mono text-gray-500">
                {language === "bn" ? "যোগাযোগের দ্রুত বিকল্পসমূহ" : (language === "hi" ? "त्वरित संपर्क विकल्प" : "Alternative Follow-Up Channels")}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Mail Client Trigger */}
                <button
                  type="button"
                  onClick={() => copyEmailToClipboard("tanmay.mukherjee715@gmail.com")}
                  className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group hover:-translate-y-0.5 text-center text-white focus:outline-none"
                >
                  <Mail className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform mb-1.5" />
                  <span className="text-xs font-semibold">Email Partner</span>
                  <span className="text-[9px] text-gray-400 mt-0.5 font-mono truncate max-w-full">tanmay.mukherjee715@...</span>
                </button>
                
                {/* WhatsApp Link */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-teal-950/30 hover:bg-teal-900/40 border border-teal-500/20 hover:border-teal-500/40 rounded-2xl transition-all group hover:-translate-y-0.5 text-center text-teal-300"
                >
                  <MessageSquare className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform mb-1.5" />
                  <span className="text-xs font-semibold font-sans">WhatsApp</span>
                  <span className="text-[9px] text-teal-500 mt-0.5 font-mono">wa.me Quick Link</span>
                </a>

                {/* Click to Call */}
                <a
                  href="tel:+918001195515"
                  className="flex flex-col items-center justify-center p-4 bg-sky-950/30 hover:bg-sky-900/40 border border-sky-500/20 hover:border-sky-500/40 rounded-2xl transition-all group hover:-translate-y-0.5 text-center text-sky-300"
                >
                  <Phone className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform mb-1.5" />
                  <span className="text-xs font-semibold font-sans">Call Directly</span>
                  <span className="text-[9px] text-sky-500 mt-0.5 font-mono">+91 8001195515</span>
                </a>
              </div>
            </div>

            {/* Back button */}
            <div className="pt-6 border-t border-white/5">
              <button
                onClick={() => {
                  setStep(1);
                  onClose();
                }}
                className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-gold-400 transition-colors"
              >
                {language === "bn" ? "শিডিউলিং প্যানেল বন্ধ করুন" : (language === "hi" ? "शेड्यूलिंग पैनल बंद करें" : "Close scheduling panel")}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
