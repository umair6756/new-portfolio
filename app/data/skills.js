// import { FaAws, FaDocker, FaJenkins, FaPython } from "react-icons/fa";
// import { SiPrometheus, SiTerraform } from "react-icons/si";

import { experiences } from "./experience";

// export const skillsData = [
//   {
//     category: 'Cloud Technologies',
//     icon: <FaAws className="text-orange-500" />,
//     skills: [
//       { name: 'AWS', level: 90 },
//       { name: 'Google Cloud', level: 85 },
//       { name: 'Azure', level: 75 },
//       { name: 'Serverless', level: 80 }
//     ]
//   },
//   {
//     category: 'Containerization & Orchestration',
//     icon: <FaDocker className="text-blue-500" />,
//     skills: [
//       { name: 'Docker', level: 85 },
//       { name: 'Kubernetes', level: 80 },
//       { name: 'ECS/EKS', level: 75 },
//       { name: 'Helm', level: 70 }
//     ]
//   },
//   {
//     category: 'CI/CD & Automation',
//     icon: <FaJenkins className="text-red-400" />,
//     skills: [
//       { name: 'Jenkins', level: 80 },
//       { name: 'GitHub Actions', level: 75 },
//       { name: 'ArgoCD', level: 70 },
//       { name: 'Ansible', level: 75 }
//     ]
//   },
//   {
//     category: 'Infrastructure as Code',
//     icon: <SiTerraform className="text-purple-500" />,
//     skills: [
//       { name: 'Terraform', level: 85 },
//       { name: 'CloudFormation', level: 75 },
//       { name: 'Pulumi', level: 65 },
//       { name: 'CDK', level: 70 }
//     ]
//   },
//   {
//     category: 'Monitoring & Observability',
//     icon: <SiPrometheus className="text-red-500" />,
//     skills: [
//       { name: 'Prometheus', level: 75 },
//       { name: 'Grafana', level: 70 },
//       { name: 'CloudWatch', level: 80 },
//       { name: 'Datadog', level: 65 }
//     ]
//   },
//   {
//     category: 'Programming & Scripting',
//     icon: <FaPython className="text-blue-400" />,
//     skills: [
//       { name: 'Python', level: 70 },
//       { name: 'Bash', level: 80 },
//       { name: 'JavaScript', level: 60 },
//       { name: 'Go', level: 50 }
//     ]
//   }
// ];


































export const skillsData = [

  {
    id: 'devops',
    category: "DevOps Engineering",
    description: "Building self-healing CI/CD pipelines with full observability and GitOps workflows.",
    skills: [
      { name: "Docker", level: 97, icon: "docker", projects: 29, experience: 2 },
      { name: "Jenkins", level: 93, icon: "jenkins", projects: 15, experience: '1+' },
      { name: "GitHub CI/CD", level: 90, icon: "gitlab", projects: 8, experience: '1+' },
      { name: "Ansible", level: 80, icon: "ansible", projects: 12, experience: 1 },
      { name: "Prometheus", level: 92, icon: "prometheus", projects: 17, experience: '1+' }
    ],
    color: "from-purple-500 to-fuchsia-700",
    bgGlow: "rgba(168, 85, 247, 0.15)",
    icon: "🔄"
  },
  {
    id: 'cloud',
    category: "Cloud Architecture",
    description: "Designing globally distributed, fault-tolerant systems with security-first principles.",
    skills: [
      { name: "AWS Solutions", level: 95, icon: "aws", projects: 18, experience: 2 },
      { name: "Azure Infra", level: 88, icon: "azure", projects: 9, experience: 1},
      { name: "GCP Specialist", level: 62, icon: "gcp", projects: 2, experience: 1 },
      { name: "Terraform", level: 86, icon: "terraform", projects: 12, experience: 1 },
      { name: "Kubernetes", level: 94, icon: "kubernetes", projects: 23, experience: 2 }
    ],
    color: "from-blue-500 to-indigo-700",
    bgGlow: "rgba(59, 130, 246, 0.15)",
    icon: "☁️"
  },
{
  id: 'sysadmin',
  category: "System Administration",
  description: "Server management, automation, and infrastructure monitoring across diverse environments.",
  skills: [
    { name: "Linux Administration", level: 92, icon: "linux", projects: 35, experience: '2+' },
    { name: "Windows Server", level: 85, icon: "windows", projects: 11, experience: 2 },
    { name: "Networking", level: 88, icon: "network", projects: 20, experience: 2 },
    { name: "Bash Scripting", level: 86, icon: "terminal", projects: 15, experience: 1 },
    { name: "Ansible Automation", level: 83, icon: "ansible", projects: 12, experience: 1 }
  ],
  color: "from-blue-500 to-cyan-700",
  bgGlow: "rgba(59, 130, 246, 0.15)",
  icon: "🖥️"
},

  {
    id: 'automation',
    category: "Infra Automation",
    description: "AI-driven predictive scaling and self-repairing infrastructure.",
    skills: [
      { name: "Python", level: 94, icon: "python", projects: 38, experience: '1+' },
      { name: "JavaScript", level: 82, icon: "golang", projects: 17, experience:'2+' },
      { name: "Pulumi", level: 55, icon: "pulumi", projects: 2, experience: 1 },
      { name: "Crossplane", level: 78, icon: "crossplane", projects: 9, experience: 1 },
      { name: "Serverless", level: 81, icon: "serverless", projects: 14, experience: 1 }
    ],
    color: "from-emerald-500 to-teal-700",
    bgGlow: "rgba(16, 185, 129, 0.15)",
    icon: "🤖"
  }
];