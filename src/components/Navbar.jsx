import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Download, Mail, Phone, CheckCircle2, Copy } from "lucide-react";

const NavLink = ({ href, children, target, isActive }) => (
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
      const sections = ['hero', 'skills', 'experience', 'projects', 'certifications', 'education'];
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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-[#060813]/90 backdrop-blur-xl rounded-[2rem] px-4 md:px-6 py-3 flex gap-2 justify-between items-center shadow-[0_0_30px_rgba(59,130,246,0.15)] border border-indigo-500/40 transition-shadow duration-500 whitespace-nowrap"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 cursor-pointer shrink-0"
      >
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          <Terminal className="w-5 h-5 text-white" />
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="font-bold text-lg tracking-wide leading-tight text-white">Akshay Dhage</span>
          <span className="text-cyan-400 font-medium text-xs tracking-wider">Mechanical Design Engineer</span>
        </div>
      </motion.div>
      
      <div className="hidden lg:flex items-center gap-3 xl:gap-8 text-[13px] xl:text-sm font-semibold">
        <NavLink href="#hero" isActive={activeSection === 'hero'}>Home</NavLink>
        <NavLink href="#skills" isActive={activeSection === 'skills'}>Skills</NavLink>
        <NavLink href="#experience" isActive={activeSection === 'experience'}>Experience</NavLink>
        <NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
        <NavLink href="#certifications" isActive={activeSection === 'certifications'}>Certifications</NavLink>
        <NavLink href="#education" isActive={activeSection === 'education'}>Education</NavLink>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <a 
          href="https://linkedin.com/in/a-n-d" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-white hover:text-blue-400 flex items-center justify-center w-10 h-10"
          title="LinkedIn Profile"
        >
          <span className="font-bold text-sm">in</span>
        </a>
        
        {/* Resume Dropdown */}
        <div className="relative group">
          <button 
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] flex items-center gap-2 group-hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" /> 
            <span className="hidden sm:inline">Resume</span>
          </button>
          
          <div className="absolute right-0 top-full mt-2 w-40 glass-panel border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
            <a 
              href="/Akshay_Dhage_Mechanical_Design_Engineer_V3.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-colors flex items-center"
            >
              View Resume
            </a>
            <a 
              href="/Akshay_Dhage_Mechanical_Design_Engineer_V3.pdf" 
              download="Akshay_Dhage_Mechanical_Design_Engineer_V3.pdf"
              className="px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-colors border-t border-white/10 flex items-center"
            >
              Download
            </a>
          </div>
        </div>
        
        {/* Contact Dropdown */}
        <div className="relative group hidden sm:block">
          <button 
            className="bg-transparent border border-white/20 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white/5 transition-all flex items-center gap-2 hover:-translate-y-0.5"
          >
            Contact Me
          </button>
          
          <div className="absolute right-0 top-full mt-2 w-56 glass-panel border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
            <button 
              onClick={() => copyToClipboard('akshaydhage2000@gmail.com', 'email')}
              className="px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/15 hover:text-white transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> Copy Email</span>
              {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => copyToClipboard('+91 7276370571', 'phone')}
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
