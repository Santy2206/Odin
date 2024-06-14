
// - Create The Computerchoice 
  function getComputerChoice(){
  let random= Math.floor(Math.random()*(2-0+1));
  
  if(random=0){
   computerwordchoose=("ROCK")
   return random
  }
  else if(random=1){
    computerwordchoose=("PAPER")
    return random
 
  }
  else if(random=2){
    computerwordchoose=("SCISSORS")
    return random
  }
  }
//  create the humans choice
  //  Create The User Imput
  let answer_Lower=prompt("Rock Paper Or Scissors? ") 
    // Turn it into uppercase to avoid syntax mistakes
      function answer_Upper(){
        return answer_Lower.toUpperCase()
     }
  // Turn The Humans Choice Into Number 
    function getHumanChoice(){
      // Create A Variable That Store The Result 
        let numeric_answer

      //Create A Function That Turn The Human Choice To A Number 

        if(answer_Upper()=="ROCK"){
        let numeric_answer=0
        return numeric_answer
        }
        else if(answer_Upper()=="PAPER"){
        let numeric_answer=1
        return numeric_answer
        }
        else if(answer_Upper()=="SCISSORS"){
          let numeric_answer=2
          return numeric_answer
        }
        else{
          return "You Write Wrong Try It Again Bro!!"
        }

    }
// Create The Players Variable Scores 
  let humanScore=0;
  let computerScore=0;
  let winner
    let a="COMPUTER'S WINS!!"||"HUMAN'S!!"||"EQUAL!!";


// Write the logic to play a single round
  const HumanSelection=getHumanChoice();
  const ComputerSelection=getComputerChoice();
  function playRound(HumanSelection,ComputerSelection){

    // show the ansewer of each player in the console
    console.log(`YOU CHOOSE ${answer_Upper()}`)
    console.log(`COMPUTER CHOOSE ${computerwordchoose}`)
     
    // - create a function that calculate the values who wins

      if(getComputerChoice()>getHumanChoice()){
        // add 1 to each score to the winner
        computerScore= +1;
        winner="COMPUTER'S WINS!!"
      }
      else if (getComputerChoice()<getHumanChoice()){
        humanScore= +1;
        winner="HUMAN'S WINS!!"
      }
      else if (getComputerChoice()==3&&getHumanChoice()==1){
        humanScore= +1;
        winner="HUMAN'S WINS!!"
      }
      else if (getComputerChoice()===getHumanChoice()){
        winner="EQUAL!!"
      }
      else {
        computerScore= +1;
        winner="COMPUTER'S WINS!!"
      }
    // Show the winner and scores 
    let end=console.log(winner ,`Human's Score It's${humanScore}`,`Computer's Score It's${computerScore}`) 
  }

  // Write the logic to play the entire game
    //   Create a new function named playGame.
   function playGame(){

    if(winner=a){
      playRound()
    }
    
    }

  //  Move your playRound function and score variables so that they’re declared inside of the new playGame function

  // Play 5 rounds by calling playRound 5 times.
  console.log(playGame())
  



  
  
  

  