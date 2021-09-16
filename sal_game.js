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

// ARRAY of snakes, with resulting tiles that piece will move down to
const snakeTiles = [15,7];
// const snakeTiles = [41,44,49,52,58,62,69,73,84,92,95,99];
const snakeTilesResult = [1,5];
// ARRAY of ladders, with resulting tiles that piece will move up to
const ladderTiles = [3,8];
// const ladderTiles = [12,51,57,76,78];
const ladderTilesResult = [4,11];

// FUNCTION Dice roll from 1 to 6
// Function randomly generates and returns a number, randomDice, that has value 1-6.
const diceRoll = () => {
    let randomDice = Math.ceil(Math.random() * 6);
    return randomDice;
}
// FUNCTION Move piece backward if land on snakes
// Takes in a parameter (piece) that is part of the snakeTiles value
// Finds that value in snakeTiles array, get the index, and input that index into snakeTilesResult.
// Function returns a number, resultSnake, that the piece will move to.
const moveBack = (piece) => {
    let indexSnake = snakeTiles.indexOf(piece);
    let resultSnake = snakeTilesResult[indexSnake];
    return resultSnake;
}
// FUNCTION Move piece forward if land on ladder
// Takes in a parameter (piece) that is part of the ladderTiles value
// Finds that value in ladderTiles array, get the index, and input that index into ladderTilesResult.
// Function returns a number, resultLadder, that the piece will move to.
const moveForward = (piece) => {
    let indexLadder = ladderTiles.indexOf(piece);
    let resultLadder = ladderTilesResult[indexLadder];
    return resultLadder;
}
// FUNCTION Move tile normal
// Takes in corresponding player's tile number (currentTile), and returns the resulting tile they land on.
const moveTileNormal = (currentTile) => {
    let tileAfterRoll = currentTile + diceRoll();
    //   save the dice value
    let diceValue = tileAfterRoll - currentTile;
    // display the dice value on screen
    $('.screen')[0].textContent = diceValue;
    // if land on snaketile, return value of tile player goes down to
    if (snakeTiles.includes(tileAfterRoll)){
        return moveBack(tileAfterRoll);
    }
    // if land on laddertile, return value of tile player goes up to
    else if (ladderTiles.includes(tileAfterRoll)){
        return moveForward(tileAfterRoll);
    }
    // otherwise, land on normal tile
    else {
        return tileAfterRoll;
    }
}
// FUNCTION Move tile towards end game
// Takes in corresponding player's tile number (currentTile), and returns the resulting tile they land on. If exceed tile 100, no movement. 
const moveTileEnding = (currentTile) => {
    let tileAfterRoll = currentTile + diceRoll();
    let diceValue = tileAfterRoll - currentTile;
    $('.screen')[0].textContent = diceValue;
    // FIRST CHECK if landed on snake/ladder
    if (snakeTiles.includes(tileAfterRoll)){
        return moveBack(tileAfterRoll);
    }
    else if (ladderTiles.includes(tileAfterRoll)){
        return moveForward(tileAfterRoll);
    }
    //END CHECK, if didn't land on snake or ladder, continue on
    // If land nicely on last tile, 100.
    else if (tileAfterRoll === 100){
        alert('A player has reached 100! Select "New game" to start again!');
        return tileAfterRoll;
    }
    // if goes beyond last tile, remain in original position
    else if (tileAfterRoll > 100){
        return (tileAfterRoll - diceValue);
    }
}
// FUNCTION Make table row + table details
// Takes in 2 parameters (start,end) that is the start and end of the squares
// Generates a row of 10 squares, with respective id
const make1Row = (start,end) => {
    const $newrow = $('<tr>').addClass('tablerow');
    // if start < end, LEFT TO RIGHT
    if (start < end) {
        // add the squares inside new row
        for (let i = start; i<= end; i++){
            // create individual square
            const $square = $('<td>').attr('id', i).addClass('square').text(i);
            // append to table row
            $newrow.append($square);
        }
    }
    // if end < start, RIGHT TO LEFT
    else if (end < start) {
        for (let i = start; i>= end; i--){
            const $square = $('<td>').attr('id', i).addClass('square').text(i);
            $newrow.append($square);
        }
    }
    $('table').append($newrow);
}

// Make the 10x10 board
make1Row(100,91);
make1Row(81,90);
make1Row(80,71);
make1Row(61,70);
make1Row(60,51);
make1Row(41,50);
make1Row(40,31);
make1Row(21,30);
make1Row(20,11);
make1Row(1,10);

// jquery/js event listeners
$(() => {
// On click, progress game
$(".rolldice").on("click", () => {
    
    // PLAYER 1 ROUND if roundnumber is odd
    if (roundNumber % 2 !== 0){
        console.log(`${roundNumber} so player 1!`)
        // update round number first
        roundNumber += 1;
        $('.roundnumber')[0].textContent = roundNumber;
        // check, if tile greater than 93?
        if (p1Tile > 93) {
            p1Tile = moveTileEnding(p1Tile)
            console.log("endgame p1", p1Tile)
            $('.p1tile')[0].textContent = p1Tile;
            // update
            $('#' + `${p1Tile}`).append($('.circle1'))
        }
        // If tile less than 94, NORMAL 
        else {
            p1Tile = moveTileNormal(p1Tile);
            console.log("p1",p1Tile);
            $('.p1tile')[0].textContent = p1Tile;
            $('#' + `${p1Tile}`).append($('.circle1'))
        }
    }
    
    // PLAYER 2 ROUND if roundnumber is even
    else if (roundNumber % 2 === 0){
        console.log(`${roundNumber} so player 2!`)
        // update round number first
        roundNumber += 1;
        $('.roundnumber')[0].textContent = roundNumber;
        // check, if tile greater than 93?
        if (p2Tile > 93) {
            p2Tile = moveTileEnding(p2Tile)
            console.log("endgame p2", p2Tile)
            $('.p2tile')[0].textContent = p2Tile;
            $('#' + `${p2Tile}`).append($('.circle2'))
        }
        // If tile less than 94, NORMAL 
        else {
            p2Tile = moveTileNormal(p2Tile);
            console.log("p2",p2Tile);
            $('.p2tile')[0].textContent = p2Tile;
            $('#' + `${p2Tile}`).append($('.circle2'))
        }
    }
});

// on click, reset game by refreshing page
  $(".refresh").on("click", () => {
    window.location.reload();
  })

// on click, set dark mode
$(".darkmode").on("click", () => {
    $('body')[0].className = "dark"
  })
  
// on click, set light mode
$(".lightmode").on("click", () => {
    $('body')[0].className = ""
  })
  
})
// // ladder img
// $ladderImg = $('<img>').attr('src', 'https://freesvg.org/img/portablejim-Ladder-flat.png');
// $snakeImg = $('<img>').attr('src', 'http://www.clipartbest.com/cliparts/KTn/Lqk/KTnLqkaEc.png')
// // $('.squareset').append($snakeImg)
// $('.square:contains(17)')[0].append($snakeImg)