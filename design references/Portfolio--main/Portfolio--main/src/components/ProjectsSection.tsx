import { motion } from "framer-motion";
import { Server, Rocket, Activity, ExternalLink, Network } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Automated CI/CD Pipeline & Multi-Cloud Deployment",
      description: "Designed and implemented a fully automated CI/CD pipeline using GitHub Actions, Jenkins, and Docker to deploy microservices across AWS and Azure. Reduced deployment time by 40%.",
      icon: <Rocket className="w-6 h-6 text-orange-400" />,
      tech: ["GitHub Actions", "Jenkins", "Docker", "AWS", "Azure", "Bash"]
    },
    {
      title: "Infrastructure as Code Automation & GitOps",
      description: "Built scalable cloud infrastructure using Terraform and Ansible. Implemented GitOps workflow for Kubernetes deployments, ensuring environment consistency and automated rollbacks.",
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      tech: ["Terraform", "Ansible", "Kubernetes", "GitOps", "Python", "Linux"]
    },
    {
      title: "Kubernetes Cluster Monitoring & Logging",
      description: "Deployed a centralized monitoring and logging stack utilizing Prometheus, Grafana, and the ELK stack. Set up custom alerts for resource utilization, reducing system downtime.",
      icon: <Activity className="w-6 h-6 text-pink-400" />,
      tech: ["Prometheus", "Grafana", "ELK", "Kubernetes", "NGINX", "RBAC"]
    }
  ];

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto mt-16 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-white/20 p-3 rounded-full border border-white/30">
          <Server className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold">DevOps Projects</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-panel glass-highlight p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              {project.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-white/70 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/90 text-[10px] sm:text-xs px-2.5 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-white/10">
              <a href="#" className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 border border-white/10 hover:border-white/30 text-white text-xs font-semibold py-2 rounded-lg transition-all duration-300">
                <ExternalLink className="w-3.5 h-3.5" />
                Live
              </a>
              <a href="#" className="flex-1 min-w-[90px] flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white text-xs font-semibold py-2 rounded-lg transition-all duration-300">
                <Network className="w-3.5 h-3.5" />
                Arch
              </a>
              <a href="#" className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white text-xs font-semibold py-2 rounded-lg transition-all duration-300">
                <img src="https://cdn.simpleicons.org/github/ffffff" className="w-3.5 h-3.5 object-contain" alt="GitHub" />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
