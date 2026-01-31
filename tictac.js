let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnX = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame = () => {
  turnO = true;
  enableBoxes();
}



boxes.forEach((box) => {                  //loop for all element of boxes
  box.addEventListener("click" ,()=> {        //add eventListener for each box
    //console.log("hii");
    if( turnX){                       // turnX===true
      box.innerText="X";
      
               // for player X
      turnX = false;                // setting false is neccessary to go to else part
    }else{
        box.innerText="O";
        
        turnX = true;              // again set turnX value to go to if part 
    }
    box.disabled = true;     //not clickable twice

   
    checkWinner();
});
});

const disableBoxes = () => {
    for( let box of boxes){
box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for( let box of boxes){
    box.disabled = false;
    box.innerText= "";
   };
  };


const showWinner = (winner) => {
msg.innerText=`Congratulation, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};

const checkWinner =() =>{
  for( let pattern of winPattern){
    let pos1Val= boxes[pattern[0]].innerText;
    let pos2Val= boxes[pattern[1]].innerText;
    let pos3Val= boxes[pattern[2]].innerText;
     
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if( pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("Winner",pos1Val);
        showWinner(pos1Val);
        
        
      }
    }
  }
};
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);