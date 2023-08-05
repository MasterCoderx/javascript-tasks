//  Exercise 1

const greeting = getGreeting('John', 'Smith');
function getGreeting(firstName, secondName) {
    return 'Hi, "' + firstName + ' ' + secondName + '". What\'s up?';
}
console.log(greeting); // Hi, “John Smith”. What's up?

// Exercise 2

function isThisMyName(yourName) {
    return yourName === 'Janek';
}

console.log(isThisMyName('Janek'));
console.log(isThisMyName('Adam'));

// Exercise 3

function isThisBoolean (value) {
    if (value === true) {
        return true;
    }
    if (value === false) {
        return true;
    }
    return false;
}

console.log(isThisBoolean(false));

// Exercise 4

function getCircleArea (radius) {
    return Math.pow(radius, 2) * Math.PI;
}

const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

// Exercise 5

function getCirclesAreaSum (area1, area2) {
    return getCircleArea(area1) + getCircleArea(area2);
}

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

// Exercise 6

function determineQuarterOfTheYear (month) {
    return Math.ceil(month / 3);
}

console.log(determineQuarterOfTheYear(6));

// Exercise 7

function rockPaperScissors(playerOne, playerTwo) {
    if (playerOne === playerTwo) {
        return 0;
    }
    if (playerOne === 'rock') {
        if (playerTwo === 'scissors') {
            return 1;
        }
        return 2;
    }
    if (playerOne === 'scissors') {
        if (playerTwo === 'rock') {
            return 2;
        }
        return 1;
    }
    if (playerOne === 'paper') {
        if (playerTwo === 'rock') {
            return 1;
        }
        return 2;
    }
}

rockPaperScissors('rock', 'scissors'); // 1
rockPaperScissors('rock', 'paper'); // 2
rockPaperScissors('paper','paper'); // 0

// Exercise 8

const width = 20;
const height = 20;
const totalArea = width * height;
console.log(totalArea)

// Exercise 9

let firstNumber = 1;
let secondNumber = 2;

const temporary = firstNumber;
firstNumber= secondNumber;
secondNumber = temporary;

console.log(firstNumber);
console.log(secondNumber);

// Exercise 10

const physics = 4;
const math = 4;
const english = 5;

 function compareAverageGrade (firstGrade, secondGrade, thirdGrade) {
    const averageGrade = (firstGrade + secondGrade + thirdGrade) / 3;
    if (averageGrade >= 4) {
        return 'Good Job!'
    }
    return 'Try Harder!'
}

console.log(compareAverageGrade(physics,math,english))
console.log(compareAverageGrade(5,10,15))

// Exercise 11

function convertMinutesToHours(minutes) {
    return minutes / 60;
}

const hours = convertMinutesToHours(75);
console.log(hours); // 1.25

// Exercise 12

function isTextUppercase(text) {
    return text === text.toUpperCase();
}

console.log(isTextUppercase('Hello')); // false
console.log(isTextUppercase('HELLO')); // true

// Exercise 13

const n = 3;
const x = 1;
const y = 3;

function checkIfDivisible(firstNumber, secondNumber, numberToDivide) {
    if (numberToDivide % firstNumber === 0) {
        if (numberToDivide % secondNumber === 0) {
            return true;
        }
    }
    return false;
}

console.log(checkIfDivisible(x,y,n))

// Exercise 14

function getBillboardPrice(billboardText,billboardPrice ) {
    return billboardText.length * billboardPrice;
}

console.log(getBillboardPrice('Hello world!', 10)); // 120
console.log(getBillboardPrice('Hello world!', 15)); // 180
console.log(getBillboardPrice('To be, or not to be', 20)); // 380

// Exercise 15

let integer = 3
let oppositeInteger = integer * -1;
console.log(oppositeInteger)

// Exercise 16

function makeNegative(negativeNumber) {
    if (negativeNumber === negativeNumber * -1) {
        return negativeNumber;
    }
    return negativeNumber * -1;
}

console.log(makeNegative(1));  // return -1
console.log(makeNegative(-5)); // return -5
console.log(makeNegative(0));  // return 0

// Exercise 17

function removeFirstAndLastCharacter (userInputString) {
    if (userInputString.length > 2) {
        return userInputString.slice(1, -1);
    }
    return userInputString
}

console.log(removeFirstAndLastCharacter('Babushka'));

// Exercise 18

function calculation(operation, firstNumber, secondNumber) {
    if (operation === '+') {
        return firstNumber + secondNumber;
    }
    if (operation === '-') {
        return firstNumber - secondNumber;
    }
    if (operation === '*') {
        return firstNumber * secondNumber;
    }
    return firstNumber / secondNumber;
}

calculation('+',4,7);

// Exercise 19

function getCenturyFromYear(year) {
    return Math.ceil(year / 100);
}

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

console.log(getCenturyFromYear(1905))

// Exercise 20

function determineOddOrEven(value) {
    if (value % 2 === 0) {
        return 'Even';
    }
    return 'Odd';

}
console.log(determineOddOrEven(2));

// Exercise 21

function areYouPlayingBanjo(name) {
    if (name.startsWith('R') === true || name.startsWith('r') === true) {
        return 'You are playing Banjo!';
    }
    return name + ' are you playing Banjo?';
}
console.log(areYouPlayingBanjo('Sobert'));

// Exercise 22

function checkBmi(weight, height) {
    if (weight/height**2 <= 18.5) {
        return 'Underweight';
    }
    if (weight/height**2 <= 25.0) {
        return 'Normal';
    }
    if (weight/height**2 <= 30.0) {
        return 'Overweight';
    }
    return 'Obese';
}

console.log(checkBmi(60.5, 1.65));