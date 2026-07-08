import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, Users, CheckCircle2, ShieldCheck } from "lucide-react";

export function EducationCommunitySection() {
  const [verifiedMap, setVerifiedMap] = useState<Record<number, boolean>>({});

  const communities = [
    {
      name: "AWS Emerging Talent",
      url: "https://drive.google.com/file/d/1OzzT5Mz3NrrzNX2J7AIz2WrCvPAfnGu0/view?usp=sharing",
      color: "bg-orange-400",
      shadow: "shadow-[0_0_10px_rgba(251,146,60,0.8)]"
    },
    {
      name: "Oracle Education University",
      url: "https://community.oracle.com/ou/profile/discussions/Shubham%20Gayke",
      color: "bg-pink-400",
      shadow: "shadow-[0_0_10px_rgba(244,114,182,0.8)]",
      note: "To verify oracle profile you need an account on oracle."
    },
    {
      name: "Dev Community Member",
      url: "https://dev.to/shubham_gayke",
      color: "bg-indigo-400",
      shadow: "shadow-[0_0_10px_rgba(129,140,248,0.8)]"
    }
  ];

  return (
    <section id="education" className="w-full max-w-5xl mx-auto mt-16 mb-20 px-4">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Education & Achievements Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel glass-highlight p-6 sm:p-8 flex flex-col h-full relative overflow-hidden group"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-3 rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-white/10">
            {/* B-Tech */}
            <div className="relative pl-8">
              <div className="absolute left-[3px] top-2.5 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
              <h4 className="font-bold text-lg text-white">B-Tech in Computer Science Engineering</h4>
              <p className="text-white/60 text-sm mt-1">Dr. Babasaheb Ambedkar Technological University</p>
              <p className="text-sm font-bold mt-2 text-indigo-300">CGPA: 8.12</p>
            </div>

            {/* Diploma */}
            <div className="relative pl-8">
              <div className="absolute left-[3px] top-2.5 w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
              <h4 className="font-bold text-lg text-white">Diploma in Computer Engineering</h4>
              <p className="text-white/60 text-sm mt-1 mb-2">MSBTE</p>
              <p className="text-sm font-bold mb-3 text-indigo-300">Score: 92.17%</p>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-900 bg-orange-400 px-3 py-1.5 rounded-full">
                <Trophy className="w-4 h-4" /> 1st Rank in Polytechnic
              </div>
            </div>

            {/* SSC */}
            <div className="relative pl-8">
              <div className="absolute left-[3px] top-2.5 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]"></div>
              <h4 className="font-bold text-lg text-white">Secondary School Certificate (SSC)</h4>
              <p className="text-white/60 text-sm mt-1">Maharashtra State Board</p>
              <p className="text-sm font-bold mt-2 text-indigo-300">Score: 86.40%</p>
            </div>
          </div>
        </motion.div>

        {/* Community & Coding Profiles Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-panel glass-highlight p-6 sm:p-8 flex flex-col h-full relative overflow-hidden group"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-3 rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Community</h2>
          </div>

          <div className="flex flex-col gap-3">
            {communities.map((comm, idx) => {
              const isVerified = verifiedMap[idx];
              return (
                <a
                  key={idx}
                  href={comm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setVerifiedMap(prev => ({ ...prev, [idx]: true }))}
                  className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between group hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-2.5 h-2.5 flex-shrink-0 ${comm.color} rounded-full ${comm.shadow}`}></div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm sm:text-lg text-white/90 truncate">{comm.name}</span>
                      {comm.note && (
                        <span className="text-[10px] sm:text-xs font-bold text-red-500 animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] mt-0.5 whitespace-normal">
                          * {comm.note}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${isVerified ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-orange-500/10 text-orange-400 border border-orange-500/30 group-hover:bg-orange-500/20'}`}>
                    {isVerified ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verify
                      </>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
