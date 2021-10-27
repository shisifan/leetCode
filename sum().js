/**
 *  const sum1 = sum(1)
 *  sum1(2) == 3 // true
 *  sum1(3) == 4 // true
 *  sum(1)(2)(3) == 6 // true
 *  sum(5)(-1)(2) == 6 // true
 */

// 1.
function sum(num) {
    const func = function(num2) {
        return num2 ? sum(num + num2) : num;
    }
    func.valueOf = () => num;
    return func;
}
// 2. Symbol
function sum(a) {
  const fn = (b) => sum(a + b);
  fn[Symbol.toPrimitive] = () => a;
  return fn;
}
console.log(sum(5)(-1)(2) == 4);

