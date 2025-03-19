//callback function
/*console.log("------1-------")
const myName = (name)=>{console.log("My name is "+name)}
const greet =(msg,fun)=>{
console.log("Hi.. "+msg)
fun("David")
}
greet("Good morning",myName)
*/

//a function passed as an arguments
console.log("------2-------")
const greet =(msg,fun)=>{
console.log("Hi.. "+msg)
fun()
}
greet("Good morning",()=>{console.log("My name is David")})