alert("hello word")




function addition(a, b) {
	return  a + b
}


function circuitPower(voltage, current) {
	return voltage * current
}

  
function convert(minutes) {
	return minutes * 60
}

function calcAge(age) {
	return age * 365
	
}

function howManySeconds(hours) {
	return hours * 3600
}

function triArea(base, height) {
	return (base * height) /2
}


function cubes(a) {
	return a ** 3
}

function sumPolygon(n) {
	return (n-2) * 180
}


function squared(b) {
	return b*b
}

function lessThan100(a, b) {
	if (a +b < 100){
		return true
	}else{
		return false
	}
}

//How Much is True?
function countTrue(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++){
		if (arr[i] == true){
			count++;
		}
	}
	return count;
}
//Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
	return (length*2) + (width*2)
}
//Return the Remainder from Two Numbers
function remainder(x, y) {
	return x % y
}





