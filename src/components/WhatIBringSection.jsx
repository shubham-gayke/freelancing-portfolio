import { motion } from "framer-motion";
import { Target, Zap, ShieldCheck, Users, LineChart, Clock } from "lucide-react";

export function WhatIBringSection() {
  const features = [
    {
      title: "Design Excellence",
      icon: <Target className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500 to-fuchsia-500",
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
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 mb-24">
      <div className="w-full rounded-[2rem] border-[1.5px] border-indigo-500/20 bg-[#060814]/60 backdrop-blur-2xl p-8 pt-10 shadow-[0_0_40px_rgba(99,102,241,0.05)]">
        
        {/* Title */}
        <div className="flex items-center justify-center gap-6 mb-2">
          <div className="h-[1px] w-12 md:w-40 bg-gradient-to-r from-transparent to-white/20"></div>
          <h2 className="text-2xl font-bold text-white tracking-wide">What I Bring to the Table</h2>
          <div className="h-[1px] w-12 md:w-40 bg-gradient-to-l from-transparent to-white/20"></div>
        </div>
        <p className="text-center text-gray-400 text-sm mb-12">
          Delivering engineering excellence through expertise, innovation, and collaboration.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#090b16] p-6 flex flex-col items-center text-center group hover:-translate-y-1 hover:border-white/20 transition-all duration-300 shadow-lg relative overflow-hidden"
            >
              {/* Subtle top glow based on color */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} opacity-50`}></div>

              <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className={`text-sm font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                {feature.title}
              </h3>
              
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
