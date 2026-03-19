function startGame()
{
  let randomNum = Math.floor(Math.random()*11) +1; 
  let numAttempts =3;
  let guess;

  for(let i =0; numAttempts!=i; numAttempts--)
  {
     document.getElementById('counter').innerText = numAttempts-1;
    guess = Number(prompt("Enter your guess"));

    

    if(guess>10 || guess<0)
    {
      alert("Error: Number out of range");
     
    }
    else if(guess == randomNum)
    {
      alert("You Win! The correct number was "+randomNum);
      return 0;
    }
    else if(guess<0)
    {
      alert("Your number is too low!");
     
    }
    else if(guess>10)
    {
      alert("Your number is too high!");
     
    }
    else
    {
      alert("Wrong Number!");
      
    }
    
  }

  alert("You lose, the correct number was "+randomNum);
}