//FOREACH
//1-masala
// const numbers = [1, 2, 3, 4];
// function kopaytirish(arr){
//     let res = [];
//     arr.forEach(function(valeu){
//         res.push(valeu*2);
//     });
//     return res;
// }
// console.log(kopaytirish(numbers));

//2-masala
// const words = ['apple', 'banana', 'cherry'];
// function bigWords(arr){
//     let res = [];
//     arr.forEach(function(valeu){
//         res.push(valeu.toUpperCase())
//     });
//     return res;
// }
// console.log(bigWords(words));

//3-masala
// const numbers = [10, 20, 30, 40];
// function addNUmber(arr){
//     let res = [];
//     arr.forEach(function(valeu){
//         res.push(valeu+5);
//     });
//     return res;
// }
// console.log(addNUmber(numbers));

//4-masala
// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 92 },
//   { name: "Hasan", grade: 78 },
// ];
// function studentRes(arr){
//     let res = [];
//     arr.forEach(function(valeu){
//         res.push({
//             name: valeu.name,
//             grade: valeu.grade
//         });
//     });
//     return res;
// }
// console.log(studentRes(students));

//MAP masala

//1-masala
// const numbers = [1, 2, 3, 4];
// function newMassiv(arr){
//     return arr.map(function(valeu){
//         return valeu * 2;
//     })
// }
// console.log(newMassiv(numbers));

//2-masala
// const words = ['apple', 'banana', 'cherry'];
// function changeWord(arr){
//     return arr.map(function(valeu){
//         return valeu.toUpperCase();
//     })
// }
// console.log(changeWord(words));

//3-masala
// const numbers = [10, 20, 30, 40];
// function addNUmber(arr){
//     return arr.map(function(valeu){
//         return valeu +5;
//     });
// }
// console.log(addNUmber(numbers));

//4-masala
// const students = [
//     {name: 'Ali', grade: 100},
//     {name: 'Vali', grade: 62},
//     {name: 'Hasan', grade: 78}
//   ];

//   function studentRes(arr){
//      let res  = arr.map(function(valeu){
//         return {
//             name: valeu.name,
//             grade: valeu.grade+10
//         };
//      });
//      return res;
//   }
//   console.log(studentRes(students));

//FILTER

//1-masala
// const numbers = [1, 2, 3, 4, 5, 6];
// function findJuft(arr){
//     return arr.filter(function(valeu){
//         return valeu%2==0;
//     });
// }
// console.log(findJuft(numbers));

//2-masala
// const words = ['apple', 'banana', 'cherry', 'date'];
// function findLength(arr){
//     return arr.filter(function(valeu){
//         return valeu.length > 5;
//     });
// }
// console.log(findLength(words));

//3-masala
// const ages = [12, 17, 18, 19, 21];
// function deletYonger(arr){
//     return arr.filter(function(valeu){
//         return valeu>18;
//     });
// }
// console.log(deletYonger(ages));

//4-masala
// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 72 },
//   { name: "Hasan", grade: 90 },
//   { name: "Olim", grade: 77 },
// ];
// function deletWoringGrow(arr){
//     return arr.filter(function(valeu){
//         if (valeu.grade>80){
//             return{
//                 name: valeu.name,
//                 grade: valeu.grade
//             };
//         }

//     });
// }
// console.log(deletWoringGrow(students));

// FIND

//1-masala
// const numbers = [4, 9, 11, 2, 18];
// function findElement(arr){
//     return arr.find(function(valeu){
//         return valeu>10;
//     });
// }
// console.log(findElement(numbers));

//2-masala
// const students = [
//   { name: "Ali", grade: 80 },
//   { name: "Vali", grade: 90 },
//   { name: "Hasan", grade: 78 },
//   { name: "Olim", grade: 85 },
// ];
// function deletStudent(arr){
//     return arr.find(function(valeu){
//         if (valeu.grade>85){
//             return{
//                 name: valeu.name,
//                 grade: valeu.grade
//             };
//         };
//     });
// };
// console.log(deletStudent(students));

//SOME/EVERY

//1-masala
// const numbers = [-1, -2, 3, -4];
// function cheekMassive(arr){
//     let res = arr.some(function(valeu){
//         return valeu>0;
//     });
//     return res;
// };
// console.log(cheekMassive(numbers));

//2-masala
// const words = ['cat', 'dog', 'elephant'];
// function findElementMassive(arr){
//     return arr.some(function(valeu){
//         return valeu.length>5;
//     });
// };
// console.log(findElementMassive(words));

//3-masala
// const numbers = [1, 2, 3, 4,];
// function findMusbat(arr){
//     return arr.every(function(valeu){
//         return valeu>0;
//     });
// };
// console.log(findMusbat(numbers));

//4-masala
// const students = [
//   { name: "Ali", grade: 60 },
//   { name: "Vali", grade: 70 },
//   { name: "Hasan", grade: 80 },
// ];

// function findResalt(arr){
//     return arr.every(function(valeu){
//         if (valeu.grade>50){
//             return{
//                 name: valeu.name,
//                 grade: valeu.grade
//             };
//         };
//     });
// };
// console.log(findResalt(students));

//STRING METODLARIGA OID MASALALAR
let word = "Hello";
let word2 = "Salomlar";
let word3 = "Hello  world";

//1-masala
// function findWord(arr){
//     let res = arr.charAt(2);
//     return res;
// }
// console.log(findWord(word));

//2-masala
// function findUnical(element){
//     return element.charCodeAt(1);
// }
// console.log(findUnical(word));

//3-masala
// function addWords(element, element2){
//     return element.concat(element2);
// }
// console.log(addWords(word, word2));

//4-masala
// function findWord(element,element2){
//     return element.includes(element2);
// }
// console.log(findWord(word, 'H'));

//5-masala
// function findLastWord(element, element2){
//     return element.endsWith(element2);
// };
// console.log(findLastWord(word, 'o'));

//6-masala
// function findIndex(element, element2){
//     return element.indexOf(element2);
// };
// console.log(findIndex(word3, 'world'));

//7-masala
// function findLastIndex(element, element2){
//     return element.lastIndexOf(element2);
// }
// console.log(findLastIndex(word3, 'l'));

//8-masala
// const text = 'My phone number is 123-456-7890';
// function findNumber(element, element2){
//    return element.match(function(valeu){
//     if (typeof valeu == 'number'){
//         resizeBy.push(valeu);
//     };
//    });
// };
// console.log(findNumber(text));

//9-masala
// function repitElement(element, element1){
//     return element.repeat(element1);
// };
// console.log(repitElement(word, 3));

//10-masala
// function changeWord(element, element1, element2){
//     return element.replace(element1, element2);
// };
// console.log(changeWord(word2, 'S', 'H'));

//11-masala
// const text = 'Hello, world!';
// function useSerch(element, element1){
//     return element.search(element1);
// };
// console.log(useSerch(text, 'world'));

//12-masala
// const text = 'Hello, world!';
// function useSlice(element, element2, element3){
//     return element.slice(element2, element3);
// };
// console.log(useSlice(text, 7, 12));

//13-masala
// const text = 'Hello world!';
// function useSplit(element){
//     return element.split(' ');
// };
// console.log(useSplit(text));

//14-masala
// const text = 'Hello, world!';
// function useStartsWith(element, element1){
//     return element.startsWith(element1);
// };
// console.log(useStartsWith(text, 'Hello'));

//15-masala
// const text = 'Hello, world!';
// function useSubstr(element, element1,element2){
//     return element.substr(element1, element2);
// }
// console.log(useSubstr(text, 7, 12));

//16-masala
// const text = "Hello, world!";
// function useSubstring(element, element1, element2) {
//   return element.substring(element1, element2);
// }
// console.log(useSubstring(text, 7, 12));

//17-masala
// const text = 'Hello, World!';
// function smollwords(element){
//     return element.toLowerCase();
// };
// console.log(smollwords(text));

//18-masala
// const text = 'Hello, World!';
// function bigWords(element){
//     return element.toUpperCase();
// };
// console.log(bigWords(text));

//19-masala
// const text = '   Hello, world!   ';
// function useTime(element){
//     return element.trim();
// };
// console.log(useTime(text));

//20-masala
// const text = '   Hello, world!   ';
// function useTimeStart(element){
//     return element.trimStart();
// };
// console.log(useTimeStart(text));

//21-masala
// const text = '   Hello, world!   ';
// function useTimeStart(element){
//     return element.trimEnd();
// };
// console.log(useTimeStart(text));

