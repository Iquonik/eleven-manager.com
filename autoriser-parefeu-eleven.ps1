$ruleName = "ELEVEN Manager local app"

Write-Host ""
Write-Host "ELEVEN Manager - ouverture du port 8000 pour le telephone"
Write-Host ""

$existingRule = Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue

if ($existingRule) {
  Write-Host "La regle existe deja."
} else {
  New-NetFirewallRule `
    -DisplayName $ruleName `
    -Direction Inbound `
    -Action Allow `
    -Protocol TCP `
    -LocalPort 8000 `
    -Profile Private

  Write-Host "Regle ajoutee. Le telephone peut maintenant essayer d'ouvrir :"
}

Write-Host "http://192.168.1.35:8000/index.html?v=manager10-app"
Write-Host ""
Write-Host "Important : le telephone doit etre sur le meme Wi-Fi/reseau que le PC."
