// 1.
const count = (() => {
    let num = 1;
    const func = () => ++num;
    func.reset = () => num = 0;
    return func;
})();
// 2.
var counter=0;
var count = function(){
  return ++counter;
}
count.reset = function(){
  counter=0;
}
console.log(count()); 
console.log(count()); 
count.reset(); 
console.log(count()); 
console.log(count()); 
