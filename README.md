# Ivory Castle Board Game

A digital version of the classic Ivory Castle board game - an exciting journey from Start to position 63 with special spaces, shortcuts, and challenges along the way!

## Game Overview

Ivory Castle is a board game for 2-6 players where each player races to be the first to reach position 63 - the Ivory Castle. Players take turns rolling a die and moving their counter along the board, encountering various adventures and obstacles along the way.

## Files Included

- **index.html** - Main game file (open this in your browser to play)
- **styles.css** - Game styling
- **game.js** - Game logic and mechanics
- **IC_Board.png** - The beautiful vintage game board
- **Arrow.mp3** - Archer protection sound
- **Winner.m4a** - Victory celebration sound
- **SOUNDS_README.md** - Information about additional sound files needed

## How to Play

### Setup
1. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, or Edge)
2. Enter the number of players (2-6)
3. Click "Start Game" and enter each player's name
4. A random player will be chosen to go first

### Gameplay
1. Each player takes turns clicking the "Roll Dice" button
2. Move your counter by the number shown on the die
3. Follow the instructions for any special spaces you land on
4. The first player to land EXACTLY on space 63 wins!

### Special Spaces

#### Forward Moves (Good!)
- **Position 4** → Jump to 10
- **Position 12** → Jump to 14
- **Position 15** → Jump to 20
- **Position 19** → Go on to 24
- **Position 23** → Come in to tea, shortcut to 37
- **Position 25** → Take a step to 26
- **Position 32** → Jump to 37
- **Position 36** → Come with me to 42
- **Position 41** → I'll take you to 44
- **Position 45** → Jump in, I'll take you to 49
- **Position 48** → Here's my plane, I'll take you to 61
- **Position 57** → Jump to 63 and WIN!

#### Backward Moves (Ouch!)
- **Position 6** → Go back to 1
- **Position 9** → I knew you'd fall, climb up at 3
- **Position 11** → Go back to 7
- **Position 13** → Back to 7
- **Position 30** → Go back to 24
- **Position 33** → Back to 14
- **Position 38** → Back to 34
- **Position 40** → Back to 37
- **Position 46** → Back to 24
- **Position 51** → Back to 42
- **Position 54** → Miss a turn in the woods and back to 34

#### Wait for 6
Can't move until you roll a 6:
- Position 2
- Position 16
- Position 47

#### Extra Turn
Take another turn immediately:
- Position 8

#### Miss a Turn
Skip your next turn:
- Position 21 (nice puddle!)
- Position 31
- Position 43
- Position 54
- Position 60

#### Archer Protection
Protected from backward moves, missing turns, and waiting for 6 on your NEXT turn only:
- Position 10
- Position 35
- Position 49

### Winning
- You must land EXACTLY on position 63 to win
- If your roll would take you past 63, you stay in place and wait for the right roll
- When you land on 63, you win and the victory music plays!

## Features

### Interactive Board
- Scrollable game board that automatically follows the current player
- Colored counters with player initials show each player's position
- Resizable split-screen layout (drag the divider between board and controls)

### Player Information
- See each player's current position
- Track special statuses (waiting for 6, missing turn, archer protection)
- View journey history - see the last 5 moves with full scrollable history

### Visual & Audio Feedback
- Animated dice rolling
- Color-coded messages (green for good, red for bad, blue for neutral)
- Sound effects for different game events
- Smooth scrolling to show current player position

### Game Controls
- Roll dice button (only active when it's your turn)
- Clear status display for current player
- Journey log for each player showing their progress

## Technical Notes

- The game uses an image map overlay on the vintage board image
- Player positions are precisely calculated from the original board coordinates
- All game logic follows the traditional Ivory Castle rules
- Works in any modern browser - no installation required
- Responsive layout adapts to your screen size

## Browser Compatibility

Tested and works in:
- Google Chrome (recommended)
- Mozilla Firefox
- Safari
- Microsoft Edge

## Tips for Best Experience

1. Use a larger screen for the best view of the beautiful board
2. Adjust the divider to your preferred board/control panel size
3. Turn on your sound for the full experience
4. Add the optional sound files (see SOUNDS_README.md) for complete audio

## Game Strategy

- Landing on archer positions (10, 35, 49) protects you from hazards on your next turn
- Watch out for backward move spaces - plan your moves carefully!
- The big shortcuts (23→37, 48→61, 57→63) can help you win quickly
- Remember you need to roll the exact number to land on 63

## Customization

You can customize the game by:
- Editing the player colors in `game.js` (PLAYER_COLORS array)
- Adding your own sound effects
- Adjusting the animation speeds in the code

## Credits

Original Ivory Castle board game artwork - vintage design
Digital adaptation created for browser-based play

## Support

If you encounter any issues:
1. Make sure all files are in the same folder
2. Try refreshing your browser
3. Check that your browser allows JavaScript
4. Ensure you're using a modern browser (not Internet Explorer)

---

Enjoy your journey to the Ivory Castle! 🏰
