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
const diceRoll = () => {
    let randomDice = Math.ceil(Math.random() * 6);
    return randomDice;
}

// FUNCTION Move piece backward if land on snakes
const moveBack = (piece) => {
    return snakeTilesResult[piece];
}

// FUNCTION Move piece forward if land on ladder
const moveForward = (piece) => {
    return ladderTilesResult[piece];
}

// FUNCTION Move tile
// Takes in corresponding player's tile number, and returns the resulting tile they land on.
const moveTile = (whoseTile) => {
    // if land on snaketile
    if (whoseTile + diceRoll === snakeTiles){
        return moveBack(whoseTile + diceRoll);
    }
    // if land on laddertile
    elseif (whoseTile + diceRoll === ladderTiles){
        return moveForward(whoseTile + diceRoll);
    }
    // otherwise, land on normal tile
    else {
        return whoseTile + diceRoll
    }
}

