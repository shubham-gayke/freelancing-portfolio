import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, CheckCircle2, MessageCircle, User, ChevronRight } from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative z-10 w-full h-full flex flex-col items-center justify-start mt-6 xl:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-full rounded-[2rem] border-[1.5px] border-blue-500/40 bg-[#040914]/90 p-8 md:p-10 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.15)]"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

        {/* Header */}
        <div className="flex flex-col mb-10 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-blue-500/30">
              <User className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white tracking-wide">Get in Touch</h2>
              <div className="h-[3px] w-12 bg-blue-500 rounded-full mt-2 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed mt-2">
            Let's connect and build something <br className="hidden md:block" />
            <span className="text-cyan-400 font-medium">innovative together!</span>
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4 w-full flex-grow relative z-10">

          {/* Email Card */}
          <div className="w-full rounded-[1rem] border border-white/10 bg-[#0a1122] p-5 flex items-center gap-4 hover:border-blue-500/30 transition-colors group">
            <div className="w-10 h-10 rounded-[0.75rem] bg-cyan-500/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="grow">
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-1">EMAIL</p>
              <p className="text-white font-bold text-[13px] md:text-sm">akshaydhage2000@gmail.com</p>
            </div>
            <button
              onClick={() => copyToClipboard('akshaydhage2000@gmail.com', 'email')}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 border border-white/5 transition-colors cursor-pointer shrink-0"
            >
              {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400 group-hover:text-white" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="w-full rounded-[1rem] border border-white/10 bg-[#0a1122] p-5 flex items-center gap-4 hover:border-blue-500/30 transition-colors group">
            <div className="w-10 h-10 rounded-[0.75rem] bg-cyan-500/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="grow">
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-1">PHONE</p>
              <p className="text-white font-bold text-[13px] md:text-sm">+91 7276370571</p>
            </div>
            <button
              onClick={() => copyToClipboard('+91 7276370571', 'phone')}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 border border-white/5 transition-colors cursor-pointer shrink-0"
            >
              {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400 group-hover:text-white" />}
            </button>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/7276370571"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-4 p-5 rounded-[1rem] bg-gradient-to-r from-[#041510] to-[#0a1a14] border border-[#25D366]/30 hover:border-[#25D366]/50 transition-all duration-300 mt-6 shadow-[0_0_20px_rgba(37,211,102,0.1)] group"
          >
            <div className="w-12 h-12 rounded-full border border-[#25D366]/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,211,102,0.3)]">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
            </div>
            <div className="grow">
              <p className="text-[#25D366] font-bold text-[13px] md:text-sm mb-1">Connect on WhatsApp</p>
              <p className="text-gray-400 text-xs">Let's discuss ideas, projects<br className="hidden md:block" /> or opportunities.</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <ChevronRight className="w-5 h-5 text-black" />
            </div>
          </a>

        </div>

        {/* Bottom Connect With Me */}
        <div className="w-full flex items-center justify-between mt-10 pt-6 relative z-10">
          <span className="text-gray-300 text-sm font-medium">Connect with me</span>
          <div className="flex gap-3">
            <a href="https://linkedin.com/in/a-n-d" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/5 flex items-center justify-center hover:bg-blue-500/20 text-white transition-colors">
              <span className="font-bold text-sm">in</span>
            </a>
            <a href="mailto:akshaydhage2000@gmail.com" className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/5 flex items-center justify-center hover:bg-blue-500/20 text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
