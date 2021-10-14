var isValid = function(s) {
    let stack = [];
    if(s.length % 2){
        return false;
    }
    for(let i of s){
        switch(i){
            case '(':
            case '{':
            case '[':
                stack.push(i);
                break;
            case ')':
                if(stack.pop() != '('){
                    return false
                }
                break;
            case '}':
                if(stack.pop() != '{'){
                    return false;
                }
                break;
            case ']':
                if(stack.pop() != '['){
                    return false;
                }
                break;
        }
    }
    return !stack.length;
};
console.log(isValid('()'));