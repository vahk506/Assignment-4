const test = require('./utils');
    
//test1

let mat1 = [
    [2,2,3],
    [3,5,4],
    [2,4,6],
    
];

let mat2 = [
    [1,2,6],
    [1,7,9],
    [2,4,6],
  
];

console.log(test.matriceProduct(mat1,mat2));

// //test2

let mat3 = [
    [9,5,3],
    [4,6,7],
    [9,1,9],
];

let mat4 = [
    [4,7,6],
    [1,5,1],
    [8,1,3],
    
];
console.log(test.sumOfMatrices(mat3,mat4));


// //test3

let mat5 =[
    [2,3,9],
    [8,2,6],
    [6,2,2],
];

console.log(test.sumOfEachRow(mat5));