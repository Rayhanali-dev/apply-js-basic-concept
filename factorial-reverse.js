function multiplicationReverse(numbers) {
    let result = 1;
    for (i = numbers; i >= 1; i--) {
        result = result * i;
    }
    return result;
}


const number = 5;

const fact_reverse = multiplicationReverse(10);
console.log('factorial reverse value', fact_reverse);