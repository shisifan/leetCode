function debounce(func, wait) {
    let timer;
    return function(){
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, wait);
    } 
}