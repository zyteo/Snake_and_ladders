<!-- GA SEI 32 Project 1: Game -->
<!-- ZY, 10 Sept 2021 -->
technologies used, the approach taken, installation instructions, unsolved problems

10 sept - created files, added rules + some logic
11 sept - created table to test out
12 sept - created draw io file to draw out logic for game, added some js logic
13 sept - created word file for pre proj planning
14 sept - filled in the word file, added 10 tiles to test
15 sept - added more to pre project planning doc, worked on some js code. Struggled very badly trying to draw the snakes and ladders on the board with js. Decide that I will use image to overlay. (this was the night where I was actually reconsidering my game choice of snake and ladders and wanted to switch to another game)
16 sept - started working on js logic, adding event listener. also mini test game worked, will scale up from here. Made the 10x10 board, added the pieces, worked on some css to make it look abit nicer. Simon's advice on pieces was to create a div with the pieces, and then overlay on the tables. Great idea, originally I wanted to remove/add class of "circle1" each round, struggled with it

Plan: Moksha-Patamu (Snake and Ladders) - classic board game
rules: https://www.ymimports.com/pages/how-to-play-snakes-and-ladders
https://www.scoopwhoop.com/snakes-ladders-invented-in-india/

Rules of Game:
The first player that reaches the highest space on the board, 100, wins the game.
When you land at the bottom of a ladder, your piece would move up. Landing at the top of a ladder does nothing. When you land at the top of a snake, your piece would move down. Landing at the base of a snake does nothing.

Note that a player will have to roll the exact number required to land their piece on the 100th tile. So if the player rolls a higher number than needed to land exactly on 100, their piece does not move and remains there until their next turn.

Following the original game of Moksha-Patamu, there will be more snakes than ladders.
In the original game, the squares of virtue were: faith (12), reliability (51), generosity (57), knowledge (76) and asceticism (78).

And the squares of evil were: disobedience (41), vanity (44), vulgarity (49), theft (52), lying (58), drunkenness (62), debt (69), murder (73), rage (84), greed (92), pride (95) and lust (99). 


Players: user + 2 computer
10x10 board, total 100 tiles
Goal is to be the first player to reach 100.
Once land on base of ladder, pop up "Landed on a ladder!", move piece up
land on top of snake, pop up "Landed on a snake!", move piece down

code:
random dice --> 1 to 6
pieces to move on board
assign each tile to snake or ladder

if (piece === snake) {
    move down
}

last part --> when a piece is finishing i.e. tile 94 or greater
if (xx + diceroll !== 100){
    do nothing
}
else {
    POP UP WINNER!!
}