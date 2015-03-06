var generatePrimes = function (n) {
	var primes = [2];
	var primeCandidates = 3;
	while (primes.length < n) {
		isPrime = true;
		for ( var i in primes) {
			if (primeCandidates % primes[i] === 0 ) {
				isPrime = false;
				break;
			}
		}
		if (isPrime === true) {
			primes = primes.concat(primeCandidates);
		}
		primeCandidates = primeCandidates + 2;
	}
	return primes[n - 1];
};