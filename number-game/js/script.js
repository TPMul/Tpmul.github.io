 var num = Math.round(Math.random()*5);
    
  function checkGuess(guess){
    var isguessright = num == guess;   
       
       if(isguessright) {
       alert('You Guessed Right, it was ' + num + " Congrats! Now let's try a new number.");
       num = Math.round(Math.random()*6)}
       
       else{ 
         alert('Try Again...');
       }
      } 