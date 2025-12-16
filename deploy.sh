#!/bin/bash

# Finonest Deployment Script
# This script deploys both frontend and backend applications

set -e

echo "🚀 Starting Finonest deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
    print_warning "MongoDB is not running. Please start MongoDB before deployment."
fi

# Install dependencies
print_status "Installing dependencies..."
npm run install:all

# Build applications
print_status "Building applications..."
npm run build

# Check if PM2 is installed for production deployment
if command -v pm2 &> /dev/null; then
    print_status "PM2 detected. Starting applications with PM2..."
    
    # Start backend with PM2
    cd backend
    pm2 start dist/index.js --name "finonest-backend" --env production
    cd ..
    
    # Start frontend with PM2
    cd frontend
    pm2 start npm --name "finonest-frontend" -- start
    cd ..
    
    print_status "Applications started with PM2"
    pm2 status
else
    print_warning "PM2 not found. Starting applications in development mode..."
    npm run start &
fi

print_status "✅ Deployment completed successfully!"
print_status "Frontend: http://localhost:3000"
print_status "Backend: http://localhost:5000"
print_status "Health Check: http://localhost:5000/health"