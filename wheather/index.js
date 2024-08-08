// console.log("Hello World");
// setTimeout(()=>{
//     alert("Hey kabigya");
// },2000);
// alert("Hey kabigya")
// for (let i=0; i<100; i++) {
//     console.log(i);
// }

// console.log("I am KarunaBista");

// callback

function Sum(a,b){
    let ans =a+b;
    cb(ans);
}

function DisplaySum(result){
    const h1=document.createElement("h1");
    h1.innerHTML=`The Sum of number is:${resul}`;
    document.body.append(h1);
}

Sum(8,9,DisplaySum);