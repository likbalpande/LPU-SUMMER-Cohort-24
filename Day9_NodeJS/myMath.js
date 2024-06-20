// function sum(a=0, b=0){
//     return a+b;
// }

// function mul(a=1, b=1){
//     return a*b;
// }

// module.exports = [sum, mul];


function sum(a=0, b=0){
    return a+b;
}

function mul(a=1, b=1){
    return a*b;
}

function sub(a=0, b=0){
    return b-a;
}

function add2(a){
    const res = sum(a, 2);
    return res;
}

module.exports = { add2, mul, sub };
