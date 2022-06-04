"use strict" ///should be in the firstline,it helps to catch js errors we thout strict modejavascript would then fail silently without letting us know that we did a mistake and for strict mode to be activated we need to write itin the first line

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
// console.log(friends)      //                                                                         // p
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

// const calcTip = function(bill) {  ///using expresion method
//    return bill>=50 && bill<=300 ? bill*0.15:bill*0.2;
// }
// // const calcTip=bill=>bill>=50 && bill<=300 ? bill*0.15:bill*0.2;using arrow method

// const bills = [ 125, 555 , 44]
// const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ]////creating array
// console.log(bills,tips);         ///array

//  const total= [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];  ///summing tips abd bill
//  console.log(total);

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////////OBJECTS///////////////////////////////////

// const Rosdello={
//     FirstName:'OUMA',
//     LastName :'Denish Rosdell',
//     age      :2022-1994,
//     profesion:'developer',
//     friends  :['mike','peter','charles']
// }
// console.log(Rosdello);

///////////////////////////////////////////////
/////////////DOT vs BRACKET NOTATION//////////////////

// const Rosdello = {
//   FirstName: "OUMA",
//   LastName: " Rosdell",
//   age: 2022 - 1994,
//   profesion: "developer",
//   friends: ["mike", "peter", "charles"],
// }
// // console.log(Rosdello.FirstName);
// console.log(Rosdello['LastName']);

// const namekey = 'Name';
// console.log(Rosdello['First'+ namekey]) //with squarebracket you could put any expression
// console.log(Rosdello['Last'+ namekey])

////
// const interestedIn= prompt('what do u want to know about Rosdell agee,friends,profession')
// console.log(Rosdello[interestedIn]);//but dot notation cannot work here
//////////////////////////////////////
///////////////////////////////////////////////
// ///////////CHANLENGE///////// Retrieve without HARD CODING////
// /////'Rosdell has 3 friends and his first friend is called mike'
// console.log(
//   `${Rosdello.FirstName} has ${Rosdello.friends.length} and his first friend is ${Rosdello.friends[0]}`
// )
// //mdn operator precedence
// /////////////////////////////////////////////////////////
//////////////////////OBJECTS METHODS////////////////////

// const Rosdello = {
//   FirstName: "OUMA",
//   LastName: " Rosdell",
//   birthYear: 1994,
//   profesion: "developer",
//   friends: ["mike", "peter", "charles"],
//   hasDriverLicense: true,

//   //case 1
//   //   calAge: function (birthYear) {
//   //     return 2022 - birthYear
//   //     },
//   //case 2
//   //   calAge: function () {
//   //     console.log(this) //this displays the whole objects...
//   //     return 2022 - this.birthYear
//   //   },
//   calAge: function () {
//     this.age = 2022 - this.birthYear
//     return
//   },
// }
// //

// console.log(Rosdello.age)
// // //     calAge: function () {
// // //         this.age =2022- this.birthYear
// // //         return this.age
// //     }

// }
// console.log(this.age)
// console.log(Rosdello.calAge());
// console.log(Rosdello['calAge'](1994))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////CODING CHALLENGE 3/////////////////////////

//bmi = mass / heigth ** 2

// const John = {
//   fullName: "John smith",
//   mass: 78,
//   heigth: 1.69,
//   calcbmi: function () {
//     //////this code has always failed to run though everythingseems the same
//     this.bmi = this.mass / this.heigth ** 2
//     return bmi
//   },
// }

// const Mark = {
//   fullName: "Mark miller",
//   mass: 78,
//   heigth: 1.69,
//   calcbmi: function () {
//     //////this code has always failed to run though everythingseems the same
//     this.bmi = this.mass / this.heigth ** 2
//     return bmi
//   },
// }
// John.calcbmi() //initializing the fucntion so that the lower codes works
// Mark.calcbmi() //initializing the fucntion so that the lower codes works
// console.log(John.bmi, Mark.bmi) ///this line works because they have ebeen initialize

// if (John.bmi > Mark.bmi) {
//   console.log(
//     `${John.fullName} BMI (${John.bmi})  is higher than ${Mark.fullName} (${Mark.bmi})`
//   )
// } else if (John.bmi < Mark.bmi) {
//   onsole.log(
//     `${Mark.fullName} BMI (${Mark.bmi})  is higher than ${John.fullName} (${John.bmi})`
//   )
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOOPS////////////////////////

// //for loops runs while the condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} ✌`)
// }

////////////////////////////////////////////////////
// const RosdellArray = [
//   "rosdell",
//   "ouma",
//   "student",
//   "sturbon",
//   ["fred", "titus", "mike", "venus"],
//   true,
// ]

// for (let i = 0; i < RosdellArray.length; i++) {
//   console.log(
//     `this is item no ${i + 1} and it is ${RosdellArray[i]}`,
//     typeof RosdellArray[i]
//   )
// }

////////////////////////////////////////

// const years = [1990, 1993, 1994, 1993, 1994, 1997]
// let ages = []
// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i])
// }
// console.log(ages)

//////////////////////////////////////////////////////////
///////////CONTINUE AND BREAK STATEMENT//////////////////

// const RosdellArray = [
//   "rosdell",
//   "ouma",
//   "student",
//   "sturbon",
//   ["fred", "titus", "mike", "venus"],
//   true,
// ]

// console.log("-----ONLY STRINGS---------")
// for (let i = 0; i < RosdellArray.length; i++) {
//   if (typeof RosdellArray[i] !== "String") continue
//   console.log(RosdellArray[i], typeof RosdellArray[i])
// }

/////////////////////////////////////////////////
////////////////////////LOOPING BACKWARD AND LOOPING IN A LOOP//////////
// ///4 3 2 1 backward
// for (let i = RosdellArray.length - 1; i >= 0; i--) {
//   console.log(i, RosdellArray[i])
// }

////loop inside a loop

////////////////////////////////////////////////////////////////////////////////////////while loop/////////////////////////////

// let rep = 1
// while (rep < 6) {
//   console.log(`you are my number ${rep} 😆`)
//   rep++
// }

//////////////////////ROLLING DICE////////////////////
// let dice = Math.trunc(Math.random() * 6) + 1
// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
// }
// /////////////////////////////////////////////////////
///////////////////////CHALLENGE 4 ////////////////////
// const calcTip = function (bills) {
//   return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2
// }

// const biils = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let tips = []
// let total = []

// for (let i = 0; i < biils.length; i++) {
//   const tip = calcTip(biils[i])
//   tips.push(tip)
//   total.push(tip + biils[i])
// }
// console.log(tips)
// console.log(total)
/////////////////////////////////////////////////////
////////////// BONUS ///////////////////////////////
// const callAverage = function (arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     //   sum=sum+arr[i]     ///if u are using this you leave out i++
//     sum += arr[i]
//   }
//   return sum / arr.length
// }
// console.log(callAverage([1, 2, 3])) //////correct
// console.log(callAverage(total)) /////you need to activate the upper function first or uncomment it...
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
