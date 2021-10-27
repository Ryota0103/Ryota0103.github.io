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

let str = Sample4();
  console.log(str);