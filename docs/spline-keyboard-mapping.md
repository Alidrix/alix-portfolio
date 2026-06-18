# Mapping clavier Spline — Portfolio Alix

Ce document sert de référence pour remplacer les logos du clavier 3D Spline par les technologies principales du portfolio.

## Fichiers concernés

- Scène actuelle : `public/assets/skills-keyboard.spline`
- Scène finale attendue : `public/assets/skills-keyboard-alix.splinecode`
- Composant de chargement : `src/components/animated-background.tsx`
- Mapping texte/interaction : `src/data/constants.ts`

## Noms exacts des touches/objets Spline

Chaque touche interactive dans Spline doit avoir un nom correspondant exactement à une clé du mapping `SKILLS`.

```text
linux
active_directory
docker
docker_compose
wireguard
openvpn
fortigate
vmware
proxmox
nessus
burp
bloodhound
exegol
passbolt
sentinelone
infoblox
bash
git
vercel
```

## Technologies à afficher sur le clavier

| Nom affiché | Nom objet Spline | Source logo recommandée |
|---|---|---|
| Linux | `linux` | Simple Icons / Devicon |
| Active Directory | `active_directory` | Icône générique AD / Microsoft Entra-style, éviter les logos Microsoft non autorisés |
| Docker | `docker` | Simple Icons / Devicon |
| Docker Compose | `docker_compose` | Docker logo + label Compose ou pictogramme personnalisé |
| WireGuard | `wireguard` | Simple Icons |
| OpenVPN | `openvpn` | Simple Icons |
| FortiGate | `fortigate` | Logo officiel Fortinet/FortiGate si disponible |
| VMware | `vmware` | Logo officiel VMware/Broadcom si disponible |
| Proxmox | `proxmox` | Simple Icons / logo officiel Proxmox |
| Nessus | `nessus` | Logo officiel Tenable/Nessus si disponible |
| Burp Suite | `burp` | Logo officiel PortSwigger/Burp Suite si disponible |
| BloodHound | `bloodhound` | Logo officiel BloodHound/SpecterOps si disponible |
| Exegol | `exegol` | Logo officiel Exegol si disponible |
| Passbolt | `passbolt` | Logo officiel Passbolt |
| SentinelOne | `sentinelone` | Logo officiel SentinelOne si disponible |
| Infoblox | `infoblox` | Logo officiel Infoblox si disponible |
| Bash | `bash` | Simple Icons / Devicon |
| Git | `git` | Simple Icons / Devicon |
| Vercel | `vercel` | Simple Icons |

## Sources propres

- Simple Icons : https://simpleicons.org/
- Devicon : https://devicon.dev/
- Logos propriétaires : utiliser en priorité les brand assets officiels des éditeurs.

## Workflow Spline

1. Ouvrir `public/assets/skills-keyboard.spline` dans Spline.
2. Dupliquer la scène pour garder une sauvegarde.
3. Identifier les touches existantes.
4. Remplacer les logos/visuels de touches par les logos ci-dessus.
5. Renommer les objets interactifs avec les noms exacts listés dans ce document.
6. Vérifier que les variables Spline `heading` et `desc` existent si tu veux conserver le texte dynamique.
7. Exporter depuis Spline en runtime web `.splinecode`.
8. Déposer l'export ici : `public/assets/skills-keyboard-alix.splinecode`.
9. Modifier `src/components/animated-background.tsx` :

```tsx
scene="/assets/skills-keyboard-alix.splinecode"
```

## Point important

Le fichier `src/data/constants.ts` est déjà aligné avec ce mapping. Si un objet Spline ne porte pas exactement le bon nom, la touche pourra s'afficher visuellement, mais le hover/clic ne trouvera pas la compétence associée.
