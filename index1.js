const students = [
  { name: "Ali", grade: 85 },
  { name: "Vali", grade: 92 },
  { name: "Hasan", grade: 78 },
];
function ad(arr){
    return arr.map(function(valeu){
        return{
            name: valeu.name,
            grade: valeu.grade+10
        };
    });
};
console.log(ad(students));