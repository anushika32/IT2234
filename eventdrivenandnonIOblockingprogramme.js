/*Syn

1
2
3

async

event driven and non I/O blocking programme

1- read the file
2- request data form and api from the internet
3- print the Message*/


const fs = require('fs');

fs.readFile('input.txt', function(err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("File read successfully!");