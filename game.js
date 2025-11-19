// Game State
const gameState = {
    players: [],
    currentPlayerIndex: 0,
    gameStarted: false,
    waitingForRoll: true,
    playerOrder: [],
    soundMuted: false,
    jammyMode: false,
    jammyPlayerIndex: -1,
    jammyRollSequence: [4, 2, 1, 3, 4, 4, 2],
    jammyRollCount: 0
};

// Player colors
const PLAYER_COLORS = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];

// Position coordinates from image map
const POSITION_COORDS = {
    'start': {x: 239.5, y: 1916},
    1: {x: 362.5, y: 1880},
    2: {x: 426.5, y: 1835.5},
    3: {x: 822.5, y: 1782},
    4: {x: 765, y: 1736.5},
    5: {x: 703.5, y: 1703},
    6: {x: 626, y: 1675.5},
    7: {x: 586, y: 1631.5},
    8: {x: 639.5, y: 1581.5},
    9: {x: 765.5, y: 1577.5},
    10: {x: 890.5, y: 1554.5},
    11: {x: 1014, y: 1557.5},
    12: {x: 1114.5, y: 1548},
    13: {x: 1346, y: 1515},
    14: {x: 1110.5, y: 1418},
    15: {x: 1017.5, y: 1411},
    16: {x: 915, y: 1417},
    17: {x: 811, y: 1407.5},
    18: {x: 723.5, y: 1406.5},
    19: {x: 634.5, y: 1396},
    20: {x: 528.5, y: 1395.5},
    21: {x: 418, y: 1367},
    22: {x: 491.5, y: 1316},
    23: {x: 589.5, y: 1294.5},
    24: {x: 697, y: 1277},
    25: {x: 805, y: 1272.5},
    26: {x: 901, y: 1276.5},
    27: {x: 991.5, y: 1274},
    28: {x: 1244.5, y: 1277},
    29: {x: 1404.5, y: 1272},
    30: {x: 1432, y: 1217.5},
    31: {x: 1369.5, y: 1175},
    32: {x: 1242, y: 1147.5},
    33: {x: 1135.5, y: 1135},
    34: {x: 990.5, y: 1108.5},
    35: {x: 894.5, y: 1085},
    36: {x: 792, y: 1064.5},
    37: {x: 703, y: 1046},
    38: {x: 608, y: 1035.5},
    39: {x: 516, y: 1021},
    40: {x: 451, y: 968},
    41: {x: 535, y: 942},
    42: {x: 643, y: 912.5},
    43: {x: 730.5, y: 892},
    44: {x: 795.5, y: 865},
    45: {x: 874, y: 817},
    46: {x: 962.5, y: 763},
    47: {x: 403, y: 661},
    48: {x: 521, y: 631.5},
    49: {x: 649.5, y: 628.5},
    50: {x: 751.5, y: 631.5},
    51: {x: 843.5, y: 632.5},
    52: {x: 946.5, y: 634.5},
    53: {x: 1053.5, y: 631},
    54: {x: 1169, y: 624.5},
    55: {x: 1263.5, y: 603},
    56: {x: 1407, y: 578},
    57: {x: 1321.5, y: 549},
    58: {x: 1249.5, y: 538},
    59: {x: 1167.5, y: 522.5},
    60: {x: 1061.5, y: 499.5},
    61: {x: 801.5, y: 503.5},
    62: {x: 766, y: 457},
    63: {x: 764.5, y: 400.5}
};

// Dice dot configurations
const DICE_DOTS = {
    1: [[2, 2]],
    2: [[1, 1], [3, 3]],
    3: [[1, 1], [2, 2], [3, 3]],
    4: [[1, 1], [1, 3], [3, 1], [3, 3]],
    5: [[1, 1], [1, 3], [2, 2], [3, 1], [3, 3]],
    6: [[1, 1], [1, 2], [1, 3], [3, 1], [3, 2], [3, 3]]
};

// Game Rules
const RULES = {
    move_forward: {
        4: {to: 10, text: "Jump to 10"},
        12: {to: 14, text: "You jump to 14"},
        15: {to: 20, text: "Jump to 20"},
        19: {to: 24, text: "Go on to 24"},
        23: {to: 37, text: "Come in to tea, short cut to 37 after tea"},
        25: {to: 26, text: "Take a step on"},
        32: {to: 37, text: "Jump to 37"},
        36: {to: 42, text: "Come with me to 42"},
        41: {to: 44, text: "I'll take you to 44"},
        45: {to: 49, text: "Jump in, I'll take you to 49"},
        48: {to: 61, text: "Here's my 'plane, I'll take you to 61"},
        57: {to: 63, text: "Jump to 63 and win"}
    },
    move_back: {
        6: {to: 1, text: "Go back to 1"},
        9: {to: 3, text: "I knew you'd fall, climb up at 3"},
        11: {to: 7, text: "Go back to 7"},
        13: {to: 7, text: "Back to 7"},
        30: {to: 24, text: "Go back to 24"},
        33: {to: 14, text: "Back to 14"},
        38: {to: 34, text: "Back to 34"},
        40: {to: 37, text: "Back to 37"},
        46: {to: 24, text: "Back to 24"},
        51: {to: 42, text: "Back to 42"},
        54: {to: 34, text: "Miss a turn in the woods and back to 34"}
    },
    wait_for_6: {
        2: "You can't move until you get 6",
        16: "Stay here until you get 6",
        47: "This way, from 47 wait till you get a 6"
    },
    extra_turn: {
        8: "Take another turn"
    },
    miss_turn: {
        21: "It's a nice puddle - miss a turn and stay in it",
        31: "Stay a turn",
        43: "Miss a turn",
        54: "Miss a turn",
        60: "You must stop here for 1 turn"
    },
    archer: {
        10: "You are protected by the Archer",
        35: "You are protected by the Archer",
        49: "You are protected by the Archer"
    }
};

// Sound effects
const SOUNDS = {
    diceRoll: new Audio('dice-roll.mp3'),
    normalMove: new Audio('move.mp3'),
    happyMove: new Audio('happy.mp3'),
    sadMove: new Audio('sad.mp3'),
    extraTurn: new Audio('extra-turn.mp3'),
    missTurn: new Audio('miss-turn.mp3'),
    archer: new Audio('Arrow.mp3'),
    winner: new Audio('Winner.m4a')
};

// Fallback: Create silent audio if files don't exist
Object.keys(SOUNDS).forEach(key => {
    SOUNDS[key].addEventListener('error', function() {
        console.log(`Sound file ${key} not found, using silent fallback`);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateNumPlayersInput();
    initGamesCounter();
});

function setupEventListeners() {
    document.getElementById('numPlayers').addEventListener('change', updateNumPlayersInput);
    document.getElementById('startGame').addEventListener('click', showPlayerNameModal);
    document.getElementById('confirmNames').addEventListener('click', confirmPlayerNames);
    document.getElementById('rollDiceBtn').addEventListener('click', rollDice);
    document.getElementById('newGame').addEventListener('click', resetGame);
    document.getElementById('restartGameBtn').addEventListener('click', confirmRestart);
    document.getElementById('muteToggle').addEventListener('change', toggleMute);
    document.getElementById('rulesLink').addEventListener('click', showRulesModal);
    document.getElementById('closeRulesBtn').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeRulesModal();
    });
    
    // Close rules modal when clicking outside
    document.getElementById('rulesModal').addEventListener('click', function(e) {
        if (e.target.id === 'rulesModal') {
            closeRulesModal();
        }
    });
    
    // Close rules modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('rulesModal');
            if (modal && modal.classList.contains('show')) {
                closeRulesModal();
            }
        }
    });
    
    // Resizer
    setupResizer();
    
    // Mobile panel toggle
    setupMobilePanelToggle();
    
    // Re-render counters on window resize to maintain proper scaling
    window.addEventListener('resize', function() {
        if (gameState.gameStarted) {
            renderPlayerCounters();
        }
    });
}

function setupResizer() {
    const resizer = document.getElementById('resizer');
    const boardArea = document.getElementById('boardArea');
    const controlPanel = document.getElementById('controlPanel');
    let isResizing = false;
    
    resizer.addEventListener('mousedown', function(e) {
        isResizing = true;
        document.body.style.cursor = 'col-resize';
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;
        
        const containerWidth = document.getElementById('gameContainer').offsetWidth;
        const newBoardWidth = e.clientX;
        const newControlWidth = containerWidth - newBoardWidth - 8;
        
        if (newBoardWidth > 300 && newControlWidth > 300 && newControlWidth < 600) {
            boardArea.style.flex = `0 0 ${newBoardWidth}px`;
            controlPanel.style.width = `${newControlWidth}px`;
            
            // Re-render counters after resize
            if (gameState.gameStarted) {
                setTimeout(renderPlayerCounters, 50);
            }
        }
    });
    
    document.addEventListener('mouseup', function() {
        if (isResizing && gameState.gameStarted) {
            // Final render after resize completes
            setTimeout(renderPlayerCounters, 100);
        }
        isResizing = false;
        document.body.style.cursor = 'default';
    });
}

function setupMobilePanelToggle() {
    const controlPanel = document.getElementById('controlPanel');
    let touchStartY = 0;
    let touchEndY = 0;
    let isPanelCollapsed = false;

    // Check if mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Toggle panel
    function togglePanel() {
        if (!isMobile()) return;
        
        isPanelCollapsed = !isPanelCollapsed;
        if (isPanelCollapsed) {
            controlPanel.classList.add('mobile-collapsed');
        } else {
            controlPanel.classList.remove('mobile-collapsed');
        }
    }

    // Auto-collapse after roll on mobile
    function autoCollapseOnMobile() {
        if (isMobile() && gameState.gameStarted) {
            setTimeout(() => {
                isPanelCollapsed = true;
                controlPanel.classList.add('mobile-collapsed');
            }, 1000);
        }
    }

    // Touch handlers for swipe
    controlPanel.addEventListener('touchstart', function(e) {
        if (!isMobile()) return;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    controlPanel.addEventListener('touchend', function(e) {
        if (!isMobile()) return;
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeDistance = touchStartY - touchEndY;
        const minSwipeDistance = 30;

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swipe up - expand
                isPanelCollapsed = false;
                controlPanel.classList.remove('mobile-collapsed');
            } else {
                // Swipe down - collapse
                isPanelCollapsed = true;
                controlPanel.classList.add('mobile-collapsed');
            }
        }
    }

    // Tap on header to toggle
    const createHeaderTapZone = () => {
        if (!isMobile()) return;
        
        const headerArea = document.querySelector('.mobile-control-header');
        if (headerArea) {
            headerArea.addEventListener('click', togglePanel);
        }
    };

    // Initialize - start collapsed on mobile if game started
    window.addEventListener('resize', function() {
        if (isMobile() && gameState.gameStarted) {
            autoCollapseOnMobile();
        } else {
            controlPanel.classList.remove('mobile-collapsed');
        }
    });

    // Expose function for use after rolling dice
    gameState.autoCollapsePanel = autoCollapseOnMobile;
    gameState.createHeaderTapZone = createHeaderTapZone;
}

function updateNumPlayersInput() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    const container = document.getElementById('playerNamesInput');
    container.innerHTML = '';
}

function showPlayerNameModal() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    if (numPlayers < 2 || numPlayers > 6) {
        alert('Please enter a number between 2 and 6');
        return;
    }
    
    const modalInputs = document.getElementById('modalPlayerInputs');
    modalInputs.innerHTML = '';
    
    for (let i = 0; i < numPlayers; i++) {
        const div = document.createElement('div');
        div.className = 'player-input-group';
        div.innerHTML = `
            <label for="player${i+1}Name">Player ${i+1} Name:</label>
            <input type="text" id="player${i+1}Name" placeholder="Enter name" required>
        `;
        modalInputs.appendChild(div);
    }
    
    document.getElementById('setupModal').classList.add('show');
    document.getElementById('player1Name').focus();
}

function confirmPlayerNames() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    const players = [];
    
    // Reset Jammy mode
    gameState.jammyMode = false;
    gameState.jammyPlayerIndex = -1;
    gameState.jammyRollCount = 0;
    
    for (let i = 0; i < numPlayers; i++) {
        const name = document.getElementById(`player${i+1}Name`).value.trim();
        if (!name) {
            alert('Please enter all player names');
            return;
        }
        players.push({
            name: name,
            initial: name.charAt(0).toUpperCase(),
            position: 'start',
            color: PLAYER_COLORS[i],
            waitingFor6: false,
            missNextTurn: false,
            hasArcherProtection: false,
            journey: []
        });
        
        // Silent Easter egg: Check for "Jammy" (exact match, case-sensitive)
        if (name === 'Jammy') {
            gameState.jammyMode = true;
            gameState.jammyPlayerIndex = i;
            gameState.jammyRollCount = 0;
            console.log('🥚 EASTER EGG ACTIVATED! Jammy mode enabled.');
            console.log('   Player name:', name);
            console.log('   Player index:', i);
            console.log('   Forced sequence:', gameState.jammyRollSequence);
        }
    }
    
    gameState.players = players;
    document.getElementById('setupModal').classList.remove('show');
    
    // Increment games played counter
    incrementGamesPlayed();
    
    startGame();
}

function startGame() {
    gameState.gameStarted = true;
    
    // Randomize player order
    gameState.playerOrder = [...Array(gameState.players.length).keys()];
    shuffleArray(gameState.playerOrder);
    gameState.currentPlayerIndex = 0;
    
    console.log('Game started. Player order:', gameState.playerOrder);
    if (gameState.jammyMode) {
        console.log('🥚 Jammy is at player index:', gameState.jammyPlayerIndex);
        console.log('🥚 Jammy will play at turn position:', gameState.playerOrder.indexOf(gameState.jammyPlayerIndex));
    }
    
    // Hide setup, show game
    document.getElementById('setupArea').style.display = 'none';
    const gameArea = document.getElementById('gameArea');
    gameArea.style.display = 'block';
    
    // Add mobile structure
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Wrap essential controls in mobile header
        const currentPlayerInfo = document.getElementById('currentPlayerInfo');
        const diceArea = document.getElementById('diceArea');
        const messageArea = document.getElementById('messageArea');
        
        // Create mobile header wrapper if it doesn't exist
        if (!document.querySelector('.mobile-control-header')) {
            const mobileHeader = document.createElement('div');
            mobileHeader.className = 'mobile-control-header';
            gameArea.insertBefore(mobileHeader, gameArea.firstChild);
            mobileHeader.appendChild(currentPlayerInfo);
            mobileHeader.appendChild(diceArea);
            mobileHeader.appendChild(messageArea);
        }
        
        // Create mobile content wrapper if it doesn't exist
        if (!document.querySelector('.mobile-control-content')) {
            const mobileContent = document.createElement('div');
            mobileContent.className = 'mobile-control-content';
            const gameControls = document.getElementById('gameControls');
            const playersInfo = document.getElementById('playersInfo');
            
            if (gameControls) mobileContent.appendChild(gameControls);
            if (playersInfo) mobileContent.appendChild(playersInfo);
            
            gameArea.appendChild(mobileContent);
        }
        
        // Initialize header tap zone
        if (gameState.createHeaderTapZone) {
            setTimeout(gameState.createHeaderTapZone, 100);
        }
    }
    
    // Create player cards
    createPlayerCards();
    
    // Show all players at start position
    renderPlayerCounters();
    
    // Update current player
    updateCurrentPlayer();
    
    // Set initial dice display
    showInitialDice();
    
    // Auto-collapse on mobile
    if (gameState.autoCollapsePanel) {
        gameState.autoCollapsePanel();
    }
}

function showInitialDice() {
    const diceDisplay = document.getElementById('diceDisplay');
    diceDisplay.className = 'initial';
    diceDisplay.innerHTML = '';
}

function showDice(number) {
    const diceDisplay = document.getElementById('diceDisplay');
    diceDisplay.className = '';
    diceDisplay.innerHTML = '';
    
    const dots = DICE_DOTS[number];
    dots.forEach(([row, col]) => {
        const dot = document.createElement('div');
        dot.className = 'dice-dot';
        dot.style.gridColumn = col;
        dot.style.gridRow = row;
        diceDisplay.appendChild(dot);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createPlayerCards() {
    const container = document.getElementById('playersInfo');
    container.innerHTML = '';
    
    gameState.players.forEach((player, index) => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.id = `player-card-${index}`;
        
        card.innerHTML = `
            <div class="player-header">
                <div class="player-name">
                    <div class="player-color-indicator" style="background: ${player.color}"></div>
                    ${player.name}
                </div>
                <div class="player-position">Start</div>
            </div>
            <div class="player-state" id="player-state-${index}"></div>
            <div class="player-journey">
                <div class="journey-label">Journey:</div>
                <div class="journey-list" id="player-journey-${index}">
                    <div class="journey-item">Waiting to start...</div>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function updateCurrentPlayer() {
    const playerIndex = gameState.playerOrder[gameState.currentPlayerIndex];
    const player = gameState.players[playerIndex];
    
    // Update active player card
    document.querySelectorAll('.player-card').forEach(card => {
        card.classList.remove('active');
    });
    document.getElementById(`player-card-${playerIndex}`).classList.add('active');
    
    // Update current player info
    const currentPlayerInfo = document.getElementById('currentPlayerInfo');
    document.getElementById('currentPlayerName').textContent = player.name + "'s Turn";
    
    // Color the current player info box with player's color
    if (currentPlayerInfo) {
        currentPlayerInfo.style.background = `linear-gradient(135deg, ${player.color}15 0%, ${player.color}30 100%)`;
        currentPlayerInfo.style.borderLeft = `4px solid ${player.color}`;
    }
    
    updatePlayerStatus(playerIndex);
    
    // Enable/disable roll button
    gameState.waitingForRoll = true;
    document.getElementById('rollDiceBtn').disabled = false;
    
    // Scroll to player position
    scrollToPosition(player.position);
}

function updatePlayerStatus(playerIndex) {
    const player = gameState.players[playerIndex];
    let status = `Position: ${player.position === 'start' ? 'Start' : player.position}`;
    
    if (player.waitingFor6) {
        status += ' - Waiting for 6 to move';
    }
    if (player.missNextTurn) {
        status += ' - Must miss next turn';
    }
    if (player.hasArcherProtection) {
        status += ' - Protected by Archer';
    }
    
    document.getElementById('playerStatus').textContent = status;
    
    const stateElement = document.getElementById(`player-state-${playerIndex}`);
    if (player.waitingFor6 || player.missNextTurn) {
        stateElement.textContent = player.waitingFor6 ? 'Waiting for 6' : 'Missing next turn';
    } else {
        stateElement.textContent = '';
    }
}

async function rollDice() {
    if (!gameState.waitingForRoll) return;
    
    gameState.waitingForRoll = false;
    document.getElementById('rollDiceBtn').disabled = true;
    
    const playerIndex = gameState.playerOrder[gameState.currentPlayerIndex];
    const player = gameState.players[playerIndex];
    
    console.log('Roll dice - Current player:', player.name, '(index:', playerIndex + ')');
    
    // Check if player must miss this turn
    if (player.missNextTurn) {
        player.missNextTurn = false;
        showMessage("You miss this turn!", "sad");
        playSound('missTurn');
        addToJourney(playerIndex, "Missed turn");
        
        await sleep(2000);
        nextPlayer();
        return;
    }
    
    // Animate dice
    const diceDisplay = document.getElementById('diceDisplay');
    diceDisplay.classList.add('dice-rolling');
    playSound('diceRoll');
    
    // Roll die
    await sleep(500);
    let roll;
    
    // Silent Easter egg: Force optimal sequence for Jammy
    if (gameState.jammyMode && 
        playerIndex === gameState.jammyPlayerIndex && 
        gameState.jammyRollCount < gameState.jammyRollSequence.length) {
        
        roll = gameState.jammyRollSequence[gameState.jammyRollCount];
        console.log('🥚 JAMMY FORCED ROLL #' + (gameState.jammyRollCount + 1) + ':', roll);
        console.log('   (Normal random would have been:', Math.floor(Math.random() * 6) + 1 + ')');
        gameState.jammyRollCount++;
    } else {
        roll = Math.floor(Math.random() * 6) + 1;
        if (gameState.jammyMode && playerIndex === gameState.jammyPlayerIndex) {
            console.log('🥚 Jammy sequence exhausted, using random roll:', roll);
        }
    }
    
    // Show dice with dots
    diceDisplay.classList.remove('dice-rolling');
    showDice(roll);
    
    await sleep(800);
    
    // Auto-collapse panel on mobile after showing result
    if (gameState.autoCollapsePanel) {
        gameState.autoCollapsePanel();
    }
    
    // Check if waiting for 6
    if (player.waitingFor6) {
        if (roll === 6) {
            player.waitingFor6 = false;
            showMessage(`You rolled a 6! You can move now!`, "happy");
            playSound('happyMove');
            addToJourney(playerIndex, `Rolled ${roll} - Released!`);
        } else {
            showMessage(`You rolled ${roll}. Still waiting for a 6...`, "sad");
            playSound('sadMove');
            addToJourney(playerIndex, `Rolled ${roll} - Still waiting`);
        }
        await sleep(2000);
        nextPlayer();
        return;
    }
    
    // Move player
    await movePlayer(playerIndex, roll);
}

async function movePlayer(playerIndex, spaces) {
    const player = gameState.players[playerIndex];
    
    let currentPos = player.position === 'start' ? 0 : player.position;
    let newPos = currentPos + spaces;
    
    console.log(`${player.name} moving from ${currentPos} by ${spaces} spaces to ${newPos}`);
    
    // Check if exceeds 63
    if (newPos > 63) {
        showMessage(`You rolled ${spaces} but need exactly ${63 - currentPos} to win. Stay put!`, "neutral");
        playSound('normalMove');
        addToJourney(playerIndex, `Rolled ${spaces} - Can't move (would overshoot)`);
        await sleep(2500);
        nextPlayer();
        return;
    }
    
    // Move to new position
    player.position = newPos;
    addToJourney(playerIndex, `Rolled ${spaces} → Position ${newPos}`);
    updatePlayerPosition(playerIndex);
    scrollToPosition(newPos);
    
    // Check for win
    if (newPos === 63) {
        console.log('🎉 WINNER:', player.name);
        playSound('winner');
        showWinner(playerIndex);
        return;
    }
    
    await sleep(1000);
    
    // Process special spaces
    await processSpecialSpace(playerIndex, newPos);
}

async function processSpecialSpace(playerIndex, position) {
    const player = gameState.players[playerIndex];
    let shouldContinue = false;
    
    // Check archer protection (applies to current space before other effects)
    if (RULES.archer[position]) {
        player.hasArcherProtection = true;
        showMessage(RULES.archer[position], "happy");
        playSound('archer');
        addToJourney(playerIndex, "⚔️ Archer Protection!");
        await sleep(2000);
    }
    
    // Check move_forward
    if (RULES.move_forward[position]) {
        const move = RULES.move_forward[position];
        console.log(`Forward jump from ${position} to ${move.to}`);
        showMessage(move.text, "happy");
        playSound('happyMove');
        player.position = move.to;
        addToJourney(playerIndex, `Jumped forward to ${move.to}`);
        updatePlayerPosition(playerIndex);
        scrollToPosition(move.to);
        
        if (move.to === 63) {
            await sleep(1500);
            console.log('🎉 WINNER:', player.name);
            playSound('winner');
            showWinner(playerIndex);
            return;
        }
        
        await sleep(2000);
        // Check if new position has special rules
        await processSpecialSpace(playerIndex, move.to);
        return;
    }
    
    // Check move_back (only if no archer protection)
    if (RULES.move_back[position] && !player.hasArcherProtection) {
        const move = RULES.move_back[position];
        showMessage(move.text, "sad");
        playSound('sadMove');
        player.position = move.to;
        addToJourney(playerIndex, `Moved back to ${move.to}`);
        updatePlayerPosition(playerIndex);
        scrollToPosition(move.to);
        await sleep(2000);
        // Check if new position has special rules
        await processSpecialSpace(playerIndex, move.to);
        return;
    }
    
    // Check wait_for_6 (only if no archer protection)
    if (RULES.wait_for_6[position] && !player.hasArcherProtection) {
        player.waitingFor6 = true;
        showMessage(RULES.wait_for_6[position], "sad");
        playSound('sadMove');
        addToJourney(playerIndex, "Must wait for 6");
        await sleep(2000);
    }
    
    // Check extra_turn
    if (RULES.extra_turn[position]) {
        showMessage(RULES.extra_turn[position], "happy");
        playSound('extraTurn');
        addToJourney(playerIndex, "Extra turn!");
        shouldContinue = true;
        await sleep(2000);
    }
    
    // Check miss_turn (only if no archer protection)
    if (RULES.miss_turn[position] && !player.hasArcherProtection) {
        player.missNextTurn = true;
        showMessage(RULES.miss_turn[position], "sad");
        playSound('missTurn');
        addToJourney(playerIndex, "Will miss next turn");
        await sleep(2000);
    }
    
    // Clear archer protection after one turn
    if (player.hasArcherProtection && !RULES.archer[position]) {
        player.hasArcherProtection = false;
    }
    
    // Continue or next player
    if (shouldContinue) {
        updateCurrentPlayer();
    } else {
        nextPlayer();
    }
}

function updatePlayerPosition(playerIndex) {
    const player = gameState.players[playerIndex];
    
    // Update player card position
    const posText = player.position === 'start' ? 'Start' : player.position;
    const card = document.getElementById(`player-card-${playerIndex}`);
    card.querySelector('.player-position').textContent = posText;
    
    // Update counter on board
    renderPlayerCounters();
}

function renderPlayerCounters() {
    const container = document.getElementById('playerCounters');
    container.innerHTML = '';
    
    // Get scaling factor from image
    const img = document.getElementById('gameBoard');
    if (!img || !img.complete) {
        // Image not loaded yet, try again shortly
        setTimeout(renderPlayerCounters, 100);
        return;
    }
    
    // Make container match image dimensions
    container.style.width = img.offsetWidth + 'px';
    container.style.height = img.offsetHeight + 'px';
    
    const scaleX = img.offsetWidth / img.naturalWidth;
    const scaleY = img.offsetHeight / img.naturalHeight;
    
    // Group players by position
    const positionGroups = {};
    gameState.players.forEach((player, index) => {
        const pos = player.position;
        if (!positionGroups[pos]) {
            positionGroups[pos] = [];
        }
        positionGroups[pos].push({player, index});
    });
    
    // Render each position group
    Object.keys(positionGroups).forEach(position => {
        const coords = POSITION_COORDS[position];
        if (!coords) return;
        
        const playersAtPos = positionGroups[position];
        const numPlayers = playersAtPos.length;
        
        // Calculate spacing for multiple players (scaled)
        playersAtPos.forEach(({player, index}, i) => {
            const counter = document.createElement('div');
            counter.className = 'player-counter';
            counter.style.background = player.color;
            counter.textContent = player.initial;
            
            // Offset players horizontally if multiple at same position
            let offsetX = 0;
            if (numPlayers > 1) {
                const spacing = 45; // pixels between counters
                const totalWidth = (numPlayers - 1) * spacing;
                offsetX = (i * spacing) - (totalWidth / 2);
            }
            
            // Apply scaling to coordinates
            counter.style.left = ((coords.x * scaleX) + offsetX) + 'px';
            counter.style.top = (coords.y * scaleY) + 'px';
            
            container.appendChild(counter);
        });
    });
}

function scrollToPosition(position) {
    if (position === 'start' || position === null) {
        position = 'start';
    }
    
    const coords = POSITION_COORDS[position];
    if (!coords) return;
    
    // Get scaling factor from image
    const img = document.getElementById('gameBoard');
    if (!img || !img.complete) return;
    
    const scaleX = img.offsetWidth / img.naturalWidth;
    const scaleY = img.offsetHeight / img.naturalHeight;
    
    const boardScroll = document.getElementById('boardScroll');
    const scrollContainer = boardScroll.getBoundingClientRect();
    
    // Scale coordinates and calculate scroll position to center the position
    const scaledX = coords.x * scaleX;
    const scaledY = coords.y * scaleY;
    
    const scrollX = scaledX - (scrollContainer.width / 2);
    const scrollY = scaledY - (scrollContainer.height / 2);
    
    boardScroll.scrollTo({
        left: Math.max(0, scrollX),
        top: Math.max(0, scrollY),
        behavior: 'smooth'
    });
}

function addToJourney(playerIndex, text) {
    const player = gameState.players[playerIndex];
    player.journey.push(text);
    
    const journeyList = document.getElementById(`player-journey-${playerIndex}`);
    journeyList.innerHTML = '';
    
    const startIndex = Math.max(0, player.journey.length - 5);
    for (let i = startIndex; i < player.journey.length; i++) {
        const item = document.createElement('div');
        item.className = 'journey-item';
        item.textContent = player.journey[i];
        journeyList.appendChild(item);
    }
    
    journeyList.scrollTop = journeyList.scrollHeight;
}

function nextPlayer() {
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.playerOrder.length;
    updateCurrentPlayer();
    hideMessage();
}

function showMessage(text, type = "neutral") {
    const messageArea = document.getElementById('messageArea');
    messageArea.textContent = text;
    messageArea.className = 'show ' + type;
}

function hideMessage() {
    const messageArea = document.getElementById('messageArea');
    messageArea.className = '';
}

function showWinner(playerIndex) {
    const player = gameState.players[playerIndex];
    if (gameState.jammyMode && playerIndex === gameState.jammyPlayerIndex) {
        console.log('🥚 Jammy won using the easter egg! 🎉');
        console.log('   Total forced rolls used:', gameState.jammyRollCount);
    }
    document.getElementById('winnerMessage').textContent = 
        `${player.name} has reached the Ivory Castle and won the game! 🏰`;
    document.getElementById('winnerModal').classList.add('show');
}

function resetGame() {
    location.reload();
}

function confirmRestart() {
    if (gameState.gameStarted) {
        if (confirm('Are you sure you want to restart the game? All progress will be lost.')) {
            location.reload();
        }
    } else {
        location.reload();
    }
}

function toggleMute() {
    const muteToggle = document.getElementById('muteToggle');
    gameState.soundMuted = muteToggle.checked;
    
    // Update label text
    const label = document.querySelector('.mute-label');
    if (gameState.soundMuted) {
        label.textContent = '🔇 Sound';
    } else {
        label.textContent = '🔊 Sound';
    }
}

function playSound(soundName) {
    if (gameState.soundMuted) return;
    
    try {
        SOUNDS[soundName].currentTime = 0;
        SOUNDS[soundName].play().catch(e => console.log('Sound play failed:', e));
    } catch (e) {
        console.log('Sound error:', e);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Rules Modal Functions
function showRulesModal(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('rulesModal');
    if (modal) {
        modal.classList.add('show');
        // Ensure modal is visible
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeRulesModal() {
    const modal = document.getElementById('rulesModal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = ''; // Reset inline display style
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Games Played Counter - Using CountAPI (free third-party service)
// 
// HOW IT WORKS:
// - CountAPI is a free service that stores a counter in the cloud
// - Key: "ivorycastle/games_played" is shared globally across ALL users
// - The counter persists across browsers, devices, and sessions
// - On first load, if key doesn't exist, it shows 0
// - When first game starts, /hit creates the key and increments to 1
// - All subsequent loads will see the shared counter value
//
// TROUBLESHOOTING:
// - If you see 0 in incognito/mobile: The key might not exist yet, start a game to create it
// - If you see "—": CountAPI service is temporarily unavailable
// - Check browser console (F12) for detailed logs
//
async function initGamesCounter() {
    try {
        // Use /get to fetch without incrementing (will return 404 if key doesn't exist yet)
        const response = await fetch('https://api.countapi.xyz/get/ivorycastle/games_played');
        const data = await response.json();
        
        // Check if key exists
        if (data.value !== undefined) {
            console.log('✓ Games counter initialized (CountAPI):', data.value);
            updateCounterDisplay(data.value);
        } else {
            // Key doesn't exist yet, will be created on first game
            console.log('ℹ Counter key not created yet. Start a game to initialize the global counter.');
            updateCounterDisplay(0);
        }
    } catch (error) {
        console.log('ℹ Counter will be initialized when first game starts globally');
        updateCounterDisplay(0);
    }
}

async function incrementGamesPlayed() {
    try {
        // Increment counter on CountAPI (hit endpoint auto-creates if doesn't exist)
        const response = await fetch('https://api.countapi.xyz/hit/ivorycastle/games_played');
        const data = await response.json();
        
        if (data.value !== undefined) {
            console.log('✓ Games played incremented to:', data.value);
            updateCounterDisplay(data.value);
        } else {
            throw new Error('Invalid response from CountAPI');
        }
    } catch (error) {
        console.error('❌ CountAPI unavailable:', error.message);
        // Show "?" to indicate counter service is unavailable
        updateCounterDisplay('—');
    }
}

function updateCounterDisplay(count) {
    const counterValue = document.getElementById('counterValue');
    console.log('Display counter:', count);
    if (counterValue) {
        counterValue.textContent = count;
        // Trigger animation by adding class (only for numbers)
        if (typeof count === 'number') {
            counterValue.classList.remove('updating');
            // Force reflow to restart animation
            void counterValue.offsetWidth;
            counterValue.classList.add('updating');
        }
    }
}
