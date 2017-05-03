function BMI(a,b){
	let c = b/100;
	let d = a/(c*c);
	console.log("Chi so BMI la: " + d);
	if (d<=18.5) {
		console.log("Than hinh hoi gay")
	}
	if (18.5 < d && d <= 24.9) {
		console.log("Than hinh binh thuong")
	}
	if (d >= 25 && d <=29.9) {
		console.log("Than hinh hoi beo")
	}
	if (d >= 30 && d <=34.9) {
		console.log("Than hinh beo phi do I")
	}
	if (d >= 35 && d <=39.9) {
		console.log("Than hinh beo phi do II")
	}
	if (d >= 40) {
		console.log("Than hinh beo phi do III")
	}
}

BMI(60,130)