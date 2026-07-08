import { Building2, GraduationCap, TrendingUp, Rocket, Check } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      role: "CAD Engineer",
      company: "Everllence India Pvt. Ltd.",
      subtitle: "(Formerly MAN Energy Solutions)",
      period: "June 2024 – Present",
      color: "#00d4ff",
      icon: <Building2 className="w-7 h-7 text-white" />,
      pillText: "Building the Future",
      pillIcon: <TrendingUp className="w-3.5 h-3.5" />,
      points: [
        "Designed and developed mechanical components and sub-assemblies using Siemens NX.",
        "Created and released 3D models, 2D drawings, and BOMs using Teamcenter PLM.",
        "Supported design validation activities by analyzing fit and assembly issues.",
        "Worked on retrofit and modification projects including redesign of existing parts and piping rerouting.",
        "Performed DMU and interference checks to ensure assembly feasibility.",
        "Applied DFM & DFA principles to improve manufacturability, reliability, and cost efficiency.",
        "Collaborated with overseas designers to resolve design issues and regularly presented project updates."
      ]
    },
    {
      role: "Graduate Engineer Trainee (GET)",
      company: "Everllence India Pvt. Ltd.",
      subtitle: "(Formerly MAN Energy Solutions)",
      period: "June 2023 – June 2024",
      color: "#d946ef",
      icon: <GraduationCap className="w-7 h-7 text-white" />,
      pillText: "Learning. Contributing. Growing.",
      pillIcon: <Rocket className="w-3.5 h-3.5" />,
      points: [
        "Supported senior design engineers in 3D modeling and drawing creation.",
        "Developed mechanical layouts and routing designs within assemblies.",
        "Conducted WOC (Water Oil Calculation) and COG (Centre of gravity) calculations.",
        "Prepared technical reports for engineering approval and assisted in documentation."
      ]
    }
  ];

  return (
    <section id="experience" className="relative z-10 w-full max-w-5xl mx-auto px-4 py-24 min-h-screen flex flex-col items-center">
      
      {/* Header aligned exactly like the image */}
      <div className="mb-20 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-white/20 bg-transparent text-white font-semibold text-xs tracking-widest uppercase mb-6">
          <Building2 className="w-4 h-4" /> Professional Experience
        </div>
        
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            Work Experience
          </span>
        </h2>
        
        <p className="text-white/70 text-base md:text-lg mb-6">
          A journey of growth, learning, and impactful engineering.
        </p>
        
        {/* Small gradient underline */}
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
      </div>

      <div className="w-full relative">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative w-full pl-20 md:pl-40 max-w-4xl mx-auto mb-16 group">
            
            {/* The Vertical Gradient Line connecting icons */}
            {idx !== experiences.length - 1 && (
              <div 
                className="absolute w-[2px] z-0 left-[31px] md:left-[47px]"
                style={{ 
                  top: '64px',
                  bottom: '-64px',
                  background: `linear-gradient(to bottom, ${exp.color}, ${experiences[idx+1].color})` 
                }}
              ></div>
            )}

            {/* The Large Glowing Icon */}
            <div 
              className="absolute left-0 md:left-4 top-0 w-16 h-16 rounded-full border-[3px] bg-[#050505] flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110"
              style={{ borderColor: exp.color, boxShadow: `0 0 20px ${exp.color}80` }}
            >
              {exp.icon}
            </div>

            {/* Small Dot on the vertical axis */}
            <div 
              className="absolute left-[26px] md:left-[42px] top-[74px] w-3 h-3 rounded-full z-10"
              style={{ backgroundColor: exp.color, boxShadow: `0 0 10px ${exp.color}` }}
            ></div>

            {/* Horizontal Branch Line */}
            <div 
              className="absolute left-[32px] md:left-[48px] top-[79px] h-[2px] w-[48px] md:w-[112px] z-0"
              style={{ backgroundColor: exp.color }}
            ></div>

            {/* The Main Card */}
            <div 
              className="relative rounded-[1.25rem] border bg-[#0b101d]/90 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:-translate-y-1"
              style={{ borderColor: `${exp.color}40`, boxShadow: `0 10px 40px -10px ${exp.color}30` }}
            >
              
              {/* Top-Left Floating Date Pill */}
              <div 
                className="absolute -top-3.5 left-8 px-4 py-1.5 rounded-full text-xs font-bold bg-[#0b101d] border z-20 text-white"
                style={{ borderColor: exp.color }}
              >
                {exp.period}
              </div>

              <div className="p-6 md:p-8 pt-10">
                {/* Card Header (Role, Company & Right Pill) */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1.5">{exp.role}</h3>
                    <h4 className="text-lg md:text-xl font-bold mb-1" style={{ color: exp.color }}>
                      {exp.company}
                    </h4>
                    <p className="text-white/50 text-sm font-medium">{exp.subtitle}</p>
                  </div>
                  
                  {/* Right Floating Pill inside card */}
                  <div 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold w-fit"
                    style={{ color: exp.color }}
                  >
                    {exp.pillIcon} {exp.pillText}
                  </div>
                </div>

                {/* Separator Line */}
                <div className="w-full h-px bg-white/10 mb-6"></div>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      {/* Custom Checkmark Icon */}
                      <div 
                        className="mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 shadow-md"
                        style={{ backgroundColor: exp.color }}
                      >
                        <Check className="w-3 h-3 text-[#0b101d] font-bold" strokeWidth={3} />
                      </div>
                      <span className="text-white/80 text-sm md:text-[15px] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
