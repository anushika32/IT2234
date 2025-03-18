//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array

let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let frequency = {};
let maxElement = arr[0];
let maxCount = 1;

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }

    if (frequency[element] > maxCount) {
        maxElement = element;
        maxCount = frequency[element];
    }
}

console.log("Most frequent element:", maxElement);