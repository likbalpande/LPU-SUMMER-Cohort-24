
// function xyz(){
//     console.log('Inside XYZ');
//     function temp(x){
//         console.log(x*x);
//     }
//     console.log('End');
//     temp(12);
// }
// console.log('Start');
// xyz();


// // console.log('Start');
// // function abc(x){
// //     console.log(x*2);
// //     temp(x/2);
// // }
// // abc(8);
// // console.log("Mid");
// // function temp(x){
// //     console.log(x/2);
// // }
// // console.log("End");




// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click',cb);

// function cb(){
//     console.log('Button clicked!');
// }





// console.log('Start');
// const input = document.getElementsByTagName('input')[0];

// const cb = function abc(ev){
//     console.log('Input is',ev.target.value);
// }

// input.addEventListener('keyup', cb);
// console.log('End');


// console.log('Start');
// const delay = 1000;
// const cb = ()=>{
//     console.log('CB called');
// }
// setTimeout(cb, delay);
// console.log('End');



// console.log('Start');
// setTimeout(()=>{
//     console.log('CB called');
//     setTimeout(()=>{
//         console.log('Internal CB called');
//     }, 10000);
// }, 10000);
// console.log('End');





// console.log("Start");

// setTimeout(()=>{
//     console.log("A");
// }, 0);

// console.log("Mid");
// function abc(){
//     console.log('B');
// }

// function efg(){
//     console.log('C');
//     setTimeout(()=>{
//         console.log('D');
//     }, 0);
// }

// setTimeout(abc, 0);
// efg();

// console.log("End");



// const pr = fetch('https://api.github.com/users/likbalpande');

// pr.then((res) => {
//     const pr2 = res.json();

//     pr2.then((data)=>{
//         console.log(data);
//     });

// }).catch((e) => {
//     console.log('Fetch -', e);
// })





const root = document.getElementById('root');

const request = fetch('https://dummyjson.com/products');

request.then((result)=>{
    const convertData = result.json();
    convertData.then(renderUI);
}).catch((error)=>{
    alert(error);
});


const renderUI = (data)=>{
    const products = data.products;
    for(let i=0; i<products.length; i++){
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${products[i].title}</h3>
            <p>${products[i].price}</p>
            <img src="${products[i].thumbnail}" />
        `;
        root.appendChild(card);
    }

}



















