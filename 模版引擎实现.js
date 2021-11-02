let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined

function render(template, data) {
    const reg = /\{\{(\w+)\}\}/; 
    if(reg.test(template)) {  // 判断模版是否有模版字符串
        const name = reg.exec(template)[1]; // 查找当前模版鲁第一个模版字符串的字段
        template = template.replace(reg, data[name]);  //  将第一个模版字符串渲染
        return render(template, data);   // 递归的渲染并返回渲染后的结构
    }
    return template; // 如果没有模版字符串直接返回
}

console.log(render(template, data));