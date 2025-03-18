//find the max number in the array using forEach


let numarry = [1,4,5,3]
console.log(numarry);
/*for(let i=0;i<numarry.length;i++)
{
	console.log(numarry[i])
}
*/
numarry.forEach((n) =>
{
 console.log(n)
}
)

let max=0;
numarry.forEach((n) =>
{
	/* if(max<n)
	   {max=n}
    */
	
	(max<n) && (max=n)
})
console.log("Max is: "+max);


 



