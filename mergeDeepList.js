// Example 1
console.log(mergeDeepList([{id: 1}, {id: 3, pid: 1}, {id:4}])); 
//=> [{id:1, children: [{id:3}]}, {id:4}]

// Example 2
// mergeDeepList([{id: 3, pid: 1}, {id:4, pid:3},{id: 1}]) 
//=>[{id:1, children: [{id:3, children: [{id:4}]}]}]

// 1. Node => {id, pid}  只关心id和pid即可， pid代表父节点id
// 2. 顺序不定， 但pid一定有对应的id节点存在
// 3. O(n) 时间复杂度解决  

function mergeDeepList(arr){
    let res = [{},{},{}];
    let j = 0;
    for (let i = 0; i < arr.length; i++){
        const {id, pid} = arr[i];
        if(pid === 1){
            res[j].id = pid;
            res[j].children = arr[i].id;
        }else{
            res[j].id = pid;
        }
    }
    return res;
}

