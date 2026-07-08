import { motion } from "framer-motion";
import { Wrench, Briefcase, CheckCircle2, Award } from "lucide-react";

export function DashboardLayout() {
  return (
    <section id="hero" className="relative z-10 w-full max-w-5xl mx-auto mt-32 px-4 flex flex-col md:flex-row gap-8 justify-center min-h-[700px]">
      
      {/* LEFT TALL PANEL */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel glass-highlight w-full md:w-[400px] p-8 flex flex-col relative overflow-hidden"
      >
        <h2 className="text-3xl font-light mb-1 text-white/90">Hello,</h2>
        <h1 className="text-4xl font-bold mb-8">Akshay Dhage!</h1>
        
        <p className="text-white/60 mb-2 font-medium">Mechanical Experience</p>
        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-7xl font-bold tracking-tighter">3+</span>
          <span className="text-white/60">/ years</span>
        </div>

        {/* Inner Cards grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="glass-panel p-5 relative overflow-hidden flex flex-col justify-between h-[160px]">
            <div className="flex justify-between items-center w-full">
              <span className="font-semibold">3D Models</span>
              <Wrench className="text-orange-400 w-5 h-5" />
            </div>
            <div>
              <span className="text-3xl font-bold block mb-1">30+</span>
              <span className="text-white/60 text-xs">Delivered</span>
            </div>
          </div>
          
          <div className="glass-panel p-5 relative overflow-hidden flex flex-col justify-between h-[160px]">
            <div className="flex justify-between items-center w-full">
              <span className="font-semibold">Projects</span>
              <Briefcase className="text-blue-400 w-5 h-5" />
            </div>
            <div>
              <span className="text-3xl font-bold block mb-1">20+</span>
              <span className="text-white/60 text-xs">Completed</span>
            </div>
            <svg className="absolute bottom-4 left-0 w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M0,20 Q10,30 20,20 T40,10 T60,30 T80,10 T100,20" fill="none" stroke="#3b82f6" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Bottom banner in left panel */}
        <div className="mt-auto glass-panel p-4 flex items-center justify-between border-green-500/30 bg-green-500/5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm font-medium text-green-100">100% Commitment</span>
          </div>
          <Award className="w-5 h-5 text-green-400" />
        </div>
      </motion.div>

      {/* RIGHT WIDE PANEL */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-panel glass-highlight w-full md:w-[600px] p-8 flex flex-col relative overflow-hidden"
      >
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Mechanical Design Engineer</h3>
            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              I specialize in creating precise 3D models, detailed 2D GD&T drawings, and managing design data through Teamcenter PLM.
            </p>
          </div>
          <div className="glass-panel p-3 rounded-2xl">
            <Wrench className="w-6 h-6 text-[var(--theme-ring-stop1)]" />
          </div>
        </div>

        {/* Activity Graph / Visualization */}
        <div className="flex-1 glass-panel p-6 relative overflow-hidden mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-sm">Key Expertise</span>
              <span className="text-xs text-white/50">Core Tools</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['Siemens NX', 'CATIA V5', 'Creo', 'Teamcenter', 'AutoCAD', 'DFM/DFA', 'Sheet Metal Design', 'Advanced Surfacing'].map((skill, i) => (
                <div key={i} className="px-4 py-2 glass-panel border-white/20 text-sm font-medium hover:bg-white/10 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="glass-panel p-4 flex flex-col justify-center items-center text-center">
            <span className="text-xs text-white/50 mb-1">Location</span>
            <span className="font-semibold text-sm">Sambhajinagar</span>
          </div>
          <div className="glass-panel p-4 flex flex-col justify-center items-center text-center">
            <span className="text-xs text-white/50 mb-1">Status</span>
            <span className="font-semibold text-sm text-green-400">Open to Work</span>
          </div>
          <a href="#projects" className="glass-panel p-4 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors cursor-pointer group/btn">
            <span className="font-semibold text-sm group-hover/btn:text-[var(--theme-ring-stop1)] transition-colors">View Projects →</span>
          </a>
        </div>

      </motion.div>
    </section>
  );
}
