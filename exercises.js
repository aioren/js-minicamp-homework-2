//Do not change any of the function names
var i = 0;

function getBiggest(x, y) {
	if (x > y) {
		return x;
	} else {
		return y;
	}
}

function greeting(language) {
	if (language === 'German') {
		return 'Guten Tag!';
	} else if (language === 'Spanish') {
		return 'Hola!';
	} else {
		return 'Hello!';
	}
}

function isTenOrFive(num) {
	if (num === 10 || num === 5) {
		return true;
	} else {
		return false;
	}
}

function isInRange(num) {
	if (num < 50 && num > 20) {
		return true;
	} else {
		return false;
	}
}

function isInteger(num) {
	if (Math.floor(num) - num === 0) {
		return true;
	} else {
		return false;
	}
}

function fizzBuzz(num) {
	if (num % 3 === 0 && num % 5 === 0) {
		return 'fizzbuzz';
	} else if (num % 5 === 0) {
		return 'buzz';
	} else if (num % 3 === 0) {
		return 'fizz';
	} else {
		return num;
	}
}

function isPrime(num) {
	if (num <= 1) {
		return false;
	} else {
		for (i = 2; i < num; i++) {
			return num % i !== 0;
		}
	}
}


function returnFirst(arr) {
	return arr[0];
}

function returnLast(arr) {
	return arr[arr.length - 1];
}

function getArrayLength(arr) {
	return arr.length;
}

function incrementByOne(arr) {
	for (i = 0; i < arr.length; i++) {
		arr[i]++;
	}
	return arr;
}

function addItemToArray(arr, item) {
	arr.push(item);
	return arr;
}

function addItemToFront(arr, item) {
	arr.unshift(item);
	return arr;
}

function wordsToSentence(words) {
	var newString = words[0];
	for (i = 1; i < words.length; i++) {
		newString = newString + ' ' + words[i];
	}
	return newString;
}

function contains(arr, item) {
	return arr.includes(item);
}

function addNumbers(numbers) {
	var newNum = 0;
	for (i = 0; i < numbers.length; i++) {
		newNum += numbers[i];
	}
	return newNum;
}

function averageTestScore(testScores) {
	var newNum = 0;
	for (i = 0; i < testScores.length; i++) {
		newNum += testScores[i];
	}
	var average = newNum / testScores.length;
	return average;
}

function largestNumber(numbers) {
	var largest = 0;
	for (i = 0; i < numbers.length; i++) {
		if (numbers[i] > largest) {
			largest = numbers[i];
		} 
	}
	return largest;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};