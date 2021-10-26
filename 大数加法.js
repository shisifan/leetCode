function add(num1, num2) {
    let a = num1.split('');
    let b = num2.split('');
    let carry = 0;
    let res = "";
    while(a.length || b.length || carry) {
        let sum = parseInt(a.pop() || 0) + parseInt(b.pop() || 0) + carry;
        carry = Math.floor(sum / 10);
        res = `${sum % 10}${res}`
    }
    return res;
    
}
console.log(add('999999999939999999', '1'));