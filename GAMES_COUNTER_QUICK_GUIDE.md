# Games Played Counter - Quick Guide 📊

## What You'll See

A small badge in the bottom right corner of the control panel:

```
                                    ┌──────────────────────┐
                                    │ Games Played: [5]    │
                                    └──────────────────────┘
```

**Appearance:**
- 🟣 Purple gradient background (matches the dice)
- ⚪ White text
- 💫 Small, rounded badge
- ✨ Pop animation when it updates

---

## How It Works

### Automatic Tracking
The counter **automatically** tracks every time you start a new game!

**When it counts:**
1. You select number of players ✅
2. You enter player names ✅
3. You click "Confirm" ✅
4. **Counter goes up by 1!** 🎉

### Persistence
The counter **remembers** across:
- ✅ Page refreshes
- ✅ Browser restarts
- ✅ Days/weeks/months later

**Example:**
```
Monday:    Play 3 games → Counter: 3
Tuesday:   Play 2 games → Counter: 5
[One week later]
Next Week: Open game   → Counter: 5 (still there!)
           Play 1 game → Counter: 6
```

---

## What You'll Notice

### 1. When You First Open the Game
Counter shows: **Games Played: 0**

### 2. After Starting Your First Game
Counter pops up to: **Games Played: 1** (with animation!)

### 3. Keep Playing
Every new game increments the counter:
- Game 1 → Counter: 1
- Game 2 → Counter: 2
- Game 3 → Counter: 3
- etc.

### 4. Hover Over It
- Badge lifts up slightly
- Shadow gets bigger
- Looks interactive and alive!

---

## Fun Milestones to Reach 🎯

- 🥉 **10 games** - Getting started!
- 🥈 **25 games** - Regular player!
- 🥇 **50 games** - Ivory Castle veteran!
- 🏆 **100 games** - Master of the Castle!
- 👑 **500 games** - Legendary status!

---

## Resetting the Counter

Want to start fresh? You have options:

### Option 1: Browser Console
```javascript
localStorage.removeItem('ivorycastle_games_played');
location.reload();
```

### Option 2: Clear Browser Data
1. Open browser settings
2. Clear site data for the game
3. Reload the page

**Note:** This is the only way to reset - there's no in-game reset button to prevent accidental resets!

---

## Privacy

### What's Stored
- ✅ Just a number (the count)
- ❌ NO player names
- ❌ NO game details
- ❌ NO dates or times
- ❌ NO personal information

### Where It's Stored
- 📍 **On your computer only**
- 🔒 **In your browser's localStorage**
- 🌐 **Never sent to any server**
- 👤 **Completely private**

---

## Position & Design

### Location
```
┌─────────────────────────────────────┐
│ 🏰 Ivory Castle 🏰                  │
│                                     │
│ [Game controls here]                │
│                                     │
│ [Dice area here]                    │
│                                     │
│ [Messages here]                     │
│                                     │
│                                     │
│                                     │
│                    Games Played: 5  │ ← Bottom right!
└─────────────────────────────────────┘
```

### Design Details
- **Background:** Purple gradient (#667eea → #764ba2)
- **Size:** Small and unobtrusive
- **Style:** Rounded pill shape
- **Effect:** Subtle shadow with glow
- **Animation:** Pops when it updates

---

## Why It's Useful

### 1. Track Your Play History
See how many times you've enjoyed the game!

### 2. Family Fun Stats
"We've played Ivory Castle 47 times this year!"

### 3. Personal Milestones
Set goals and celebrate when you reach them!

### 4. No Pressure
It's just for fun - not a high score or competition!

### 5. Conversation Starter
"Look! We've played this 100 times together!"

---

## Technical Note

The counter uses browser **localStorage** with the key:
```
ivorycastle_games_played
```

This is stored locally and persists until:
- You clear your browser data
- You manually remove it
- Your browser storage is reset

---

## Enjoy Tracking Your Games! 🎮

Every game you play gets counted, building up your Ivory Castle history over time. It's a small feature that adds a nice sense of continuity to your gaming sessions!

**Play more, see the number grow!** 🏰📈

---

*Games Counter Feature - Version 2.3*
*Simple, Persistent, Private*
