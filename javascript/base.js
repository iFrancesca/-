/*
基本数据类型：字符型、数值型、布尔型、null、undefined
 */

var num1 = 0.1;
var num2 = 0.2
var total = num1 + num2;
console.log(total);
//化浮为整
function add(num1 , num2){
    //将数字转换为字符串
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.indexOf(".") != -1){
		a = num1.split('.')[1].length;
	}else{
		a = 0;
	}

	if (num2.indexOf(".") != -1){
		b = num2.split('.')[1].length;
	}else{
		b = 0;
	}


	var max = a;   //先默认较大的位数是a
	if (a < b){
		max = b;
	}

	//根据位数获得对应的10的幂数
	var beishu = 1;
	for (var i = 0; i<max; i++){
		beishu = beishu*10;
	}

	//两个小数同时乘得到的这个倍数
	num1=  num1 * beishu;
	num2 = num2 * beishu;

	//相加完成后，再将结果除以log查看倍数
	var sum = (num1 + num2) / beishu;
	return sum;
}

console.log( add( 0.1, 0.2));
console.log( add( 1, 0.2));
console.log( add( 1.03, 0.02));
console.log( add( 1.001, 2.002));

//小数的加减乘除都有精度丢失的问题

