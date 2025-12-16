#!/bin/bash

# Manual script to prepare frontend and backend for separate GitHub repositories

set -e

echo "🚀 Preparing Finonest for separate GitHub repositories..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Create temporary directories
TEMP_DIR="/tmp/finonest-split"
rm -rf $TEMP_DIR
mkdir -p $TEMP_DIR

print_status "Creating temporary directories..."

# Prepare frontend repository
print_status "Preparing frontend repository..."
cp -r frontend $TEMP_DIR/frontend
cd $TEMP_DIR/frontend

# Initialize git for frontend
git init
git add .
git commit -m "Initial commit: Finonest Frontend (Next.js)"
git branch -M main

print_status "Frontend repository prepared at: $TEMP_DIR/frontend"

# Prepare backend repository
cd $TEMP_DIR
print_status "Preparing backend repository..."
cp -r ../finonest-website-build-6/backend $TEMP_DIR/backend
cd $TEMP_DIR/backend

# Initialize git for backend
git init
git add .
git commit -m "Initial commit: Finonest Backend (Express.js API)"
git branch -M main

print_status "Backend repository prepared at: $TEMP_DIR/backend"

print_status "🎉 Repositories prepared successfully!"

echo ""
print_warning "Next steps:"
echo "1. Create repositories on GitHub:"
echo "   - finonest-frontend"
echo "   - finonest-backend"
echo ""
echo "2. Push frontend:"
echo "   cd $TEMP_DIR/frontend"
echo "   git remote add origin https://github.com/yourusername/finonest-frontend.git"
echo "   git push -u origin main"
echo ""
echo "3. Push backend:"
echo "   cd $TEMP_DIR/backend"
echo "   git remote add origin https://github.com/yourusername/finonest-backend.git"
echo "   git push -u origin main"
echo ""
echo "4. Update Coolify configs with your actual GitHub username"