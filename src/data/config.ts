const config = {
  title: "Alix Marchal | Ingénieur Infrastructure, Réseau & Cybersécurité",

  description: {
    long: "Portfolio d'Alix Marchal, profil hybride en infrastructure, réseau et cybersécurité. Spécialisé dans la construction, la sécurisation et l’audit d’environnements techniques : systèmes Linux/Windows, Active Directory, Docker, VPN, virtualisation, firewalls, haute disponibilité, pentest interne/externe et restitution de rapports exploitables. Mon approche : comprendre les flux, tester avec méthode, prouver l’impact et transformer les constats techniques en plans d’action concrets.",
    short:
      "Portfolio d'Alix Marchal, ingénieur infrastructure, réseau et cybersécurité orienté sécurité offensive, défense opérationnelle et projets techniques.",
  },

  keywords: [
    "Alix Marchal",
    "portfolio cybersécurité",
    "ingénieur cybersécurité",
    "ingénieur infrastructure",
    "ingénieur réseau",
    "pentest",
    "audit de sécurité",
    "sécurité offensive",
    "sécurité défensive",
    "Active Directory",
    "Linux",
    "Docker",
    "Docker Compose",
    "WireGuard",
    "OpenVPN",
    "Fortinet",
    "FortiGate",
    "VMware",
    "Proxmox",
    "Nessus",
    "Burp Suite",
    "BloodHound",
    "Exegol",
    "Passbolt",
    "K'RAPAS",
    "haute disponibilité",
    "infrastructure réseau",
    "cybersecurity",
    "network security",
  ],

  author: "Alix Marchal",

  email: "pro.amarchal@proton.me",

  // Domaine temporaire en local.
  // À remplacer plus tard par ton URL Vercel ou ton domaine final.
  site: "http://localhost:3000",

  // Bouton GitHub stars dans le header.
  // Repo cible recommandé quand tu pousseras ta version modifiée.
  githubUsername: "Alidrix",
  githubRepo: "alix-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/alix-marchal-2357711a1/",
    instagram: "",
    facebook: "",
    github: "https://github.com/Alidrix",
  },
};

export { config };
