import { ReactNode } from "react";
import {
  SiDocker,
  SiLinux,
  SiMariadb,
  SiNginx,
  SiWireguard,
} from "react-icons/si";
import { Shield, Network, Server, Lock, Terminal, Router, FileText } from "lucide-react";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const iconClass = "h-4 w-4";

const PROJECT_SKILLS = {
  linux: {
    title: "Linux",
    bg: "black",
    fg: "white",
    icon: <SiLinux className={iconClass} />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker className={iconClass} />,
  },
  compose: {
    title: "Docker Compose",
    bg: "black",
    fg: "white",
    icon: <SiDocker className={iconClass} />,
  },
  mariadb: {
    title: "MariaDB",
    bg: "black",
    fg: "white",
    icon: <SiMariadb className={iconClass} />,
  },
  nginx: {
    title: "Nginx / Reverse-proxy",
    bg: "black",
    fg: "white",
    icon: <SiNginx className={iconClass} />,
  },
  wireguard: {
    title: "WireGuard",
    bg: "black",
    fg: "white",
    icon: <SiWireguard className={iconClass} />,
  },
  vpn: {
    title: "VPN",
    bg: "black",
    fg: "white",
    icon: <Lock className={iconClass} />,
  },
  fortinet: {
    title: "Fortinet",
    bg: "black",
    fg: "white",
    icon: <Shield className={iconClass} />,
  },
  network: {
    title: "Réseau",
    bg: "black",
    fg: "white",
    icon: <Router className={iconClass} />,
  },
  ha: {
    title: "Haute disponibilité",
    bg: "black",
    fg: "white",
    icon: <Server className={iconClass} />,
  },
  bash: {
    title: "Bash",
    bg: "black",
    fg: "white",
    icon: <Terminal className={iconClass} />,
  },
  pentest: {
    title: "Pentest",
    bg: "black",
    fg: "white",
    icon: <Shield className={iconClass} />,
  },
  reporting: {
    title: "Reporting",
    bg: "black",
    fg: "white",
    icon: <FileText className={iconClass} />,
  },
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  fallback?: string;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  logo?: string;
  screenshots: ProjectScreenshot[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "krapas-passbolt",
    category: "Cybersécurité / Infrastructure souveraine",
    title: "K'RAPAS — Passbolt CE auto-hébergé",
    logo: "/assets/project-logos/krapas.png",
    screenshots: [
      {
        src: "/assets/projects-screenshots/krapas-passbolt/schema-infra.jpg",
        fallback: "/assets/projects-screenshots/krapas-passbolt/schema-infra-placeholder.svg",
        alt: "Schéma réseau de l'infrastructure K'RAPAS",
      },
    ],
    live: "",
    github: "https://github.com/Alidrix/K-rapas_extension",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.compose,
        PROJECT_SKILLS.mariadb,
        PROJECT_SKILLS.nginx,
        PROJECT_SKILLS.wireguard,
        PROJECT_SKILLS.bash,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <p>
            Projet de mise en place d'une infrastructure Passbolt CE personnalisée,
            pensée pour un usage souverain, hébergée en environnement privé et
            maintenable dans le temps.
          </p>

          <p>
            Le travail couvre la conteneurisation, la personnalisation visuelle,
            la réplication MariaDB, les sauvegardes chiffrées, la préparation au
            failover et la documentation de passation.
          </p>

          <ul>
            <li>Déploiement Docker Compose avec Passbolt, MariaDB et reverse-proxy.</li>
            <li>Réplication et logique de continuité de service entre deux serveurs.</li>
            <li>Sauvegardes complètes, vérification d'intégrité et procédure de restauration.</li>
            <li>Adaptation du domaine, des extensions navigateur et des éléments de branding.</li>
          </ul>
        </div>
      );
    },
  },

  {
    id: "infra-portable-pentest",
    category: "Pentest interne / Projet RNCP7",
    title: "Infrastructure portable de pentest interne",
    logo: "/assets/project-logos/pentest.png",
    screenshots: [],
    live: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.wireguard,
        PROJECT_SKILLS.vpn,
        PROJECT_SKILLS.pentest,
        PROJECT_SKILLS.bash,
        PROJECT_SKILLS.reporting,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <p>
            Conception d'une infrastructure portable permettant de réaliser des
            tests de sécurité internes à distance, en connectant un équipement
            maîtrisé au réseau client via un tunnel VPN sécurisé.
          </p>

          <p>
            L'objectif est de faciliter les missions de pentest interne sans
            multiplier les déplacements, tout en conservant un environnement
            stable, traçable et reproductible.
          </p>

          <ul>
            <li>Architecture orientée VPN, routage et accès distant sécurisé.</li>
            <li>Environnement Linux avec outillage pentest conteneurisé.</li>
            <li>Prise en compte de l'isolation, de la sécurité et de la maintenabilité.</li>
            <li>Documentation technique dans le cadre d'un mémoire RNCP niveau 7.</li>
          </ul>
        </div>
      );
    },
  },

  {
    id: "projet-fortinet",
    category: "Réseau / Firewalling",
    title: "Architecture sécurité Fortinet",
    logo: "/assets/project-logos/fortinet.png",
    screenshots: [
      {
        src: "/assets/projects-screenshots/projet-fortinet/schema-reseau.png",
        fallback: "/assets/projects-screenshots/projet-fortinet/schema-reseau-placeholder.svg",
        alt: "Schéma réseau Fortinet",
      },
      {
        src: "/assets/projects-screenshots/projet-fortinet/matrice-flux.png",
        fallback: "/assets/projects-screenshots/projet-fortinet/detail.svg",
        alt: "Matrice de flux Fortinet",
      },
    ],
    live: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.fortinet,
        PROJECT_SKILLS.network,
        PROJECT_SKILLS.vpn,
        PROJECT_SKILLS.ha,
        PROJECT_SKILLS.reporting,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <p>
            Projet de conception et de sécurisation d'une architecture réseau
            basée sur l'écosystème Fortinet.
          </p>

          <p>
            L'approche couvre la segmentation, les règles de filtrage, les VPN,
            la haute disponibilité, le SD-WAN et la supervision centralisée.
          </p>

          <ul>
            <li>Définition de règles de sécurité et de profils de protection.</li>
            <li>Travail autour des VPN IPsec/SSL et des accès distants.</li>
            <li>Réflexion sur la haute disponibilité et la continuité de service.</li>
            <li>Production de livrables techniques exploitables.</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
