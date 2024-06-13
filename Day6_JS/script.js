// // // const s2 = document.getElementsByTagName('section');
// // // const secondSection = s2[1];
// // // const title = secondSection.getElementsByTagName('h4');
// // // title[0].innerText = "JS Callbacks"


// // // const title = 
// // //         document
// // //             .getElementsByTagName('section')
// // //             [1]
// // //             .getElementsByTagName('h4');
// // // title[0].innerText = "JS Callbacks 123";


// // // const title = 
// // //             document
// // //                 .querySelector(
// // //                     "section:last-of-type>h4"
// // //                 );
// // // title.style.color = 'brown';
// // // // title.className = 'cs1';
// // // title.setAttribute('class', 'cs22');
// // // title.setAttribute('name', 'Prajwal');




// // // const pr = document.createElement("p");
// // // pr.innerText = 'New line from DOM !';
// // // const sec = document.getElementsByTagName('section')[0];

// // // sec.appendChild(pr);
// // // sec.prepend(pr);
// // // sec.append("Hello world");
// // // sec.appendChild("New world!");


// // function printHello(){
// //     console.log("Hello ...!");
// // }

// // // function inputClicked(){
// // //     console.log("inputClicked ...!");
// // // }

// // function inputKeydown(e){
// //     console.log("inputKeydown");
// //     console.log(e.target.value);
// // }

// // function inputChanged(e){
// //     console.log("inputChanged");
// //     console.log(e.target.value);
// // }

// // function inputKeyup(e){
// //     console.log("up");
// //     console.log(e.target.value);
// // }



// // function handleUserName(e){
// //     console.log("Name:",e.target.value);
// // }

// // function handleUserAge(e){
// //     console.log("Age:",e.target.value);
// // }

// // function handleSubmit(e){
// //     e.preventDefault();
// //     // console.dir(e.target);
// //     const userName = e.target[0].value;
// //     const userAge = e.target[1].value;
    
// //     console.log(userName, userAge)

// //     if(userAge<30){
// //         document.body.append("Validation successful!");
// //     }
// //     else{
// //         document.body.append("Please input less age");       
// //     }
// // }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const arr = e.target;
//     const name = arr[0].value;
//     const email = arr[1].value;

//     const form = document
//                     .getElementsByTagName("form")[0];
//     form.style.display = "none";

//     renderCard(name, email);
// }

// const renderCard = (n, e) => {
//     const root = document.getElementById("root");
//     root.setAttribute('class', 'card');

//     root.innerHTML = `
//         <h3 class='name'>Name is: ${n}</h3>
//         <h4 class='email'>Email is: ${e}</h4>
//     `;
// }





// const showResult = (res) => {
//     console.log(res);
//     const root = document.getElementById('root');
//     root.innerText = res;
// }

// const printPretty = (res) => {
//     const root = document.getElementById('root');
//     root.style.color = 'green';
//     root.innerText = res;
// }

// const sum = (a, b) => {
//     const res = a + b;
//     return res;
// }

// const rr = sum(10,20);
// // showResult(rr);
// printPretty(rr);








// const showResult = (res) => {
//     console.log('---',res);
// }

// const printPretty = (res) => {
//     console.log('****',res);
// }

// const sum = (a, b, fn) => {
//     const res = a + b;
//     fn(res);
// }

// sum(10,20, showResult);





// function payWithRazorPay (){
//     console.log('Payment processing on RazorPay...');
// }

// function payWithPayTM (){
//     console.log('Payment processing on PayTM...');
// }

// const userDetails = (name, age, seat, processPayment) => {
//     console.log(
//         `Booking for ${name} whose age is ${age}`
//     );
//     // ......................
//     if(true){
//         processPayment();
//     }
//     else{
//         console.log('Error');
//     }
// }

// userDetails('Likhilesh', 30, 'SL', payWithPayTM);


// const arr = [10, 20, 30];

// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("12");
// console.log(arr);


// arr.pop();
// console.log(arr);

// arr.push('14');
// console.log(arr);






// const arr = ["Fruits",'Apple','Mango'];

// const printValues = (a, b, c) => {
//     console.log('value is:', a);
//     console.log('index is:', b);
//     console.log('---------------');
// }

// // for(let i=0; i<arr.length; i++){
// //     printValues(arr[i], i, arr);
// // }

// function ForEach(arr, fn){
//     for(let i=0; i<arr.length; i++){
//         fn(arr[i], i, arr);
//     }
// }

// // arr.forEach(printValues);
// ForEach(arr, printValues);




// const arr = [22,31,42,63];
// // let sum = 0;
// // arr.forEach((b) => {
// //     sum+=b;
// // });
// // console.log(sum);

// const res = arr.filter((x) => {
//     if(x%2==0) return true;
//     else return false;
// });

// console.log("arr:", arr)
// console.log("res:", res)



const words = ['happy', 'square', 'confidence', 
    'mystery','scale','joyous'];

const res = words.filter((x) => {
    if(x.length <= 5) return true;
    else return false;
});

console.log(res);










