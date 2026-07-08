import { motion } from "framer-motion";
import { FolderGit2, Layers, Repeat, Compass, Cog, Wrench } from "lucide-react";

const GridBackground = ({ color }) => (
  <div 
    className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20 pointer-events-none z-0"
    style={{
      backgroundImage: `linear-gradient(to right, ${color}40 1px, transparent 1px), linear-gradient(to bottom, ${color}40 1px, transparent 1px)`,
      backgroundSize: '24px 12px',
      transform: 'perspective(400px) rotateX(60deg)',
      transformOrigin: 'bottom',
      maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
      WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
    }}
  ></div>
);

export function ProjectsSection() {
  const projects = [
    {
      title: "Sheet Metal Design",
      icon: <Layers className="w-5 h-5 text-white" />,
      color: "#8b5cf6", // Purple
      shadowColor: "rgba(139, 92, 246, 0.4)",
      colSpan: "md:col-span-2",
      description: "Designed sheet metal components focusing on bend allowance and manufacturability considerations to ensure practical production feasibility.",
      tools: "Siemens NX, Teamcenter",
      image: "/projects/sheet_metal_bracket_1783512425050.png"
    },
    {
      title: "Plastic Part & Surfacing",
      icon: <Compass className="w-5 h-5 text-white" />,
      color: "#ec4899", // Pink
      shadowColor: "rgba(236, 72, 153, 0.4)",
      colSpan: "md:col-span-2",
      description: "Worked on plastic part design and advanced surfacing, including Class A, B & C surface development.",
      tools: "Siemens NX (Class A), Teamcenter",
      image: "/projects/plastic_casing_1783511774753.png"
    },
    {
      title: "Surface Conversion",
      icon: <Repeat className="w-5 h-5 text-white" />,
      color: "#06b6d4", // Cyan
      shadowColor: "rgba(6, 182, 212, 0.4)",
      colSpan: "md:col-span-2",
      description: "Performed A to B surface conversion and achieved complete part closure using advanced surfacing techniques.",
      tools: "Siemens NX",
      image: "/projects/surface_conversion_1783511784294.png"
    },
    {
      title: "Reverse Engineering",
      icon: <FolderGit2 className="w-5 h-5 text-white" />,
      color: "#8b5cf6", // Purple
      shadowColor: "rgba(139, 92, 246, 0.4)",
      colSpan: "md:col-span-3",
      description: "Executed reverse engineering projects by meticulously recreating accurate 3D models from existing physical components.",
      tools: "Siemens NX, Point Cloud, Geomagic",
      image: "/projects/reverse_engineering_1783511794685.png"
    },
    {
      title: "Engine Component Assemblies",
      icon: <Cog className="w-5 h-5 text-white" />,
      color: "#ec4899", // Pink
      shadowColor: "rgba(236, 72, 153, 0.4)",
      colSpan: "md:col-span-3",
      description: "Developed complex engine component assemblies (including piston, connecting rod, and crankshaft) as part of comprehensive training projects.",
      tools: "Siemens NX, Teamcenter",
      image: "/projects/engine_assembly_1783511805488.png"
    }
  ];

  return (
    <section id="projects" className="relative z-10 w-full max-w-[1400px] mx-auto px-4 py-24 min-h-screen flex flex-col items-center">
      
      {/* Background Glowing Rings */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full border border-purple-500/30 opacity-40 blur-[2px] pointer-events-none" style={{ boxShadow: '0 0 100px rgba(139,92,246,0.2) inset' }}></div>
      <div className="absolute top-40 right-10 w-[500px] h-[500px] rounded-full border-2 border-cyan-500/50 opacity-50 blur-[1px] pointer-events-none" style={{ boxShadow: '0 0 150px rgba(6,182,212,0.3) inset' }}></div>

      {/* Header exactly like the image */}
      <div className="mb-20 text-center flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-[#0a0f1d] text-white font-semibold text-xs tracking-wider mb-6">
          <FolderGit2 className="w-4 h-4 text-purple-400" /> Portfolio
        </div>
        
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
          Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Projects & Training</span>
        </h2>
        
        <p className="text-white/70 text-base md:text-lg max-w-2xl text-center leading-relaxed mb-6">
          Showcasing specialized mechanical design projects, advanced surfacing techniques, and reverse engineering experience.
        </p>

        {/* Small gradient light flair */}
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_15px_4px_rgba(236,72,153,0.8)]"></div>
        <div className="w-64 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent -mt-[3px]"></div>
      </div>

      {/* Grid Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`relative rounded-2xl border bg-gradient-to-b from-[#0e1224] to-black overflow-hidden flex flex-col ${project.colSpan} min-h-[360px] group transition-all duration-500 hover:-translate-y-1 shadow-2xl`}
            style={{ borderColor: `${project.color}50`, boxShadow: `0 0 30px ${project.shadowColor} inset, 0 10px 40px -10px rgba(0,0,0,0.8)` }}
          >
            {/* Top Glowing Flare */}
            <div 
              className="absolute top-0 left-1/4 right-1/4 h-[2px] opacity-70 z-20 transition-all duration-500 group-hover:opacity-100 group-hover:left-1/6 group-hover:right-1/6"
              style={{ backgroundColor: 'white', boxShadow: `0 0 20px 4px ${project.color}` }}
            ></div>

            {/* 3D Grid Pattern */}
            <GridBackground color={project.color} />

            <div className="p-8 pb-10 flex flex-col h-full relative z-10">
              
              {/* Icon Container */}
              <div 
                className="w-12 h-12 rounded-full border flex items-center justify-center mb-5 bg-black/40 backdrop-blur-md"
                style={{ borderColor: `${project.color}80`, boxShadow: `0 0 15px ${project.shadowColor} inset` }}
              >
                {project.icon}
              </div>
              
              {/* Text Content - strictly constrained width so it doesn't overlap the image */}
              <div className="w-[60%] flex flex-col grow z-20 relative">
                <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight leading-tight">{project.title}</h3>
                <p className="text-white/60 text-[13px] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tools Used section stuck to bottom left */}
                <div className="mt-auto pt-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Wrench className="w-3.5 h-3.5" style={{ color: project.color }} />
                    <span className="font-semibold text-[13px]" style={{ color: project.color }}>Tools Used</span>
                  </div>
                  <p className="text-white/80 text-[12px]">{project.tools}</p>
                </div>
              </div>
              
              {/* Massive 3D Image floating bottom right with seamless blending */}
              <div className="absolute -bottom-2 -right-2 w-[85%] h-[85%] flex items-end justify-end pointer-events-none z-10 overflow-hidden rounded-br-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain object-right-bottom mix-blend-screen opacity-90 transition-transform duration-700 group-hover:scale-105"
                  style={{ 
                    maskImage: 'radial-gradient(circle at 60% 60%, black 55%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at 60% 60%, black 55%, transparent 100%)'
                  }}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
