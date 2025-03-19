//write a boolean function to find a given number is prime
function isPrime(n){
	if(n==1){
		return false
	}
	for(let i=2;i<n;i++)
	{
		if(n%i==0)
		{
		return false
		}
		else
		{
		return true
		}
		
		
	}
}
	console.log(isPrime(7))
	console.log(isPrime(8))
	
	
	