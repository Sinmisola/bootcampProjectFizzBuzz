


app={


   fizzBuzz: function(n)
{
  if((n%3 === 0) && (n%5 !==0))
  {
    return ("Fizz");
  }
  else if ((n%3 !== 0) && (n%5 ===0))
  {
    return ("Buzz");
  }
   else if ((n%3 === 0) && (n%5 ===0))
  {
    return ("FizzBuzz");
  }
  else
  {
    return (n);
  }
}



}
module.exports=app;