/*
 a=[4,5,6,3,7]
 b=[8,3,2,1,5]
 find common elements between a & between
*/

let arrA = [4, 5, 6, 3, 7];
let arrB = [8, 3, 2, 1, 5];

let commonElements = [];

for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
        if (arrA[i] === arrB[j]) {
            commonElements[commonElements.length] = arrA[i];
            break; // Avoid duplicates if present in arrB multiple times
        }
    }
}

console.log("Common elements:", commonElements);