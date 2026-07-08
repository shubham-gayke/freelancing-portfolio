import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Download, Mail, Phone, CheckCircle2, Copy } from "lucide-react";

const NavLink = ({ href, children, target, isActive }: { href: string, children: React.ReactNode, target?: string, isActive?: boolean }) => (
  <a 
    href={href} 
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    className={`relative group transition-colors px-1 py-1 ${isActive ? 'text-orange-400 font-semibold' : 'text-white/80 hover:text-white'}`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-400 to-rose-400 transition-all duration-300 rounded-full blur-[1px] ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-400 to-rose-400 transition-all duration-300 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
  </a>
);

export function Navbar() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'certifications', 'education'];
      let current = '';

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        current = 'education';
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              current = section;
              break;
            }
          }
        }
      }

      if (window.scrollY < 100) {
         current = 'hero';
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-panel rounded-full px-4 md:px-6 py-3 flex gap-2 justify-between items-center shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] border border-white/10 transition-shadow duration-500 whitespace-nowrap"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 cursor-pointer shrink-0"
      >
        <div className="bg-gradient-to-br from-orange-400 to-rose-500 p-2 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]">
          <Terminal className="w-5 h-5 text-white" />
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="font-bold text-lg tracking-wide leading-tight">Shubham Gayke</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 font-semibold text-xs tracking-wider">CSE - BTech</span>
        </div>
      </motion.div>
      
      <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-[13px] xl:text-sm font-medium">
        <NavLink href="#hero" isActive={activeSection === 'hero'}>Home</NavLink>
        <NavLink href="#skills" isActive={activeSection === 'skills'}>Skills</NavLink>
        <NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
        <NavLink href="#certifications" isActive={activeSection === 'certifications'}>Certifications</NavLink>
        <NavLink href="#education" isActive={activeSection === 'education'}>Education</NavLink>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        {/* Social Icons */}
        <a 
          href="https://github.com/shubham-gayke" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 p-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all text-white"
          title="GitHub Profile"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/shubhamgayke/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 p-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all text-white hover:text-blue-400"
          title="LinkedIn Profile"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a 
          href="https://leetcode.com/u/Shubham_Gayke/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 p-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
          title="LeetCode Profile"
        >
          <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="LeetCode" className="w-5 h-5 object-contain drop-shadow-[0_0_5px_rgba(255,161,22,0.5)]" />
        </a>
        <a 
          href="https://www.hackerrank.com/profile/shubhamgayke9860" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 p-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
          title="HackerRank Profile"
        >
          <img src="https://cdn.simpleicons.org/hackerrank/00EA64" alt="HackerRank" className="w-5 h-5 object-contain drop-shadow-[0_0_5px_rgba(0,234,100,0.5)]" />
        </a>
        
        {/* Resume Dropdown */}
        <div className="relative group">
          <button 
            className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-orange-400 transition-all shadow-[0_0_15px_rgba(255,153,0,0.4)] flex items-center gap-2 group-hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" /> 
            <span className="hidden sm:inline">Resume</span>
          </button>
          
          <div className="absolute right-0 top-full mt-2 w-40 glass-panel border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
            <a 
              href="/Shubham_Gayke_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-colors flex items-center"
            >
              View Resume
            </a>
            <a 
              href="/Shubham_Gayke_Resume.pdf" 
              download="Shubham_Gayke_Resume.pdf"
              className="px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-colors border-t border-white/10 flex items-center"
            >
              Download
            </a>
          </div>
        </div>
        
        {/* Contact Dropdown */}
        <div className="relative group hidden sm:block">
          <button 
            className="bg-white text-indigo-900 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center gap-2 hover:-translate-y-0.5"
          >
            Contact Me
          </button>
          
          <div className="absolute right-0 top-full mt-2 w-56 glass-panel border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
            <button 
              onClick={() => copyToClipboard('shubhamgayke9860@gmail.com', 'email')}
              className="px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> Copy Email</span>
              {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => copyToClipboard('+91 9168469745', 'phone')}
              className="px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-colors border-t border-white/10 flex items-center justify-between"
            >
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> Copy Phone</span>
              {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
