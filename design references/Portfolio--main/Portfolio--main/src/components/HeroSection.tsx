import { motion } from "framer-motion";
import { Terminal, Copy, CheckCircle2, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
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
    <section id="hero" className="relative z-10 w-full max-w-5xl mx-auto mt-32 px-4 min-h-[500px]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel glass-highlight w-full p-8 md:p-12 flex flex-col md:flex-row gap-12 relative overflow-hidden"
      >
        {/* LEFT COLUMN - Hero Intro */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-light mb-2 text-white/80">Hello, I am</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">Shubham Gayke</h1>
          <h3 className="text-xl font-medium text-orange-400 mb-8 flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            DevOps Engineer
          </h3>
          
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed text-lg">
              I specialize in building scalable, secure, and production-ready systems through infrastructure automation, advanced CI/CD pipelines, and cloud-native architecture.
            </p>
            <p className="text-white/80 leading-relaxed text-lg">
              Experienced with <strong className="text-white font-semibold">AWS, Linux, Docker, Kubernetes, Terraform, Ansible, Jenkins, GitHub Actions, GitLab CI/CD, Prometheus, Grafana, NGINX, Bash, and Python</strong>.
            </p>
            <p className="text-white/80 leading-relaxed text-lg">
              I also have strong expertise in <strong className="text-white font-semibold">AI agent development, MCP (Model Context Protocol) integration, and workflow automation</strong> to build modern, AI-powered developer tools.
            </p>
          </div>


        </div>

        {/* RIGHT COLUMN - Contact & Accents (Acts as About anchor) */}
        <div id="about" className="md:w-[320px] flex flex-col gap-5 justify-center">
          
          <h3 className="text-2xl font-bold mb-2 hidden md:block">Get in Touch</h3>

          <div className="glass-panel p-5 glass-highlight border border-white/20 hover:border-white/40 transition-colors">
            <p className="text-white/60 text-sm font-medium mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4"/> Email
            </p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-sm truncate pr-2">shubhamgayke9860@gmail.com</span>
              <button onClick={() => copyToClipboard('shubhamgayke9860@gmail.com', 'email')} className="text-white/80 hover:text-white transition-colors">
                {copiedEmail ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="glass-panel p-5 glass-highlight border border-white/20 hover:border-white/40 transition-colors">
            <p className="text-white/60 text-sm font-medium mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4"/> Phone
            </p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-sm">+91 9168469745</span>
              <button onClick={() => copyToClipboard('+91 9168469745', 'phone')} className="text-white/80 hover:text-white transition-colors">
                {copiedPhone ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="relative mt-8 h-32 w-full flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-orange-500/10 rounded-3xl backdrop-blur-3xl"></div>
            <Terminal className="w-16 h-16 text-indigo-400 drop-shadow-[0_0_30px_rgba(129,140,248,0.8)] z-10" />
            <div className="absolute top-4 right-10 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_15px_orange] animate-bounce z-10"></div>
            <div className="absolute bottom-4 left-10 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_15px_#f472b6] animate-ping z-10"></div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
