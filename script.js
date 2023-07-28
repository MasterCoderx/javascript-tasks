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