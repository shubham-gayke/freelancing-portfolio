import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Bookmark, Calendar, Award, ArrowRight, Briefcase, FolderGit2, CheckCircle2, Users } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "B.Tech – Mechanical Engineering",
      institution: "Maharashtra Institute of Technology, Aurangabad (BAMU)",
      year: "2022",
      score: "8.56 CGPA",
      icon: <GraduationCap className="w-5 h-5 text-purple-300" />
    },
    {
      degree: "Diploma – Mechanical Engineering",
      institution: "Marathwada Institute of Technology, Aurangabad (MSBTE)",
      year: "2019",
      score: "69.12%",
      icon: <BookOpen className="w-5 h-5 text-indigo-300" />
    },
    {
      degree: "Schooling",
      institution: "Saint Meera School, Aurangabad | Maharashtra State Board",
      year: "May 2016",
      score: "Grade: 88.80%",
      icon: <Bookmark className="w-5 h-5 text-blue-300" />
    }
  ];

  return (
    <section id="education" className="relative z-10 w-full h-full flex flex-col justify-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-full rounded-[2rem] border-[1.5px] border-purple-500/40 bg-[#060411]/90 p-8 md:p-10 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)]"
      >
        {/* Header */}
        <div className="flex flex-col mb-10 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-500/30">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-wide">Education</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            My academic journey has built a strong foundation in core engineering principles and problem-solving.
          </p>
          {/* Decorative faint background icon */}
          <BookOpen className="absolute right-0 top-0 w-28 h-28 text-purple-500/5 -rotate-12 pointer-events-none" />
        </div>

        {/* Education List */}
        <div className="space-y-4 mb-10 flex-grow relative z-10">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="w-full rounded-[1rem] border border-purple-500/20 bg-[#0a0618] p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-purple-500/40 transition-colors group relative overflow-hidden"
            >
              {/* Subtle left glow */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-indigo-600 opacity-50"></div>
              
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                {edu.icon}
              </div>
              
              <div className="grow">
                <h3 className="text-white font-bold text-[15px] mb-1">{edu.degree}</h3>
                <p className="text-gray-400 text-xs mb-3">{edu.institution}</p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-[10px] text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    <Calendar className="w-3 h-3 text-purple-400" /> {edu.year}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    <Award className="w-3 h-3" /> {edu.score}
                  </span>
                </div>
              </div>
              
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-blue-500/20 items-center justify-center shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4 text-blue-300" />
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
