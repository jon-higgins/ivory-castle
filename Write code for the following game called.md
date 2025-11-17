Write code for the following game called Ivory Castle I want code to run In a browser

I want an index.html  file and then other supporting files to be output so that I can load then to a shared folder location. There is a board of play PNG file and some sound files, I don't want these to be embeded as base  64 but to be referenced from the root folder


There will be a board of play as the game is an electronic analogy of a board game - slightly similar to the well know snakes and ladders (don't don't use any  of that logic or concept) The screen should show the board on the left of the screen which is scrollable and the game should scroll the board screen to show the progress of the current player counter

show the board on the left of the screen with a control area to the right - make the board size to the available screen space (scrollable) and the control panel have a slider to allow to resize left to right as desired width its contents resizing
for each player keep a small font inventory of moves with the last few  (5?) visible in a scrolling  frame but the full journey visible

 I will upload an image of the original board for the game that will simply be used as the back ground I will also upload a file that serves as the image map which shows the coordinates of the start position as well as positions 1 to 63, this can be integrated into the index.html


The game is played by between 2 and 6 players where each player takes a turn to roll a single die and then advances along a board of spaces from 1 to 63 by the number of spaces shown by the die roll

The winner is the first player to land exactly on space 63, if they fail to land exactly on 63, they must remain where they are until they roll the right score to land exactly on 63 The game should prompt for the number of players and then prompt to input their 

name. the full name should be shown in the control panel and the inital used to make a counter to show their position on the board

A random starting player is chosen and then each player in random turn rolls the dice and progresses according to the dice roll and possible additional actions that are associated to landing on the position according to the listed outcome

 The game should prompt for each player to press enter to roll the die - Using a roll dice button in the control area shown below the playing board

Also on the control board show the player name, their current position number and a note if they are to miss a turn  or waituig to throw a 6 or whatever
There should be a scrollable window of a summary of their moved with the last 5 visable but the whole journey lsted to be scrolled in the small window


Once the die  is rolled, an animated die rolls in the control area and stops chowing that roll until the bext player is promoted to  takes their turn

Then a coloured circle with the Player initial upon it (their counter)  (I.e. a red J in a white circle about the size of each space) will be show on the  space it lands on until the next turn When players land on some  defined places they are moved (move_forward) or (move_back) to another place and some  suitable text is  temporarily displayed in the control panel The (move_forward) actions are from space, to space, display text 4, 10  "Jump to 10" 12, 14  "You jump to 14" 15, 20  "Jump to 20" 19, 24  "Go on to 24" 23, 37  "Come in to tea, short cut to 37 after tea" 25, 26  "take a step on" 32, 37  "Jump to 37" 36, 42  "Come with me to 42" 41, 44  "I'll take you to 44" 45, 49  "jump in, I'll take you to 49 48, 61  "Here's my 'plane, I'll take you to 61" 57, 63  "Jump to 63 and win" When players land on some defined places then they may be moved (move_back) to another place and some text is diplayed  The (move_back) actions and text to display are: 6, 1  "Go back to 1" 9, 3  "I knew you'd fall, climb up at 3" 11, 7  "Go back to 7" 13, 7  "Back to 7" 30, 24  "Go back to 24" 33, 14  "back to 14" 38, 34  "Back to 34 40, 37  "Back to 37 46, 24  "Back to 24 51, 42  "Back to 42 54, 34  "Miss a turn in the woods and back to 34" When players land on a special place then some additional actions are taken If the player lands on places in dictionary (wait_for_6) they must wait until they score a 6 before they can move again  Wait for 6 (wait_for_6) when landing on the space, display the text The (wait_for_6) actions and text to display are: 2, "You can't move until you get 6" 16, "Stay here until you get 6" 47, "This way, from 47 wait till you get a 6" If the player lands on places in dictionary (extra_turn) they immediately take another dice roll and move The (extra_turn) actions and text to display are: 8, "Take another turn" If the player lands on places in dictionary (miss_turn) they miss their next dice roll and move The (miss_turn) actions and text to display are: 21, "It's a nice puddle - miss a turn and stay in it" 31, "Stay a turn" 43, "Miss a turn" 54, "Miss a turn" 60, "You must stop here for 1 turn" If the player lands on places defined below (archer) then their next turn only will not be affected by move_back, wait_for_6, miss_turn  The (archer) actions and text to display are: 10, "You are protected by the Archer" 35, "You are protected by the Archer" 49, "You are protected by the Archer"

Add some stock sounds - a dice roll, a normal move, a "happy sound" jump forward move, a sad move back - different sad and happy sounds for miss a go or extra go I will upload an arrow sound when archer protection is acquired and a winner tune file to be played when someone wins