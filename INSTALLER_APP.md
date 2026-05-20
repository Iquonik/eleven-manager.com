# ELEVEN Manager - installation mobile et PC

## Lien local PC

Ouvre :

http://127.0.0.1:8000/index.html?v=manager10-app

## Lien telephone sur le meme reseau

Ouvre dans Google Chrome sur le telephone :

http://192.168.1.35:8000/index.html?v=manager10-app

Le telephone doit etre connecte au meme Wi-Fi/reseau que le PC.

Si le lien ne marche pas, lance `autoriser-parefeu-eleven.ps1` en administrateur sur le PC, puis reessaie.

## Installation sur telephone

Avec un lien local en `http://192.168...`, Chrome peut proposer un raccourci via :

Menu Chrome > Ajouter a l'ecran d'accueil

Pour une vraie installation PWA complete avec mode hors-ligne, il faut publier le jeu sur une adresse HTTPS, par exemple GitHub Pages, Netlify ou Vercel.

## Version publique HTTPS

Une fois le dossier publie sur un hebergement HTTPS, le meme jeu sera installable comme une app depuis Chrome, Android, Edge ou le navigateur du PC.
