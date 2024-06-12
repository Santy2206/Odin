
// - create the computerchoice 
function getComputerChoice(){
  let random= Math.random()*100;
  
  if(random >=0&&random<=33.333333333){
   console.log("COMPUTER CHOOSE ROCK")
   return random
  }
  else if(random>=33.333333333&&random<=66.666666666){
    console.log("COMPUTER CHOOSE PAPER")
    return random
 
  }
  else if(random>=66.666666666&&random<=100){
    console.log("COMPUTER CHOOSE SCISSORS")
    return random
  }
 }

// - create the prompt 
let answer_Lower=prompt("Rock Paper Or Scissors? ")
function answer_Upper(){

  return answer_Lower.toUpperCase()
}
// - create possible human choice and store it in a variable and turn it to number

function getHumanChoice(){

  let numeric_answer
    if(answer_Upper()=="ROCK"){
     let numeric_answer=Math.random()*(33.333333333-0+1)
    return numeric_answer
    }
    else if(answer_Upper()=="PAPER"){
     let numeric_answer=Math.random()*(66.666666666-33.333333333+1)
    return numeric_answer
    }
    else if(answer_Upper()=="SCISSORS"){
      let numeric_answer=Math.random()*(100-66.666666666+1)
      return numeric_answer
    }
    else{
      return "You Write Wrong Try It Again Bro!!"
    }

}
// Create the players Variable Scores 

let humanScore=0;
let computerScore=0;

// Write the logic to play a single round

  // create a function that calculate the values who wins and store it in a variable 
  // - create the window for showing the computer choice and if you win or loss
  
  function playRound(){

    let winner

    if(getComputerChoice()>getHumanChoice()){
      computerScore= +1;
      console.log(`YOU CHOOSE ${ answer_Upper()}`)
      winner="COMPUTER'S WINS!!"

    }
    else if (getComputerChoice()<getHumanChoice()){
      humanScore= +1;
      console.log(`You Choose ${ answer_Upper()}`)
      winner="HUMAN'S!!"
    }
    else if (getComputerChoice()===getHumanChoice()){
      console.log(`YOU CHOOSE ${ answer_Upper()}`)
      winner="EQUAL!!"
    }
    console.log(winner,`Human's Score It's${humanScore}`,`Computer's Score It's${computerScore}`) 
  }

  // Write the logic to play the entire game
  // for(i=0,i>=5,i+1){
  //   playRound()
  // }
  console.log(playRound())