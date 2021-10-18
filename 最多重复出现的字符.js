function count(str) {
    for(var i = 0; i < str.length; i++){
        var key = str[i];
        if (!obj[key]) {
            obj[key] = 1;
        } else {
            obj[key] ++;
        }
        }
        var max = -1;
        var max_key = '';
        var key;
        for(key in obj){
            if(max<obj[key]){
            max=obj[key];
            max_key = key;
        }
    }
    return max;
}
console.log(count('abbccc'));