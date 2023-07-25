//  Exercise 1 //

const greeting = getGreeting('John', 'Smith');
function getGreeting(firstName, secondName) {
    return 'Hi, "' + firstName + ' ' + secondName + '". What\'s up?'
}
console.log(greeting); // Hi, “John Smith”. What's up?

// Exercise 2 //

function isThisMyName(x) {
    return x === 'Janek'
}

console.log(isThisMyName('Janek'))
console.log(isThisMyName('Adam'))

