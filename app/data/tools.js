import { FaAws, FaMicrosoft, FaDocker, FaJenkins, FaGitAlt } from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiNginx } from "react-icons/si";



export const tools = [
  { name: "AWS", icon: <FaAws size={40} className="text-orange-500" /> },
  { name: "Azure", icon: <FaMicrosoft size={40} className="text-blue-500" /> },
  { name: "GCP", icon: <DiGoogleCloudPlatform size={40} className="text-red-500" /> },
  { name: "Docker", icon: <FaDocker size={40} className="text-blue-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={40} className="text-blue-500" /> },
  { name: "Terraform", icon: <SiTerraform size={40} className="text-purple-500" /> },
  { name: "Ansible", icon: <SiAnsible size={40} className="text-red-500" /> },
  { name: "Jenkins", icon: <FaJenkins size={40} className="text-red-400" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
  { name: "Prometheus", icon: <SiPrometheus size={40} className="text-red-500" /> },
  { name: "Grafana", icon: <SiGrafana size={40} className="text-orange-500" /> },
  { name: "NGINX", icon: <SiNginx size={40} className="text-green-500" /> }
];






// export const tools = [
//   { name: "AWS", icon: "FaAws", color: "text-orange-500" },
//   { name: "Azure", icon: "FaMicrosoft", color: "text-blue-500" },
//   { name: "GCP", icon: "DiGoogleCloudPlatform", color: "text-red-500" },
//   { name: "Docker", icon: "FaDocker", color: "text-blue-400" },
//   { name: "Kubernetes", icon: "SiKubernetes", color: "text-blue-500" },
//   { name: "Terraform", icon: "SiTerraform", color: "text-purple-500" },
//   { name: "Ansible", icon: "SiAnsible", color: "text-red-500" },
//   { name: "Jenkins", icon: "FaJenkins", color: "text-red-400" },
//   { name: "Git", icon: "FaGitAlt", color: "text-orange-600" },
//   { name: "Prometheus", icon: "SiPrometheus", color: "text-red-500" },
//   { name: "Grafana", icon: "SiGrafana", color: "text-orange-500" },
//   { name: "NGINX", icon: "SiNginx", color: "text-green-500" }
// ];
