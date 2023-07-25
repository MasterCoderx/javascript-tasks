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