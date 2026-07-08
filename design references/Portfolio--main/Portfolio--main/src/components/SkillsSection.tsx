import { motion } from "framer-motion";
import { 
  Wrench, Cloud, Server, Activity, ShieldCheck, 
  MessageSquare, Network, Layers, Component, Box, Maximize, 
  ArrowLeftRight, Database, Search, Globe, DoorOpen, ArrowRightLeft, 
  Split, GitBranch, Palette, Feather, RefreshCcw, Zap, 
  Lock, Route, ShieldAlert, HeartPulse, Inbox, Boxes, Code, FileCode,
  Brain, Bot, Sparkles, MessageSquareCode, ServerCog, Webhook
} from "lucide-react";
import { AWSLogo, AzureLogo } from "./BrandIcons";

export function SkillsSection() {
  const categories = [
    {
      title: "Cloud Platforms & Infrastructure",
      icon: <Cloud className="w-5 h-5 text-orange-400" />,
      skills: [
        { name: "AWS", icon: <AWSLogo className="w-6 h-6 text-[#FF9900]" /> },
        { name: "Microsoft Azure", icon: <AzureLogo className="w-6 h-6 text-[#0089D6]" /> },
        { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },
        { name: "CloudFormation", icon: <FileCode className="w-6 h-6 text-orange-400" /> },
        { name: "Terraform", slug: "terraform", color: "844FBA" },
        { name: "Ansible", slug: "ansible", color: "EE0000" },
      ]
    },
    {
      title: "Containers & Orchestration",
      icon: <Boxes className="w-5 h-5 text-blue-400" />,
      skills: [
        { name: "Docker", slug: "docker", color: "2496ED" },
        { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
        { name: "Podman", slug: "podman", color: "892CA0" },
        { name: "Helm", slug: "helm", color: "0F1689" },
      ]
    },
    {
      title: "Messaging & Event Streaming",
      icon: <MessageSquare className="w-5 h-5 text-pink-400" />,
      skills: [
        { name: "Apache Kafka", slug: "apachekafka", color: "ffffff" },
        { name: "RabbitMQ", slug: "rabbitmq", color: "FF6600" },
        { name: "Amazon SQS", icon: <Inbox className="w-6 h-6 text-orange-400" /> },
        { name: "Amazon SNS", icon: <MessageSquare className="w-6 h-6 text-orange-400" /> },
        { name: "ActiveMQ", slug: "apache", color: "D22128" },
      ]
    },
    {
      title: "Architecture & Scaling",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: "Microservices", icon: <Component className="w-6 h-6 text-purple-400" /> },
        { name: "Monolith", icon: <Box className="w-6 h-6 text-gray-400" /> },
        { name: "Auto Scaling", icon: <Maximize className="w-6 h-6 text-blue-400" /> },
        { name: "Horiz/Vert Scaling", icon: <ArrowLeftRight className="w-6 h-6 text-blue-400" /> },
        { name: "Stateful/Stateless", icon: <Database className="w-6 h-6 text-yellow-400" /> },
        { name: "Service Discovery", icon: <Search className="w-6 h-6 text-teal-400" /> },
        { name: "Redis (Cache)", slug: "redis", color: "DC382D" },
        { name: "CDN", icon: <Globe className="w-6 h-6 text-cyan-400" /> },
      ]
    },
    {
      title: "Web Servers & Proxies",
      icon: <Server className="w-5 h-5 text-green-400" />,
      skills: [
        { name: "Nginx", slug: "nginx", color: "009639" },
        { name: "Apache HTTP", slug: "apache", color: "D22128" },
        { name: "HAProxy", slug: "haproxy", color: "ffffff" },
        { name: "API Gateway", icon: <DoorOpen className="w-6 h-6 text-green-400" /> },
        { name: "Reverse Proxy", icon: <ArrowRightLeft className="w-6 h-6 text-green-400" /> },
        { name: "Load Balancer", icon: <Split className="w-6 h-6 text-green-400" /> },
      ]
    },
    {
      title: "Programming, Scripting & Monitoring",
      icon: <Code className="w-5 h-5 text-yellow-400" />,
      skills: [
        { name: "Python", slug: "python", color: "3776AB" },
        { name: "Bash Scripting", slug: "gnubash", color: "4EAA25" },
        { name: "Javascript", slug: "javascript", color: "F7DF1E" },
        { name: "Prometheus", slug: "prometheus", color: "E6522C" },
        { name: "Grafana", slug: "grafana", color: "F46800" },
        { name: "SonarQube", slug: "sonarqube", color: "4E9BCD" },
      ]
    },
    {
      title: "Networking & Security",
      icon: <Network className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "DNS", icon: <Globe className="w-6 h-6 text-cyan-400" /> },
        { name: "HTTP/HTTPS", icon: <Lock className="w-6 h-6 text-cyan-400" /> },
        { name: "TCP/IP & UDP", icon: <Activity className="w-6 h-6 text-cyan-400" /> },
        { name: "SSL/TLS", icon: <ShieldCheck className="w-6 h-6 text-cyan-400" /> },
        { name: "NAT & VPN", icon: <Route className="w-6 h-6 text-cyan-400" /> },
        { name: "Firewall", icon: <ShieldAlert className="w-6 h-6 text-red-400" /> },
        { name: "CIDR / Subnet", icon: <Network className="w-6 h-6 text-cyan-400" /> },
        { name: "Health Checks", icon: <HeartPulse className="w-6 h-6 text-red-400" /> },
        { name: "RBAC", icon: <ShieldCheck className="w-6 h-6 text-indigo-400" /> },
      ]
    },
    {
      title: "CI/CD & Deployments",
      icon: <GitBranch className="w-5 h-5 text-red-400" />,
      skills: [
        { name: "Git", slug: "git", color: "F05032" },
        { name: "GitHub", slug: "github", color: "ffffff" },
        { name: "GitLab", slug: "gitlab", color: "FC6D26" },
        { name: "Jenkins", slug: "jenkins", color: "D33833" },
        { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
        { name: "ArgoCD", slug: "argo", color: "EF7B4D" },
        { name: "Blue-Green", icon: <Palette className="w-6 h-6 text-blue-400" /> },
        { name: "Canary Deploy", icon: <Feather className="w-6 h-6 text-yellow-400" /> },
        { name: "Rolling Update", icon: <RefreshCcw className="w-6 h-6 text-green-400" /> },
        { name: "Zero Downtime", icon: <Zap className="w-6 h-6 text-orange-400" /> },
      ]
    },
    {
      title: "AI & Automation",
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: "LangChain", slug: "langchain", color: "ffffff" },
        { name: "n8n", slug: "n8n", color: "FF6E6E" },
        { name: "GitHub Copilot", slug: "githubcopilot", color: "ffffff" },
        { name: "Claude AI", icon: <Sparkles className="w-6 h-6 text-amber-400" /> },
        { name: "Prompt Engineering", icon: <MessageSquareCode className="w-6 h-6 text-blue-400" /> },
        { name: "AI Agents", icon: <Bot className="w-6 h-6 text-purple-400" /> },
        { name: "Multi-Agent Systems", icon: <Network className="w-6 h-6 text-indigo-400" /> },
        { name: "MCP Servers", icon: <ServerCog className="w-6 h-6 text-green-400" /> },
        { name: "Vector Search", icon: <Database className="w-6 h-6 text-yellow-400" /> },
        { name: "Integration", icon: <Webhook className="w-6 h-6 text-pink-400" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto mt-16 px-4">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-white/20 p-3 rounded-full border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <Wrench className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
      </div>

      {/* Grid Layout to strictly enforce rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category, catIdx) => (
          <motion.div 
            key={catIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (catIdx % 3) * 0.1, duration: 0.6 }}
            className="glass-panel glass-highlight p-6 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:border-white/50 hover:-translate-y-2 flex flex-col h-full group/card relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover/card:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="bg-white/10 p-2 rounded-xl border border-white/20">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white/90">{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              {category.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 group-hover:border-white/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    {skill.icon ? (
                      <div className="group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                    ) : (
                      <img 
                        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                        alt={skill.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill.name}&background=random&color=fff&rounded=true&bold=true`;
                        }}
                        className="w-[18px] h-[18px] object-contain transition-transform group-hover:scale-110 drop-shadow-md"
                      />
                    )}
                  </div>
                  <span className="font-semibold text-white/80 text-sm group-hover:text-white transition-all duration-300 truncate group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" title={skill.name}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
