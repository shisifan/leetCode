function getNum36() {
    let num = [];
    for(let i = 0; i < 36; i++) {
      if(i >= 0 && i <= 9) {
        num.push(i); 
      } else {
        num.push(String.fromCharCode(i + 87));
      }
    }
    return num;
}
function scale(n) {
    let arr = [];
    let num = getNum36();
    while(n) {
        let res = n % 36;
        arr.unshift(num[res]);
        n = parseInt(n / 36);
    }
    return arr.join("");
} 
console.log(scale(222));