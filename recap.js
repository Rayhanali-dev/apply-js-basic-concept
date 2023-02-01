// 1. variables
var myMame = 'rayhan';
console.log(myMame);

//  Math Operation: +, -, *, /
//  shorthand: +=, -=, *=, /=,
//  ++, --;


// 2. Array

var friend = ['rayhan', 'tanjed', 'rifa', 'soniya', 'riya'];

var myThirdFriend =  friend[2] = 'hellow';

console.log(friend);

// . Conditionals
// >, <, <=, >=, ==, !=, ===, !==, 

// if (friend.length < 2) {
//     console.log('eid mubarak');
// } else {
//     console.log('hello world');
// }


// 4. loops
// while loop ==> for loop

// var num = 0;
// while (num < 10) {
//     console.log(num);
//     num++
// }

// for (i = 10; i > num; i--) {
//     console.log(i);
// }


// 5. Function
function isMoonUp (time) {
    if (time < 7) {
        console.log('hello');
    } else {
        console.log('na uthe nai');
    }
}

isMoonUp (5);

// 6. object 

var object = {
    object_property: 'object value',
    object_property: 'object value',
    object_property: 'object value',
    object_property: 'object value',
    object_property: 'object value'
}