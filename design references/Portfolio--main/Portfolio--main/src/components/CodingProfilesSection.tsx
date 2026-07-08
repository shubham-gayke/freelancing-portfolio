import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { AzureLogo } from "./BrandIcons";

export function CodingProfilesSection() {
  const profiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Shubham_Gayke/",
      icon: "https://cdn.simpleicons.org/leetcode/FFA116",
      color: "shadow-[0_0_15px_rgba(255,161,22,0.3)] hover:shadow-[0_0_40px_rgba(255,161,22,0.6)] hover:border-[#FFA116]"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/shubhamgayke9860",
      icon: "https://cdn.simpleicons.org/hackerrank/00EA64",
      color: "shadow-[0_0_15px_rgba(0,234,100,0.3)] hover:shadow-[0_0_40px_rgba(0,234,100,0.6)] hover:border-[#00EA64]"
    },
    {
      name: "GitHub",
      url: "https://github.com/shubham-gayke",
      icon: "https://cdn.simpleicons.org/github/ffffff",
      color: "shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:border-white"
    },
    {
      name: "Credly",
      url: "https://www.credly.com/users/shubham-gayke/badges/credly",
      icon: "https://cdn.simpleicons.org/credly/FF6B00",
      color: "shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] hover:border-[#FF6B00]"
    },
    {
      name: "Microsoft Azure",
      url: "https://learn.microsoft.com/en-us/users/shubhamgayke-0899/",
      iconNode: <AzureLogo className="w-12 h-12 sm:w-14 sm:h-14 mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg text-[#0089D6]" />,
      color: "shadow-[0_0_15px_rgba(0,137,214,0.3)] hover:shadow-[0_0_40px_rgba(0,137,214,0.6)] hover:border-[#0089D6]"
    }
  ];

  return (
    <section id="profiles" className="w-full max-w-5xl mx-auto mt-16 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-white/20 p-3 rounded-full border border-white/30">
          <Code2 className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold">Coding Profiles</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-[650px] mx-auto">
        {profiles.map((profile, idx) => (
          <motion.a
            key={idx}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className={`glass-panel glass-highlight flex flex-col items-center justify-center w-[160px] sm:w-[190px] aspect-square rounded-2xl group transition-all duration-500 hover:-translate-y-3 ${profile.color} relative overflow-hidden cursor-pointer`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            {profile.iconNode ? (
              profile.iconNode
            ) : (
              <img src={profile.icon} alt={profile.name} className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" />
            )}
            <span className="text-lg sm:text-xl font-bold text-white tracking-wide text-center px-2">{profile.name}</span>
            
            <div className="mt-3 bg-white/5 group-hover:bg-white/10 border border-white/10 group-hover:border-white/30 px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold transition-all duration-300">
              Visit <ExternalLink className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
