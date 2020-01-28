// exercise 1
function sum(arr){
	
	var add = 0;

	for (var i = 0; i < arr.length; i++){
		add = add + arr[i];
	}

	var avg = add/arr.length;

	if(avg <= 60) {
		msg = "60 F";
		document.write(msg);
	} else if (avg > 60 && avg < 70){
		msg = "70 D";
		document.write(msg);
	} else if (avg >= 70 && avg < 80){
		msg = "80 C";
		document.write(msg);
	} else if (avg >= 80 && avg < 90){
		msg = "90 B";
		document.write(msg);
	} else if (avg >= 90 && avg < 100){
		msg = "100 A";
		document.write(msg);
	}
	
}
sum([76,85,23,93,23]);
