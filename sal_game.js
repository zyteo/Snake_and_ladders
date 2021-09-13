// GA SEI-32 Project 1: Game
// ZY, 10 Sept 2021

// ARRAY of snakes, with resulting tiles that piece will move down to
const snakeTiles = [15,7];
// const snakeTiles = [41,44,49,52,58,62,69,73,84,92,95,99];
const snakeTilesResult = [1,5];
// ARRAY of ladders, with resulting tiles that piece will move up to
const ladderTiles = [3,8];
// const ladderTiles = [12,51,57,76,78];
const ladderTilesResult = [4,11];

// VARIABLE storing player's tile number
let playerTile = 1;

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
// Takes in corresponding player's tile number, and returns the resulting tile they land on.
const moveTile = (whoseTile) => {
    let tileAfterRoll = whoseTile + diceRoll();
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

