//variables
//  var x=90;
//  console.log(x);

// var x=500;
// console.log(x);

// let y=90;
// console.log(y);
//  y=900;
// console.log(y);

// const result=9+9
// console.log(result)

// const result=6-4;
// console.log(result);

// Data types
// number
// let x=90;
// console.log(x);
// console.log(typeof x);

// String
// const result="Karuna Bist"
// console.log(result);
// console.log?(typeof result);

// undefined
// let a;
// console.log(a);
// console.log(typeof a);

// boolean
// const isTrue=true;
// console.log(isTrue);
// console.log(typeof isTrue)

//  null(object)
// const y=null;
// console.log(y);
//  console.log(typeof y);

// Float
// const result=5.78;
// console.log(result);
// console.log(typeof result);

// BigInt
// const x=9868713327;
// console.log(x);
// console.log(typeof x);

// symbol
// const result=Symbol("who are you");
// console.log(result);
// console.log(typeof result);

// Object types
// const obj={
//     fName:"karuna Bist",
//     age:19,
//     isMarried:false,
//     occupation:"Developer",
//     Salary:20000,
// };
// console.log(obj);
// console.log(typeof obj);

// const arr=[3,4,5,6,7,8];
// console.log(arr);
// console.log(typeof arr);

// const date= new Date();
// console.log(date);
// console.log(typeof date);

// Type conversion
// const x="248";
// const val=Number(x);
// console.log(val);
// console.log(typeof val);
 
// const result="2.24";
// const output=parseFloat(result);
// console.log(output);
// console.log(typeof output);

// const output=8-"4";
// console.log(output);
// console.log(typeof output);

// const x=123;
// const result= x.toString();
// console.log(result);
// console.log(typeof result);

// let x= 2;
// let y= true;
// console.log(true+x);

// let x="";
// let result = Boolean(x);
// console.log(result);
// console.log(typeof result);

// let result=true;
// let output=String(result)
// console.log(output)
// console.log(typeof output);

// let date=new Date();
// let result=date.toString();
// console.log(result);
// console.log(typeof result);

// String method

// const result="Hello world";

 // length
// console.log(result.length);

 // charAt
// console.log(result.charAt(2));

 // indexof
// console.log(result.indexOf("o"));

 // LastIndexof
// console.log(result.lastIndexOf("o"));

 // lowecase
// console.log(result.toLowerCase());

 // uppercase
// console.log(result.toUpperCase());

 // split
// console.log(result.split(""));

 // include
// console.log(result.includes("Worlds"));

// replace
// console.log(result.replace("World","Everyone"));

// slice
// console.log(result.slice(1,6));

 // subString
// console.log(result.substring(1,6));

 // Trim
// const output="    haaina yesto ho";
// console.log(output.trim());

// concatination
// console.log(result.concat(" I am Javascript!"));

// Operators
// Assignment Operators

// let y=90;
// y+=120;
// console.log(y);

// Comparision Operators
// let a=10;
// let b=10;
// let c=5;

// 
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==c);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// logical Operators
// let x=true;
// let y=false;
// console.log(x&&y);
// console.log(x||y);
// console.log(!x);

// const str1="Hello";
// const str2="World";

// console.log(str1+""+str2)


// let ageVote=18;
// let result=(ageVote>=18? "vote halna payeu": "payenau");
// console.log(result);

// 
// const result="Hello World";
// const output=" I love javaScript";
// const Str3=" kabigya timi pani gara hai javavscript";

// console.log(`${result} ${output} ${Str3}`);

// const a=90;
// const b=80;
// const c=40;
// const ans=a+b+c
// console.log(`The sum of 3 numbers is: ${ans}`);

//Unary Operators
// let ans="248";
// let output=+ans;
// console.log(output);
// console.log(typeof output);

// const obj={
//      name:"karuna bist",
//      age:18,
// }
//  delete obj.age

//  console.log(obj)


// If Else

// let x=85;
// let (x>=90){
//     console.log("Grade A+");
// }else if( x>= 80){
//     console.log("Grade A");
// }else if(x >= 70){
//     console.log("Grade B+");
// }else if(x >= 60){
//     console.log("Grade B");
// }else if(x >= 50){
//     console.log("Grade C+");
// }else if( x>= 40){
//     console.log("Failed");
// }

// let email = "karunabist2062@gmail.com"
// let password ="6yg4ytr76@"

// if(email==="karunabist2062@gmail.com" && password==="6yg4ytr76@") {
//     console.log("Login successful");
// }else{
//     console.log("invalid password");
// }

// let weather ="rainy";
// if(weather === "sunny"){
//     console.log("k aja gham lagxa ta!")
// }else if (weather === "winter"){
//     console.log("aja pani pareko karan chiso vako xa!")
// }else if (weather === "cloudy"){
//     console.log("Badal dhakamakka lageko xa!")
// }else if (weather === "rainy"){
//     console.log("chhata bokera ako xau!")
// }else{
//     console.log("Invalid Weather")

// }

// 

// let x=10;
// let (x >=5 ) {
//     console.log("x is greater or equal to5");
// }else {
//     console.log("x is not greater or equal to 5!");
// }

// switch (control statement)
// let role = "super admin";
// switch(role){
//     case "seller":
//         console.log("seller can add product")
//         break;
        
//         case "buyer":
//             console.log("buyer can buy their product");
//             break;

//             case "admin":
//                 console.log("admin can access to add seller role");
//                 break;

//             case "super admin":
//                 console.log("super admin can control everything in web app");
//                  break;


//         default:
//             console.log("invalid role")
// }

// let shipping="delivered"
// switch (shipping) {
//     case "processing":
//         console.log("kabigya timro saman bato ma audaii xa la");
//         break;
        
//         case "delivered":
//             console.log("location ma aunus hai saman liyera");
//             break;

//             default:
//                 console.log("invalid shipping process");
//                 break;
// }

// statusCode
// let statusCode=200;
// switch(statusCode) {
//     case 201:
//         console.log("Created!");
//         break;
//         case 400:
//             console.log("Bad Request!");
//             break;
//             case 401:
//                 console.log("UnAuthorized!");
//                 break;
//                 case 403:
//                     console.log("Forbidden!");
//                     break;
//                     case 500:
//                         console.log(" internal Server Error!");
//                         break;
//                         case 200:
//                             console.log("Ok!");
//                             break;

//                             default:
//                                 console.log("Invalid statusCode");
//                                 break;
            
// }

// Loop
// for Loop

// for(let i=1; i<=10; i++) {
//     console.log(`I Love JavaScript:${i}`);
// }

// for(let i=1; i<=10; i++){
//     console.log(`3*${i}=${3*i}`)
// }

// Even Number
// for (let i=1; i<20; i++){
//     if(i%2===0){
//         console.log(`The Even Number is: ${i}`);
//     }
// }

// for (let i=1; i<20; i++){
//     if(i%2!==0){
//         console.log(`The Odd Number is: ${i}`);
//     }
// }

// While loop
// let i=0;
// while(i<=10) {
//     console.log("Hello World"+i);
//     i++;
// }

// do While
// let i=1;
// do {
//     console.log("Hello World" +i);
//     i++;
// } while (i<=10);

// 

// ARRAY
// let result=[3,4,5,6,7,8,];
// let sum=0;
// for(let i=0; i<result.length; i++) {
//     sum +=result[i];
// }
// console.log(`The Sum of Arr is:${sum}`);

// Array methods
// let arr=[4,5,6,7,3,4];
// Length;
// console.log(arr.length);

// Push 
// arr.push(12);
// console.log(arr);

// pop
// arr.pop();
// console.log(arr);

//  shift
// arr.shift();
// console.log(arr);

// arr.unshift(15);
// console.log(arr);

// splice
// arr.splice(1,3);
// console.log(arr);

// JOINT
// let result = ["JavaScript", "is", "Funny", "Language"];
// console.log(result.join("-"));

// SLICE
// let result = arr.slice(1 , 4);
// console.log(result);

// INCLUDES
//  let result = arr.includes(4);
//  console.log(result);

// index0F
// let result = arr.indexOf(4);
// console.log(result);

// last indexOF
//  let result= arr.lastIndexOf(4);
//  console.log(result);

// CONCAT
//  console.log(arr.concat("Hello"));

// let arr = [];
// let sum = 0;

// for(let i = 1; i <= 10; i++){
//     arr.push(i);
// }

// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     sum+=arr[i];
// }

// let result = sum * 2

// console.log(`The sum of arr is : ${sum}`);
// console.log(`The ans is: ${result}`);

// OBJECT
//  const person = {
//      name:"Karuna bist",
//      age: 18,
//      occupation: "Programmer",
//      isMarried: false,
//      address:{
//          street:"Bafal Road",
//          city:"Kathmandu",
//          country:"Nepal",
//      },

//     //  Codeium: Refactor|Explain|Generate JSDoc|X
//      greet: function () {
//          console.log (
//              `Hello My Name is: ${this.name}. And I am: ${this.age} years old`
//          );
//      },
//  };
// Destructure

// const {
//     name,
//     age,
//     occupation,
//     isMarried,
//     address: {street, city, country},
//     } =person;

// console.log(name, age, occupation, isMarried, street, city, country);
// person.greet()

 // FUNCTION
// function myFunc(a,b){
//     return a+b;
// }

// let result = myFunc(8,9);
// console.log(result);

//  function Circle(radius){
//      return Math.PI * radius * radius;
//  }

//  let result = Circle(5);
//   console.log(`The area of circle is: ${result}`);

// function Greet(name,age,education){
//     console.log(`hello my name is:${name}.I am:${age}years old.And I have completed my bachelors in:${education} from Kathmandu Bernhardt bafal.`);

// }

// Greet("karuna bist",18,"BCA");

//JavaScript ma three way print message
// console.log()
// alert
// prompt 

// function myFunc(){
//     let a=prompt("Enter your number");
//     let b=prompt("Enter your number");
//     let result=Number(a)+Number(b);
//     if (result){
//         alert(`The sum of two number is :${result}`);
//     }
// }
// myFunc();

// CalculatingCarValue

// function CalculateTotal (cartItems,taxrate){
//     let total=0;
//     for(let i=0; i<cartItems.length; i++){
//         total+=cartItems[i].price*cartItems[i].quantity;
//     }
//     total+=total*taxrate;
//     return total;
// }
// let cart=[
//     {name:"Dr Martin",price:8000,quantity:1},
//     {name:"Air Force 1",price:6000,quantity:2},
// ];

// let ans=CalculateTotal(cart,0.02);
// console.log(`Your full and final payment is:${ans}`);


// Scoping;
// var x=100;
// let ans=80;
// const y=20;

// function myFunc(){
//     console.log(x);
//     console.log(y);
//     console.log(ans);
// }

// myFunc();

// function myFunc(){
//     if (true){
//     var x=90;
//     let y=80;
//     const z=60;
//     console.log(y);
    
//      }
//      console.log(x);
// }
//  myFunc();             

















