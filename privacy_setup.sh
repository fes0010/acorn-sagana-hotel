#!/bin/bash
# Privacy Setup Script for Kali Linux
# This script helps block/randomize system identifiers

set -e

echo "=== Privacy Protection Setup ==="
echo ""

# 1. Randomize Machine ID
echo "[1/5] Randomizing Machine ID..."
if [ -f /etc/machine-id ]; then
    sudo sh -c 'openssl rand -hex 16 > /etc/machine-id'
    echo "✓ Machine ID randomized"
else
    echo "✗ /etc/machine-id not found"
fi

# 2. Randomize Hostname
echo "[2/5] Randomizing Hostname..."
NEW_HOSTNAME="kali-$(openssl rand -hex 4)"
sudo hostnamectl set-hostname "$NEW_HOSTNAME"
echo "✓ Hostname changed to: $NEW_HOSTNAME"

# 3. Enable MAC Address Randomization
echo "[3/5] Setting up MAC Address Randomization..."
if [ -f /etc/NetworkManager/NetworkManager.conf ]; then
    if ! grep -q "wifi.scan-rand-mac-address" /etc/NetworkManager/NetworkManager.conf; then
        sudo sed -i '/\[device\]/a wifi.scan-rand-mac-address=yes' /etc/NetworkManager/NetworkManager.conf
    fi
    if ! grep -q "ethernet.cloned-mac-address" /etc/NetworkManager/NetworkManager.conf; then
        sudo sed -i '/\[device\]/a ethernet.cloned-mac-address=random' /etc/NetworkManager/NetworkManager.conf
    fi
    echo "✓ MAC randomization configured"
else
    echo "✗ NetworkManager.conf not found"
fi

# 4. Create systemd service to randomize machine-id on boot
echo "[4/5] Creating systemd service for persistent randomization..."
sudo tee /etc/systemd/system/randomize-machine-id.service > /dev/null <<EOF
[Unit]
Description=Randomize Machine ID on Boot
Before=systemd-machine-id-setup.service

[Service]
Type=oneshot
ExecStart=/bin/bash -c 'openssl rand -hex 16 > /etc/machine-id'
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable randomize-machine-id.service
echo "✓ Systemd service created and enabled"

# 5. Firewall rules to block telemetry (optional)
echo "[5/5] Setting up firewall rules..."
if command -v ufw &> /dev/null; then
    # Block common telemetry domains (add more as needed)
    echo "Note: You may want to add telemetry domain blocks manually"
    echo "✓ Firewall check complete"
else
    echo "✗ UFW not installed (optional)"
fi

echo ""
echo "=== Setup Complete ==="
echo ""
echo "To apply changes:"
echo "1. Reboot your system: sudo reboot"
echo "2. Or restart NetworkManager: sudo systemctl restart NetworkManager"
echo ""
echo "Additional privacy tips:"
echo "- Use a VPN for network traffic"
echo "- Disable telemetry in applications"
echo "- Use Tor Browser for web browsing"
echo "- Consider using Qubes OS or Tails for maximum privacy"

