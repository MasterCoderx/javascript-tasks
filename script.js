//  Exercise 1 //

const greeting = getGreeting('John', 'Smith');
function getGreeting(firstName, secondName) {
    return 'Hi, "' + firstName + ' ' + secondName + '". What\'s up?';
}
console.log(greeting); // Hi, “John Smith”. What's up?

// Exercise 2 //

function isThisMyName(yourName) {
    return yourName === 'Janek';
}

console.log(isThisMyName('Janek'));
console.log(isThisMyName('Adam'));

// Exercise 3 //

function isThisBoolean (x) {
    if (x === true) {
        return true
    }
    else if (x === false) {
        return true
    }
    else {
        return false
    }
}

console.log(isThisBoolean('false'))

// Exercise 4 //

function getCircleArea (radius) {
    return Math.pow(radius, 2) * Math.PI;
}

const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

// Exercise 5 //

function getCirclesAreaSum (area1, area2) {
    return sumArea = getCircleArea(area1) + getCircleArea(area2)
}

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417