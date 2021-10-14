const data = [1, 2, 3, 0, 0, 0, 5, 2, 0, 1, 0, 0, 2];
function removeZero(data){
    let count = 0;
    for (let i = 0; i < data.length; i++){
        if (data[i] === 0 ){
            count ++;
        }
        if(count == 3){
            data.splice(i - 2, 3);
            count = 0;
        }
    }
    return data;
}
console.log(removeZero(data));