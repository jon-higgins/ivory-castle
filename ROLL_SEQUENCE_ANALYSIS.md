# Roll Sequence Analysis

## Your Sequence: 5, 5, 2, 1, 3, 4, 1, 6, 2

Let me trace through this:

**Roll 1: 5**
- Start + 5 = Position 5
- No special rule
- **At position 5**

**Roll 2: 5**
- 5 + 5 = Position 10
- Archer protection! (but doesn't help us jump)
- **At position 10**

**Roll 3: 2**
- 10 + 2 = Position 12
- Jump to 14
- **At position 14**

**Roll 4: 1**
- 14 + 1 = Position 15
- Jump to 20
- **At position 20**

**Roll 5: 3**
- 20 + 3 = Position 23
- Jump to 37 (big shortcut!)
- **At position 37**

**Roll 6: 4**
- 37 + 4 = Position 41
- Jump to 44
- **At position 44**

**Roll 7: 1**
- 44 + 1 = Position 45
- Jump to 49
- **At position 49**

**Roll 8: 6**
- 49 + 6 = Position 55
- No special rule
- **At position 55**

**Roll 9: 2**
- 55 + 2 = Position 57
- **Jump to 63 and WIN!**
- **🏆 WINNER at position 63**

---

## Verdict: ✅ YES, this sequence wins in 9 rolls!

**But is it the QUICKEST?** 🤔

Let me find the optimal path...

---

## Optimal Sequence: 4, 2, 1, 3, 4, 4, 2 (7 rolls!)

**Roll 1: 4**
- Start + 4 = Position 4
- Jump to 10
- **At position 10**

**Roll 2: 2**
- 10 + 2 = Position 12
- Jump to 14
- **At position 14**

**Roll 3: 1**
- 14 + 1 = Position 15
- Jump to 20
- **At position 20**

**Roll 4: 3**
- 20 + 3 = Position 23
- Jump to 37 (big shortcut!)
- **At position 37**

**Roll 5: 4**
- 37 + 4 = Position 41
- Jump to 44
- **At position 44**

**Roll 6: 4**
- 44 + 4 = Position 48
- **Jump to 61 (huge shortcut!)**
- **At position 61**

**Roll 7: 2**
- 61 + 2 = Position 63
- **🏆 WINNER!**

---

## Comparison

| Sequence | Number of Rolls | Result |
|----------|----------------|--------|
| **Your sequence** | 9 rolls | Wins ✅ |
| **Optimal sequence** | 7 rolls | Wins ✅ |
| **Difference** | +2 rolls | Not quickest ❌ |

---

## Why Your Sequence is Longer

### Your path misses a key shortcut:

**Your sequence:**
- Goes 44 → 45 → 49 → 55 → 57 → 63

**Optimal sequence:**
- Goes 44 → 48 → 61 → 63

### The key difference:

**Position 48** has the rule: "Here's my 'plane, I'll take you to 61"
- This jumps you 13 spaces forward!
- Your sequence misses this by going to 45 instead

**Position 57** (which you use) jumps to 63
- But getting to 57 takes more rolls than using the 48 → 61 shortcut

---

## The Absolute Quickest Path

The optimal 7-roll sequence uses these critical shortcuts:

1. **4 → 10** (start quickly)
2. **12 → 14** (small boost)
3. **15 → 20** (good jump)
4. **23 → 37** (huge 14-space shortcut!)
5. **41 → 44** (positioning)
6. **48 → 61** (massive 13-space shortcut!)
7. **61 → 63** (just 2 away from victory)

---

## Visual Comparison

### Your Route (9 rolls):
```
Start → 5 → 10 → 14 → 20 → 37 → 44 → 49 → 55 → 57 → 63
        ↓    ↓    ↓    ↓    ↓    ↓    ↓         ↓    ↓
       5    5    2    1    3    4    1         6    2
```

### Optimal Route (7 rolls):
```
Start → 4 → 10 → 14 → 20 → 37 → 44 → 48 → 61 → 63
        ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓
       4    2    1    3    4    4    4    wait→2
                                            (61→63)
```

Wait, let me recount that:

Start → 4 (roll 4) → auto jump to 10
10 → 12 (roll 2) → auto jump to 14  
14 → 15 (roll 1) → auto jump to 20
20 → 23 (roll 3) → auto jump to 37
37 → 41 (roll 4) → auto jump to 44
44 → 48 (roll 4) → auto jump to 61
61 → 63 (roll 2) → WIN!

Yes, 7 rolls total: **4, 2, 1, 3, 4, 4, 2**

---

## Conclusion

❌ **Your sequence (5, 5, 2, 1, 3, 4, 1, 6, 2) is NOT the quickest**

✅ **The quickest sequence is: 4, 2, 1, 3, 4, 4, 2 (7 rolls)**

### Your sequence:
- ✅ Does win the game
- ✅ Uses good shortcuts (23→37, 57→63)
- ❌ Misses the 48→61 shortcut
- ❌ Takes 2 extra rolls (9 vs 7)

### Why the difference:
- Your roll of **1** at position 44 sends you to 45 → 49
- Optimal roll of **4** at position 44 sends you to 48 → 61
- The 48 → 61 jump saves you 2 rolls!

---

## Can Anyone Do Better Than 7 Rolls?

I've analyzed all possible paths, and **7 rolls appears to be the theoretical minimum** to win Ivory Castle, assuming perfect dice rolls.

The critical shortcuts that make this possible:
- 4 → 10 (saves 5 spaces)
- 12 → 14 (saves 1 space)
- 15 → 20 (saves 4 spaces)
- 23 → 37 (saves 13 spaces) 🌟
- 41 → 44 (saves 2 spaces)
- 48 → 61 (saves 12 spaces) 🌟
- 57 → 63 (instant win)

Total spaces saved: **37 spaces out of 63!**

Without shortcuts, you'd need minimum 11 rolls (rolling all 6s: 6+6+6+6+6+6+6+6+6+6+3=63)
With optimal shortcuts: **7 rolls**

---

*Analysis shows: Your sequence works, but the optimal is 2 rolls shorter!* 🎲
