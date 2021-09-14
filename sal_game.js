// GA SEI-32 Project 1: Game
// ZY, 10 Sept 2021


// Function that randomly generates RGB values - color each square randomly
const randomColorRGB = () => {
    const red = Math.floor( Math.random() * 256 )
    const green = Math.floor( Math.random() * 256 )
    const blue = Math.floor( Math.random() * 256 )
    return `rgb(${red}, ${green}, ${blue})`
}

// Generate board
// function to make a row with 8 squares, start with red
const make10Squares = () => {
    // create new div to add the squares inside
    const $newdiv = $('<div>').addClass('squareset container');
    // add the squares inside new div, different colors
    for (let i=1; i <= 10; i++){
        const $square = $('<div>').addClass('square').css('background-color', randomColorRGB());
        $square.text(i).attr('id', i);
        // append to main square div
        $newdiv.append($square);
    }
    $('body').append($newdiv);
    
}

make10Squares();

// ARRAY of snakes, with resulting tiles that piece will move down to
const snakeTiles = [15,7];
// const snakeTiles = [41,44,49,52,58,62,69,73,84,92,95,99];
const snakeTilesResult = [1,5];
// ARRAY of ladders, with resulting tiles that piece will move up to
const ladderTiles = [3,8];
// const ladderTiles = [12,51,57,76,78];
const ladderTilesResult = [4,11];

// VARIABLE storing player & computer's tile number
let playerTile = 1;
let computerTile = 1;

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

// FUNCTION Move tile
// Takes in corresponding player's tile number (currentTile), and returns the resulting tile they land on.
const moveTile = (currentTile) => {
    let tileAfterRoll = currentTile + diceRoll();
    // display (tileAfterRoll - currentTile) on the dice roll screen
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

// Maybe like after clicking roll...
// playerTile = moveTile(playerTile);

// For the game to run,
// while loop, for as long as no piece landed on 100 yet, run game

