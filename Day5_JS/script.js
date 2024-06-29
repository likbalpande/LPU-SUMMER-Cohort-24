// let age = 18;
// console.log(typeof(age));

// let username1 = "Ajay";
// let username2 = 'Devansh';

// let n = username1 + ' ' + username2;

// let a = username1 + 10;
// let b = 10 + username1;
// let c = username1 - 10;

// console.log(a);
// console.log(b);
// console.log(c);

// let r = 10 + 12 + 14 + " Hello";

// console.log(r);
// console.log(typeof(r));

// let v1 = 'Hello';
// let v2 = 'Hello';

// // double equalto will check for
// // the equality of values
// if(v1==v2){
//     console.log("YES");
// }
// else{
//     console.log("No");
// }

// // triple equalto will check for
// // the equality of values and datatypes
// if(v1===v2){
//     console.log("YES");
// }
// else{
//     console.log("No");
// }

// let v1 = '10';
// let v2 = 10;

// // double equalto will check for
// // the equality of values
// // it can do type coercion
// if(v1==v2){
//     console.log("YES");
// }
// else{
//     console.log("No");
// }

// // triple equalto will check for
// // the equality of values and datatypes
// if(v1===v2){
//     console.log("YES");
// }
// else{
//     console.log("No");
// }

// let u1 = 'Ajay';
// let u2 = 'Devansh';

// let ans1 = u1 + ' ' + u2;
// let ans2 = `${u1} ${u2}`;

// console.log(ans1)
// console.log(ans2)

// // function definition
// // with function keyword
// function printHello(x){
//     console.log('Hello', x);
// }
// // function invocation
// printHello("Ajay");

// // named function assignment
// const pH = function printHi(x){
//     console.log('Hi', x);
// }
// pH("Ajay");
// // printHi("Ajay");

// // anonymous function assignment
// const pHi = function (x){
//     console.log('Hii', x);
// }

// pHi("Ajay");

// // arrow function assignment
// const pHii = (x) => {
//     console.log('Hiii', x);
// }

// pHii("Ajay");

// sum(10, 20);
// mul(10, 20);

// function sum(a, b) {
//     const ans = a+b;
//     console.log(ans);
// }

// const mul = (a, b) => {
//     const ans = a*b;
//     console.log(ans);
// }

// // sum(10, 20);
// mul(10, 20);
// mul(10, 20);

// const a = 10;

// if(a<20){
//     if(a>10){
//         console.log("It is greater than 10");
//     }
//     else{
//         console.log("It is less than 10");
//     }
// }
// else{
//     console.log("Its not same");
// }

// function sum(a, b){
//     if(a===undefined){
//         console.log(0);
//     }
//     else if(b!==undefined){
//         console.log(a+b);
//     }
//     else{
//         console.log(a);
//     }
// }

// function sumNum(a=0, b=0){
//     console.log(a+b);
// }

// sum(); // --> 0
// sum(10); // --> 10
// sum(10,20); // --> 30

// sumNum(); // --> 0
// sumNum(10); // --> 10
// sumNum(10,20); // --> 30

// const obj1 = new Object();
// const obj2 = {};

// obj1.name = 'Likhilesh';
// obj1.city = 'Delhi';

// obj2.name = 'Ajay';
// obj2.city = 'Jaipur';

// console.log(obj1);
// console.log(obj2);

// const obj = {
//     name: 'Likhilesh',
//     "age": 30,
//     10: "ten",
//     "city": "Delhi",
//     "ten": 10,
//     20: 200,
// }

// // const vr = "city";
// console.log(obj);
// // console.log(obj.name);
// // console.log(obj[20]);
// // console.log(obj["name"]);
// // console.log(obj[vr]);

// // const arr = new Array();
// const arr = ["one", "two", 100];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);

// let o1 = {
//     name: 'Raj',
// }
// // o1.name = "Raj";
// // console.log(o1);

// const o2 = o1;
// o2.name = 'Aman';

// console.log(o1);
// console.log(o2);

// const o1 = {
//     name: 'Raj',
//     age: 30,
// }

// const o2 = o1;

// o2.name = "Akshay";

// console.log(o1);
// console.log(o2);

// let u1 = "Akshay";

// let u2 = u1;

// u2 = "Raj";

// console.log(u1);
// console.log(u2);

// --------------------------------------------

// const arr = [
//     "fruits",
//     'apple',
//     'banana',
//     'orange'
// ];

// const arr = {
//     0: 'Fruits',
//     1: 'Apple',
// }

// for(let i=0; i<4; i++){
//     console.log(arr[i]);
// }

// for(let i in arr){
//     console.log(i);
// }

// for(let i of arr){
//     console.log(i);
// }

// --------------------------------------------

// const obj = {
//     id: '190030024',
//     name: 'Fruits',
//     3: 'three',
// }

// // console.log(obj[3])
// const arr = ['apple', 'banana',
// 'mango', 'orange'];

// // for(let i =0; i<4; i++){
// //     console.log(obj[i]);
// // }

// for(let i in obj){
//     console.log(i, obj[i]);
// }

// // for(let i of arr){
// //     console.log(i);
// // }

// --------------------------------------------

// console.log('D O M ');

// console.log(window)
// console.dir(document)

// const div = document.getElementsByTagName('div');
// div[0].innerText = 'D O M ';

// const d1 = document.getElementsByClassName('container');
// console.dir(d1)
// d1[0].style.color = 'blue';
// d1[0].style.backgroundColor =  "red";

// const d1 = document.getElementById('c1');
// d1.style.color = 'brown';

const d1 = document.querySelector("div");
d1.style.color = "brown";

const d1 = document.querySelectorAll("div");
d1[1].style.color = "brown";
