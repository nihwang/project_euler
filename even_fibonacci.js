var generateFib = function(num) {
	// num represents a number < 4 million
	var sequence = [1, 2];
	var newValue = 0;
	var index = 0;
	while ( 1 ) {
		index = sequence.length;
		newValue = sequence[index-1] + sequence[index-2];
		if (newValue < num) {
			sequence = sequence.concat(newValue);
		}
		else {
			break;
		}
	}
	return sequence;
};

var evenFibSum = function(sequence) {
	var evenNum = 0;
	for ( i=0;  i < sequence.length; i++ ) {
		if (sequence[i] % 2 === 0) {
			evenNum = evenNum + sequence[i];
		}
	}
	return evenNum;
};

var answer = evenFibSum(generateFib(4000000)); 
console.log(answer);