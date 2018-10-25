
  function printReverse(array){
  for (var i = array.length-1; i >=0; i--) {
  	console.log(array[i]);
  }
 }
printReverse([2,5,8,9,7]);

function isUniform(arr){
	var first=arr[0];
	for(var i = 0; i < arr.length;i++ ) {
		if(arr[i]!==first){
         return false;
		}
    }
   return true;
}
boolean=isUniform([1,1,1,1]);
console.log(boolean);
// sumArray
function sumArray(arr){
	result=0;
	for(var i = 0; i < arr.length;i++ ) {
		result+=arr[1];
	}
	console.log(result);
}
   
// maxima
function max(arr){
	var max=arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i]>max) {
			max=arr[i];
		}
	}
	return max;
}