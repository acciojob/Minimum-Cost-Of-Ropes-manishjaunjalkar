function calculateMinCost() {
  //your code here
  var inputData = document.querySelector("#rope-lengths").value;
  var inputArr=inputData.split(",");
	for(var i=0;i<inputArr.length;i++){
		inputArr[i]= Number(inputArr[i]);
	}
	
	 inputArr.sort(function(a,b){
	  return a-b;
  });
	var cost = 0;
	while (inputArr.length>1) {
		var priceRope = inputArr[0]+ inputArr[1];
		cost += priceRope;
		inputArr.splice(0,2);
		inputArr.push(priceRope);
		inputArr.sort(function (a,b) {
			return a-b;
		});
		
	}
	document.querySelector("#result").value=cost;
	
}  
