@echo off
REM Ivory Castle - GitHub Push Script for Windows
REM Run this script from the directory containing your game files

echo Setting up GitHub repository...

REM Initialize git if not already done
if not exist ".git" (
    git init
    git add .
    git commit -m "Initial commit: Ivory Castle browser-based board game"
)

REM Add remote
git remote remove origin 2>nul
git remote add origin https://github.com/jon-higgins/ivory-castle.git

REM Rename branch to main
git branch -M main

REM Push to GitHub
echo Pushing to GitHub...
git push -u origin main

echo Done! Check your repository at https://github.com/jon-higgins/ivory-castle
pause
