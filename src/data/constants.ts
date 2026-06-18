export enum SkillNames {
  LINUX = "linux",
  ACTIVE_DIRECTORY = "active_directory",
  DOCKER = "docker",
  DOCKER_COMPOSE = "docker_compose",
  WIREGUARD = "wireguard",
  OPENVPN = "openvpn",
  FORTIGATE = "fortigate",
  VMWARE = "vmware",
  PROXMOX = "proxmox",
  NESSUS = "nessus",
  BURP = "burp",
  BLOODHOUND = "bloodhound",
  EXEGOL = "exegol",
  PASSBOLT = "passbolt",
  SENTINELONE = "sentinelone",
  INFOBLOX = "infoblox",
  BASH = "bash",
  GIT = "git",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const svgIcon = (label: string, color: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="26" fill="#0f172a"/>
      <circle cx="60" cy="60" r="38" fill="${color}" opacity="0.16"/>
      <text x="60" y="68" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800" fill="${color}">
        ${label}
      </text>
    </svg>
  `)}`;

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.LINUX]: {
    id: 1,
    name: "linux",
    label: "Linux",
    shortDescription:
      "Administration système, durcissement, services, supervision et diagnostic.",
    color: "#ffffff",
    icon: svgIcon("LX", "#ffffff"),
  },

  [SkillNames.ACTIVE_DIRECTORY]: {
    id: 2,
    name: "active_directory",
    label: "Active Directory",
    shortDescription:
      "Analyse des comptes, groupes, droits, GPO et chemins d'attaque en environnement Microsoft.",
    color: "#38bdf8",
    icon: svgIcon("AD", "#38bdf8"),
  },

  [SkillNames.DOCKER]: {
    id: 3,
    name: "docker",
    label: "Docker",
    shortDescription:
      "Conteneurisation, déploiement applicatif, isolation et maintien en condition opérationnelle.",
    color: "#2496ed",
    icon: svgIcon("DK", "#2496ed"),
  },

  [SkillNames.DOCKER_COMPOSE]: {
    id: 4,
    name: "docker_compose",
    label: "Docker Compose",
    shortDescription:
      "Orchestration locale de services, stacks applicatives et environnements reproductibles.",
    color: "#2563eb",
    icon: svgIcon("DC", "#2563eb"),
  },

  [SkillNames.WIREGUARD]: {
    id: 5,
    name: "wireguard",
    label: "WireGuard",
    shortDescription:
      "Tunnels VPN modernes, accès distant sécurisé et liaisons site-à-site.",
    color: "#ef4444",
    icon: svgIcon("WG", "#ef4444"),
  },

  [SkillNames.OPENVPN]: {
    id: 6,
    name: "openvpn",
    label: "OpenVPN",
    shortDescription:
      "Déploiement VPN, certificats, routage et sécurisation des connexions distantes.",
    color: "#fb923c",
    icon: svgIcon("VPN", "#fb923c"),
  },

  [SkillNames.FORTIGATE]: {
    id: 7,
    name: "fortigate",
    label: "FortiGate",
    shortDescription:
      "Filtrage, VPN, segmentation, haute disponibilité, SD-WAN et politiques de sécurité.",
    color: "#ef4444",
    icon: svgIcon("FGT", "#ef4444"),
  },

  [SkillNames.VMWARE]: {
    id: 8,
    name: "vmware",
    label: "VMware",
    shortDescription:
      "Virtualisation, exploitation d'environnements serveur et continuité de service.",
    color: "#f97316",
    icon: svgIcon("VM", "#f97316"),
  },

  [SkillNames.PROXMOX]: {
    id: 9,
    name: "proxmox",
    label: "Proxmox",
    shortDescription:
      "Virtualisation open source, laboratoires techniques, snapshots et environnements de test.",
    color: "#fb923c",
    icon: svgIcon("PX", "#fb923c"),
  },

  [SkillNames.NESSUS]: {
    id: 10,
    name: "nessus",
    label: "Nessus",
    shortDescription:
      "Scan de vulnérabilités, qualification des risques et priorisation des remédiations.",
    color: "#0ea5e9",
    icon: svgIcon("NS", "#0ea5e9"),
  },

  [SkillNames.BURP]: {
    id: 11,
    name: "burp",
    label: "Burp Suite",
    shortDescription:
      "Analyse web, interception HTTP, validation de vulnérabilités et preuves techniques.",
    color: "#f97316",
    icon: svgIcon("BP", "#f97316"),
  },

  [SkillNames.BLOODHOUND]: {
    id: 12,
    name: "bloodhound",
    label: "BloodHound",
    shortDescription:
      "Analyse Active Directory, chemins d'attaque, relations, privilèges et escalades possibles.",
    color: "#ef4444",
    icon: svgIcon("BH", "#ef4444"),
  },

  [SkillNames.EXEGOL]: {
    id: 13,
    name: "exegol",
    label: "Exegol",
    shortDescription:
      "Environnement de pentest conteneurisé, outillage offensif et reproductibilité.",
    color: "#a855f7",
    icon: svgIcon("EX", "#a855f7"),
  },

  [SkillNames.PASSBOLT]: {
    id: 14,
    name: "passbolt",
    label: "Passbolt",
    shortDescription:
      "Gestionnaire de mots de passe collaboratif, auto-hébergement et continuité de service.",
    color: "#22c55e",
    icon: svgIcon("PB", "#22c55e"),
  },

  [SkillNames.SENTINELONE]: {
    id: 15,
    name: "sentinelone",
    label: "SentinelOne",
    shortDescription:
      "Culture EDR, protection endpoint, détection, investigation et réponse aux menaces.",
    color: "#a78bfa",
    icon: svgIcon("S1", "#a78bfa"),
  },

  [SkillNames.INFOBLOX]: {
    id: 16,
    name: "infoblox",
    label: "Infoblox",
    shortDescription:
      "DDI, DNS, DHCP, IPAM, gouvernance réseau et visibilité des ressources.",
    color: "#60a5fa",
    icon: svgIcon("IB", "#60a5fa"),
  },

  [SkillNames.BASH]: {
    id: 17,
    name: "bash",
    label: "Bash",
    shortDescription:
      "Scripts d'automatisation, diagnostics système, sauvegardes et exploitation Linux.",
    color: "#84cc16",
    icon: svgIcon("SH", "#84cc16"),
  },

  [SkillNames.GIT]: {
    id: 18,
    name: "git",
    label: "Git",
    shortDescription:
      "Versioning, branches, suivi des changements et gestion propre du code.",
    color: "#f97316",
    icon: svgIcon("GIT", "#f97316"),
  },

  [SkillNames.VERCEL]: {
    id: 19,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Déploiement web, preview deployments et publication de projets front-end.",
    color: "#ffffff",
    icon: svgIcon("VC", "#ffffff"),
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Nov. 2025",
    endDate: "Aujourd'hui",
    title: "Chargé de mission en cybersécurité",
    company: "CCIN — C'Chartres Innovations Numériques",
    description: [
      "Développement d'une activité cybersécurité autour de l'audit, du pentest, de la sensibilisation et de l'accompagnement technique.",
      "Conception d'offres et de supports pour des missions de test d'intrusion interne, externe et d'analyse de vulnérabilités.",
      "Mise en place d'un projet Passbolt CE souverain avec Docker, MariaDB, Traefik, réplication, sauvegardes chiffrées et logique de failover.",
      "Production de livrables techniques orientés remédiation : constats, preuves, impacts, priorisation et recommandations actionnables.",
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.DOCKER,
      SkillNames.DOCKER_COMPOSE,
      SkillNames.PASSBOLT,
      SkillNames.WIREGUARD,
      SkillNames.NESSUS,
      SkillNames.BURP,
      SkillNames.BASH,
      SkillNames.GIT,
      SkillNames.VERCEL,
    ],
  },

  {
    id: 2,
    startDate: "Sept. 2022",
    endDate: "Sept. 2025",
    title: "Alternant cybersécurité, infrastructure & réseau",
    company: "Exclusive Networks",
    description: [
      "Participation à des projets liés à l'infrastructure, au réseau et à la cybersécurité dans un environnement professionnel orienté solutions de sécurité.",
      "Montée en compétence sur les environnements système, réseau, virtualisation, VPN, firewalling, EDR et services d'entreprise.",
      "Travaux autour d'Active Directory, Fortinet, SentinelOne, Infoblox et architectures sécurisées.",
      "Développement d'une culture offensive et défensive : compréhension des chemins d'attaque, durcissement, preuves techniques et restitution claire.",
    ],
    skills: [
      SkillNames.ACTIVE_DIRECTORY,
      SkillNames.FORTIGATE,
      SkillNames.SENTINELONE,
      SkillNames.INFOBLOX,
      SkillNames.VMWARE,
      SkillNames.PROXMOX,
      SkillNames.BLOODHOUND,
      SkillNames.LINUX,
    ],
  },

  {
    id: 3,
    startDate: "2024",
    endDate: "2025",
    title: "Projet RNCP7 — Infrastructure portable de pentest interne",
    company: "Projet de mémoire cybersécurité",
    description: [
      "Conception d'une infrastructure portable et sécurisée permettant de réaliser des tests de sécurité internes à distance.",
      "Mise en place d'un système connectable via VPN au réseau client afin d'exécuter des outils de test dans un environnement maîtrisé.",
      "Travail sur l'isolation, le routage, l'administration Linux, Docker, l'outillage pentest et la reproductibilité des environnements.",
      "Objectif : faciliter les missions internes tout en gardant une approche propre, traçable et exploitable par les équipes techniques.",
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.DOCKER,
      SkillNames.WIREGUARD,
      SkillNames.OPENVPN,
      SkillNames.EXEGOL,
      SkillNames.NESSUS,
      SkillNames.BURP,
      SkillNames.BASH,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Mode clair activé : attention, ça éclaire fort.",
    "Tu viens de passer côté lumière. Prévois les lunettes.",
    "Mode clair : idéal pour relire un rapport sans plisser les yeux.",
    "La lumière est activée. Ton écran vient de gagner +10 en visibilité.",
    "Mode clair lancé. Simple, net, efficace.",
  ],
  dark: [
    "Retour au mode sombre. Beaucoup mieux pour les yeux.",
    "Mode sombre activé : ambiance SOC de nuit.",
    "Bienvenue dans l'ombre. Les logs sont plus lisibles comme ça.",
    "Mode sombre : le choix naturel des gens qui vivent dans un terminal.",
    "La lumière est coupée. On peut reprendre le travail sérieusement.",
  ],
};
