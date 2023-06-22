// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Function exercise with callbacks



const secondQuestion = (max) =>{
  rl.question("Enter a min number ", (min) =>{
     
    console.log(`I am thinking of a number between ${max} and  ${min}...`);
    rl.question('Enter a guess:', function handleResponse(guessNum){

      function randomNum(max, min) {
      return Math.random() * (max - min) + min;}
      
      if(guessNum > randomNum(max, min)){
          console.log("Too high.")
          rl.question('Enter a guess:', handleResponse)
      }
      else if(guessNum < randomNum(max, min)){
          console.log("Too low.")
          rl.question('Enter a guess:', handleResponse);
      }  
      else{
          console.log("correct!")
          console.log("YOU WON!")
        rl.close();}
    
          
  
})
  })}


rl.question("Enter a max number ", secondQuestion);

