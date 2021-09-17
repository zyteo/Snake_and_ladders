<!-- GA SEI 32 Project 1: Game -->
<!-- ZY, 10 Sept 2021 -->

Welcome to my project folder for the classic board game Moksha Patamu (Snake and Ladders)!\

This game was created with HTML, CSS (+bootstrap), JS (+jQuery), and Photoshop.\
I had to do some research before creating the game since it was a long time since I last played Snake and Ladders.\
That was when I learnt that the game originated from India, and there were more snakes than ladders. I decided to base my game on the original game.\
Some websites I read before starting on the game:\
https://www.ymimports.com/pages/how-to-play-snakes-and-ladders
https://www.scoopwhoop.com/snakes-ladders-invented-in-india/

Rules of Game:
The first player that reaches the highest space on the board, 100, wins the game.
When you land at the bottom of a ladder, your piece would move up. Landing at the top of a ladder does nothing. When you land at the top of a snake, your piece would move down. Landing at the base of a snake does nothing.

Note that a player will have to roll the exact number required to land their piece on the 100th tile. So if the player rolls a higher number than needed to land exactly on 100, their piece does not move and remains there until their next turn.

Timeline:
10 sept - created files, added rules + some logic\
11 sept - created html table to test out\
12 sept - created draw io file to draw out logic for game, added some js logic\
13 sept - created word file for pre proj planning\
14 sept - filled in the word file, added 10 tiles to test\
15 sept - added more to pre project planning doc, worked on some js code. Struggled very badly trying to draw the snakes and ladders on the board with js. Decided to use image to overlay. (this was the night where I was actually reconsidering my game choice of snake and ladders and wanted to switch to another game)\
16 sept - started working on js logic, adding event listener. also mini test game worked, will scale up from here. Made the 10x10 board, added the pieces, worked on some css to make it look abit nicer. Simon's advice on pieces was to create a div with the pieces, and then overlay on the tables. Great idea, originally I wanted to remove/add class of "circle1" each round, and I struggled with it.\
ERROR : towards the end, sometimes got NAN, was wondering why, <-- was also a hint there was a bug in my movetileending function. TURNS OUT I account for tile === 100 and > 100 but not < 100!\
17 sept - added bootstrap, also asked about overlaying snake and ladder image, got introduced to responsive images, I will try to make sure it works for devices with other screens. Spent quite some time working out the details. Also started photoshopping board image overlay. Finished dark/light mode css/js fix. Completed game.