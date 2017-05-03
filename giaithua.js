function giaithua(n){
	let a = 1
	for(let i = 1; i <= n; i++){
		a *= i;
	}
	console.log("Giai thua cua " + n + " la: " + a);
}
giaithua(4)