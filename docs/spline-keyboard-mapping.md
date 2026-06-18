# Mapping clavier Spline — Portfolio Alix

Ce document sert de référence pour remplacer les logos du clavier 3D Spline par les technologies principales du portfolio.

## Fichiers concernés

- Scène actuelle : `public/assets/skills-keyboard.spline`
- Scène finale attendue : `public/assets/skills-keyboard-alix.splinecode`
- Composant de chargement : `src/components/animated-background.tsx`
- Mapping texte/interaction : `src/data/constants.ts`
- Logos prêts à importer : `public/assets/skills-keyboard-logos/`

La scène actuelle reste volontairement chargée tant qu'un export
`skills-keyboard-alix.splinecode` valide n'a pas été produit dans l'éditeur
Spline. Le format source `.spline` étant propriétaire, il ne doit pas être
modifié par remplacement binaire ou script non pris en charge.

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

| Nom affiché | Nom objet Spline | Fichier | Source |
|---|---|---|---|
| Linux | `linux` | `linux.svg` | Simple Icons |
| Active Directory | `active_directory` | `active_directory.svg` | Placeholder `AD` |
| Docker | `docker` | `docker.svg` | Simple Icons |
| Docker Compose | `docker_compose` | `docker_compose.svg` | Simple Icons (marque Docker) |
| WireGuard | `wireguard` | `wireguard.svg` | Simple Icons |
| OpenVPN | `openvpn` | `openvpn.svg` | Simple Icons |
| FortiGate | `fortigate` | `fortigate.svg` | Simple Icons (Fortinet) |
| VMware | `vmware` | `vmware.svg` | Simple Icons |
| Proxmox | `proxmox` | `proxmox.svg` | Simple Icons |
| Nessus | `nessus` | `nessus.svg` | Placeholder `NS` |
| Burp Suite | `burp` | `burp.svg` | Simple Icons |
| BloodHound | `bloodhound` | `bloodhound.svg` | Placeholder `BH` |
| Exegol | `exegol` | `exegol.svg` | Placeholder `EX` |
| Passbolt | `passbolt` | `passbolt.svg` | Simple Icons |
| SentinelOne | `sentinelone` | `sentinelone.svg` | Placeholder `S1` |
| Infoblox | `infoblox` | `infoblox.svg` | Placeholder `IB` |
| Bash | `bash` | `bash.svg` | Simple Icons (GNU Bash) |
| Git | `git` | `git.svg` | Simple Icons |
| Vercel | `vercel` | `vercel.svg` | Simple Icons |

## Sources propres

- Simple Icons : https://simpleicons.org/
- Devicon : https://devicon.dev/
- Logos propriétaires : utiliser en priorité les brand assets officiels des éditeurs.

## Workflow Spline

1. Ouvrir `public/assets/skills-keyboard.spline` dans Spline.
2. Dupliquer la scène pour garder une sauvegarde.
3. Identifier les touches existantes.
4. Importer les 19 SVG de `public/assets/skills-keyboard-logos/`.
5. Remplacer les logos/visuels des touches sans renommer les groupes parents par
   inadvertance.
6. Renommer les objets interactifs avec les noms exacts listés dans ce document.
   Les underscores sont obligatoires : ne pas utiliser `active-directory`,
   `docker-compose` ou `burp-suite`.
7. Vérifier que chaque objet reçoit bien les événements `mouseHover`, `keyDown`
   et `keyUp` attendus par le composant.
8. Vérifier que les variables Spline `heading` et `desc` existent pour conserver
   le texte dynamique.
9. Tester les 19 touches dans l'aperçu Spline.
10. Exporter depuis Spline en runtime web `.splinecode`.
11. Déposer l'export ici : `public/assets/skills-keyboard-alix.splinecode`.
12. Modifier `src/components/animated-background.tsx` uniquement après avoir
    vérifié que le fichier exporté fonctionne :

```tsx
scene="/assets/skills-keyboard-alix.splinecode"
```

## Point important

Le fichier `src/data/constants.ts` est aligné avec ce mapping et référence les
19 SVG du dossier de logos. Si un objet Spline ne porte pas exactement le bon
nom, la touche pourra s'afficher visuellement, mais le hover/clic ne trouvera
pas la compétence associée.

Au 18 juin 2026, `skills-keyboard-alix.splinecode` n'est pas présent dans le
dépôt : la substitution de scène reste donc une étape manuelle et le composant
continue de charger `skills-keyboard.spline` afin de ne pas casser le portfolio.
