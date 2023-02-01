// formula kono number ke 2 diye vag korle jodi ses 0 thake tahole oita even mane jor sonkha ar jodi vag ses 0 na hoy mane 1 hoy tahole oita odd sonkha oita bejor songkha;

function isEven (num) {
    if (num % 2 !== 1) {
        return true;
    } else {
        return false;
    }
}

const number = 200;
const checkNumber = isEven (number);
console.log(checkNumber);




// function nestedNumber(number){
//    for( let i =1 ;i<= number; i++){
//        let result = '';
//        for(let j = 1; j<=i; j++){
//           result += j + " "
//        }
//        console.log(result);
//     }
// }

// nestedNumber(10)