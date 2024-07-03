// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(number) {
  // console.log(number);
  let finalResult = "";
  for (let i = 1; i <= number; i++) {
    //console.log(i);
    let rowResult = "";
    for (let j = 1; j <= number; j++) {
      //console.log(j);
      rowResult += j * i + "\t";
      //console.log(rowResult);
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}
console.log(multiplicationTable(5));
