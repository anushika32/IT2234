//Array operation
//push and pop
// Array operation: push and pop
let arr3 = ['a', 'b', 'd'];
console.log(arr3);
arr3.push('e');
console.log(arr3);
arr3.pop();
console.log(arr3);

// Reverse the array using push and pop
let arr4 = ['a', 'b', 'c', 'd'];
let reversedArr = [];

while (arr4.length > 0) {
    reversedArr.push(arr4.pop());
}

console.log("Reversed array:", reversedArr);


//revers the arr using push and pop
//a b c d -> d c b a 

