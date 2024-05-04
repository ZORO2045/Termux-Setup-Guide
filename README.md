# Termux Setup Guide

This guide helps you set up Termux with essential packages and languages.

## Installation

1. **Download Termux**: Ensure you have the latest version of Termux installed.
2. **Copy & Paste Commands**: Run the following commands in your Termux terminal:

```shell
pkg install git python python2 && pkg install wget ruby proot clang && termux-setup-storage && apt install php git golang -y && apt install nano && apt install cmatrix && pkg install figlet && pkg install wget && pkg install cowsay && pkg install toilet && pkg install ruby && gem install lolcat && pkg install curl && pkg install unzip && pkg install openssh && pkg install tor && pkg install net-tools && pkg install unrar && pkg install clang && pkg install w3m && pkg install proot && pip2 install wget && pip2 install requests && pkg install pacman4console && pkg install vim && pip install colorama && pip install bundle && gem install bundle && gem install bundler && pip2 install requests && pip install --upgrade pip
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
