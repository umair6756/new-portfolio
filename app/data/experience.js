export const experiences = [
  {
    id: 1,
    role: "DevOps Engineer",
    company: "Novasinc Technology",
    period: "2024 - Present",
    location: "Lahore, Pakistan",
    icon: "FaAzure",
    highlights: [
      "Developed CI/CD pipelines for microservices using Azure DevOps and Argo CD, improving release speed by 20%",
      "Built serverless architectures with Python and Azure Functions with Blob Storage integration",
      "Automated infrastructure provisioning using Terraform and Python SDK",
      "Implemented monitoring with Azure Monitor and Application Insights",
      "Managed AKS clusters with auto-scaling and GitOps deployments",
      "Reduced storage costs by 30% through automated cleanup functions"
    ],
    tech: [
      { name: "Azure", icon: "FaAzure" },
      { name: "Terraform", icon: "SiTerraform" },
      { name: "Kubernetes", icon: "SiKubernetes" },
      { name: "Python", icon: "FaPython" },
      { name: "ArgoCD", icon: "SiArgo" },
      { name: "CI/CD", icon: "FaJenkins" }
    ],
    metrics: [
      { value: "20%", label: "Release Speed" },
      { value: "30%", label: "Cost Reduction" },
      { value: "99.9%", label: "Uptime" }
    ]
  },
  {
    id: 2,
    role: "Linux System Administrator",
    company: "Expert-B",
    period: "2023 - 2024",
    location: "Kasur, Pakistan",
    icon: "FaLinux",
    highlights: [
      "Managed RHEL 7/8 systems with security hardening and patching",
      "Configured LVM, RAID for high-performance storage solutions",
      "Deployed and maintained Apache, DNS, NFS, and FTP services",
      "Implemented backup solutions using rsync and cron jobs",
      "Automated tasks with shell scripts improving efficiency by 40%",
      "Configured iptables for advanced network security"
    ],
    tech: [
      { name: "Linux", icon: "FaLinux" },
      { name: "Bash", icon: "FaTerminal" },
      { name: "Networking", icon: "FaNetworkWired" },
      { name: "Security", icon: "FaShieldAlt" },
      { name: "Automation", icon: "FaRobot" }
    ],
    metrics: [
      { value: "40%", label: "Efficiency Gain" },
      { value: "100%", label: "Uptime" },
      { value: "50+", label: "Scripts" }
    ]
  }
];