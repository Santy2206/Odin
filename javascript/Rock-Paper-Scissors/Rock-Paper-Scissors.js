
// - create the computerchoice 
function getComputerChoice(){
  let random= Math.random()*100;
  if (random >=0&&random<=33.333333333){
   console.log("Rock")
  }
  else if(random>=33.333333333&&random<=66.666666666){
   console.log("Paper")
 
  }
  else if(random>=66.666666666&&random<=100){
   console.log("Scissors")
  }
   
  return random
 }

// - create the prompt 
let answer_Lower=prompt("Rock Paper Or Scissors? ")
function answer_Upper(){

  return answer_Lower.toUpperCase()
}
// - create possible human choice and store it in a variable and turn it to number
let numeric_answer=null;
function getHumanChoice(){

  

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
      return "Oush Try Write It Again!!"
    }

}


// - create a function that calculate the values 

// - create the window for showing the computer choice and if you win or loss



console.log(getHumanChoice())
