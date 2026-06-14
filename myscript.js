// // let x = 5;
// // let y =10;
// // let z = x+y;
// // console.log(z);

// // let a = "aishu";
// // console.log(a);

// // const print1 = 2;
// // const print2 = 7;
// // console.log(print1+print2);

// // let p ="rajkumar"+" "+"singh";
// // console.log(p);

// // function intro()
// // {
// // document.getElementById("connect").innerHTML =' hello world';
// // }

// let r = 5;
// let q = 7;
// let s = 8;
// let avg = (r+q+s)/3;
// console.log(avg);

// const c = Symbol();
// const d = Symbol();
// console.log(c);
// console.log(d);

// const person ={firstname:"sunil",lastname:"singh"};
// console.log(person);





// let e = 3;
// let f= 6;
// console.log(e > f);

// let text1 = "what a nice day";
// text1 += " good day ";
// console.log(text1);

// let g = 9;
// h =(5+9)*g;
// console.log(h);

// let j = 9;
// j++;
// i = j;
// console.log(i);
// i--;
// console.log(i);


// let l = Math.pow(7,3);
// console.log(l);


// // let age = 16;
// // if (age >= 18)
// //     {
// //      console.log("eligible");
// // }
// // else {
// //     console.log("not eligible");
// // }

// let text3 

// let one = 20;
// let two = 10;
// let three = 30;
// if (one >two && one>three)
// {
//     console.log("one is greater");
// }
// else if (two> three && two > one)
//     {
//    console.log("two is greater");

// }
// else 
// {
//     console.log("three is greater");
// }

// let signal = "yellow";
// if (signal ==="red")
// {
//     console.log("stop");
// }
// else if (signal ==="green")
// {
//     console.log("go");
// }
// else if (signal === "yellow")
// {
//     console.log("ready");
// } 
// else {
//     console.log("invalid signal");
// }

// // let year = 2026;
// // if (year % 4 ==0) 
// // {
// //     console.log("leap year");
// // }
// // else {
// //     console.log("not leap year");
// // }

// let newyear = 2026;
// let  text2 = (newyear % 4 ==0) ? "leap year" : "not a leap year";
// console.log(text2);

// let criteria = 16;
// let country = "india";
// let text =" you can drive";

// // if (criteria >=18)
// //     {
// // if (country== "india")
// //     {
    

// //  console.log(text);
// // }
// // }
// // else {
// //     console.log("you can't dirve");
// // }

// // let expenses = 1000;

// //  let party= (expenses>= 1000)? "today is party" : " today is not party";
// //  console.log(party);


// //  switch ( new Date().getDay())
// //  {
// //     case 0:
// //         day = "sunday";

// //         break;
// //     case 1:
// //         day ="monday";

// //         break;

// //     case 2:
        
// //     day ="tuesday";

// //     break;

// //     case 3:

// //     day =" wednesday";

// //     break;

// //     case 4:

// //     day = "thursday";

// //     break;

// //     case 5:

// //     day = "friday";

// //     break;

// //     case 6:

// //     day = "saturday";

// //  }

// // console.log(day);



// let num = 3;
//  switch(num){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//      console.log( "monday");
//         break;
//         case 2:
//        console.log("tuesday");
//         break;

//         case 3:
//         console.log("wednesday");
        
//  }

//  let marks = 73;
//  let grade;
//    switch(true)
//    {
// case marks>= 90:
//     grade = "A+";

//     break;
// case marks>=80:
//     grade ="A";

//     break;
// case marks >=70:

//  grade="b";


//    }
// console.log(grade);
   

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[1]);

// let n =2;
//  function square(num)
//  {
//     let ans = num * num;
//     return ans;
//  }

//  let square2 = square(n);
//  console.log(square2);

//  let square4 = square(4);
//  console.log(square4);

// let n = 4
// function addition (add)
// {
//     let ans = add + add;
//     return ans;

// }
// let addition1  = addition(n);
// console.log(addition1);



// var x =7;

// function getName()
// {
// console.log("namaste javascript");
// }
// getName();
// console.log(x);

// let x= 1;
// a();
//  b();
// console.log(x);

// function a()
// {
//     let x= 10;
//     console.log(x);
// }

// function b()
// {

//     let x=100;
//     console.log(x);
// }

// function a(){
//     let b =10;
//     c();
// function c(){
//     console.log(b);
// }
// }
// a();


// const calculator = function (birthyear){

//     let age = 2025 - birthyear
//     return age;
// }

// console.log(calculator(1997));
// console.log(calculator(2000));



// function si(p)
// {

//     let interest = (p*10*1)/100;
//     return interest;
// }
// console.log(si(10000));

// function user(a,b,c){

// let avg =(a+b+c)/3
// return avg;
// }
// console.log(user(1,2,3));

function user(r)
{
    let area = (3.14*r**2);
    let c=(2*3.14*r);
    return {area, c};
}
console.log(user(3));