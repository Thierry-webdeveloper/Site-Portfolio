<img src="src/assets/portrait.webp" width="200" alt="Portrait de Thierry Pollastri">

# Portfolio — Thierry Pollastri

Mon portfolio d'intégrateur web : mes compétences, mes projets et mon parcours, présentés aux recruteurs comme aux futurs clients.

Projet 12 de la formation **Intégrateur Web** (OpenClassrooms).

## 🎯 Description

Conception, développement et mise en ligne d'un portfolio professionnel,
dernier projet de la formation. Le site présente mes réalisations,
mes compétences et mon parcours. Il est pensé pour être rapide,
accessible et bien référencé, en version mobile comme sur ordinateur.

## 🛠️ Technologies

- Astro (site statique, architecture en îlots)
- React (îlot interactif : filtre des projets)
- Sass (SCSS)
- Déploiement : GitHub Pages via GitHub Actions
- Qualité : Lighthouse en ligne 98 à 100 en performance, 100 en accessibilité, bonnes pratiques et SEO

## 🚀 Lancer le projet

Prérequis : Node.js 22.12 ou plus récent.

| Commande          | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Installe les dépendances                      |
| `npm run dev`     | Serveur de développement sur `localhost:4321` |
| `npm run build`   | Génère le site dans `dist/`                   |
| `npm run preview` | Prévisualise la version générée               |

## 📁 Structure

```
public/               Fichiers copiés tels quels (favicon, image de partage, vérification Google)
src/
  assets/             Images optimisées par Astro
  components/         Composants Astro et îlots React
  content/projets/    Fiches projets en Markdown
  layouts/            Gabarit commun des pages
  pages/              Une page par fichier (routage)
  styles/             SCSS : variables, mixins, styles globaux
```

## 🔗 Liens

- **Site en ligne** : https://thierry-webdeveloper.github.io/
- **Repo GitHub** : https://github.com/Thierry-webdeveloper/thierry-webdeveloper.github.io

## 🚧 Statut

En ligne.

## 🙏 Crédits

- Icônes d'interface : [Feather Icons](https://feathericons.com/) (licence MIT)
- Logos GitHub et LinkedIn : [Simple Icons](https://simpleicons.org/) (licence CC0)
- Police : [Noto Serif Display](https://fonts.google.com/noto/specimen/Noto+Serif+Display) (licence SIL Open Font License), hébergée sur le site via [Fontsource](https://fontsource.org/)
- Illustration de la page 404 : image générée avec ChatGPT à partir d'une photographie personnelle
- Icône smoking-pipe (page 404) : dessin original

## 👤 Auteur

Thierry Pollastri — [contact@pollastri.fr](mailto:contact@pollastri.fr)

---

_Thierry-webdeveloper — Formation OpenClassrooms — Intégrateur Web_
