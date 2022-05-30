'use strict' ///should be in the firstline,it helps to catch js errors we thout strict modejavascript would then fail silently without letting us know that we did a mistake and for strict mode to be activated we need to write itin the first line

////////////////////
// functions are piece of code that we can use over and over again 
// function logger(){
//     console.log('my name is rosdell')
// }
// logger(); // invoking/calling/running a function
// logger()
// logger();
// logger();
///////////////////////////////////////////////////

// function juiceprocessor(apple,orange){
//     // console.log(apple,orange);
//     const juice =`my juice has ${apple} apples and ${orange} oranges`;
//     return juice;
// }
//     // juiceprocessor(2,6);
//     const appleOrangeJuice = juiceprocessor(2,6);//store it in avariable like this inorder to use the argument which has been return
//     console.log(appleOrangeJuice);

//     const appleOrangeJuicefree = juiceprocessor(5,8);
//     console.log(appleOrangeJuicefree);
//     //function should be called otherwise the code of the function will not be used.
//     //function allow us to write more maintainable code

// function myChouce(num){
//     const vices = `better have this number ${num} in stead of 25`
//     return vices;
// }
// const grell =myChouce(26);//assigned to avariable grell inorder to be outputed in our literal template
// console.log(grell);

// function age(birthYear,myRealName) {
//     const age =`my name is ${myRealName} and I am ${2022-birthYear} years old` ;
//     return age;
// }
// const myage = age(1994,'Rosdell');
// console.log(myage);
//argument is a place holder while parameters is the actual values enterd while invoking a function

// there is two typs of functions in javascripts functions declaration and
// functions expressions..

// //declarations////////////////
// function age1(birthYear1){
//     return 2022-birthYear1;
// }
// const output1 = age1(1994);
// console.log(output1)

//expression//////////////////////
// const age2 = function (birthYear2){  //this is called function expression but the all work the same
//     return 2022-birthYear2;
// }
// const output2 = age2(1994)
// console.log(output2);
// the differnce between function declaration and expresions is that you can actually call the function before in declaration
//while in expresion you can only call it after declaring the functions.
//e.g but you can't dpo that with function expression
// const output1 = age1(1994);

// function age1(birthYear1){
//     return 2022-birthYear1;
// }
// console.log(output1)


////ARROW FUNCTIONS//////////////////arrow functions
// const AgeClc =  birthYear3=> 2022-birthYear3;
// const vibe= AgeClc(1994);
// console.log(vibe);


/////////////////////////////////////trial just
// const agge = birthday=>2022-birthday;
// const mwaka=agge(1992);
// console.log(mwaka);
////////////////////////////////////////
// calculating years left forretirement using arrow function

// const untilYearsOfRetirement = birthyear => {
//     const age = 2022-birthyear;
//     const yearsOfRetirement =65-age;
//     return yearsOfRetirement;
// }
// const out1=untilYearsOfRetirement(1994)
// console.log(out1);

//////////////////with two parametres

// const untilYearsOfRetirement =(names,birthyear)  => {
//     const age = 2022-birthyear;
//     const yearsOfRetirement =65-age;
//     return `${names} retires after ${yearsOfRetirement} years`;
// }
// const out1=untilYearsOfRetirement('Rosdell' ,1994)
// console.log(out1);

////////////////////////CALLING A FUNCTION IN ANOTHER FUNCTION//////////

// function fruitpieces(fruits) {
//     return fruits*4;
// }

// function juiceprocessor(apple,orange){
//   const applepieces= fruitpieces(apple);
//   const orangepices= fruitpieces(orange);

//     const juice =`my juice has ${applepieces} apples and ${orangepices} oranges`;
//     return juice;
// }
//     // juiceprocessor(2,6);
//     // const appleOrangeJuice = juiceprocessor(2,6);//store it in avariable like this inorder to use the argument which has been return
//     // console.log(appleOrangeJuice);
//     console.log(juiceprocessor(2,6))
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// const AgeClce = function(birthyeah){
//     return 2022-birthyeah;
// }

// const untilYearsOfRetirement = function(names,birthyeah) {
//     const aggee = AgeClce(birthyeah);
//  p   const yearsOfRetirement =65-aggee;

//     if (yearsOfRetirement>0){
//         console.log(`${names} you are still left with ${yearsOfRetirement} years to retire`)
//         return ;
//     }else{
//         console.log(`${names} has retired  ${yearsOfRetirement} years ago`)
//         return ;
//     }
// }
// const out1=untilYearsOfRetirement('Rosdell' ,1994)
// console.log(out1);
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores


// const untilYearsOfRetirement =(names,birthyear)  => {
//     const age = 2022-birthyear;
//     const yearsOfRetirement =65-age;
//     return `${names} retires after ${yearsOfRetirement} years`;
// }
// const out1=untilYearsOfRetirement('Rosdell' ,1994)
// console.log(out1);

/////////////////////CHALLENGE ON FUNCTIONS//////////////////////////

// const calcAverage=(a,b,c)=>{
//     const average=(a+b+c)/3;
//       return average;
// }
// const koalas = calcAverage(4, 23, 71);
// const dolphins = calcAverage( 65, 54 , 49);
// console.log(koalas,dolphins);


// const checkWinner=function(k,d){
    
//     if (k>=d*2){
//         return`koalas is the winner with ${k} vs ${d}`
//     }else if (k*2<=d){
//         return`dolphins is the winner ${d} vs ${k}`
//     }else{ return`no team wins`;}
// }

// const checker=checkWinner(koalas,dolphins);
// console.log(checker)
// console.log(checkWinner( 1000,3) )

// ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//////////INTRODUCTION TO ARRAYS////////////////////
// const friend1='mike';
// const friend2='peter'; 
// const friend3='kyle'

// const friends =['mike','peter','kyle'];
// console.log(friends);
// console.log(friends[0]) //first element
// console.log(friends.length); //number of element
// console.log(friends[friends.length-1]);//last element
// friends[2]='jay';//change from kyle to jay
// console.log(friends)
// ///
// const years= new Array(1990,1991,1992,1993);//using array function
// console.log(years)
// //only primitive values are immutable so ''const'' for aray can be re assigned;

// const firstname='OUMA';
// const myData=[firstname,'Denish Rosdell',2022-1994,friends];
// console.log(myData);

///////////////////////////////////////////////////////////////
// ///////EXERCISE////// storing results in array
// const calAge=function(birthYear){
//     return 2022-birthYear;
// }
// const years=[1990,1991,1992,1993]

// const age1=calAge(years[0]);
// const age2=calAge(years[1]);
// const age3=calAge(years[years.length-1]);

// console.log(age1,age2,age3); //manually

// //storing in array now
// const ages = [calAge(years[0]),calAge(years[1]),calAge(years[years.length-1])]
// console.log(ages);
////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

// ////////BASIC ARRAY/////////////////////
// const friends =['mike','peter','kyle'];
// const newLength =friends.push('jayz')//add at the end
// console.log(friends)
// console.log(newLength);

// friends.unshift('jake')      //add at the beginning
// console.log(friends)        //
// // friends.pop()           //removes the last element from the console
// console.log(friends)      //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
// console.log(friends)     //
// // friends.pop()        //removes the last element from the console
// // friends.pop()  ?    //removes the last element from the console
// friends.shift()       //removes the first elemet from the list of array
// console.log(friends.indexOf('jayz')); //rem it willtake from the parent list

// console.log(friends.includes('peter'));// true  ,,,b'se it's there
// console.log(friends.includes('bob'));  //false  ,,,b'se it's not there


// //includes() used scenarios
// if (friends.includes('peter')){
//     console.log('i have a friend called peter')
// }

/////////////////////CODING CHALLENGE About ARRAYS///////////////
////////////////////////////////////////////////////////////////
