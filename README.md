# 🏰 Ivory Castle

A digital implementation of the classic Ivory Castle board game with animated movement, sound effects, and mobile optimization.

## 🎮 Quick Start

1. **Open the game**
   - Simply open `index.html` in any modern web browser
   - No installation or build process required!

2. **Set up players**
   - Choose 2-6 players
   - Enter each player's name
   - Click "Start Game"

3. **Play**
   - Click "Roll Dice" to take your turn
   - Watch your counter animate step-by-step across the board
   - First player to reach position 63 wins!

## ✨ Features

### Game Mechanics
- **Animated Movement**: Player counters move step-by-step through positions with footstep sounds
- **Special Spaces**: Forward jumps, backward slides, wait-for-6 zones, extra turns, and miss-a-turn spaces
- **Archer Protection**: Special positions protect you from negative effects
- **Smart Scrolling**: Board automatically scrolls to follow the active player

### Technical Features
- **Mobile Optimized**: WebP images (86% smaller) for fast loading
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Sound Effects**: Dice rolls, movement, and special event sounds
- **Mute Toggle**: Easily turn sound on/off
- **Resizable Interface**: Drag the divider to adjust board/control panel sizes
- **Journey Tracking**: See the last 5 moves for each player
- **Global Counter**: Tracks total games played across all users

## 🖥️ Browser Support

- **Chrome/Edge** 90+
- **Firefox** 88+
- **Safari** 14+
- **Mobile Browsers** (iOS Safari, Chrome Mobile, Samsung Internet)

## 📱 Mobile Experience

The game is fully optimized for mobile devices:
- Touch-friendly controls
- Collapsible control panel (swipe up/down)
- Fast loading with WebP image format
- Responsive board scaling

## 🎯 Game Rules

### Objective
Be the first player to reach position 63 (the Ivory Castle)!

### Special Spaces
- **Forward Jumps** (Green): Move ahead to a better position
- **Backward Slides** (Red): Slide back to an earlier position
- **Wait for 6** (Yellow): Can't move until you roll a 6
- **Extra Turn** (Blue): Roll again!
- **Miss a Turn** (Gray): Skip your next turn
- **Archer Protection** (Purple): Protects from negative effects

### Rules
- Roll exactly the right number to land on 63
- If your roll would go past 63, you stay in place
- Some spaces trigger automatic movements
- Archer positions protect you for one turn

For full rules, click the "📖 Rules" link in the game.

## 🛠️ Development

### Technology Stack
- **Pure Vanilla JavaScript** - No frameworks or dependencies
- **HTML5 & CSS3** - Modern web standards
- **WebP Images** - Optimized for performance
- **LocalStorage** - For game counter persistence

### File Structure
```
ivory-castle/
├── index.html          # Main game page
├── game.js             # Game logic (1,253 lines)
├── styles.css          # Styling (1,012 lines)
├── IC_Board.webp       # Optimized game board (675 KB)
├── IC_Board.png        # Fallback image (1.6 MB)
├── Rules.png           # Game rules image
├── *.mp3               # Sound effects (10 files)
└── docs/               # Documentation
```

### Key Functions
- `rollDice()` - Handle dice rolling and turn logic
- `animatePlayerMovement()` - Animate step-by-step movement
- `processSpecialSpace()` - Handle special board positions
- `renderPlayerCounters()` - Draw player positions on board
- `resizeImageMap()` - Scale clickable areas responsively

### Recent Improvements
- ✅ Added animated step-by-step player movement (v1.6)
- ✅ Optimized board image to WebP (86% size reduction)
- ✅ Added footstep sound effects during movement
- ✅ Improved mobile panel collapsing behavior

## 🎵 Sound Files

All sound effects are included:
- `dice-roll.mp3` - Dice rolling sound
- `footstep.mp3` - Player movement steps
- `happy.mp3` - Positive events
- `sad.mp3` - Negative events
- `scream.mp3` - Major setbacks
- `extra-turn.mp3` - Bonus turn notification
- `miss-turn.mp3` - Skip turn notification
- `Arrow.mp3` - Archer protection
- `Winner.mp3` - Victory celebration
- `move.mp3` - General movement

## 🐛 Known Issues

None currently! Report issues by creating a GitHub issue.

## 🤝 Contributing

This is a family/friends project. Feel free to fork and customize for your own use!

### Making Changes
1. Edit the files directly (no build process needed)
2. Test in multiple browsers
3. Check mobile responsiveness
4. Ensure position mapping still works after changes

## 📝 Version History

See [docs/CHANGELOG.md](docs/CHANGELOG_v1.4.md) for detailed version history.

**Current Version: 1.6**
- Animated player movement
- WebP image optimization
- Mobile performance improvements

## 📄 License

Personal use project for family and friends.

## 🙏 Acknowledgments

- Original Ivory Castle board game design
- Sound effects from various sources
- Built with ❤️ for family game nights

---

**Enjoy playing Ivory Castle! 🏰🎲**
