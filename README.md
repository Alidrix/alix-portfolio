# Portfolio — Alix Marchal

Portfolio personnel d'Alix Marchal, orienté infrastructure, réseau et cybersécurité.

Ce site présente mon profil, mes compétences, mes expériences et plusieurs projets techniques liés à l'administration système/réseau, la sécurité offensive, la défense opérationnelle, Docker, VPN, haute disponibilité, audit de vulnérabilités et pentest.

## Objectif

L'objectif de ce portfolio est de proposer une vitrine professionnelle moderne, claire et maintenable pour les recruteurs, entreprises et contacts techniques souhaitant consulter mon parcours.

## Stack technique

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Spline
- pnpm
- Vercel

## Sections principales

- Accueil
- Compétences
- Expérience
- Projets
- CV
- Contact

## Projets mis en avant

- K'RAPAS — Passbolt CE auto-hébergé
- Infrastructure portable de pentest interne
- Architecture sécurité Fortinet
- Haute disponibilité et redondance
- OpenVPN & WireGuard
- Puppet & Fail2ban
- Gestionnaire de mots de passe conteneurisé
- Portfolio Alix Marchal

## Installation locale

```bash
git clone git@github.com:Alidrix/alix-portfolio.git
cd alix-portfolio

pnpm install
pnpm dev
```

Le site sera disponible en local sur :

```text
http://localhost:3000
```

## Build de production

```bash
pnpm build
pnpm start
```

## Variables d'environnement

Pour le formulaire de contact, le projet peut utiliser Resend.

Exemple de `.env.local` :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=Portfolio Alix Marchal <contact@ton-domaine.fr>
```

Sans `RESEND_API_KEY`, le site peut être buildé, mais le formulaire de contact renverra une erreur indiquant que l'envoi est désactivé.

## Déploiement

Le projet est prévu pour être déployé sur Vercel via un dépôt GitHub connecté.

## Notes

Ce portfolio est basé sur une version personnalisée du projet open source `naresh-khatri/3d-portfolio`.

Le design, les textes, les projets, les compétences et les contenus ont été adaptés pour correspondre au profil d'Alix Marchal.

## Auteur

Alix Marchal  
GitHub : Alidrix  
LinkedIn : https://www.linkedin.com/in/alix-marchal-2357711a1/
