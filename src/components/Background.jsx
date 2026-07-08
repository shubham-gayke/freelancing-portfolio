import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 
        Instead of heavy blur filters on dynamic DOM elements, 
        we use simple rotated SVG shapes and pure CSS gradients 
        to perfectly mimic the 3D abstract tubes without any lag.
      */}
      
      {/* Abstract Shape 1 (Top Right) */}
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] opacity-60 md:opacity-80"
        style={{
          background: 'var(--theme-shape1-grad)',
          borderRadius: '50%',
          filter: 'blur(80px)', // A static CSS blur on an empty div is hardware accelerated and very fast
          transform: 'translate3d(0,0,0)',
          transition: 'background 0.8s ease'
        }}
      />

      {/* Abstract Shape 2 (Bottom Left) */}
      <motion.div 
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -left-[10%] w-[900px] h-[900px] opacity-50 md:opacity-70"
        style={{
          background: 'var(--theme-shape2-grad)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          transform: 'translate3d(0,0,0)',
          transition: 'background 0.8s ease'
        }}
      />
      
      {/* 3D SVG Ring mimic (Pure SVG without filter for zero lag) */}
      <svg className="absolute top-[20%] right-[15%] w-[400px] h-[400px] opacity-70 animate-pulse" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--theme-ring-stop1)" style={{ transition: 'stop-color 0.8s ease' }} />
            <stop offset="100%" stopColor="var(--theme-ring-stop2)" style={{ transition: 'stop-color 0.8s ease' }} />
          </linearGradient>
        </defs>
        <path d="M 100 10 A 90 90 0 1 1 99.9 10" fill="none" stroke="url(#ringGrad)" strokeWidth="8" strokeLinecap="round" />
      </svg>
      
      {/* 3D SVG Tube mimic */}
      <svg className="absolute bottom-[30%] left-[20%] w-[600px] h-[600px] opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--theme-tube-stop1)" style={{ transition: 'stop-color 0.8s ease' }} />
            <stop offset="100%" stopColor="var(--theme-tube-stop2)" style={{ transition: 'stop-color 0.8s ease' }} />
          </linearGradient>
        </defs>
        <path d="M 10 100 Q 50 10 100 100 T 190 100" fill="none" stroke="url(#tubeGrad)" strokeWidth="12" strokeLinecap="round" />
      </svg>
    </div>
  );
}
