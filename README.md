# Termux Setup Guide

![Termux Setup Guide](banner.jpg)

This guide helps you set up Termux with essential packages and languages. If you encounter errors or issues with certain tools in Termux, follow these steps for troubleshooting:

## Installation

1. **Download Termux**: Ensure you have the latest version of Termux installed from [GitHub](https://github.com/termux/termux-app/releases) or [F-Droid](https://f-droid.org/packages/com.termux/).
2. **Copy & Paste Commands**: Run the following commands in your Termux terminal:

```shell
pkg update && pkg upgrade && pkg install git python python2 && pkg install wget ruby proot clang && termux-setup-storage && apt install php git golang -y && apt install nano && apt install cmatrix && pkg install figlet && pkg install wget && pkg install cowsay && pkg install toilet && pkg install ruby && gem install lolcat && pkg install curl && pkg install unzip && pkg install openssh && pkg install tor && pkg install net-tools && pkg install unrar && pkg install clang && pkg install w3m && pkg install proot && pip2 install wget && pip2 install requests && pkg install pacman4console && pkg install vim && pip install colorama && pip install bundle && gem install bundle && gem install bundler && pip2 install requests && pip install --upgrade pip
```

## 🛠️ **Troubleshooting & Error Fixes**

### **Common Issues & Solutions**

#### **Package Installation Errors**
```bash
# If packages fail to install
pkg update --fix-missing
pkg upgrade -y
termux-change-repo  # Change to a faster mirror
```

#### **Storage Permission Issues**
```bash
# Fix storage access problems
termux-setup-storage
# If it fails:
rm -rf ~/storage
termux-setup-storage
```

#### **"Command Not Found" Errors**
```bash
# Fix missing commands
pkg update
pkg install command-not-found -y
source $PREFIX/etc/profile.d/command-not-found.sh
```

#### **Python/Pip Issues**
```bash
# Fix Python environment
pkg reinstall python -y
pip install --upgrade pip
pip install wheel setuptools
```

### **Quick Fix Commands**

#### **Reset Environment**
```bash
# Refresh shell environment
source ~/.bashrc
exec bash  # Restart shell
```

#### **Clear Cache & Free Space**
```bash
# Clean system cache
pkg clean
apt autoremove -y
rm -rf ~/.cache/* ~/.tmp/*
```

#### **Fix Broken Packages**
```bash
# Reinstall broken packages
pkg reinstall $(pkg list-installed | grep -v ok | cut -d/ -f1)
```

## Important Commands

- List All Termux Commands: Get a list of all available Termux commands:

```shell
pkg install texinfo -y && info > commands.txt && cat commands.txt
```

- Check for Update: Check for updates for Termux packages:

```shell
pkg --check-mirror update
```

- Install Git: Install the Git package:

```shell
pkg install git -y
```

- Install Command Patch: Install the Fish package for command patch:

```shell
pkg install fish -y
```

## Languages Installation

Ensure the following languages are installed for development:

- Python: Install Python language:

```shell
apt install python -y
```

- Python 2: Install Python 2 language:

```shell
apt install python2 -y
```

- Ruby: Install Ruby language:

```shell
apt install ruby -y
```

- PHP: Install PHP language:

```shell
apt install php -y
```

- Go: Install Go language:

```shell
apt install golang -y
```

- C: Install C language:
```shell
apt install clang -y
```

- Dart: Install Dart language:
```shell
apt install dart -y
```

## Important Commands

| Command | Description |
|---------|-------------|
| `pkg list-all` | List all available packages |
| `pkg search <tool>` | Search for a package |
| `pkg show <package>` | Show package details |
| `termux-info` | Display Termux system info |
| `termux-open <file>` | Open a file |
| `termux-clipboard-set` | Copy text to clipboard |

## 🚨 **Emergency Recovery**

### **System Won't Start**
```bash
# If Termux crashes completely
# Uninstall and reinstall the app
# Then restore from backup or start fresh
```

### **Complete Reset**
```bash
# Nuclear option - reset everything
rm -rf $PREFIX
pkg update && pkg upgrade
```

### **Backup Before Fixing**
```bash
# Always backup first!
tar -zcf backup-before-fix.tar.gz /data/data/com.termux/files
```

## Optimization & Maintenance 

- Clean Cache & Old Files
```bash  
pkg clean  
apt autoremove  
```  

- Backup & Restore
```bash  
tar -zcvf termux-backup.tar.gz /data/data/com.termux/files  
```  

- Restore:
```bash  
tar -zxvf termux-backup.tar.gz -C /data/data/com.termux/files  
```  

## 🔧 **Advanced Troubleshooting**

### **Library Issues**
```bash
# Fix shared library problems
pkg install libandroid-support -y
pkg reinstall $PREFIX/bin/*
```

### **Permission Problems**
```bash
# Fix file permissions
chmod 755 $PREFIX/bin/*
chmod +x ~/storage/shared/termux-scripts/*.sh 2>/dev/null || true
```

### **Memory Issues**
```bash
# Check system resources
free -m
df -h
# If low on memory:
pkg clean
rm -rf ~/.cache
```

## Pro Tips

- **Use `tmux` for multitasking**  
- **Enable `termux-wake-lock` to prevent sleep**  
- **Store scripts in `~/storage/shared/termux-scripts`**  
- **Use `termux-api` for Android integration**  

## ☕️ Support My Work  

![Binance](https://img.shields.io/badge/Binance-%23F0B90B.svg?style=for-the-badge&logo=binance&logoColor=white&labelColor=black&color=%23F0B90B&label=Donate%20BNB)

<img src="images/donation.png" alt="Binance Pay QR" width="200">

---
