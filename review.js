// 1.
let a;
a = {};
console.log(a); // {}

// 2.
// index.js
console.log('running index.js');
import {sum} from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log(('running sum.js'));
export const sum = (a, b) => a + b;

// 输出 running sum.js, running index.js, 3
// 解释：import 命令是编译阶段执行的，在代码运行前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行
// 这是Commonjs中require()和import之间的区别，使用require()，可以在运行代码时候需要加载依赖项。
// 如果使用require而不是import，即会输出running index.js, running sum.js, 3

