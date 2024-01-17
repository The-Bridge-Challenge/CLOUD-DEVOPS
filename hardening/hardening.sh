#!/bin/bash
# Actualizar el sistema
sudo apt update -y > /dev/null 2>&1 && sudo apt upgrade -y > /dev/null 2>&1 && sudo apt autoremove -y > /dev/null 2>&1

# Instalar firewall
sudo apt install ufw -y > /dev/null 2>&1
sudo ufw enable > /dev/null 2>&1
sudo ufw allow https > /dev/null 2>&1

# Actualizaciones automáticas de seguridad
sudo dpkg-reconfigure -plow unattended-upgrades > /dev/null 2>&1

# Confirmar últimos parches y actualizaciones
sudo apt-cache policy > /dev/null 2>&1

# Verificar integridad de paquetes 
sudo apt-key list > /dev/null 2>&1

# Monitorización de logs de seguridad
# Estos comandos 'tail -f' seguirán mostrando salida en tiempo real.
sudo tail -f /var/log/syslog > /dev/null 2>&1 &
sudo tail -f /var/log/auth.log > /dev/null 2>&1 &
# Instalar herramientas de seguridad
sudo apt install fail2ban -y > /dev/null 2>&1