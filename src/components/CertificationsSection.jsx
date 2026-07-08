import { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ShieldCheck, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  const [verifiedList, setVerifiedList] = useState({});

  const handleVerify = (idx) => {
    setVerifiedList(prev => ({ ...prev, [idx]: true }));
  };

  const certifications = [
    {
      title: "CAD Engineer Certification",
      issuer: "CADCAMGURU Solutions, Pune",
      date: "2023 | First Class (A Grade)",
      image: "/certificates/camcamguru Akshay.jpg",
      color: "#10b981" // emerald
    },
    {
      title: "AutoCAD Competition - First Prize",
      issuer: "Brainwaves",
      date: "Event Certification",
      image: "/certificates/Brainwaves auto cad first prize.jpg",
      color: "#3b82f6" // blue
    }
  ];

  return (
    <section id="certifications" className="relative z-10 w-full max-w-5xl mx-auto px-4 py-24 flex flex-col justify-center overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Award className="w-4 h-4" /> Professional Credentials
        </div>
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Certifications
          </span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Verified credentials showcasing specialized training and competitive achievements in CAD and mechanical design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {certifications.map((cert, idx) => {
          const isVerified = verifiedList[idx];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative p-8 md:p-10 rounded-[2rem] bg-[#0b101d]/80 backdrop-blur-xl border border-white/10 overflow-hidden group hover:-translate-y-2 transition-all duration-500"
              style={{ boxShadow: `0 10px 40px -10px ${cert.color}20` }}
            >
              {/* Inner Glow Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${cert.color}, transparent 60%)` }}
              ></div>

              <div className="flex flex-col sm:flex-row items-start gap-6 mb-10 relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 bg-black/50 backdrop-blur-md shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  style={{ borderColor: `${cert.color}50`, boxShadow: `0 0 20px ${cert.color}30 inset` }}
                >
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-snug">{cert.title}</h3>
                  <h4 className="text-base font-bold mb-1" style={{ color: cert.color }}>{cert.issuer}</h4>
                  <p className="text-white/40 font-medium text-sm mt-2">{cert.date}</p>
                </div>
              </div>

              {/* Verify Button */}
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleVerify(idx)}
                className={`relative flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 overflow-hidden group/btn z-10 ${
                  isVerified 
                    ? "bg-green-500/10 text-green-400 border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40"
                }`}
              >
                {isVerified ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span className="tracking-wide">Verified Authentic</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    <span className="tracking-wide">Verify Certification</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-50 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
