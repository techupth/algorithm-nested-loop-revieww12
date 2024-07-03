// เริ่มเขียนโค้ดตรงนี้
function printStar(star) {
  //console.log(star);
  let finalResult = "";
  for (let i = 1; i <= star; i++) {
    //console.log(i);
    let rowResult = "";
    for (let j = 1; j <= i; j++) {
      //console.log(j);
      rowResult += "*" + "\t";
      //console.log(rowResult);
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(printStar(5));
console.log(printStar(10));
