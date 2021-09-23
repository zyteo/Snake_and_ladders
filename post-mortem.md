Project Post Mortem
<!-- ZY, 23 Sept 2021 -->

Approach and Process

    What in my process and approach to this project would I do differently next time?

    I started the project really early, and I think I would dedicate more time to planning the next time. This includes being more detailed in the logic of the project. I would also be more aware of different methods to tackle a problem. If A doesn't work, I should think about an option B. This is in the case of the board image overlay for the snakes and ladders.
    
    What in my process and approach to this project went well that I would repeat next time?

    Starting early was a great idea, I had some time to think about the ways and methods I would use to implement the project. I also had more time to spend on additional features to value add to the game. I would also continue to google for help when I need it, since it saves time and provides alternatives to solve a problem.

--
Code and Code Design

    What in my code and program design in the project would I do differently next time?

    Try to split DOM events and non-DOM events if possible. Making code more DRY would also be ideal, such as the generation of the board. I would also try to convert some of the code to functions, if possible, since it would be easier to invoke a function.

    Code snippet:

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
      if (p1Tile === lastTile) {
        alertEndGame();
      }
    }
    // If tile less than 94, NORMAL
    else {
      p1Tile = moveTileNormal(p1Tile);
      console.log("p1", p1Tile);
      $(".p1tile")[0].textContent = p1Tile;
      $("#" + `${p1Tile}`).append($(".circle1"));
    }
  }


    What in my code and program design in the project went well? Is there anything I would do the same next time?

    Organising the code into different blocks, i.e defining variables first, then functions, and lastly DOM event listeners was helpful, as it was easier to navigate around the js script. I would continue to compartmentalise code into blocks/functions to make things easier and more efficient.

    Code snippet:
    
    const normalRoll = () => {
  clearInterval(playGame);
  checkItems();
  progressGame();
};

For each, please include code examples.

    Code snippet up to 20 lines.
    Code design documents or architecture drawings / diagrams.

SEI Post Mortem

    What habits did I use during this unit that helped me?

    Using objects to handle data was helpful since I could store all my snake and ladders inside 1 object. jQuery was also great in speeding things up and keeping code shorter. Learning how to debug and use the console was really important in speeding up troubleshooting and getting to quickly know where went wrong.

    What habits did I have during this unit that I can improve on?

    Use loops more frequently to keep code more DRY, think about how to represent the data (whether to use array/object)

    How is the overall level of the course during this unit? (instruction, course materials, etc.)

    The course materials was really helpful in providing the information, and the homework and labs helped reinforce concepts. The only sad part is there isn't enough time to go through everything in class, and some parts that were not included in class were actually quite important in the game making process.
