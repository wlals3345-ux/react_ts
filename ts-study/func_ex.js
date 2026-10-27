"use strict";
// function sub (x:number, y: number){
//     return x-y;
// }
// const result = sub(5, 10);
// console.log(result);
// 화살표 함수
const sub = (x, y) => x - y;
const result = sub(5, 10);
console.log(result);
// 변환 자료형 없는 함수 : void
const greet = (name) => {
    console.log(`Hello, ${name}`);
};
greet("Obama");
