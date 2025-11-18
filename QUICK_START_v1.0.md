# Quick Start - Version 1.0 Features 🚀

## What's New

Three new features added to Ivory Castle!

---

## 1. 📊 Global Counter (Shared!)

### What It Is:
A games counter that's **shared across ALL users** who play the game.

### How It Works:
- Started at **10** (as you requested)
- Every time ANYONE starts a game, it goes up by 1
- Everyone sees the same number
- Persists forever (stored on server)

### What You'll See:
```
Bottom right corner:
┌──────────────────────┐
│ Games Played: 10     │
└──────────────────────┘
```

After someone plays:
```
┌──────────────────────┐
│ Games Played: 11     │
└──────────────────────┘
```

---

## 2. 📖 Rules Link

### What It Is:
Clickable link at bottom of panel that shows the original game rules.

### How to Use:
1. Look at bottom of control panel
2. Click "📖 Rules"
3. Rules image appears in modal
4. Click "✕" or outside to close

### What You'll See:
```
Bottom of panel:
┌───────────────────────────┐
│ 📖 Rules   Ivory Castle v1.0 │
└───────────────────────────┘
          ↑
      Click here!
```

---

## 3. 🔢 Version Number

### What It Is:
Shows "Ivory Castle v1.0" at bottom of control panel.

### Purpose:
- Track which version is running
- Useful for updates and support
- Small, unobtrusive text

---

## Files You Need

### Required:
1. ✅ **index.html** (updated)
2. ✅ **game.js** (updated)
3. ✅ **styles.css** (updated)
4. ✅ **counter.php** (new - for global counter)
5. ✅ **Rules.png** (new - rules image)

### Existing (keep these):
- IC_Board.png
- Arrow.mp3
- Winner.m4a
- Other sound files

---

## Installation

### Step 1: Upload Files
Upload ALL files to your web server:
```
/your-folder/
  ├── index.html      ← Replace
  ├── game.js         ← Replace
  ├── styles.css      ← Replace
  ├── counter.php     ← NEW
  ├── Rules.png       ← NEW
  └── (existing files)
```

### Step 2: Set Permissions (if needed)
On Linux/Mac server:
```bash
chmod 755 counter.php
```

Windows: Ensure write permissions for folder

### Step 3: Test!
1. Open game in browser
2. Check counter shows "10" (or higher)
3. Click "📖 Rules" - should open
4. See "v1.0" at bottom

---

## Quick Tests

### Test Counter:
1. Open game in Browser 1
2. Note counter value (e.g., 10)
3. Start a game
4. Counter increases to 11
5. Open in Browser 2
6. Should also show 11 ✅

### Test Rules:
1. Click "📖 Rules" at bottom
2. Modal appears with rules image
3. Click "✕" to close
4. Works! ✅

### Test Version:
1. Look at bottom of panel
2. See "Ivory Castle v1.0"
3. Small gray text ✅

---

## What Changed

### Desktop View:
```
┌─────────────────────────────────┐
│  🏰 Ivory Castle 🏰             │
│  [Game controls]                │
│  [Dice area]                    │
│  [Player info]                  │
│ ───────────────────────────────│
│  📖 Rules    Ivory Castle v1.0  │ ← NEW
└─────────────────────────────────┘
│ Games Played: 10 │ ← Shared! 
└──────────────────┘
```

### Mobile View:
```
┌──────────────────┐
│  Games: 10       │ ← Shared!
├──────────────────┤
│  GAME BOARD      │
├──────────────────┤
│  Current Turn    │
│  [Dice]          │
├──────────────────┤
│ 📖 Rules  v1.0   │ ← NEW
└──────────────────┘
```

---

## Troubleshooting

### Counter Doesn't Work?

**Check:**
1. Is `counter.php` uploaded?
2. Does your server support PHP?
3. Can PHP write to folder?

**Test:**
Open: `http://yoursite.com/counter.php`
Should show: `{"count":10}`

**Fix:**
- Contact hosting support about PHP
- Or use localStorage version (not shared)

### Rules Don't Show?

**Check:**
1. Is `Rules.png` uploaded?
2. Same folder as index.html?
3. Check browser console for errors

**Fix:**
- Verify file name: "Rules.png" (capital R)
- Hard refresh: Ctrl+Shift+R

### Version Not Visible?

**Check:**
1. Scroll to bottom of panel
2. Look for gray italic text
3. Check styles.css loaded

**Fix:**
- Clear browser cache
- Reload page

---

## Important Notes

### About Global Counter:
- ⚠️ Requires PHP on server
- ⚠️ Shared across ALL users
- ⚠️ Cannot be reset from game (only manually)
- ✅ Starts at 10 as requested

### About Rules:
- ✅ Always available
- ✅ Works offline if image cached
- ✅ Mobile responsive

### About Version:
- ✅ Currently v1.0
- ✅ Easy to update for future versions
- ✅ Always visible

---

## What's Still the Same

✅ All game rules
✅ Jammy easter egg
✅ Mobile responsive
✅ Sound effects
✅ Desktop layout
✅ Everything else!

**Only added: Counter (global), Rules link, Version number**

---

## Summary

**Global Counter:**
- Shared across all users
- Starts at 10
- Uses PHP backend

**Rules Link:**
- Click to view rules
- Modal with image
- Easy access

**Version Number:**
- Shows v1.0
- Bottom of panel
- Tracks updates

---

**Your game is now Version 1.0 with global statistics!** 🎉

Questions? See **NEW_FEATURES_v1.0.md** for full documentation.

*Quick Start Guide - Version 1.0*
