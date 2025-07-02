#!/bin/bash

echo "Building portfolio for static deployment..."

# Install dependencies
npm install

# Build frontend only (static version)
npm run build:static

echo "Build complete! Deploy the 'dist' folder to your hosting platform."
echo ""
echo "For Netlify:"
echo "1. Drag the 'dist' folder to netlify.com"
echo "2. Or connect your GitHub repo with build command: npm run build"
echo ""
echo "For GitHub Pages:"
echo "1. Copy contents of 'dist' folder to your repository"
echo "2. Enable GitHub Pages in repository settings"