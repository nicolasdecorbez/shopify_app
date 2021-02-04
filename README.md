# Apllication Shopify - Passe ta commande !

Pour ce projet visant à travailler pour la première fois directement avec une entreprise, nous devions proposer une solution à notre partenaire ([monmarche.drindrin.fr](https://monmarche.drindrin.fr)) afin de résoudre la problématique suivante :

```
Si le client mets plusieurs produits de plusieurs fournisseurs différents, il n'est pas possible de passer la commande. Il se doit de faire plusieurs commande afin de récupérer tous les produits souhaités.

Vous devrez trouver une solution permettant au consommateur d'effectuer une seule commande contenant des articles de plusieurs fournisseurs différents.
```

Nous avons donc choisi de créer une application Shopify (le site web original ayant été créé sur cette plateforme) en React et NodeJS avec pour objectif de reproduire le comportement du panier actuel, et de l'améliorer en lui offrant de nouvelles fonctionnalités.

Pour cela, nous avons donc dû étudier le site web afin de comprendre au mieux sont fonctionnement, afin d'ensuite pouvoir essayer de recréer au mieux une application qui puisse convenir.

## Réalisation de l'application

Pour créer notre application, nous avons utilisé la [Shopify-App-CLI](https://github.com/Shopify/shopify-app-cli) pour faciliter l'intégration de notre app. Nous avons ensuite appris les bases puis utilisé les langages suivants :

- [NodeJS](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [GraphQL](https://graphql.org/)

Et j'ai également utilisé des éléments de la librairie [Polaris](https://polaris.shopify.com/), dévelopée par Shopify.

## Aperçu de l'application

Ci-dessous, vous avez la page d'accueil de notre application, où nous pouvons gérer :
- Nos points de ventes, où nous définissons des horaires de retrait.
- Un *sample* de panier, où nous pourrons tester notre nouvelle application.

![acceuil](https://github.com/nicolasdecorbez/shopify_app/blob/main/img/1.png?raw=true)

Dès que nous avons cliqué sur un point de vente, nous arrivons sur cette page où nous définissons une date et une heure de retrait de nos produits.

![setup](https://github.com/nicolasdecorbez/shopify_app/blob/main/img/2.png?raw=true)

Passons maintenant au panier ; ici, on selectionne 3 produits différents :

![cart](https://github.com/nicolasdecorbez/shopify_app/blob/main/img/3.png?raw=true)

Et enfin, nous avons plusieurs *date picker* pour définir plusieurs jours de retrait, tout en ne gardant qu'une seule commande.

![end](https://github.com/nicolasdecorbez/shopify_app/blob/main/img/4.png?raw=true)
---

> Ci-dessous, je vous joins le README.md de Shopify-App-CLI, qui continent de plus amples informations.

---

# Shopify App Node

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![Build Status](https://travis-ci.com/Shopify/shopify-app-node.svg?branch=master)](https://travis-ci.com/Shopify/shopify-app-node)

Boilerplate to create an embedded Shopify app made with Node, [Next.js](https://nextjs.org/), [Shopify-koa-auth](https://github.com/Shopify/quilt/tree/master/packages/koa-shopify-auth), [Polaris](https://github.com/Shopify/polaris-react), and [App Bridge React](https://shopify.dev/tools/app-bridge/react-components).

## Installation

Using the [Shopify-App-CLI](https://github.com/Shopify/shopify-app-cli) run:

```sh
~/ $ shopify create project APP_NAME
```

Or, fork and clone repo

## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.

## Usage

This repository is used by [Shopify-App-CLI](https://github.com/Shopify/shopify-app-cli) as a scaffold for Node apps. You can clone or fork it yourself, but it’s faster and easier to use Shopify App CLI, which handles additional routine development tasks for you.

## License

This respository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
