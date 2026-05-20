@echo off
cd /d "%~dp0"
echo.
echo ELEVEN Manager - serveur local reseau
echo.
echo Ouvre ce lien sur ce PC :
echo http://127.0.0.1:8000/index.html?v=manager10-app
echo.
echo Sur telephone, utilise l'adresse IPv4 de ce PC, par exemple :
echo http://192.168.1.35:8000/index.html?v=manager10-app
echo.
echo Si le telephone n'ouvre pas le lien, lance autoriser-parefeu-eleven.ps1 en administrateur.
echo.
py -m http.server 8000 --bind 0.0.0.0
