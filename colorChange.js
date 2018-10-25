
var btn=document.querySelector("button");
// var isPurple=false;
// btn.addEventListener("click",function () {
// 	if(isPurple){
// 		 document.body.style.background="white";
//         isPurple=false;
// 	}else{
// 		 document.body.style.background="purple";
// 		 isPurple=true;
// 	}
// });
btn.addEventListener("click",function () {

		 document.body.classList.toggle("purple");
});