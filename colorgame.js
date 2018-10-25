var numsqr=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");
init();

function init(){
	setupModeButton();
	setupSquares();
    reset();
}

function setupModeButton(){
	for (var i = 0; i < modeButton.length; i++) {
	     modeButton[i].addEventListener("click",function(){
         modeButton[0].classList.remove("selected");
         modeButton[1].classList.remove("selected");
		 this.classList.add("selected");
		 this.textContent==="Easy"?numsqr=3:numsqr=6;
		 reset();
	    });
    }
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click",function(){
		//grab color of clicked sqare
		    var clickedColor=this.style.backgroundColor;
		    if (clickedColor===pickedColor) {
		       messageDisplay.textContent="correc!";
		       resetButton.textContent="Play Again?";
		       changeColor(clickedColor);
		       h1.style.backgroundColor=clickedColor;
		    }else{ 
		      this.style.backgroundColor="#232323";
		      messageDisplay.textContent="Try Again";
		    }
	    });    
    }
}

function reset(){
	// generate all new color
   colors=generateRandomColor(numsqr);
   //pick a new color from array
   pickedColor=pickColor();
   //display picked color
   colorDisplay.textContent=pickedColor;
   resetButton.textContent="New Color"
   message.textContent="";
   // change all square color
   for (var i = 0; i < squares.length; i++) {
   	if(colors[i]){
   		squares[i].style.display="block";
   		squares[i].style.backgroundColor=colors[i];
   	}else{
   		squares[i].style.display="none";
   	}
   }
   h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
}); 

function changeColor(color){
	 //loop through square 
	 for (var i = 0; i < squares.length; i++){
	 	// change each square color to the matched color
	 	squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	// pick color one of the six color
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr=[] 
	for (var i = 0; i < num; i++) {
     arr.push(randomColor());
	}
   return arr;
}
 
function randomColor(){
	// for generating a single random color
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}