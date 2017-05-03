function ptbac2(a,b,c) {
	if(a != 0){
		let delta = b*b - 4*a*c;

		if(delta == 0){
			let x = -b/(2*a);
			console.log("Phuong trinh co mot nghiem la: " + x);
		}
		if(delta > 0){
			let can = Math.sqrt(delta);
			let x = (-b + can)/(2*a);
			let y = (b + can)/(2*a);
			console.log("Phuong trinh co hai nghiem la: x = " + x + " ; y = " + y);
		}
		if(delta < 0){
			let can = Math.sqrt(delta*(-1));
			let x = -b/(2*a);
			let y = can/(2*a);
			console.log("Phuong trinh khong co nghiem thuc");
			console.log("Phuong trinh co hai nghiem thuc phan biet la: x = " + x + " + " + y + "i" + " ; y = " + x + " - " + y + "i");
		}
	}
	else{
		let x = -c/b;
		console.log("Day la phuong trinh bac nhat!");
		console.log("Phuong trinh co 1 nghiem la: x = " + x);
	}
}

ptbac2(0,2,3)