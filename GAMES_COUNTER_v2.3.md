# Games Played Counter - Feature Documentation

## Overview
A persistent counter that tracks the total number of games played and displays it in the bottom right corner of the control panel.

---

## Visual Design

### Location
- **Position:** Bottom right corner of the control panel
- **Always visible:** Shows during setup and gameplay
- **Floating:** Positioned absolutely, doesn't interfere with other elements

### Appearance
```
┌──────────────────────┐
│ Games Played: [42]   │ ← Purple gradient badge
└──────────────────────┘
```

**Styling Details:**
- **Background:** Beautiful purple gradient (same as initial dice)
  - Start: #667eea (light purple)
  - End: #764ba2 (dark purple)
- **Text Color:** White
- **Badge Shape:** Rounded pill (20px border radius)
- **Counter Display:** White semi-transparent background
- **Font Size:** 13px label, 14px counter
- **Shadow:** Soft purple glow
- **Padding:** 8px vertical, 14px horizontal

### Interactive Effects
1. **Hover Effect:**
   - Shadow increases
   - Badge lifts up slightly (2px)
   - Smooth 0.3s transition

2. **Update Animation:**
   - Counter scales up to 130% (pop effect)
   - Background brightens briefly
   - 0.3s smooth animation
   - Triggers each time count increases

---

## Functionality

### When Counter Increments
The counter increases by 1 when:
- ✅ A new game is started (player names confirmed)
- ✅ After clicking "Confirm" on the player name modal
- ✅ Before the game board appears

The counter does NOT increment when:
- ❌ Just opening the page
- ❌ Clicking "Restart Game" (full page reload starts fresh)
- ❌ During gameplay (only at game start)

### Persistence
- **Storage Method:** Browser's localStorage
- **Storage Key:** `ivorycastle_games_played`
- **Data Type:** String (converted to/from integer)
- **Scope:** Per browser, per domain
- **Lifespan:** Persists until:
  - User clears browser data
  - User clears site data
  - localStorage is manually cleared

### Cross-Session Tracking
```
Session 1: Play 3 games → Counter shows 3
[Close browser]
Session 2: Open page → Counter shows 3
           Play 2 more games → Counter shows 5
[Close browser]
Session 3: Open page → Counter shows 5
```

---

## Technical Implementation

### HTML Structure
```html
<div id="gamesCounter">
    <span class="counter-label">Games Played:</span>
    <span class="counter-value" id="counterValue">0</span>
</div>
```

### JavaScript Functions

#### 1. Initialize Counter
```javascript
function initGamesCounter() {
    const count = getGamesPlayed();
    updateCounterDisplay(count);
}
```
- Called on page load
- Retrieves count from localStorage
- Updates display

#### 2. Get Count from Storage
```javascript
function getGamesPlayed() {
    const stored = localStorage.getItem('ivorycastle_games_played');
    return stored ? parseInt(stored) : 0;
}
```
- Retrieves from localStorage
- Returns 0 if not found (first time)
- Converts string to integer

#### 3. Increment Counter
```javascript
function incrementGamesPlayed() {
    const current = getGamesPlayed();
    const newCount = current + 1;
    localStorage.setItem('ivorycastle_games_played', newCount.toString());
    updateCounterDisplay(newCount);
}
```
- Gets current count
- Adds 1
- Saves to localStorage
- Updates display with animation

#### 4. Update Display
```javascript
function updateCounterDisplay(count) {
    const counterValue = document.getElementById('counterValue');
    if (counterValue) {
        counterValue.textContent = count;
        // Trigger animation
        counterValue.style.animation = 'none';
        setTimeout(() => {
            counterValue.style.animation = '';
        }, 10);
    }
}
```
- Updates the displayed number
- Resets animation to trigger it again
- Creates the pop effect

### CSS Animation
```css
@keyframes counterUpdate {
    0% { transform: scale(1); }
    50% { 
        transform: scale(1.3);
        background: rgba(255, 255, 255, 0.4);
    }
    100% { transform: scale(1); }
}
```

---

## User Benefits

### 1. Sense of Progress
- Players can see how many times they've played
- Creates a sense of history with the game
- Encourages repeat play

### 2. Engagement Tracking
- Useful for families tracking game nights
- Fun milestone to reach (10 games, 50 games, 100 games!)
- Conversation starter: "We've played 42 times!"

### 3. Unobtrusive
- Doesn't interfere with gameplay
- Small and tucked away
- Only noticed when you want to see it
- Beautiful design complements the game

---

## Privacy & Data

### What's Stored
- **Only the count:** Just a number
- **No personal data:** No names, dates, or game details
- **No tracking:** Doesn't send data anywhere
- **Local only:** Stays on your computer

### How to Reset
If you want to reset the counter to 0:

**Method 1 - Browser Console:**
```javascript
localStorage.removeItem('ivorycastle_games_played');
location.reload();
```

**Method 2 - Clear Site Data:**
1. Open browser settings
2. Go to Site Settings
3. Clear data for the site
4. Reload page

**Method 3 - Clear All Browser Data:**
- This will reset everything, not just the game counter

---

## Browser Compatibility

### Supported Browsers
✅ Chrome/Edge - Full support
✅ Firefox - Full support  
✅ Safari - Full support
✅ All modern browsers with localStorage support

### Fallback
If localStorage is not available (very rare):
- Counter still displays
- Shows 0 always
- No errors occur
- Game functions normally

---

## Future Enhancements (Ideas)

Possible additions if desired:
- 🏆 Milestones: Badges at 10, 50, 100 games
- 📊 Additional stats: Win rates, average game time
- 🎯 Game history: List of recent games
- 🔄 Reset button: Option to reset counter
- 📈 Streak tracking: Games played in a row

---

## Testing Checklist

✅ Counter initializes to 0 on first visit
✅ Counter increments when game starts  
✅ Counter persists after page reload
✅ Counter persists after browser close/open
✅ Animation plays when counter updates
✅ Hover effect works smoothly
✅ Displays correctly on all screen sizes
✅ Doesn't interfere with other UI elements
✅ Works with restart button (page reload)

---

## Quick Reference

**Storage Key:** `ivorycastle_games_played`
**Location:** localStorage (browser)
**Display:** Bottom right of control panel
**Color:** Purple gradient (#667eea to #764ba2)
**Animation:** 0.3s scale/brighten on update
**Persistence:** Permanent (until cleared)

---

*Games Played Counter Added: November 17, 2025*
*Version 2.3*
