var count=10;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{ count=count-1;
    if (count <= 0)
    {
       clearInterval(counter);
       return;
    }
  
   document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
  //Do code for showing the number of seconds here
}