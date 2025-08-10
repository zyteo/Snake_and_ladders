<!-- GA SEI 32 Project 1: Game -->
<!-- ZY, 10 Sept 2021 -->
# Moksha Patamu (Snake and Ladders)

#### Welcome to my project folder for the classic board game Moksha Patamu (Snake and Ladders)!

#### Play the game [here](https://snake-and-ladders.vercel.app/)
This game was created with HTML, CSS (+bootstrap), JS (+jQuery), and Photoshop.\
I had to do some research before creating the game since it was a long time since I last played Snake and Ladders.\
That was when I learnt that the game originated from India, and there were more snakes than ladders. I decided to base my game on the original game.\
Some websites I read before starting on the game:\
https://www.ymimports.com/pages/how-to-play-snakes-and-ladders  
https://www.scoopwhoop.com/snakes-ladders-invented-in-india/

Rules of Game:\
The first player that reaches the highest space on the board, 100, wins the game.
When you land at the bottom of a ladder, your piece would move up.\
Landing at the top of a ladder does nothing. When you land at the top of a snake, your piece would move down. \
Landing at the base of a snake does nothing.

Note that a player will have to roll the exact number required to land their piece on the 100th tile.\
So if the player rolls a higher number than needed to land exactly on 100, their piece does not move and remains there until their next turn.

```
Timeline:

10 Sep 2021 - created files, added rules + some logic

11 Sep 2021 - created html table to test out

12 Sep 2021 - created draw io file to draw out logic for game, added some js logic

13 Sep 2021 - created word file for pre proj planning

14 Sep 2021 - filled in the word file, added 10 tiles to test

15 Sep 2021 - added more to pre project planning doc, worked on some js code. Struggled very badly trying to draw the snakes and ladders on the board with js. 
Decided to use image to overlay. 
(this was the night where I was actually reconsidering my game choice of snake and ladders and wanted to switch to another game)

16 Sep 2021 - started working on js logic, adding event listener. also mini test game worked, will scale up from here. 
Made the 10x10 board, added the pieces, worked on some css to make it look abit nicer.
Simon's advice on pieces was to create a div with the pieces, and then overlay on the tables. 
Great idea, originally I wanted to remove/add class of "circle1" each round, and I struggled with it.
ERROR : towards the end, sometimes got NAN, was wondering why, <-- was also a hint there was a bug in my movetileending function.
TURNS OUT I account for tile === 100 and > 100 but not < 100!

17 Sep 2021 - added bootstrap, also asked about overlaying snake and ladder image, got introduced to responsive images, 
I will try to make sure it works for devices with other screens. 
Spent quite some time working out the details. Also started photoshopping board image overlay. 
Finished dark/light mode css/js fix. Completed game.

18 Sep 2021 - Modified some css and html, attempting to work on aesthetics/layout + autoplay function so players don't have to keep clicking. 
Played flexbox froggy to familiarise with flexbox properties.

19 Sep 2021 - neaten js code, also added autoplay function for game, to stop autoplay just press "let's roll" and roll manually.

20 Sep 2021 - learning css stuff, further neaten code. Added some more info to word doc + html. 
Also set dark/light mode as a checkbox, thus removing 2 buttons, easier for players. Fixed table setting. 
Now no matter how zoomed in/using other devices, the snake and ladder board should not be broken. Got the checkbox into a toggle switch.

21 Sep 2021 - changed tile pieces positioning, should now not overlap when they are both on the same tile. 
Added music toggle to game. Changed some code based on soft launch presentation comments. Added github link to footer

22 Sep 2021 - added prompt for item array for alert message at endgame. Also added prompt to take in player names

23 Sep 2021 - minor CSS edits, managed to center board+screen and adjusted width/margins to make things look better, and tile pieces are now above the snakes/ladders.
Changed to snake cursor. Also adjusted "new game" button which no longer refreshes page. 
Added keypress events for "Let's roll" & "Autoplay" buttons. Added post-mortem.

10 Oct 2021 - Adjusted tile pieces such that when both are on the same tile, they are within the tile box. 
Previously one tile would be below another, making it seem like they are on different tiles.

6 Dec 2021 - Manually added state for autoplay so that when user spam clicks autoplay, there will not be multiple intervals.

28 Jun 2023 - Adjusted readme file for readability

8 Aug 2025 - Upgraded node version on vercel
```


