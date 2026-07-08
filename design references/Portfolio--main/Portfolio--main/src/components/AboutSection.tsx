import { motion } from "framer-motion";
import { Copy, CheckCircle2, User, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function AboutSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="about" className="w-full max-w-5xl mx-auto mt-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-8 md:p-10 relative overflow-hidden"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-white/20 p-3 rounded-full border border-white/30">
            <User className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="text-white/80 leading-relaxed text-lg">
              DevOps Engineer with experience in <strong className="text-white font-semibold">AWS, Linux, Docker, Kubernetes, Terraform, Ansible, Jenkins, GitHub Actions, GitLab CI/CD, Prometheus, Grafana, NGINX, Bash, and Python</strong>.
            </p>
            <p className="text-white/80 leading-relaxed text-lg mt-4">
              Skilled in <strong className="text-white font-semibold">Infrastructure as Code (IaC), CI/CD automation, container orchestration, monitoring, logging, RBAC, networking, and cloud infrastructure</strong>.
            </p>
            <p className="text-white/80 leading-relaxed text-lg mt-4">
              Experienced in <strong className="text-white font-semibold">AI agent development, MCP (Model Context Protocol) integration, prompt engineering, workflow automation, and AI-powered developer tools</strong>, with a focus on building scalable, secure, and production-ready systems.
            </p>
          </div>

          <div className="md:w-72 flex flex-col gap-4">
            <div className="glass-panel p-4 glass-highlight">
              <p className="text-white/60 text-sm font-medium mb-1 flex items-center gap-2"><Mail className="w-4 h-4"/> Email</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm truncate pr-2">shubhamgayke9860@gmail.com</span>
                <button onClick={() => copyToClipboard('shubhamgayke9860@gmail.com', 'email')} className="text-white/80 hover:text-white transition-colors">
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="glass-panel p-4 glass-highlight">
              <p className="text-white/60 text-sm font-medium mb-1 flex items-center gap-2"><Phone className="w-4 h-4"/> Phone</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">+91 9168469745</span>
                <button onClick={() => copyToClipboard('+91 9168469745', 'phone')} className="text-white/80 hover:text-white transition-colors">
                  {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
