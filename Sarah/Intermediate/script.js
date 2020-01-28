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

document.write("<br><hr><br>");


	// exercise 2

	function fizzbuzz(){

		for (var i = 0; i < 100; i++){
			if(i % 3 == 0 && i % 5 == 0){
				document.write("<font color='blue'>Fizzbuzz</font><br>")
			} else if (i % 3 == 0){
				document.write("<font color='red'>Fizz</font><br>")
			} else if (i % 5 == 0){
				document.write("<font color='green'>Buzz</font><br>")
			} else {
				document.write(i+'<br>');
			}

		}

	}


	fizzbuzz();