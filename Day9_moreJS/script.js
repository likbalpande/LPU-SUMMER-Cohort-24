// const student = {
//     userName: 'Aman',
//     rollNo: '24001',
//     city: 'Delhi',
// }

// // console.log(student.name);
// const {userName, city} = student;

// console.log(userName, city);


// // const fruits = ['Banana', 'Apple', "Orange"];
// // console.log(fruits[0]);
// // const [, i2, i3] = fruits;
// // console.log(i2, i3);


// const student = {
//     userName: 'Aman',
//     rollNo: '24001',
//     city: 'Delhi',
//     hobbies: ['Painting', 'Styling', 'Drawing'],
// }

// const {hobbies} = student;
// hobbies[0] = 'Studying';

// console.log(hobbies);
// console.log(student);





// rest --> to pack the values
// spread --> to unpack the values

// let n = "Aman";
// let s = n;
// s = "Ajay";
// console.log(n, s);

// const s1 = {
//     userName: 'Aman',
//     rollNo: '24001',
//     city: 'Delhi',
//     hobbies: ['Painting', 'Styling', 'Drawing'],
// }

// const s2 = {...s1};
// s2.userName = 'Ajay';
// s2.hobbies[0] = 'Playing';

// console.log(s1)
// console.log(s2)





// code

// function sum(...arr){
//     // console.log(arguments);
//     // console.log(arr);
    
//     const res = arr.reduce((acc,elem, idx)=>{
//         console.log(acc,elem, idx);
//         // return acc+elem;
//     }, -1);
//     console.log('-->',res);

// }

// sum() // --> 0
// sum(10) // --> 10
// sum(10, 20) // --> 30
// sum(10, 20, 11) // --> 41
// sum(1, 2, 10, 4) // --> 17
// sum(2, 4, 5, 10, 2) // --> 23






// function getData(){
//     const pr = fetch('https://dummyjson.com/products');
//     pr.then((res)=>{
//     console.log(res);
//         const pr2 = res.json();
//         pr2.then((data)=>{
//             console.log(data);
//         });
//     });
// }
// getData();


// console.log('start')
// async function getData(){
//     console.log('inside')
//     const res = await fetch('https://dummyjson.com/products');
//     console.log('step1')
//     const data = await res.json();
//     console.log(data);
// }
// getData();
// console.log('end')

function consoleLog(){
    console.log('done');
}
const ans = ['1','2','3','4'].map(consoleLog);