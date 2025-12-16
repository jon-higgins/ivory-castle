# Testing the Jammy Easter Egg 🧪

## Quick Test Steps

### Test 1: Basic Activation ✅

1. **Start a new game**
2. **Number of players:** 2
3. **Player 1 name:** `Jammy` (exact spelling)
4. **Player 2 name:** `Alice` (or any name)
5. **Click Confirm**

### Expected Results:

**Jammy's rolls (will be forced):**
- Turn 1: Rolls **4** → Position 10
- Turn 2: Rolls **2** → Position 14
- Turn 3: Rolls **1** → Position 20
- Turn 4: Rolls **3** → Position 37
- Turn 5: Rolls **4** → Position 44
- Turn 6: Rolls **4** → Position 61
- Turn 7: Rolls **2** → Position 63 **WINS!** 🏆

**Alice's rolls (will be random):**
- Truly random dice
- Normal gameplay

### What You Should See:
- Dice animation looks normal
- No indication of rigging
- Jammy's dice just happen to roll the perfect sequence
- Message: "🎉 Congratulations! Jammy has reached the Ivory Castle and won the game! 🏰"

---

## Test 2: Case Sensitivity ❌

Try these names - they should **NOT** activate the Easter egg:

### Wrong Names:
1. `jammy` (lowercase) - ❌ Should be random
2. `JAMMY` (uppercase) - ❌ Should be random
3. `Jammie` (different spelling) - ❌ Should be random
4. `Jammy ` (with space) - ❌ Should be random

**Test:** Use "jammy" as player name, verify dice are truly random

---

## Test 3: Multi-Player 👥

**Players:**
1. Bob (random)
2. **Jammy** (rigged)
3. Carol (random)

**Expected:**
- Bob: Random rolls
- **Jammy: Forced sequence (wins in 7 rolls)**
- Carol: Random rolls

**Result:** Jammy should win before others get many turns

---

## Test 4: Multiple Jammys 🤔

**Players:**
1. **Jammy** (should be rigged)
2. **Jammy** (should be random - only first gets it)

**Expected:**
- First Jammy: Forced rolls, wins quickly
- Second Jammy: Normal random rolls

---

## Test 5: Verify The Path 🗺️

Watch Jammy's journey on the board:

```
Start → 10 → 14 → 20 → 37 → 44 → 61 → 63
```

### Key Jumps to Watch:
- **4 → 10** (position 4 jump)
- **12 → 14** (position 12 jump)
- **15 → 20** (position 15 jump)
- **23 → 37** (BIG jump!)
- **41 → 44** (position 41 jump)
- **48 → 61** (HUGE jump!)
- **61 + 2 = 63** (WINNER!)

---

## Debug Console Commands 🔍

Open browser console (F12) and type these to check Easter egg status:

### Check if Jammy mode is active:
```javascript
gameState.jammyMode
```
Should return: `true` (if Jammy is playing)

### Check Jammy's player index:
```javascript
gameState.jammyPlayerIndex
```
Should return: `0` (or whatever player number Jammy is)

### Check current roll count:
```javascript
gameState.jammyRollCount
```
Should increment with each Jammy roll: 0, 1, 2, 3, 4, 5, 6, 7

### Check the sequence:
```javascript
gameState.jammyRollSequence
```
Should return: `[4, 2, 1, 3, 4, 4, 2]`

### Verify current player:
```javascript
gameState.players[gameState.playerOrder[gameState.currentPlayerIndex]].name
```
Should show whose turn it is

---

## Troubleshooting 🔧

### Easter Egg Not Working?

**Check:**
1. ✅ Name is exactly "Jammy" (capital J)
2. ✅ No spaces before or after
3. ✅ Reloaded page after code update
4. ✅ Check console: `gameState.jammyMode` should be `true`

### Rolls Still Random?

**Verify:**
```javascript
console.log('Jammy Mode:', gameState.jammyMode);
console.log('Jammy Index:', gameState.jammyPlayerIndex);
console.log('Current Player:', gameState.playerOrder[gameState.currentPlayerIndex]);
```

If `jammyMode` is `true` but rolls are random:
- Check if it's actually Jammy's turn
- Check if roll count exceeded 7
- Check player index matches

---

## Expected Timing ⏱️

**With 2 players (Jammy + 1 other):**
- Game should end in approximately **14-15 turns total**
- Jammy takes 7 turns
- Other player takes 7-8 turns (gets turns between Jammy's)
- Total time: ~2-3 minutes

**With 4 players:**
- Jammy still wins in 7 of their own turns
- But 3 other players get turns in between
- Total turns before win: ~28 turns
- Jammy's 7 rolls happen across those 28 turns

---

## What Success Looks Like ✅

### Visual Confirmation:
1. ✅ Jammy's dice shows: 4, 2, 1, 3, 4, 4, 2 (in order)
2. ✅ Jammy's counter moves to: 10, 14, 20, 37, 44, 61, 63
3. ✅ Winner modal shows: "Jammy has reached the Ivory Castle"
4. ✅ Jammy wins in exactly 7 of their turns

### Console Confirmation:
```javascript
// After game:
gameState.jammyRollCount  // Should be 7
gameState.players[jammyIndex].position  // Should be 63
```

---

## Recording Test Results 📝

| Test | Name Used | Easter Egg Active? | Rolls | Winner | Time to Win |
|------|-----------|-------------------|-------|--------|-------------|
| 1 | Jammy | ✅ Yes | 4,2,1,3,4,4,2 | Jammy | 7 turns |
| 2 | jammy | ❌ No | Random | Varied | Varied |
| 3 | JAMMY | ❌ No | Random | Varied | Varied |

---

## Fun Challenge 🎯

**Try this:**
1. Play as "Jammy"
2. Don't tell other players about the Easter egg
3. Act surprised by the "lucky" rolls
4. See if anyone suspects something!

**Reactions to watch for:**
- "How are you so lucky?!"
- "This is rigged!"
- "You keep rolling the perfect number!"
- "Are you cheating?"

Then reveal: "Actually, it's a secret Easter egg! 🥚"

---

## Verification Checklist ☑️

Before declaring test successful:

- [ ] Name "Jammy" activates Easter egg
- [ ] Name "jammy" does NOT activate
- [ ] Jammy rolls: 4, 2, 1, 3, 4, 4, 2
- [ ] Jammy wins in exactly 7 rolls
- [ ] Other players have random rolls
- [ ] No UI indication of rigging
- [ ] Dice animation looks normal
- [ ] `gameState.jammyMode === true` in console
- [ ] Winner modal appears after 7th roll
- [ ] Games counter increments normally

---

## Test Report Template 📋

```
Test Date: _____________
Tester: _____________

Easter Egg Test Results:

✅ Activation works (name "Jammy")
✅ Roll sequence correct (4,2,1,3,4,4,2)
✅ Jammy wins in 7 rolls
✅ Path followed correctly (Start→10→14→20→37→44→61→63)
✅ No visual indication of rigging
✅ Other players unaffected
✅ Console variables correct

Issues Found: _______________

Overall Status: PASS / FAIL

Notes: _______________
```

---

**Test away and enjoy Jammy's lucky streak!** 🍀🎲

*Test Guide - Version 2.3.1*
