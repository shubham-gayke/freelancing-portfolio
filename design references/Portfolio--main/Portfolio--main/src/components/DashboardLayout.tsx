import { motion } from "framer-motion";
import { GitBranch, Server, Activity, ArrowRight, ServerCrash, Cpu } from "lucide-react";

export function DashboardLayout() {
  return (
    <section id="hero" className="relative z-10 w-full max-w-5xl mx-auto mt-32 px-4 flex flex-col md:flex-row gap-8 justify-center min-h-[700px]">
      
      {/* LEFT TALL PANEL (Mimicking the Left Mobile View in Screenshot) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel glass-highlight w-full md:w-[400px] p-8 flex flex-col relative overflow-hidden"
      >
        <h2 className="text-3xl font-light mb-1 text-white/90">Hello,</h2>
        <h1 className="text-4xl font-bold mb-8">Shubham Gayke!</h1>
        
        <p className="text-white/60 mb-2 font-medium">Lifetime Commits</p>
        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-7xl font-bold tracking-tighter">5,280</span>
          <span className="text-white/60">/ repos</span>
        </div>

        {/* Inner Cards grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="glass-panel p-5 relative overflow-hidden flex flex-col justify-between h-[160px]">
            <div className="flex justify-between items-center w-full">
              <span className="font-semibold">Deployments</span>
              <Server className="text-orange-400 w-5 h-5" />
            </div>
            <div>
              <span className="text-3xl font-bold block mb-1">142</span>
              <span className="text-white/60 text-xs">Total Success</span>
            </div>
          </div>
          
          <div className="glass-panel p-5 relative overflow-hidden flex flex-col justify-between h-[160px]">
            <div className="flex justify-between items-center w-full">
              <span className="font-semibold">Uptime</span>
              <Activity className="text-red-400 w-5 h-5" />
            </div>
            <div>
              <span className="text-3xl font-bold block mb-1">99.9%</span>
              <span className="text-white/60 text-xs">SLA</span>
            </div>
            {/* Fake SVG Sparkline */}
            <svg className="absolute bottom-4 left-0 w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M0,20 Q10,30 20,20 T40,10 T60,30 T80,10 T100,20" fill="none" stroke="#ff5252" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Link Device / Account mimic */}
        <div className="glass-panel p-5 flex items-center justify-between mt-auto">
          <div>
            <p className="font-semibold text-lg">Connect AWS</p>
            <p className="text-sm text-white/60">to your dashboard.</p>
            <button className="mt-3 bg-white text-indigo-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">Link</button>
          </div>
          <Cpu className="w-16 h-16 text-white/80 drop-shadow-xl" />
        </div>
        
        {/* Bottom Navigation Mimic */}
        <div className="absolute bottom-0 left-0 w-full h-20 glass-panel border-0 border-t border-white/20 rounded-b-3xl rounded-t-none flex justify-around items-center px-4">
          <div className="bg-white text-indigo-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 text-sm">
            <GitBranch className="w-4 h-4" /> Code
          </div>
          <ServerCrash className="w-5 h-5 text-white/60" />
          <Activity className="w-5 h-5 text-white/60" />
        </div>
      </motion.div>


      {/* RIGHT TALL PANEL (Mimicking the Right Mobile View in Screenshot) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-panel glass-highlight w-full md:w-[400px] p-8 flex flex-col relative overflow-hidden"
      >
        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mb-6">
          <ArrowRight className="w-5 h-5 rotate-180" />
        </div>

        <div className="flex flex-col items-center justify-center mb-12 relative mt-4">
          <Activity className="w-24 h-24 text-orange-400 drop-shadow-[0_0_30px_rgba(255,171,0,0.8)]" />
          <h2 className="text-2xl font-bold text-orange-400 mt-4">Performance</h2>
          
          {/* Small floating particles */}
          <div className="absolute top-0 right-10 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_10px_orange] animate-bounce"></div>
          <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_orange] animate-ping"></div>
        </div>

        {/* Date Selector Mimic */}
        <div className="flex justify-between items-center text-white/60 font-medium mb-8 px-2 text-lg">
          <span>Prod</span>
          <span>Dev</span>
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm shadow-inner">Staging</span>
          <span>QA</span>
          <span>Test</span>
        </div>

        <p className="text-white/60 mb-2 font-medium">Pipeline Duration</p>
        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-6xl font-bold tracking-tighter">4m 12s</span>
        </div>
        
        <div className="flex justify-between mb-8">
          <div>
            <span className="text-white/60 text-sm block">Success Rate</span>
            <span className="font-bold text-xl">98.5%</span>
          </div>
          <div>
            <span className="text-white/60 text-sm block">Cost Saved</span>
            <span className="font-bold text-xl">$4,280</span>
          </div>
        </div>

        {/* Bar Chart Mimic */}
        <div className="glass-panel p-5 h-[200px] relative mt-auto flex items-end justify-between px-6 pb-8">
          {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
            <div key={i} className="w-1.5 bg-white/20 rounded-full relative" style={{ height: '100%' }}>
              <div 
                className="absolute bottom-0 w-full bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" 
                style={{ height: `${h}%` }}
              ></div>
              {/* Candlestick dots */}
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[3px] shadow-[0_0_5px_white]" style={{ bottom: `${h}%` }}></div>
            </div>
          ))}
          
          {/* Chart Y axis labels */}
          <div className="absolute left-2 top-4 bottom-8 flex flex-col justify-between text-[10px] text-white/40">
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>
        </div>

        {/* Bottom Navigation Mimic */}
        <div className="absolute bottom-0 left-0 w-full h-20 glass-panel border-0 border-t border-white/20 rounded-b-3xl rounded-t-none flex justify-around items-center px-4">
          <div className="bg-white text-indigo-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 text-sm">
            <GitBranch className="w-4 h-4" /> Code
          </div>
          <ServerCrash className="w-5 h-5 text-white/60" />
          <Activity className="w-5 h-5 text-white/60" />
        </div>
      </motion.div>
      
    </section>
  );
}
