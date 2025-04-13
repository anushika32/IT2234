// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation
// A Promise can be in one of these states:
// 1. Pending: Initial state, neither fulfilled nor rejected
// 2. Fulfilled: Operation completed successfully
// 3. Rejected: Operation failed

const { read } = require("fs");
const {promiseHooks} = require("v8");

const fs = require('fs').promises;

const readFile = async (filePath) => {
    return fs.readFile(filePath, 'utf8');// Read the file asynchronously
};

readFile('input.txt')
    .then((data) => {
        console.log(data); // Output the file contents
    })
    .catch((error) => {
        console.error(error); // Handle any errors
    });

