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
//     const yearsOfRetirement =65-aggee;

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
