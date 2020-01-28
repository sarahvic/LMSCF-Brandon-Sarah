
// exercise 1
var temp = Math.floor(Math.random()*31)-5;

function tempGod() {
if(temp <= 10) {
	msg = "The weather is cold! " + temp + " degrees";
} else {
	msg = "The weather is moderate! " + temp + " degrees";
}
document.getElementById("result").innerHTML = msg;

}

// exercise 2
function highNum(arr){

document.getElementById("result2").innerHTML = (Math.max.apply(null, arr));
// OR
// document.getElementById("result2").innerHTML = (Math.max(...arr));

}


// exercise 3
function multiArray(arr){

var multi = 1 ;
for(var i = 0 ; i < arr.length ; i++){
	multi = multi * arr[i];
}
console.log(multi);
}
multiArray([1,7,3,10,2]);


// exercise 4
var temp = Math.floor(Math.random()*31)-5;

function tempGod() {
if(temp <= 10) {
	msg = "The weather is cold! " + temp + " degrees<br><img src='https://cdn.pixabay.com/photo/2014/11/02/09/15/despair-513529__340.jpg' id='sad'>";
} else {
	msg = "The weather is moderate! " + temp + " degrees<br><img src='https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576__340.jpg' id='happy'>";
}
document.getElementById("result4").innerHTML = msg;

}

