function pow(base, power){
    let res = base;
    if (base == 1) {
        return base;
    }else if (power == 0){
        return 1;
    }else if (power < 0) {
        return 1/pow(base, (-1)*power);
    } else {
        for(let i = 0; i < Math.abs(power) - 1; i++) {
            res = res * base;
        }
        return res;
    }
}
console.log(pow(2, -2));