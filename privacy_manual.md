# Privacy Protection Guide for Kali Linux

## Quick Setup
Run the automated script:
```bash
sudo /home/festoh/cursor/privacy_setup.sh
sudo reboot
```

## Manual Methods

### 1. Randomize Machine ID (Persistent)
```bash
# Generate new random machine ID
sudo openssl rand -hex 16 > /etc/machine-id

# Also randomize D-Bus machine ID
sudo rm -f /var/lib/dbus/machine-id
sudo dbus-uuidgen > /var/lib/dbus/machine-id
```

### 2. Change Hostname
```bash
# Set random hostname
sudo hostnamectl set-hostname "kali-$(openssl rand -hex 4)"

# Or edit manually
sudo nano /etc/hostname
sudo nano /etc/hosts
```

### 3. MAC Address Randomization

#### For NetworkManager (WiFi/Ethernet):
```bash
sudo nano /etc/NetworkManager/NetworkManager.conf
```

Add under `[device]`:
```
wifi.scan-rand-mac-address=yes
ethernet.cloned-mac-address=random
```

Then restart:
```bash
sudo systemctl restart NetworkManager
```

#### Manual MAC randomization:
```bash
# For WiFi (wlan0)
sudo ip link set wlan0 down
sudo macchanger -r wlan0
sudo ip link set wlan0 up

# For Ethernet (eth0)
sudo ip link set eth0 down
sudo macchanger -r eth0
sudo ip link set eth0 up
```

### 4. Block Telemetry Domains

Add to `/etc/hosts`:
```
127.0.0.1 telemetry.microsoft.com
127.0.0.1 telemetry.ubuntu.com
127.0.0.1 analytics.google.com
127.0.0.1 www.google-analytics.com
127.0.0.1 telemetry.vscode-azure.com
```

### 5. Firewall Rules

Block outbound telemetry:
```bash
# Install ufw if not present
sudo apt install ufw

# Block specific telemetry IPs (example)
sudo ufw deny out to 8.8.8.8
```

### 6. Application-Specific Privacy

#### VS Code / Cursor:
- Settings → Privacy → Disable telemetry
- Settings → Disable crash reporting

#### System-wide:
```bash
# Disable Ubuntu/Canonical telemetry
sudo systemctl disable ubuntu-reporting
sudo systemctl stop ubuntu-reporting
```

## Advanced Privacy Tools

### 1. MAC Changer
```bash
sudo apt install macchanger
sudo macchanger -r wlan0
```

### 2. Tor Network
```bash
sudo apt install tor torbrowser-launcher
```

### 3. VPN
```bash
sudo apt install openvpn wireguard
```

### 4. Privacy-focused Browsers
- Tor Browser
- Firefox with privacy extensions
- Brave Browser

### 5. System Hardening
```bash
# Install hardening tools
sudo apt install ufw fail2ban apparmor

# Enable AppArmor
sudo systemctl enable apparmor
sudo systemctl start apparmor
```

## Verification

Check your current identifiers:
```bash
# Machine ID
cat /etc/machine-id

# Hostname
hostname

# MAC Addresses
ip link show | grep -E "link/ether"

# Network connections
ss -tuln
```

## Important Notes

⚠️ **Warning**: 
- Randomizing identifiers may break some applications
- Some services require consistent IDs
- MAC randomization may cause network issues
- Always test in a safe environment first

## Additional Resources

- [Kali Linux Privacy Documentation](https://www.kali.org/docs/)
- [Linux Privacy Guide](https://github.com/Lissy93/personal-security-checklist)
- [Tor Project](https://www.torproject.org/)

