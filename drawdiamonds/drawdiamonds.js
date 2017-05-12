function drawdiamonds(n,r){
	var str = '';
	var width = r*2+1;

	for (var i=0; i<width; i++){
		if (i<=r){
			for (var j=0; j<n*width; j++){
				var j1 = j%width;
				if (j1 == r+i || j1 == r-i){
					str += "*";
				}
				else
					str += " ";
			}
			str += "\n";
		}
		else {
			var a = i - r
			for (var j=0; j<n*width; j++){
				var j1 = j%width;
				if (j1 == a || j1 == width-a-1){
					str += "*";
				}
				else
					str += " ";
			}
			str += "\n";
		}
	}
	console.log(str);
}

drawdiamonds(4,2)


// console.log("Nhap n va r:");

// var prompt = require('prompt');

// prompt.start();

// prompt.get(['n', 'r'], function (err, result) {
// 	var n = result.n;
// 	var r = result.r;
// 	var str = '';
// 	var width = r*2+1;

// 	for (var i=0; i<width; i++){
// 		if (i<=r){
// 			for (var j=0; j<n*width; j++){
// 				var j1 = j%width;
// 				if (j1 == r+i || j1 == r-i){
// 					str += "*";
// 				}
// 				else
// 					str += " ";
// 			}
// 			str += "\n";
// 		}
// 		else {
// 			var a = i - r;
// 			for (var j=0; j<n*width; j++){
// 				var j1 = j%width;
// 				if (j1 == a || j1 == width-a-1){
// 					str += "*";
// 				}
// 				else
// 					str += " ";
// 			}
// 			str += "\n";
// 		}
// 	}
// 	console.log(str);
// });

