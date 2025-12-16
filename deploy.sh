#!/bin/bash

# VPS Deployment Script for Finonest
echo "🚀 Starting Finonest deployment..."

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Install PM2
sudo npm install -g pm2

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Install Nginx
sudo apt install -y nginx

# Clone and setup project
git clone https://github.com/Roastcoder/FinonestReact.git
cd FinonestReact

# Install dependencies
npm install

# Build project
npm run build
npm run build:server

# Setup environment
cp .env.example .env

echo "✅ Basic setup complete. Configure .env and start services."