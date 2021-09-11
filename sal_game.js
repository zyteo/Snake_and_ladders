// GA SEI-32 Project 1: Game
// ZY, 10 Sept 2021

// FUNCTION Dice roll from 1 to 6
const diceRoll = () => {
    let randomDice = Math.ceil(Math.random() * 6);
    return randomDice;
}

// ARRAY of snakes
const snakeTiles = [41,44,49,52,58,62,69,73,84,92,95,99];
// ARRAY of ladders
const ladderTiles = [12,51,57,76,78];

