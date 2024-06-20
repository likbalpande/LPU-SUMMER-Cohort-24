// const [summ, mull] = require('./myMath.js');

// const res = summ(19,10);
// console.log(res);

// const res2 = mull(9,10);
// console.log(res2);





// const {sub, add2, mul} = require('./myMath.js');

// const res = sub(19,10);
// console.log(res);

// const res2 = add2(10);
// console.log(res2);

// const res3 = mul(9,10);
// console.log(res3);






const figlet = require("figlet");

figlet("Likhilesh", (err, data)=>{
    if(err) console.log(err);
    else console.log(data);
});