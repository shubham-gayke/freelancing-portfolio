import { motion } from "framer-motion";
import { Briefcase, FolderGit2, CheckCircle2, Users, Target, Zap, ShieldCheck, LineChart, Clock, Lightbulb } from "lucide-react";

export function HeroSection() {
  const features = [
    {
      title: "Design Excellence",
      icon: <Target className="w-6 h-6 text-purple-400" />,
      color: "from-purple-400 to-indigo-400",
      description: "Delivering accurate, innovative and manufacturable design solutions that meet industry standards."
    },
    {
      title: "Technical Proficiency",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      color: "from-blue-400 to-cyan-400",
      description: "Expertise in industry-leading tools and technologies to create efficient and optimized designs."
    },
    {
      title: "Quality & Reliability",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-400 to-teal-400",
      description: "Ensuring compliance with standards and building reliable, durable, and high-quality designs."
    },
    {
      title: "Team Collaboration",
      icon: <Users className="w-6 h-6 text-orange-400" />,
      color: "from-orange-400 to-amber-400",
      description: "Working closely with cross-functional teams to achieve goals and drive project success."
    },
    {
      title: "Problem Solving",
      icon: <LineChart className="w-6 h-6 text-pink-400" />,
      color: "from-pink-400 to-rose-400",
      description: "Analytical approach to identify challenges and deliver effective engineering solutions."
    },
    {
      title: "Timely Delivery",
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      color: "from-cyan-400 to-sky-400",
      description: "Prioritizing tasks, meeting deadlines, and ensuring projects are delivered on time."
    }
  ];

  return (
    <section id="hero" className="relative z-10 w-[95%] xl:w-[90%] 2xl:w-[85%] max-w-[1600px] mx-auto mt-32 px-2 flex flex-col justify-center min-h-[500px] mb-8">
      
      {/* -------------------- HERO CARD -------------------- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full rounded-[2rem] border-[1.5px] border-blue-500/40 bg-[#040614]/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col lg:flex-row p-6 md:p-10 mb-8"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-1/3 h-[500px] bg-purple-500/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-blue-500/10 blur-[120px] pointer-events-none"></div>

        {/* LEFT COLUMN: Profile Image */}
        <div className="flex flex-col items-center gap-4 z-20 shrink-0 w-full lg:w-[22%] mb-8 lg:mb-0">
          <div className="w-full aspect-[4/4.5] md:w-[300px] lg:w-full rounded-[1.5rem] overflow-hidden border-2 border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-gradient-to-b from-blue-500/10 to-transparent">
            <img src="/images/profile.png" alt="Akshay Dhage" className="w-full h-full object-cover object-top" />
          </div>
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse"></div>
            <span className="text-white text-[13px] md:text-sm font-bold">Available for Opportunities</span>
          </div>

          <div className="mt-2 flex flex-col items-center text-center w-full">
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold mb-3">Passionate about</p>
            <div className="flex flex-wrap justify-center items-center gap-1.5 md:gap-2 text-cyan-300 text-[11px] md:text-xs font-bold mb-4 w-full bg-[#0a1128] px-2 py-2 rounded-xl border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <span>CAD</span>
              <span className="text-cyan-500/50">•</span>
              <span>Product Design</span>
              <span className="text-cyan-500/50">•</span>
              <span>Innovation</span>
            </div>
            <p className="text-[12px] md:text-[13px] italic font-bold max-w-[260px] leading-relaxed bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">
              "Transforming Ideas into Manufacturable Designs."
            </p>
          </div>
        </div>
        
        {/* MIDDLE COLUMN: Text Content */}
        <div className="flex flex-col items-start text-left z-20 shrink-0 w-full lg:w-[40%] lg:pl-10">
          <h2 className="text-sm font-black tracking-widest text-purple-400 uppercase mb-2">HELLO, I AM</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight text-white drop-shadow-lg">
            Akshay Dhage
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="text-orange-400 font-bold text-xl">{">_"}</span>
            <h3 className="text-lg md:text-xl font-bold text-orange-400">Mechanical Design Engineer</h3>
          </div>

          <p className="text-indigo-100/90 text-[13px] md:text-[14px] leading-relaxed mb-4 max-w-xl relative z-20 drop-shadow-[0_0_10px_rgba(224,231,255,0.3)] font-medium">
            I specialize in mechanical and automotive-related systems design with <span className="font-bold text-purple-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">3+ years of experience</span>. I have hands-on expertise in Siemens NX, CATIA V5, Creo, and <span className="font-bold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">Teamcenter PLM</span> with strong exposure to 3D modeling, GD&T drawings, BOM creation, and design release.
          </p>
          
          <p className="text-indigo-100/90 text-[13px] md:text-[14px] leading-relaxed mb-4 max-w-xl relative z-20 drop-shadow-[0_0_10px_rgba(224,231,255,0.3)] font-medium">
            Experienced with retrofit and modification projects, piping layouts, and manufacturability checks. I apply <span className="font-bold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">DFM & DFA principles</span> to improve manufacturability, reliability, and cost efficiency.
          </p>

          <p className="text-indigo-100/90 text-[13px] md:text-[14px] leading-relaxed mb-8 max-w-xl relative z-20 drop-shadow-[0_0_10px_rgba(224,231,255,0.3)] font-medium">
            I am a Certified CAD Engineer with a strong foundation in multi-CAD environments and design standards, capable of performing DMU and interference checks to ensure assembly feasibility.
          </p>

          {/* 4 Badges Row */}
          <div className="flex flex-wrap gap-3 mt-auto relative z-20">
            {/* 3+ Years Experience */}
            <div className="flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 rounded-[1rem] bg-[#090b16] border border-white/10 shadow-lg">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-white text-xs md:text-sm leading-tight mb-0.5">3+</span>
                <span className="text-[8px] md:text-[9px] text-gray-500 uppercase font-semibold">Years Experience</span>
              </div>
            </div>
            
            {/* 20+ Projects Completed */}
            <div className="flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 rounded-[1rem] bg-[#090b16] border border-white/10 shadow-lg">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <FolderGit2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-white text-xs md:text-sm leading-tight mb-0.5">20+</span>
                <span className="text-[8px] md:text-[9px] text-gray-500 uppercase font-semibold">Projects Completed</span>
              </div>
            </div>

            {/* 100% Quality Focus */}
            <div className="flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 rounded-[1rem] bg-[#090b16] border border-white/10 shadow-lg">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-white text-xs md:text-sm leading-tight mb-0.5">100%</span>
                <span className="text-[8px] md:text-[9px] text-gray-500 uppercase font-semibold">Quality Focus</span>
              </div>
            </div>

            {/* Collaborative Team Player */}
            <div className="flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 rounded-[1rem] bg-[#090b16] border border-white/10 shadow-lg">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-white text-xs md:text-sm leading-tight mb-0.5">Collaborative</span>
                <span className="text-[8px] md:text-[9px] text-gray-500 uppercase font-semibold">Team Player</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Image */}
        <div className="w-full lg:w-[50%] absolute right-[-2%] top-1/2 -translate-y-1/2 h-[100%] md:h-[130%] z-0 flex items-center justify-center pointer-events-none opacity-75 lg:opacity-80 mt-10 lg:mt-0 transition-opacity duration-500">
            <img 
              src="/images/hero-assembly.png" 
              alt="Mechanical Assembly" 
              className="w-full h-full object-contain object-center scale-110 md:scale-125 mix-blend-screen contrast-125 brightness-110"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)'
              }}
            />
        </div>
      </motion.div>


      {/* -------------------- WHAT I BRING CARD -------------------- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full rounded-[2rem] border-[1.5px] border-blue-500/20 bg-[#040612]/90 backdrop-blur-2xl shadow-xl overflow-hidden flex flex-col p-8 md:p-10"
      >
        <div className="flex flex-col items-center justify-center text-center w-full mb-10 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">What I Bring to the Table</h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          <p className="text-gray-400 text-sm">Delivering engineering excellence through expertise, innovation, and collaboration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10 w-full">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="relative p-[1.5px] rounded-[1.25rem] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              {/* Constant Neon Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-100 z-0"></div>
              
              {/* Inner Card */}
              <div className="relative h-full bg-[#050714] p-5 flex flex-col items-center text-center rounded-[calc(1.25rem-1.5px)] z-10 overflow-hidden">
                <div className={`absolute -inset-10 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="w-12 h-12 rounded-[1rem] bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-inner relative z-20">
                  {feature.icon}
                </div>
                <h3 className={`font-bold text-[14px] mb-2 bg-gradient-to-r ${feature.color} text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] relative z-20`}>
                  {feature.title}
                </h3>
                <p className="text-gray-100 text-[12px] md:text-[13px] font-semibold leading-relaxed relative z-20 drop-shadow-md">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
