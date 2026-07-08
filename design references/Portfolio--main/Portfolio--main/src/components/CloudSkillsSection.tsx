import { motion } from "framer-motion";
import { Cloud, Server, Database, HardDrive, Zap, Network, Key, Boxes, FileCode, Activity, Globe, Lock, MessageSquare, Inbox, DoorOpen, Cpu, Search, Blocks, Bot, Users, GitBranch, ShieldCheck } from "lucide-react";
import { AWSLogo, AzureLogo } from "./BrandIcons";

export function CloudSkillsSection() {
  const cloudProviders = [
    {
      provider: "AWS",
      fullName: "Amazon Web Services",
      icon: <AWSLogo className="w-8 h-8 text-[#FF9900]" />,
      themeColor: "text-orange-400",
      bgHover: "shadow-[0_0_15px_rgba(255,153,0,0.1)] hover:shadow-[0_0_40px_rgba(255,153,0,0.3)] hover:border-[#FF9900]/30",
      services: [
        { name: "EC2", icon: <Server className="w-4 h-4 text-orange-400" /> },
        { name: "S3", icon: <HardDrive className="w-4 h-4 text-orange-400" /> },
        { name: "RDS", icon: <Database className="w-4 h-4 text-orange-400" /> },
        { name: "Lambda", icon: <Zap className="w-4 h-4 text-orange-400" /> },
        { name: "VPC", icon: <Network className="w-4 h-4 text-orange-400" /> },
        { name: "IAM", icon: <Key className="w-4 h-4 text-orange-400" /> },
        { name: "EKS", icon: <Boxes className="w-4 h-4 text-orange-400" /> },
        { name: "CloudFormation", icon: <FileCode className="w-4 h-4 text-orange-400" /> },
        { name: "CloudWatch", icon: <Activity className="w-4 h-4 text-orange-400" /> },
        // 9 New AWS Services
        { name: "DynamoDB", icon: <Database className="w-4 h-4 text-orange-400" /> },
        { name: "Route 53", icon: <Globe className="w-4 h-4 text-orange-400" /> },
        { name: "CloudFront", icon: <Zap className="w-4 h-4 text-orange-400" /> },
        { name: "SNS", icon: <MessageSquare className="w-4 h-4 text-orange-400" /> },
        { name: "SQS", icon: <Inbox className="w-4 h-4 text-orange-400" /> },
        { name: "ECS", icon: <Boxes className="w-4 h-4 text-orange-400" /> },
        { name: "API Gateway", icon: <DoorOpen className="w-4 h-4 text-orange-400" /> },
        { name: "Elastic Beanstalk", icon: <Cpu className="w-4 h-4 text-orange-400" /> },
        { name: "Secrets Manager", icon: <Lock className="w-4 h-4 text-orange-400" /> },
        // 9 More AWS Services
        { name: "Athena", icon: <Search className="w-4 h-4 text-orange-400" /> },
        { name: "Glue", icon: <Blocks className="w-4 h-4 text-orange-400" /> },
        { name: "Redshift", icon: <Database className="w-4 h-4 text-orange-400" /> },
        { name: "SageMaker", icon: <Bot className="w-4 h-4 text-orange-400" /> },
        { name: "EMR", icon: <Server className="w-4 h-4 text-orange-400" /> },
        { name: "Cognito", icon: <Users className="w-4 h-4 text-orange-400" /> },
        { name: "Step Functions", icon: <GitBranch className="w-4 h-4 text-orange-400" /> },
        { name: "Kinesis", icon: <Activity className="w-4 h-4 text-orange-400" /> },
        { name: "WAF", icon: <ShieldCheck className="w-4 h-4 text-orange-400" /> },
      ]
    },
    {
      provider: "Azure",
      fullName: "Microsoft Azure",
      icon: <AzureLogo className="w-8 h-8 text-[#0089D6]" />,
      themeColor: "text-blue-400",
      bgHover: "shadow-[0_0_15px_rgba(0,137,214,0.1)] hover:shadow-[0_0_40px_rgba(0,137,214,0.3)] hover:border-[#0089D6]/30",
      services: [
        { name: "Virtual Machines", icon: <Server className="w-4 h-4 text-blue-400" /> },
        { name: "Blob Storage", icon: <HardDrive className="w-4 h-4 text-blue-400" /> },
        { name: "Azure SQL", icon: <Database className="w-4 h-4 text-blue-400" /> },
        { name: "Azure Functions", icon: <Zap className="w-4 h-4 text-blue-400" /> },
        { name: "VNet", icon: <Network className="w-4 h-4 text-blue-400" /> },
        { name: "Entra ID (AD)", icon: <Key className="w-4 h-4 text-blue-400" /> },
        { name: "AKS", icon: <Boxes className="w-4 h-4 text-blue-400" /> },
        { name: "ARM Templates", icon: <FileCode className="w-4 h-4 text-blue-400" /> },
        { name: "Azure Monitor", icon: <Activity className="w-4 h-4 text-blue-400" /> },
      ]
    },
    {
      provider: "GCP",
      fullName: "Google Cloud",
      logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
      themeColor: "text-blue-400",
      bgHover: "shadow-[0_0_15px_rgba(66,133,244,0.1)] hover:shadow-[0_0_40px_rgba(66,133,244,0.3)] hover:border-[#4285F4]/30",
      services: [
        { name: "Compute Engine", icon: <Server className="w-4 h-4 text-red-400" /> },
        { name: "Cloud Storage", icon: <HardDrive className="w-4 h-4 text-yellow-400" /> },
        { name: "Cloud SQL", icon: <Database className="w-4 h-4 text-blue-400" /> },
        { name: "Cloud Functions", icon: <Zap className="w-4 h-4 text-green-400" /> },
        { name: "VPC Network", icon: <Network className="w-4 h-4 text-blue-400" /> },
        { name: "Cloud IAM", icon: <Key className="w-4 h-4 text-red-400" /> },
        { name: "GKE", icon: <Boxes className="w-4 h-4 text-blue-400" /> },
        { name: "Deployment Mgr", icon: <FileCode className="w-4 h-4 text-gray-300" /> },
        { name: "Cloud Operations", icon: <Activity className="w-4 h-4 text-yellow-400" /> },
      ]
    }
  ];

  const renderProvider = (provider: any, delay: number, isFullHeight: boolean = false) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.6 }}
      className={`glass-panel glass-highlight p-5 sm:p-6 flex flex-col relative overflow-hidden transition-all duration-500 ${provider.bgHover} group ${isFullHeight ? 'h-full' : ''}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
          {provider.icon ? (
            <div className="w-7 h-7 drop-shadow-md flex items-center justify-center">
              {provider.icon}
            </div>
          ) : (
            <img src={provider.logo} alt={provider.provider} className="w-7 h-7 object-contain drop-shadow-md" />
          )}
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{provider.provider}</h3>
          <p className="text-white/60 text-xs sm:text-sm font-medium">{provider.fullName}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
        {provider.services.map((service: any, sIdx: number) => (
          <div 
            key={sIdx}
            className="glass-panel w-full px-2.5 py-2 flex items-center gap-2 sm:gap-2.5 bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm rounded-lg relative overflow-hidden group/service cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/service:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
            <div className="bg-black/30 p-1.5 flex-shrink-0 rounded-md border border-white/10 relative z-10 group-hover/service:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <span className="font-semibold text-white/90 text-xs sm:text-sm truncate relative z-10 group-hover/service:text-white group-hover/service:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-all duration-300" title={service.name}>
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="cloud-skills" className="w-full max-w-5xl mx-auto mt-20 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-white/20 p-3 rounded-full border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <Cloud className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold">Cloud Architecture & Services</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column: AWS (Takes full height) */}
        <div>
          {renderProvider(cloudProviders[0], 0, true)}
        </div>
        
        {/* Right Column: Azure & GCP Stacked */}
        <div className="flex flex-col gap-6">
          {renderProvider(cloudProviders[1], 0.1)}
          {renderProvider(cloudProviders[2], 0.2)}
        </div>
      </div>
    </section>
  );
}
