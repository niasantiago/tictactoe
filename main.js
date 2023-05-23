let player = "x" // defines variable player to keep track of the current player 
let cell = document.querySelectorAll('#cells') //selects game cells from html
let restart = document.querySelector('#restart') // selects reset button from html




cell = Array.from(cell) 
// converts the cell var from a node list to an array using array.from method

//for each on cell array and add event listener
cell.forEach(element => {

//adds events listener for each cell, when cell is clicked it checks whether it is already occupied/ or if it's over
   element.addEventListener('click', () => {

// if not checks the inner text of the cell to the current playerto check for winner/tie
       if (element.innerText != "" || ! tictactoe.active) {
           return
       }

       element.innerText = player


       tictactoe.winner()//function for winner


       tictactoe.checkDraw() //function for tie


       //ternary operator for player1
       player = player === "x" ? "o" : "x";
   })
})


//returns true if every cell has innerText of "x" or "o"

//tictactoe class defines methods for checking a draw, winner, and running game again
class TICTACTOE {
   constructor() {
       this.active = true // .active tells if the game is in active or not
   }
  //checks to see if theres a winnner if not alerts tie 
   checkDraw() {
      if(! this.active){
       return
      }
      let draw = cell.every((element, index) => cell[index].innerText == "x" || cell[index].innerText == "o"); //.every checks to see that each cell matches a condition


      if (draw) {
          alert('draw') //if its true = draw 
          this.active = false
      }
  }

//checks if any of the 8 possible winnings are present in game cells, if so alerts "you win!" and sets active property of the ttt object to false 
  winner() {
      if (cell[0].innerText === player && cell[1].innerText === player && cell[2].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[3].innerText === player && cell[4].innerText === player && cell[5].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[6].innerText === player && cell[7].innerText === player && cell[8].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[0].innerText === player && cell[3].innerText === player && cell[6].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[1].innerText === player && cell[4].innerText === player && cell[7].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[2].innerText === player && cell[5].innerText === player && cell[8].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[0].innerText === player && cell[4].innerText === player && cell[8].innerText === player) {
          alert('You Win!');
          this.active = false
      } else if (cell[2].innerText === player && cell[4].innerText === player && cell[6].innerText === player) {
          alert('You Win!');
          this.active = false
        }
    }
 
 //resets the game by reloading the page, setting the active property to true, and resetting the inner text of all cells to an empty string.
    runAgain() {
        window.location.reload()
        this.active = true
        cell.forEach(element => element.innerText = "")
        
    }
 }
 
 
 
 
 //reset function for reset button
 
 //adds an event listener to the reset button, which calls the runAgain() method when clicked.
 const tictactoe = new TICTACTOE()
 restart.addEventListener('click', tictactoe.runAgain)
     //reset player 1 back to "x"
    // player1 = "x"
 
 
   
 
 
 
 

 
 
 
