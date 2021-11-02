function Sample1(){
  console.log("関数のテストです")
}

function Sample2(data1, data2, data3){
  console.log(`data1: ${data1}`);
  console.log(`data2: ${data2}`);
  console.log(`data3: ${data3}`);
}

function Sample3(data1, data2 = "default"){
  console.log(`data1: ${data1}`);
  console.log(`data2: ${data2}`);
}

function Sample4(){
  return 2021 * 1010;
}

let smp = Sample4();
  console.log(smp);


//二つの引数の乗算

function Multiply(data1, data2){
  return data1 * data2;
}

let str = Multiply(123, 3);
console.log(str);



//二つの引数の乗算結果の1の位

function Multiply2(data1, data2){
  return data1 * data2;
}

let str2 = Multiply2(123, 3);
let str2_ = Math.floor(str2 / 1) % 10;
console.log(str2_);



//二つの引数の乗算結果の10の位

function Multiply3(data1, data2){
  return data1 * data2;
}

let str3 = Multiply3(123, 3);
let str3_ = Math.floor(str3 / 10) % 10;
console.log(str3_);