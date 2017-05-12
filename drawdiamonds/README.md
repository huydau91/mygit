# Vẽ hình kim cương bằng JAVASCRIPT

## Phân tích bài toán:

B1: Nhập vào n là bán kính của hình kim cương(tâm đối xứng)

B2: Xây dựng logic để có thể in dấu "*" và dấu " " hợp lý

## Code xử lý chính:
``` javascript
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
			var a = i - r;
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
```

## Giải thích

* Thực hiện vòng lặp qua từng hàng i

```javascript
	for (var i=0; i<width; i++)
```

* Với mỗi hàng thứ i, xét qua từng cột j

```javascript
	for (var j=0; j<n*width; j++){
		var j1 = j%width;
		if (j1 == r+i || j1 == r-i){
			str += "*";
		}
		else
			str += " ";
	}
	str += "\n";
```

* Nếu thỏa mãn điều kiện logic sẽ in dấu "*", ngược lại in dấu " "

## Cách chạy chương trình

* Gitclone https://github.com/huydau91/nodejs/blob/master/drawdiamonds/drawdiamonds.js
* Thay đổi n (số hình) và r (bán kính) của `function drawdiamonds(n,r)`
* cd drawdiamonds
* Chạy: node drawdiamonds.js

## Kết quả

```javascript

D:\CODE\HTML5\Work Place\nodejs\drawdiamonds>node drawdiamonds.js
         *
        * *
       *   *
      *     *
     *       *
    *         *
   *           *
  *             *
 *               *
*                 *
 *               *
  *             *
   *           *
    *         *
     *       *
      *     *
       *   *
        * *
         *
```