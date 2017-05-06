# Vẽ hình kim cương bằng JAVASCRIPT

# Phân tích bài toán:
B1: Nhập vào n là bán kính của hình kim cương(tâm đối xứng)
B2: Xây dựng logic để có thể in dấu "*" và dấu " " hợp lý

# Code xử lý chính:

	var str = '';
	var size = n*2;
	var a = n-1;
	for (var i = 0; i<size+1; i++){
		if (i == 0 || i == size){
			for (var j=0; j<size+1; j++){
				if (j == n){
					str += "*";
				}
				else
					str += " ";
			}
			str += '\n';
		}
		else {
			if (i <= n){
				for (var j=0; j<size+1; j++){
					if (j == n-i || j == n+i){
						str += "*";
					}
					else
						str += " ";
				}
				str += '\n';
			}
			else {
				for (var j=0; j<size+1; j++){
					if (j == n-a || j == n+a){
						str += "*";
					}
					else
						str += " ";
				}
				a--;
				str += '\n';
			}
		}
	}

# Giải thích