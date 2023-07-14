var a=Math.floor(Math.random()*100)+1;
var count=0;
function guess()
{
     var val= parseInt(document.getElementById("guess").value);
     if(val==a)
     {
        document.getElementById("result").textContent = "Congratulations!! ,You got the number in "+count+" tries.";
     }
     else if(val<a)
     {
        document.getElementById("result").textContent ="Try with a greater number";
        count++;
     }
    else
     {
        document.getElementById("result").textContent ="Try with a smaller number";
        count++;
     }
}