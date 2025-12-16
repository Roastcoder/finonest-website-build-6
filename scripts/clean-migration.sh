#!/bin/bash

# Finonest Clean Migration Script
# This script removes duplicate root-level frontend files and consolidates everything into frontend/

echo "🚀 Starting Finonest Clean Migration..."

# Create backup
echo "📦 Creating backup..."
BACKUP_DIR="finonest-backup-$(date +%Y%m%d-%H%M%S)"
cp -r . "../$BACKUP_DIR"
echo "✅ Backup created at ../$BACKUP_DIR"

# Remove duplicate root-level frontend files (keep frontend/ versions)
echo "🧹 Cleaning duplicate root-level files..."

# Remove root-level app directory (keep frontend/app/)
if [ -d "app" ] && [ -d "frontend/app" ]; then
    echo "  Removing root-level app/ directory..."
    rm -rf app/
fi

# Remove root-level components directory (keep frontend/components/)
if [ -d "components" ] && [ -d "frontend/components" ]; then
    echo "  Removing root-level components/ directory..."
    rm -rf components/
fi

# Remove root-level hooks directory (keep frontend/hooks/)
if [ -d "hooks" ] && [ -d "frontend/hooks" ]; then
    echo "  Removing root-level hooks/ directory..."
    rm -rf hooks/
fi

# Remove root-level lib directory (keep frontend/lib/)
if [ -d "lib" ] && [ -d "frontend/lib" ]; then
    echo "  Removing root-level lib/ directory..."
    rm -rf lib/
fi

# Remove root-level public directory (keep frontend/public/)
if [ -d "public" ] && [ -d "frontend/public" ]; then
    echo "  Removing root-level public/ directory..."
    rm -rf public/
fi

# Remove root-level config files (keep frontend/ versions)
echo "  Removing root-level config files..."
[ -f "next.config.mjs" ] && rm next.config.mjs
[ -f "tsconfig.json" ] && rm tsconfig.json
[ -f "middleware.ts" ] && rm middleware.ts
[ -f "components.json" ] && rm components.json
[ -f "postcss.config.mjs" ] && rm postcss.config.mjs
[ -f "tailwind.config.js" ] && rm tailwind.config.js
[ -f "next-env.d.ts" ] && rm next-env.d.ts

# Remove old environment files (keep new production ones)
echo "  Cleaning environment files..."
[ -f ".env" ] && rm .env
[ -f ".env.example" ] && rm .env.example
[ -f ".env.production" ] && rm .env.production

# Remove old server directory if backend exists
if [ -d "server" ] && [ -d "backend" ]; then
    echo "  Removing old server/ directory (using backend/)..."
    rm -rf server/
fi

# Clean up build artifacts
echo "🧽 Cleaning build artifacts..."
rm -rf .next/
rm -rf dist/
rm -rf node_modules/.cache/

echo "✅ Clean migration completed!"
echo ""
echo "📋 Next steps:"
echo "1. Run: npm run install:all"
echo "2. Run: npm run dev"
echo "3. Test both frontend (http://localhost:3000) and backend (http://localhost:5000)"
echo ""
echo "🔄 To rollback: cp -r ../$BACKUP_DIR/* ."