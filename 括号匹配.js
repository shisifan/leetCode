// 1. 三种括号  {}  []  ()
// 2. 要成对闭合
// 3. 可以同级或大小嵌套，不允许小到大嵌套   {} > [] > ()
// 判断括号合法性，返回true/false
function isValid(str) {
    let stack = [];
    if (str.length % 2) {
        return false;
    } 
    for (let i of str) {
        switch(i){
            case '(':
            case '{':
            case '[':
                stack.push(i);
                break;
            case '}':
                if (stack.pop() != '{') {
                    return false;
                } 
                break;
            case ')':
                if (stack.pop() != '(') {
                    return false;
                }
                break;
            case ']':
                if (stack.pop() != '[') {
                    return false;
                }
                break;
        }
    }
    return !stack.length;
}
console.log(isValid('([{]])'));