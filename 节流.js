function debounce(func, wait, immediate) {
    let timeout;
    return function(){
        let later = function() {
            timeout = null;
            if(!immediate) {
                func.apply(this, arguments);
            }
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, wait)
        if(immediate && !timeout) {
            func.apply(this, arguments);
        }
    }
}