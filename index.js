/*console.log(`Hello World!`);
console.log(`I Like PIzza!`);

window.alert(`This is an alert!`);
window.alert(`Click OK to open it!`);
// This is a comment lines.
/* 
    This 
    is 
    a 
    Comment
*/

/*document.getElementById('mh1').textContent=`hello world!`;
document.getElementById('myp').textContent=`I am learning JavaScript!`;

// Variable = A Container that stores a value.
//                Behaves as if it were the value it contains.

// 1. declaration    let x;
// 2. assignment     x=100;

// => Integer and Float datatypes: -
let x = 100;
console.log(x);
let price = 10.99;
console.log(price);
let age = 20;
console.log(`You are ${age} is years old!`);
console.log(`Your price is $${price}.`); 

//Strings :-
let name = `Madhu`;
let email =`madhuyadav123@gmail.com`
console.log(typeof name);
console.log(name);
console.log(`Your name is ${name}.`);
console.log(`Your email is ${email}.`); 

// Booleans :
let online = true;
let forSale = false;
console.log(`Ram is online: ${online}.`);
console.log(`Is this car for sale: ${forSale}`); 

let fullName = 'Madhu';
let age = 20;
let isStudent = true;

document.getElementById('myp1').textContent=`Your name is ${fullName}.`;
document.getElementById('myp2').textContent=`Your age is ${age}.`;
document.getElementById('myp3').textContent=`Enrolled: ${isStudent}`;

// OPERATORS :- 
// Arthematic operators = operands (values, variables, etc...)
//          Operators(+ - * / %)   -> eg: 3+5=8
let students = 30;
students = students+1; 
console.log(students);
students = students-1;
console.log(students);
students = students*2;
console.log(students);
students = students/2;
console.log(students);
students = students**2;
console.log(students);
students = students**3;
console.log(students);
students = students%1;
console.log(students);
// Assignment Operators : (+=, -=, *= /= %= )
let student = 50;
student += 1;
console.log(student);
student -= 1;
console.log(student);
student *= 2;
console.log(student);
student /= 2;
console.log(student);
student %= 2;
console.log(student);
// INCREAMENT
let studentss = 2;
studentss++;
console.log(studentss);
// DECREAMENT
studentss--;
console.log(studentss);*/

/* OPERATOR PRECEDENCE :-
1) Parenthesis ()
2) Exponents (*) or (**)
3) Multiplication or Division or Modulus
4) Addition or Substraction 

let result = 1+2*3+4**2  // 4**2=16+2*3=6 , +1 => 16+6+1=23 
console.log(result)
let results = 12%5+8/2; // 2+4=> 6
console.log(results)
let result1 = 6/2**(2+5); // 7=> 2**7=128=> 6/128=>0.046875
console.log(result1) 

// HOW TO ACCEPT USER INPUT :
// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

let username;
username = window.prompt(`What's your username?`);
console.log(username); 
let usernamee;

document.getElementById('mySubmit').onclick= function(){
    usernamee = document.getElementById('mytext').value;
    document.getElementById('myh1').textContent = `Hello ${usernamee}`;
} 

// Type Conversion : Changing the one datatype to another datatype.
let num = 10;
let num2 = 2.4;
result = num + num2;
console.log(result);
console.log(typeof(result)); 

let age = window.prompt('What is your age?');
age = Number(age);
age+=1;
console.log(age);

let x = 'pizza';
let y = 'pizza';
let z = 'pizza';
x=Number(x);
y=String(y);
z=Boolean(z);
console.log(x,typeof(x));
console.log(y,typeof(y));
console.log(z,typeof(z)); 

let a = 0;
let b = 0;
let c = 0;
a=Number(a);
b=String(b);
c=Boolean(c);
console.log(a,typeof(a));
console.log(b,typeof(b));
console.log(c,typeof(c)); 

let m = '';
let n = '';
let o = '';
m=Number(m);
n=String(n);
o=Boolean(o);
console.log(m,typeof(m));
console.log(n,typeof(n));
console.log(o,typeof(o)); 
 
//Constraints = A value that cannot be changed.
//const PI = 3.14159; 
// Calculating circumference of the Circle:
const PI = 3.14159;
let radius = window.prompt('Enter radius of the circle: ');
let circumference;
radius = Number(radius);
circumference = 2*PI*radius;
console.log(circumference); 

//Creating circumference  of circle in website :-
const PI = 3.14159;
let radius,circumference;
document.getElementById('mySubmit').onclick = function(){
    radius = document.getElementById('mytext').value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById('myh3').textContent = circumference + 'cm';
} 

// Counter Program:-
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


// Math = built in object that provides a collection of properties and methods.
console.log(Math.PI); 
console.log(Math.E);
let x = -4.39;
let y = 2;
let z = 1;
a= Math.floor(x);
console.log(a);
b= Math.round(x);
console.log(b);
//z = Math.ceil(x);
//z=Math.trunc(x);
z = Math.pow(x,y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
console.log(z);

let max = Math.max(x,y,z);
let min = Math.min(x,y,z);
console.log(min); */

// IF STATEMENTS : if a condition is true, excute some code 
//                   if not,  do something else
/*let age = 16;
if(age>=18){
    console.log(`You are eligible to vote`);
}
else{
    console.log(`You are not eligible to vote`);
}
let time = 9;
if (time < 12)  console.log('Good Morning');
else console.log(`Good Afternoon`);

let isStudent = false;
if(isStudent)  console.log(`You are a student!`);
else  console.log(`You are not a Student.`);

let agee = 30;
let hasLicense = false;
if(agee>=18){ console.log(`You are old enough to drive!`);
  if(hasLicense) console.log(`You have your license!`);
  else console.log(`You do not have your license yet!`);
}
else  console.log(`You must be 18+ to have a license`);

// Checking largest numbers
let a=34,b=122,c=6;
if(a>b & a>c) console.log(`Largest number is ${a}`);
else if(b>c & b>a) console.log(`Largest number is ${b}`);
else  console.log(`Largest number is ${c}`);
// Using if Statements :-
const mytext = document.getElementById('mytext');
const mySubmit = document.getElementById('mySubmit');
const result = document.getElementById('result');
let age;
mySubmit.onclick = function(){
    age = mytext.value;
    age = Number(age);
    if(age >= 100){
        result.textContent = `You are TOO OLD to enter this site.`;
    }
    else if(age ==0) {
        result.textContent = `You can't enter. You were just born!`;
    }
    else if (age >= 18){
        result.textContent = `You are old enough to enter this site.`;
    }
    else if (age<0){
        result.textContent = `Your age can't be below '0'.`;
    }
    else{
        result.textContent = `You must be 18+ to enter this site.`;
    }
}

// Ternary Operator = a shortcut to if{} and else{} statements
//                   helps to assign a variable based on a condition
//                   condition? codeIfTrue : codeIfFalse;
let age = 12;
let message = age >= 18? "You are an adult!" : "you are a minor!";
console.log(message);
let time = 16;
let greeting = time < 12? "Good Morning" : "Good Afternoon";
console.log(greeting);
let isSunny = true;
let weather = isSunny ? "It is Sunny."  : "It is Cloudy";
console.log(weather);
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $ ${purchaseAmount-purchaseAmount*(discount/100)}`); 

// SWITCH = can be an efficient replacement to many else if statements.
let day =5;
switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
     case 6:
        console.log("It is Saturday");
        break;
    case 7:
         console.log("It is Sunday");
        break;  
    default:
        console.log("Invalid"); 
}
let testScore = 80;
let Grade;
switch(true) {
    case testScore >= 90:
        Grade = 'A';
        break;
    case testScore >= 80:
        Grade = 'B';
        break;
     case testScore >= 70:
        Grade = 'C';
        break;
    case testScore >= 60:
        Grade = 'D';
        break;
    default:
        Grade = 'F';
}console.log(Grade); 

// RANDOM NUMBER GENERATOR :-
const mini = 50;
const maxi = 100;
let randomNum = Math.floor(Math.random() * (max-min)+ min);
console.log(randomNum); 

const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const min = 10;
const max = 99;
let randomNum1;
myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() *(max-min)+min);
    label1.textContent = randomNum1;
} 
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn= document.getElementById("payPalBtn");
const mySubmit= document.getElementById("mySubmit");
const subResult= document.getElementById("subResult");
const paymentResult= document.getElementById("paymentResult");
mySubmit.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT Subscribed!`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(masterCardBtn.checked)
    {
        paymentResult.textContent = `You are paying with Mastercard`;
    }
    else if(payPalBtn.checked)
    {
        paymentResult.textContent = `You must select a payment type`;
    }
}*/
