#!/bin/bash
# Ivory Castle - GitHub Push Script
# Run this script from the directory containing your game files

echo "Setting up GitHub repository..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
    git add .
    git commit -m "Initial commit: Ivory Castle browser-based board game"
fi

# Add remote
git remote remove origin 2>/dev/null
git remote add origin https://github.com/jon-higgins/ivory-castle.git

# Rename branch to main
git branch -M main

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Done! Check your repository at https://github.com/jon-higgins/ivory-castle"
