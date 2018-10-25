var button1=document.querySelector("#p1");
var button2=document.getElementById("p2");
var p1display=document.getElementById("p1display");
var p2display=document.getElementById("p2display");
var resetbutton=document.getElementById("reset");
var playto=document.querySelector("p span");
var inputnum=document.querySelector("input");
var p1score=0;
var p2score=0;
var gameover=false; 
var winingscore=5;
 

function reset(){
  p1score=0;
  p2score=0;
  p1display.textContent=0;
  p2display.textContent=0;
  gameover=false;
  p2display.classList.remove("winner");
  p1display.classList.remove("winner");
}

resetbutton.addEventListener("click",function(){
 reset();
});



button1.addEventListener("click",function(){
	if (!gameover) {
	     p1score++;
	   if (p1score===winingscore) {
	   	 p1display.classList.toggle("winner");
         gameover=true;
        }
       p1display.textContent=p1score;
	} 
});

button2.addEventListener("click",function(){ 
  if (!gameover) {
	     p2score++;
	   if (p2score===winingscore) {
	   	p2display.classList.toggle("winner")
         gameover=true;
        }
       p2display.textContent=p2score;
	}
});

inputnum.addEventListener("change",function(){
 playto.textContent=this.value; 
 winingscore=Number(this.value);
  reset();
});
