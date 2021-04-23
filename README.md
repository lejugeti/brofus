# Brofus

## Description

Ce projet vise à développer une plateforme web en Angular pour aider les joueurs de Dofus dans le brisage de leurs items en jeu

## Installation
1. Télécharger cette archive
1. Ouvrir un promt node.js
1. Accéder au dossier 'your/path/brofus/'
1. Lancer la commande `npm install` pour installer les différents packages utiles pour le site
1. Lancer la commande `npm start` qui lancera la compilation du code
1. Ouvrir votre navigateur et accéder au site via http://localhost:4200
1. Enjoy

## Architecture du site
* './src/' contient tout le code et les composants relatifs à l'application web en elle-même
* './dofus_img_scraper/' contient le code pour déployer des scraper visant à récupérer les images du jeu
* './fit_model/' contient tout le code utilisé pour créer et entraîner des modèles de machine learning sur les données du jeu