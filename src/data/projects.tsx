import { ReactNode } from "react";
import {
  SiDocker,
  SiLinux,
  SiMariadb,
  SiNginx,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiWireguard,
  SiGit,
} from "react-icons/si";
import { Shield, Network, Server, Lock, Terminal, Database, Router, FileText } from "lucide-react";

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
  activeDirectory: {
    title: "Active Directory",
    bg: "black",
    fg: "white",
    icon: <Network className={iconClass} />,
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
  database: {
    title: "Base de données",
    bg: "black",
    fg: "white",
    icon: <Database className={iconClass} />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <SiNextdotjs className={iconClass} />,
  },
  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript className={iconClass} />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss className={iconClass} />,
  },
  git: {
    title: "Git",
    bg: "black",
    fg: "white",
    icon: <SiGit className={iconClass} />,
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

  {
    id: "haute-disponibilite",
    category: "Infrastructure / Continuité de service",
    title: "Haute disponibilité et redondance",
    screenshots: [],
    live: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.network,
        PROJECT_SKILLS.ha,
        PROJECT_SKILLS.nginx,
        PROJECT_SKILLS.bash,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <p>
            Mise en place d'une logique de continuité de service avec redondance
            réseau et applicative.
          </p>

          <p>
            Le projet met l'accent sur la disponibilité, la bascule contrôlée et
            la documentation des scénarios de panne.
          </p>

          <ul>
            <li>Conception actif/passif et logique d'IP virtuelle.</li>
            <li>Tests de bascule et validation des comportements attendus.</li>
            <li>Documentation des procédures de reprise.</li>
            <li>Approche orientée exploitation et maintenabilité.</li>
          </ul>
        </div>
      );
    },
  },

  {
    id: "vpn-openvpn-wireguard",
    category: "VPN / Accès distant sécurisé",
    title: "OpenVPN & WireGuard",
    screenshots: [],
    live: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.vpn,
        PROJECT_SKILLS.wireguard,
        PROJECT_SKILLS.network,
        PROJECT_SKILLS.bash,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <p>
            Mise en place de solutions VPN pour sécuriser les accès distants et
            interconnecter des environnements techniques.
          </p>

          <ul>
            <li>Configuration de tunnels VPN et gestion des routes.</li>
            <li>Prise en compte des flux, des règles firewall et de l'exposition réseau.</li>
            <li>Tests de connectivité, diagnostic et correction des problèmes d'accès.</li>
            <li>Utilisation dans des contextes de lab, d'exploitation et de pentest.</li>
          </ul>
        </div>
      );
    },
  },

  {
    id: "puppet-fail2ban",
    category: "Automatisation / Durcissement",
    title: "Puppet & Fail2ban",
    screenshots: [],
    live: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.bash,
        PROJECT_SKILLS.reporting,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <p>
            Projet orienté automatisation et durcissement de systèmes Linux avec
            déploiement de règles de protection et de configuration.
          </p>

          <ul>
            <li>Automatisation de configurations système.</li>
            <li>Déploiement et adaptation de Fail2ban.</li>
            <li>Réduction de l'exposition aux tentatives d'authentification répétées.</li>
            <li>Documentation des choix techniques et des bénéfices sécurité.</li>
          </ul>
        </div>
      );
    },
  },

  {
    id: "bitwarden-docker",
    category: "Gestion des secrets / Docker",
    title: "Gestionnaire de mots de passe conteneurisé",
    screenshots: [],
    live: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.compose,
        PROJECT_SKILLS.nginx,
        PROJECT_SKILLS.database,
        PROJECT_SKILLS.bash,
      ],
    },
    get content() {
      return (
        <div className="space-y-4">
          <p>
            Déploiement d'un gestionnaire de mots de passe en environnement
            conteneurisé, avec réflexion sur l'exposition, la sauvegarde et
            l'exploitation au quotidien.
          </p>

          <ul>
            <li>Déploiement Docker et structuration des volumes.</li>
            <li>Reverse-proxy, TLS et exposition contrôlée.</li>
            <li>Sauvegarde des données et logique de restauration.</li>
            <li>Approche orientée sécurité des accès et des secrets.</li>
          </ul>
        </div>
      );
    },
  },

  {
    id: "portfolio-alix",
    category: "Portfolio / Présence professionnelle",
    title: "Portfolio Alix Marchal",
    screenshots: [],
    live: "https://alix-portfolio-livid.vercel.app/",
    github: "https://github.com/Alidrix/alix-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.git],
    },
    get content() {
      return (
        <div className="space-y-4">
          <p>
            Refonte complète de mon ancien portfolio vers une version plus moderne,
            plus claire et plus adaptée à une consultation par des recruteurs.
          </p>

          <p>
            L'objectif est de présenter mon profil, mes compétences, mes projets
            cyber/infra et mon évolution professionnelle dans une interface plus
            professionnelle et maintenable.
          </p>

          <ul>
            <li>Personnalisation d'un portfolio Next.js / TypeScript.</li>
            <li>Traduction complète en français.</li>
            <li>Mise en avant des projets infrastructure, réseau et cybersécurité.</li>
            <li>Préparation au déploiement GitHub puis Vercel.</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
