import { motion } from "framer-motion";
import { useState } from "react";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    { name: "Oracle Certified DevOps Professional", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D5959B79548455792A7547789EC433509523A61DAE0BFF0B1CF42B6437F7CD44" },
    { name: "Oracle AWS Certified Architect Professional", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=350B59B6807EFD465DC623FECE329C9CFE51A56BA1266899394D6DA5E5CFDC02" },
    { name: "SQL Advanced HackerRank", url: "https://www.hackerrank.com/certificates/iframe/3877fd359065" },
    { name: "REST API HackerRank", url: "https://www.hackerrank.com/certificates/iframe/e7ecdbe31b88" },
    { name: "Microsoft AI Skills Fest 2026", url: "https://www.credly.com/badges/f9cfab76-4566-4a2f-8241-4bba8207ed6a" },
    { name: "Microsoft Azure Certification & Achievement", url: "https://learn.microsoft.com/en-us/users/shubhamgayke-0899/" },
    { name: "Google Cloud Platform Skills and Badges", url: "https://www.credly.com/users/shubham-gayke/edit/badges/credly" },
    { name: "AWS Solution Architect", url: "https://www.udemy.com/certificate/UC-3cee2428-890d-44c1-b27d-b07c3d319046/" },
    { name: "Deloitte Completion Certificate", url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_QHZfHBduwup8Bnq62_1755798824468_completion_certificate.pdf" }
  ];

  const [verifiedMap, setVerifiedMap] = useState<Record<number, boolean>>({});

  return (
    <section id="certifications" className="w-full max-w-5xl mx-auto mt-16 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-white/20 p-3 rounded-full border border-white/30">
          <Award className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold">Certifications & Badges</h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certifications.map((cert, index) => {
          const isVerified = verifiedMap[index];
          return (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setVerifiedMap(prev => ({ ...prev, [index]: true }))}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className={`glass-panel glass-highlight p-5 flex items-center justify-between group hover:-translate-y-1 transition-all duration-300 ${isVerified ? 'border-green-500/30 shadow-[0_8px_32px_0_rgba(34,197,94,0.15)]' : 'hover:shadow-[0_8px_32px_0_rgba(255,171,0,0.2)]'}`}
            >
              <span className="font-medium text-white/90 pr-4 line-clamp-2 leading-tight">
                {cert.name}
              </span>
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
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
