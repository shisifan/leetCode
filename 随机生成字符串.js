// // 麻烦的方法
// function hash () {
//     let s = ''
//     const str = [
//       'a', 'b', 'c', 'd', 'e', 'f', 'g', 
//       'h', 'i', 'j', 'k', 'l', 'm', 'n', 
//       'o', 'p', 'q', 'r', 's', 't', 'u', 
//       'v', 'w', 'x', 'y', 'z', '0', '1', 
//       '2', '3', '4', '5', '6', '7', '8',
//       '9',
//     ]
//     for(let i = 0; i < 10; i++) {
//       s += str[Math.floor(Math.random() * str.length)]
//     }
//     return s
// }
// console.log(hash());   // 'www7v2if9r'


// 一行超短代码
const str = Math.random().toString(36).substr(2, 10);
console.log(str);
/***
 * 先是 Math.random() 生成 [0, 1) 的数，也就是 0.123312、0.982931之类的，
 * 然后调用 number 的 toString方法将其转换成36进制的，按照MDN的说法，36进制的转换应该是包含了字母 a~z 和 数字0~9的，
 * 因为这样生成的是 0.89kjna21sa 类似这样的，所以要截取一下小数部分，即从索引 2 开始截取10个字符就是我们想要的随机字符串了
 */