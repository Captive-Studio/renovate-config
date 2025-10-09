# 🧰 Captive Renovate Configuration

*(@Captive-Studio/renovate-config)*

[![License][license-image]][license-url]

> Configuration partagée pour **Renovate**, optimisée pour les projets Captive.
> Elle vise à automatiser les mises à jour de dépendances **en toute sécurité**, sans submerger les équipes.

---

## 🚀 Démarrage rapide

### 1. Installer Renovate

* [Installer pour GitHub](https://docs.renovatebot.com/install-github-app/)
* [Installer pour GitLab](https://docs.renovatebot.com/install-gitlab-app/)

Une fois installé :

1. Rendez-vous sur le [tableau de bord Renovate](https://app.renovatebot.com/dashboard)
2. Ajoutez votre projet
3. Acceptez la première Pull Request de configuration proposée par Renovate Bot

---

## ✨ Fonctionnalités principales

* ✅ **Automerge sécurisé**

  * Activé uniquement lorsque les dépendances sont validées par la CI
  * Compatible avec les projets respectant le *semantic versioning*

* 🚄 **Productivité sans surcharge**

  * Limite le nombre de PR simultanées
  * Priorise la stabilité et la lisibilité du flux de mises à jour

* 🧩 **Technologies principales supportées**

  * Ruby
  * Node.js
  * Docker

* 🗓️ **Planification intelligente**

  * Exécution en dehors des heures ouvrées (nuits et week-ends)

---

## ⚙️ Utilisation

### Prérequis

* Renovate doit être installé et avoir les autorisations nécessaires sur le dépôt.

---

### 🧩 PHASE 1 — Configuration initiale

*⏱️ Durée estimée : 5 minutes à 1 jour selon le planning Renovate*

🎯 **Objectif :**
Configurer Renovate pour :

* Créer automatiquement des PR de mise à jour
* Limiter leur volume selon la capacité de l’équipe
* Planifier leur exécution hors des heures de travail

#### 1. Étendre la configuration partagée

**Pour une application** (non réutilisée ailleurs) :

```jsonc
// renovate.json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>Captive-Studio/renovate-config:application"
  ]
}
```

**Pour une bibliothèque** (réutilisée dans d’autres projets) :

```jsonc
// renovate.json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>Captive-Studio/renovate-config:library"
  ]
}
```

#### 2. Configurer les propriétaires (`CODEOWNERS`)

> ⚠️ Sans propriétaires définis, les PR de maintenance risquent d’être ignorées.

Utilisez des références personnelles (`@prenom.nom`) ou d’équipe (`@NomEquipe`).
👉 Exemple : [CODEOWNERS](./CODEOWNERS)

#### 3. Limiter la concurrence des PR (optionnel)

*Utile pour les anciens projets peu maintenus.*

```diff
{
  "extends": [
    "github>Captive-Studio/renovate-config:...",
-   // configuration standard
+   "github>Captive-Studio/renovate-config:rate-limited"
  ]
}
```

> Cette variante limite le nombre de PR simultanées à 6 pour éviter l’encombrement.

#### 4. Vérifier la création du ticket “Dependency Dashboard”

Ce ticket est automatiquement généré sur GitHub/GitLab après quelques minutes.

#### 5. 🎉 Laissez Renovate travailler !

Les premières PR apparaîtront selon la planification définie.

---

### 🤖 PHASE 2 — Automatisation et réduction du bruit

*⏱️ Durée estimée : 1 jour à 1 semaine*

🎯 **Objectif :**

* Automatiser un maximum de PR (`automerge: true`)
* Éviter les PR dormantes de plus de 24h
* Prioriser la sécurité et la non-régression

#### Étapes recommandées :

1. Ajouter des tests (unitaires, end-to-end) permettant de garantir la fiabilité des merges automatiques
2. Activer `automerge` dans le projet ou dans la configuration partagée
3. Rebaser une PR via Renovate et vérifier que le merge automatique est bien activé

---

### 🔁 PHASE 3 — Maintenance continue

🎯 **Objectif :**
Maintenir le nombre de dépendances obsolètes aussi proche de zéro que possible.

#### Conditions préalables :

* Le stock de dépendances obsolètes est déjà faible
* L’équipe peut absorber toutes les PR générées

#### Exemple :

```diff
{
  "extends": [
    "github>Captive-Studio/renovate-config:...",
-   "github>Captive-Studio/renovate-config:rate-limited"
+   // suppression de la limitation
  ]
}
```

📘 Pour aller plus loin :
[Documentation complète de Renovate](https://docs.renovatebot.com/configuration-options/)

---

## 📚 Documentation complémentaire

* [Documentation officielle Renovate](https://docs.renovatebot.com/)
* [Configuration JSON Schema](https://docs.renovatebot.com/renovate-schema/)
* [Tableau de bord Renovate](https://app.renovatebot.com/dashboard)

---

## 🧩 Bonnes pratiques Captive

* ✅ Toujours définir un responsable via `CODEOWNERS`
* ✅ Garder le tableau de bord “Dependency Dashboard” à jour
* ✅ Ne pas ignorer les PR obsolètes
* ✅ Supprimer les limitations une fois la stabilité atteinte

---

## 🪪 Licence

[MIT][license-url] © Captive Studio

---

[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: ../../LICENSE
