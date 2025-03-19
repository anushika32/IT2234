//default parameter
console.log("------Default parameter-------")
const mult = (a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4))

//rest parameter
console.log("------Rest parameter-------")
const mysum = (...n)=>{
	console.log(n)
}
mysum(2,4,6,89,2)