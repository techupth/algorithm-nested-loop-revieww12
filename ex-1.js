// เริ่มเขียนโค้ดตรงนี้
function printPattern(number) {
  //console.log(number);
  let finalResult = "";
  for (let i = 1; i <= number; i++) {
    let rowResult = "";
    for (let j = 1; j <= i; j++) {
      rowResult += j + "\t";
      //console.log(rowResult);
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}
console.log(printPattern(5));
console.log(printPattern(10));
