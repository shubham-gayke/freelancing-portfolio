import { motion } from "framer-motion";
import { 
  FolderGit2, Box, Database, Settings, Users, 
  Layers, RefreshCw, BarChart2, Folder, Target,
  FileText, Activity, MessageSquare, BrainCircuit,
  Clock, Flag, ClipboardCheck, Puzzle, Droplet, Wrench
} from "lucide-react";

const HexIcon = ({ color, children }) => (
  <div className="relative w-16 h-16 flex items-center justify-center mb-6 z-10">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${color}40)` }}>
      <polygon points="50,3 95,28 95,72 50,97 5,72 5,28" fill="rgba(5, 5, 10, 0.6)" stroke={color} strokeWidth="3" strokeOpacity="0.8" />
    </svg>
    <div className="relative z-10" style={{ color }}>{children}</div>
  </div>
);

const CurveBackground = ({ color }) => (
  <div 
    className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[150%] h-[150px] rounded-[100%] border-t-[1.5px] border-dashed pointer-events-none z-0" 
    style={{ borderColor: `${color}80`, boxShadow: `0 -15px 40px ${color}20 inset` }}
  ></div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 w-full max-w-[1400px] mx-auto px-4 py-24 flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="mb-20 text-center flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-[#0a0f1d] text-white font-semibold text-xs tracking-wider mb-6">
          <FolderGit2 className="w-4 h-4 text-purple-400" /> Portfolio
        </div>
        
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">Technologies</span>
        </h2>
        
        <p className="text-white/70 text-base md:text-lg max-w-2xl text-center leading-relaxed mb-6">
          A comprehensive overview of my technical capabilities, software proficiency, and engineering focus areas.
        </p>

        {/* Small gradient light flair */}
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_15px_4px_rgba(236,72,153,0.8)]"></div>
        <div className="w-64 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent -mt-[3px]"></div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* CAD TOOLS (Purple) */}
        <div className="lg:col-span-4 relative rounded-3xl p-[1.5px] overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <div className="absolute inset-[-100%] bg-conic-purple opacity-0 group-hover:opacity-100 spin-border-gradient transition-opacity duration-500 z-0"></div>
          <div className="relative w-full h-full rounded-[calc(1.5rem-1.5px)] bg-gradient-to-b from-[#0b0c16] to-[#04040a] p-8 z-10 overflow-hidden border border-purple-500/20">
          <CurveBackground color="#a855f7" />
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-purple-400 shadow-[0_0_15px_3px_#a855f7] opacity-80"></div>
          
          <HexIcon color="#a855f7"><Box className="w-7 h-7" /></HexIcon>
          <h3 className="text-2xl font-bold text-white mb-3 relative z-10">CAD Tools</h3>
          <p className="text-white/60 text-sm mb-10 leading-relaxed relative z-10 min-h-[60px]">
            Proficient in industry-leading CAD software for 2D/3D modeling, designing, and documentation.
          </p>
          
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-purple-700 flex items-center justify-center font-bold text-[10px] text-white">NX</div>
              <span className="text-sm font-semibold text-white/90">Siemens NX</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs text-orange-400 bg-orange-400/10 border border-orange-400/30">ds</div>
              <span className="text-sm font-semibold text-white/90">CATIA V5</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                <Box className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-[13px] font-semibold text-white/90">PTC Creo</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center font-black text-red-500">A</div>
              <span className="text-[13px] font-semibold text-white/90">AutoCAD</span>
            </div>
          </div>
          </div>
        </div>

        {/* PLM & DATA MANAGEMENT (Pink) */}
        <div className="lg:col-span-4 relative rounded-3xl p-[1.5px] overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-[0_0_40px_rgba(236,72,153,0.15)]">
          <div className="absolute inset-[-100%] bg-conic-pink opacity-0 group-hover:opacity-100 spin-border-gradient transition-opacity duration-500 z-0"></div>
          <div className="relative w-full h-full rounded-[calc(1.5rem-1.5px)] bg-gradient-to-b from-[#0f0714] to-[#04020a] p-8 z-10 overflow-hidden border border-pink-500/20">
          <CurveBackground color="#ec4899" />
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-pink-400 shadow-[0_0_15px_3px_#ec4899] opacity-80"></div>
          
          <HexIcon color="#ec4899"><Database className="w-7 h-7" /></HexIcon>
          <h3 className="text-2xl font-bold text-white mb-3 relative z-10 leading-tight">PLM & Data Management</h3>
          <p className="text-white/60 text-sm mb-10 leading-relaxed relative z-10 min-h-[60px]">
            Experienced in product lifecycle management and data handling for efficient engineering workflows.
          </p>
          
          <div className="flex flex-wrap gap-3 relative z-10">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-white/90">Teamcenter</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
              <FileText className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-semibold text-white/90">BOM Management</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
              <RefreshCw className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-white/90">Item Revision</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
              <BarChart2 className="w-4 h-4 text-red-400" />
              <span className="text-sm font-semibold text-white/90">Impact Analysis</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
              <Folder className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold text-white/90">Dataset Management</span>
            </div>
          </div>
          </div>
        </div>

        {/* DESIGN SKILLS (Blue) */}
        <div className="lg:col-span-4 relative rounded-3xl p-[1.5px] overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          <div className="absolute inset-[-100%] bg-conic-blue opacity-0 group-hover:opacity-100 spin-border-gradient transition-opacity duration-500 z-0"></div>
          <div className="relative w-full h-full rounded-[calc(1.5rem-1.5px)] bg-gradient-to-b from-[#050b18] to-[#01040a] p-8 z-10 overflow-hidden border border-blue-500/20">
          <CurveBackground color="#3b82f6" />
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-blue-400 shadow-[0_0_15px_3px_#3b82f6] opacity-80"></div>
          
          <HexIcon color="#3b82f6"><Box className="w-7 h-7" /></HexIcon>
          <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Design Skills</h3>
          <p className="text-white/60 text-sm mb-10 leading-relaxed relative z-10 min-h-[60px]">
            Skilled in various design disciplines and advanced surfacing techniques to deliver optimized solutions.
          </p>
          
          <div className="flex flex-wrap gap-3 relative z-10">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-blue-500/20 shadow-sm">
              <Box className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-white/90">3D Modeling</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-blue-500/20 shadow-sm">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-white/90">2D Drawings</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-blue-500/20 shadow-sm">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-white/90">GD&T</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-blue-500/20 shadow-sm">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-white/90">Advanced Surfacing</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-blue-500/20 shadow-sm">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-white/90">Sheet Metal Design</span>
            </div>
          </div>
          </div>
        </div>

        {/* ENGINEERING & MANUFACTURING (Purple - Large Bottom Left) */}
        <div className="lg:col-span-6 relative rounded-3xl p-[1.5px] overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <div className="absolute inset-[-100%] bg-conic-purple opacity-0 group-hover:opacity-100 spin-border-gradient transition-opacity duration-500 z-0"></div>
          <div className="relative w-full h-full rounded-[calc(1.5rem-1.5px)] bg-gradient-to-b from-[#0b0c16] to-[#04040a] p-8 z-10 overflow-hidden border border-purple-500/20">
          <CurveBackground color="#a855f7" />
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-purple-400 shadow-[0_0_15px_3px_#a855f7] opacity-80"></div>
          
          {/* Background 3D Model */}
          <div className="absolute -bottom-10 -right-20 w-[80%] md:w-[60%] h-[120%] pointer-events-none z-0">
             <img 
               src="/projects/reverse_engineering_1783511794685.png" 
               alt="3D CAD background" 
               className="w-full h-full object-cover mix-blend-screen opacity-20 filter grayscale"
               style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}
             />
          </div>

          <HexIcon color="#a855f7"><Settings className="w-7 h-7" /></HexIcon>
          <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Engineering & Manufacturing</h3>
          <p className="text-white/60 text-[14px] mb-8 max-w-xl leading-relaxed relative z-10">
            Strong understanding of manufacturing processes, quality standards, and engineering validations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
            <div className="flex gap-4">
               <ClipboardCheck className="w-8 h-8 text-purple-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold mb-1">DFM / DFA</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Design for Manufacturing<br/>& Design for Assembly</p>
               </div>
            </div>
            <div className="flex gap-4">
               <Puzzle className="w-8 h-8 text-purple-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold mb-1">Assembly Feasibility</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Validate assembly sequence<br/>& manufacturing feasibility</p>
               </div>
            </div>
            <div className="flex gap-4">
               <Box className="w-8 h-8 text-purple-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold mb-1">DMU & Interference Checks</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Digital Mockup &<br/>Interference Analysis</p>
               </div>
            </div>
            <div className="flex gap-4">
               <Droplet className="w-8 h-8 text-purple-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold mb-1">WOC & COG Calculations</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Water Oil Calculation &<br/>Centre of Gravity Analysis</p>
               </div>
            </div>
            <div className="flex gap-4">
               <Wrench className="w-8 h-8 text-purple-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold mb-1">Fit & Finish</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Ensure perfect fit, function<br/>& aesthetics</p>
               </div>
            </div>
          </div>
          </div>
        </div>

        {/* SOFT SKILLS (Blue - Large Bottom Right) */}
        <div className="lg:col-span-6 relative rounded-3xl p-[1.5px] overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          <div className="absolute inset-[-100%] bg-conic-blue opacity-0 group-hover:opacity-100 spin-border-gradient transition-opacity duration-500 z-0"></div>
          <div className="relative w-full h-full rounded-[calc(1.5rem-1.5px)] bg-gradient-to-b from-[#050b18] to-[#01040a] p-8 z-10 overflow-hidden border border-blue-500/20">
          <CurveBackground color="#3b82f6" />
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-blue-400 shadow-[0_0_15px_3px_#3b82f6] opacity-80"></div>
          
          <HexIcon color="#3b82f6"><Users className="w-7 h-7" /></HexIcon>
          <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Soft Skills</h3>
          <p className="text-white/60 text-[14px] mb-8 leading-relaxed relative z-10">
            Effective communication and leadership skills to drive successful projects.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
            <div className="flex gap-4">
               <MessageSquare className="w-8 h-8 text-blue-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold text-sm mb-1">Communication</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Clear & effective<br/>communication</p>
               </div>
            </div>
            <div className="flex gap-4">
               <Users className="w-8 h-8 text-blue-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold text-sm mb-1">Teamwork</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Collaborative & result<br/>driven mindset</p>
               </div>
            </div>
            <div className="flex gap-4">
               <BrainCircuit className="w-8 h-8 text-blue-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold text-sm mb-1">Critical Thinking</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Analytical approach<br/>to problem solving</p>
               </div>
            </div>
            <div className="flex gap-4">
               <Flag className="w-8 h-8 text-blue-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold text-sm mb-1">Leadership</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Taking initiative &<br/>leading by example</p>
               </div>
            </div>
            <div className="flex gap-4 sm:col-span-2">
               <Clock className="w-8 h-8 text-blue-400 shrink-0" strokeWidth={1.5} />
               <div>
                 <h4 className="text-white font-bold text-sm mb-1">Time Management</h4>
                 <p className="text-white/50 text-xs leading-relaxed">Prioritizing tasks &<br/>meeting deadlines</p>
               </div>
            </div>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}
