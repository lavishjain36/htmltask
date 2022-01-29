//creation of an array
// let array = [10, 20, 30, 40, 50];
// console.log(array);

//Accessing an array and it do exits in array
// console.log(array[0]);

//Accessing an array values which doesnt exist
// console.log(array[10]);

// let array1 = [20, 50, 10, 40, 30, 70];
// console.log(array1.sort().reverse());

// let data = ["React", "Angular", "MongoDb", "RPA", "NodeJs"];
// console.log(data);
// data.shift();
// data.unshift("Cybersoft");
// console.log(data);

// pop()=>if we want to remove the last element of an array then we should use pop()

// let data = [];
// data.push("React");
// console.log(data);

// splice(index)=>to remove all the element from the given index and
// let data = ["React", "Angular", "MongoDb", "RPA", "NodeJs", "Java", "Python"];
// data.splice(1);
// console.log(data);

// splice(index,number of element)=>to remove the given number of element from the given index

// data.splice(3, 2);
// console.log(data);

// let data = ["React", "Angular", "MongoDb", "RPA", "NodeJs", "Java", "Python"];
// data.splice(2, 1, "Selenium");
// console.log(data);

// join()=>to join any element to a string

// let data = ["React", "Angular", "MongoDb", "RPA", "NodeJs", "Java", "Python"];
// let newdata = data.join("-");
// console.log(newdata);

// split=>to split the given string into an array
// let newdata = data.split("-");
// console.log(newdata);
// updatedata = newdata.split("-");
// console.log(updatedata);

// slice=>to create a copy of an array or to retrieve a portion of an array
// let array1 = [10, 20, 30, 40, 50];
// let array2 = array1.slice();
// array1.splice(2);
// console.log(array2);

//Looping in an array
// 1.TO reduce the size of the array
// Es-5 standard
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// let result = "";
// for (let i = 0; i < fruits.length; i++) {
//   result += `${fruits[i]} `;
// }
// console.log(result);
// 5<5

// Es-2015=>Template Literal
// STring interpolation
// + " "+ ' '+ " "+

// backticks=` ${variablename}`=>you can print your customized string

// for in loop=>Es-5
// Enumeration or iteration based loop
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// output = "";
// for (let index in fruits) {
//   output += `$[index]} `;
// }
// console.log(output);

// Looping with for of loop=>Es-2015(Es-6)
// for of loop=>to iterate over an array

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// output = "";
// for (let data of fruits) {
//   output += `${data} `;
// }
// console.log(output);

//for-each loop==>map all the element in an array
// callback function is used to iterate over an array
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// let result = "";
// fruits.forEach(function (element) {
//   result += `${element} `;
// });
// console.log(result);

// Arrow function =>

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
let result = "";
fruits.forEach((element) => {
  result += `${element}`;
});
console.log(result);
