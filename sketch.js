let board = [0,0,0,0,0,0,0,0];
let numShips = Number(prompt("How many ships do you want to place?"));
let hits = 0;
let guesses = numShips + 2;
let winStatus = "";


// 2PTS OBJECTIVE 1: COMPLETE THE placeShips function
// This function places the ships on the board! 
// To place a ship on the board, you need to change the element in the array to 1

// hint! in order to do this, you need to use the randomNumber() function to find a random index to place each of your ships
// hint! the number of ships you need to place is stored in the numShips global variable
function placeShips () {
  console.log(board);
  while(numShips > 0)
  {
     var ship = randomNumber(0,board.length);
    if(board[ship] == 0) {
        board[ship]=1
    numShips --
       
       
       }
  }
}

// 2PTS OBJECTIVE 2: COMPLETE THE fire(spot) function

// This function takes in a number or (spot) that the user pressed 0 - board length. It checks if there is a ship or not on the board. If there isn't a ship at that index it is a miss! It switches that index on the board to a 2. If there is a ship, it is a hit! It switches that index on the board to a 3. 

// hint: first check if the board at spot has a 0 or 1. is it a hit or a miss if its 0? is it a hit or a miss if its 1?

// hint: use if statements

function fire (spot) {
  if(board[spot] == 0) {
  board[spot] = 2
    numGuesses--
  }
else if (board[spot] == 1)
board[spot] = 3
  numGuesses--
}

// 2PTS OBJECTIVE 3: COMPLETE THE drawBoard function

// This function draws the board, filling in the ships, hits, and misses where they go!

// hint: loop through the array and check for each condition
// hint: change the grid based on the condition!

function drawBoard() {
   for(var i=0; i=board.length; i++) {
     if(board[i] == 0) {
      fill("white"); 
     }
      if(board[i] == 1) {
      fill("white") 
     }
     if(board[i] == 3) {
       fill("red")
     }
     if(board[i] == 2) {
       fill("blue")
     }
     rect(50,200,50,50);
   }
}

// 1 PT OBJECTIVE 4 COMMENT THE SKELETON CODE
// ONLY COMMENT DO NOT CHANGE CODE!!!!!

function mousePressed () {
  
  if(mouseY > 200 && mouseY < 250) {
    
    if(mouseX > 0 && mouseX < 50) {
      fire(0);
      //
    }
    
    else if(mouseX > 50 && mouseX < 100) {
      fire(1);
      //
    }
    
    else if(mouseX > 100 && mouseX < 150) {
      fire(2);
      //
    }
    
    else if(mouseX > 150 && mouseX < 200) {
      fire(3);
    //
    }
    
    else if(mouseX > 200 && mouseX < 250) {
      fire(4);
      //
    }
    
    else if(mouseX > 250 && mouseX < 300) {
      fire(5);
    }
    
    else if(mouseX > 300 && mouseX < 350) {
      fire(6);
    }
    
    else if(mouseX > 350 && mouseX < 400) {
      fire(7);
    }
  }
  
}


function randomNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function setup() {
  createCanvas(400, 400);
}

// 1PT OBJECTIVE 5: CALL THE placeShips() and drawBoard() FUNCTIONS
placeShips();

function draw() {
  
  background("lightblue");
  textSize(20);
  text("WELCOME TO BATTLESHIP!", 70, 175);
  text(board, 10, 30);

  
  textSize(20);
  text(winStatus, 150, 285);
  
}