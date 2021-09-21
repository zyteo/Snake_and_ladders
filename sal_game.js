// GA SEI-32 Project 1: Game
// ZY, 10 Sept 2021

/////////////////////////////////// PLANNING //////////////////////////////////////////////////////
// make mini game to test first. 20 tiles, 2 snakes, 2 ladders, 2 player pieces, 1 track round number

// Track P1 tile, P2 tile, round number
// 1. Both starts at tile 1

// 2. P1 rolls dice (PRESS) ROUND 1 (ODD). round number + 1
// console log the dice roll number
// 2.1 CHECK:Is tile > 17? If so, do NEARINGEND. Otherwise, do NORMAL.
// NEARINGEND ==> P1 tile + diceroll > 20, STAY. If = 20, WIN!! If not, do NORMAL.
// 2.2 NORMAL ==> P1 tile + diceroll = newP1 tile. CHECK, is new P1 tile on S/L? If so, do SL, return newP1 tile.
// 2.3 Update the circle piece, NewP1 tile on board

// 3. P2 rolls dice (NEXT PRESS) ROUND 2 (EVEN). round number + 1
// console log the dice roll number
// Repeat steps 2.1 to 2.3, just for player 2.

// Press button event - roll dice
// If round number odd, do P1. If even, work on P2
/////////////////////////////////// END OF PLANNING ////////////////////////////////////////////////

// define variables for game start
let p1Tile = 1;
let p2Tile = 1;
let roundNumber = 1;
// define playGame as global variable for autoplay function
// refer https://stackoverflow.com/questions/26313066/setinterval-and-clearinterval-inside-of-a-button
let playGame;

// set the value of the last tile and condition where piece is nearing the last tile
const lastTile = 100;
const nearLastTile = 93;

// OBJECT of snakes and ladders, with the resulting tiles that the pieces will move to
const snakeAndLadders = {
  start: [41, 44, 49, 58, 62, 69, 73, 84, 92, 95, 99, 12, 51, 57, 76, 78],
  end: [22, 37, 34, 42, 60, 50, 35, 66, 90, 74, 7, 31, 70, 63, 89, 96],
};

// FUNCTION Dice roll from 1 to 6
// Function randomly generates and returns a number, randomDice, that has value 1-6.
const diceRoll = () => {
  let randomDice = Math.ceil(Math.random() * 6);
  return randomDice;
};
// FUNCTION Move piece if land on snakes or ladder
// Takes in a parameter (piece) that is part of the snakeAndLadders object array
// Finds the corresponding end value, get the index, and input that index into snakeAndLadders.end.
// Function returns a number, resultSnakeOrLadder, that the piece will move to.
const moveSnakeOrLadder = (piece) => {
  let indexSnakeOrLadder = snakeAndLadders.start.indexOf(piece);
  let resultSnakeOrLadder = snakeAndLadders.end[indexSnakeOrLadder];
  return resultSnakeOrLadder;
};
// FUNCTION Move tile normal
// Takes in corresponding player's tile number (currentTile), and returns the resulting tile they land on.
const moveTileNormal = (currentTile) => {
  let tileAfterRoll = currentTile + diceRoll();
  //   save the dice value
  let diceValue = tileAfterRoll - currentTile;
  // display the dice value on screen
  $(".screen")[0].textContent = diceValue;
  // if land on snake or ladder, return value of tile player goes to
  if (snakeAndLadders.start.includes(tileAfterRoll)) {
    return moveSnakeOrLadder(tileAfterRoll);
  }
  // otherwise, land on normal tile
  else {
    return tileAfterRoll;
  }
};
// FUNCTION Move tile towards end game
// Takes in corresponding player's tile number (currentTile), and returns the resulting tile they land on. If exceed tile 100, no movement.
const moveTileEnding = (currentTile) => {
  let tileAfterRoll = currentTile + diceRoll();
  let diceValue = tileAfterRoll - currentTile;
  $(".screen")[0].textContent = diceValue;
  // FIRST CHECK if landed on snake
  if (snakeAndLadders.start.includes(tileAfterRoll)) {
    return moveSnakeOrLadder(tileAfterRoll);
  }
  //END CHECK, if didn't land on snake, continue on
  // if less than 100,
  else if (tileAfterRoll < lastTile) {
    return tileAfterRoll;
  }
  // If land nicely on last tile, 100.
  else if (tileAfterRoll === lastTile) {
    alert('A player has reached 100! Select "New game" to start again!');
    clearInterval(playGame);
    return tileAfterRoll;
  }
  // if goes beyond last tile, remain in original position
  else if (tileAfterRoll > lastTile) {
    return tileAfterRoll - diceValue;
  }
};
// FUNCTION Make table row + table details
// Takes in 2 parameters (start,end) that is the start and end of the squares
// Generates a row of 10 squares, with respective id
const make1Row = (start, end) => {
  const $newrow = $("<tr>").addClass("tablerow");
  // if start < end, LEFT TO RIGHT
  if (start < end) {
    // add the squares inside new row
    for (let i = start; i <= end; i++) {
      // create individual square
      const $square = $("<td>").attr("id", i).addClass("square").text(i);
      // append to table row
      $newrow.append($square);
    }
  }
  // if end < start, RIGHT TO LEFT
  else if (end < start) {
    for (let i = start; i >= end; i--) {
      const $square = $("<td>").attr("id", i).addClass("square").text(i);
      $newrow.append($square);
    }
  }
  // append table row to table
  $("table").append($newrow);
};

// Make the 10x10 board
make1Row(100, 91);
make1Row(81, 90);
make1Row(80, 71);
make1Row(61, 70);
make1Row(60, 51);
make1Row(41, 50);
make1Row(40, 31);
make1Row(21, 30);
make1Row(20, 11);
make1Row(1, 10);

// FUNCTION to progress the game
// Function will check for round number, and then perform playing options on the pieces. Also updates the text content (round number, player tile and player piece) on the screens.
const progressGame = () => {
  // PLAYER 1 ROUND if roundnumber is odd
  if (roundNumber % 2 !== 0) {
    console.log(`${roundNumber} so player 1!`);
    // update round number first
    roundNumber += 1;
    $(".roundnumber")[0].textContent = roundNumber;
    // check, if tile greater than 93?
    if (p1Tile > nearLastTile) {
      p1Tile = moveTileEnding(p1Tile);
      console.log("endgame p1", p1Tile);
      $(".p1tile")[0].textContent = p1Tile;
      // update tile piece
      $("#" + `${p1Tile}`).append($(".circle1"));
    }
    // If tile less than 94, NORMAL
    else {
      p1Tile = moveTileNormal(p1Tile);
      console.log("p1", p1Tile);
      $(".p1tile")[0].textContent = p1Tile;
      $("#" + `${p1Tile}`).append($(".circle1"));
    }
  }

  // PLAYER 2 ROUND if roundnumber is even
  else if (roundNumber % 2 === 0) {
    console.log(`${roundNumber} so player 2!`);
    // update round number first
    roundNumber += 1;
    $(".roundnumber")[0].textContent = roundNumber;
    // check, if tile greater than 93?
    if (p2Tile > nearLastTile) {
      p2Tile = moveTileEnding(p2Tile);
      console.log("endgame p2", p2Tile);
      $(".p2tile")[0].textContent = p2Tile;
      $("#" + `${p2Tile}`).append($(".circle2"));
    }
    // If tile less than 94, NORMAL
    else {
      p2Tile = moveTileNormal(p2Tile);
      console.log("p2", p2Tile);
      $(".p2tile")[0].textContent = p2Tile;
      $("#" + `${p2Tile}`).append($(".circle2"));
    }
  }
};

// FUNCTION to progress the game automatically
// Function uses the built-in setinterval function to run the progressGame function above, interval of 1sec.
// This is for the "Autoplay" button
const autoPlay = () => {
  playGame = setInterval(progressGame, 1000);
};

// FUNCTION to progress the game
// Function first clears the setinterval function to stop autoplay and then run the progressGame function.
// This is for the "Let's roll!" button
const normalRoll = () => {
  clearInterval(playGame);
  progressGame();
};

// FUNCTION to set dark mode
// Function checks if checkbox is checked, if yes then enable dark mode, otherwise is light mode
// This is for the "Dark mode" checkbox
// refer https://stackoverflow.com/questions/6358673/javascript-checkbox-onchange
const darkMode = () => {
  if (document.getElementById("checkbox").checked) {
    $("body,p")[0].className = "darkmode";
    $("h2")[0].className = "darkmode";
    // change the screen colours displaying the dice value etc
    $(".badge-light").addClass("badge-dark").removeClass("badge-light");
  } else {
    $("body,p")[0].className = "";
    $("h2")[0].className = "";
    $(".badge-dark").addClass("badge-light").removeClass("badge-dark");
  }
};

// jquery/js event listeners
$(() => {
    // once DOM loaded, append the pieces to the tile
    $("#" + `${p1Tile}`).append($(".circle1"));
    $("#" + `${p2Tile}`).append($(".circle2"));


  // on click, reset game by refreshing page
  $(".refresh").on("click", () => {
    window.location.reload();
    // clearInterval(playGame)
    // let p1Tile = 1;
    // let p2Tile = 1;
    // let roundNumber = 1;
    // $(".screen")[0].innerHTML = `&#9858`;
    // $(".roundnumber")[0].textContent = roundNumber;
    // $(".p1tile")[0].textContent = p1Tile;
    // $(".p2tile")[0].textContent = p2Tile;
    // $("#" + `${p1Tile}`).append($(".circle1"));
    // $("#" + `${p2Tile}`).append($(".circle2"));
    
  });
});
