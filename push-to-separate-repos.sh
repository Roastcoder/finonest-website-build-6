#!/bin/bash

# Script to push frontend and backend to separate GitHub repositories

set -e

echo "🚀 Pushing Finonest to separate GitHub repositories..."

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

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    print_error "GitHub CLI (gh) is not installed. Please install it first:"
    echo "brew install gh"
    exit 1
fi

# Check if user is logged in to GitHub
if ! gh auth status &> /dev/null; then
    print_error "Please login to GitHub CLI first:"
    echo "gh auth login"
    exit 1
fi

# Get GitHub username
GITHUB_USER=$(gh api user --jq .login)
print_status "GitHub user: $GITHUB_USER"

# Repository names
FRONTEND_REPO="finonest-frontend"
BACKEND_REPO="finonest-backend"

# Create temporary directories
TEMP_DIR="/tmp/finonest-split"
rm -rf $TEMP_DIR
mkdir -p $TEMP_DIR

print_status "Creating temporary directories..."

# Copy frontend files
print_status "Preparing frontend repository..."
cp -r frontend $TEMP_DIR/frontend
cd $TEMP_DIR/frontend

# Initialize git and create frontend repo
git init
git add .
git commit -m "Initial commit: Finonest Frontend (Next.js)"

# Create GitHub repository for frontend
print_status "Creating GitHub repository: $FRONTEND_REPO"
gh repo create $FRONTEND_REPO --public --description "Finonest Frontend - Next.js Financial Services Platform"

# Add remote and push
git branch -M main
git remote add origin https://github.com/$GITHUB_USER/$FRONTEND_REPO.git
git push -u origin main

print_status "✅ Frontend pushed to: https://github.com/$GITHUB_USER/$FRONTEND_REPO"

# Copy backend files
cd $TEMP_DIR
print_status "Preparing backend repository..."
cp -r ../finonest-website-build-6/backend $TEMP_DIR/backend
cd $TEMP_DIR/backend

# Initialize git and create backend repo
git init
git add .
git commit -m "Initial commit: Finonest Backend (Express.js API)"

# Create GitHub repository for backend
print_status "Creating GitHub repository: $BACKEND_REPO"
gh repo create $BACKEND_REPO --public --description "Finonest Backend - Express.js API Server for Financial Services"

# Add remote and push
git branch -M main
git remote add origin https://github.com/$GITHUB_USER/$BACKEND_REPO.git
git push -u origin main

print_status "✅ Backend pushed to: https://github.com/$GITHUB_USER/$BACKEND_REPO"

# Cleanup
cd /Users/yogiifaujdar/Desktop/finonest-website-build-6
rm -rf $TEMP_DIR

print_status "🎉 Successfully created separate repositories:"
echo "Frontend: https://github.com/$GITHUB_USER/$FRONTEND_REPO"
echo "Backend:  https://github.com/$GITHUB_USER/$BACKEND_REPO"

print_warning "Next steps:"
echo "1. Update Coolify deployment configs with new repository URLs"
echo "2. Update README.md with new repository links"
echo "3. Configure CI/CD pipelines for each repository"