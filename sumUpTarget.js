//arr = [1,2,3,4,5,6]
//target = 7
//write a code to find the all pairs that sum up to the target



let arr5 = [1, 2, 3, 4, 5, 6];
let target = 7;

for (let i = 0; i < arr5.length; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
        if (arr5[i] + arr5[j] === target) {
            console.log("Pair:", arr5[i], arr5[j]);
        }
    }
}
