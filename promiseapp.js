/*const { doesNotMatch } = require("assert")

Promise

is object from a operation

mention the status of the operation  

3 status:
1.waiting / pending 
2.fullfiled / resolved - done 
3.Rejected / error */

const { promiseHooks } = require('v8');

const fs =require('fs').promises;
 const readFile = (filepath)=>{
    return fs.readFile('file.txt','utf8') //return a promise 
 }
 readFile('file.txt').then((data)=>{
    console.log(data)
 })

 .catch((err)=>{
    console.error(err);
 }) 

