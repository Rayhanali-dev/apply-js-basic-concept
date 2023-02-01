// factorial / multiplication = 1* 2* 3 * 4 * 5 * 6 * 7;

function multiplicationNumber(numbers) {
    let multiplication = 1;
    for (i = 1; i < numbers; i++) {
        const index = i
        multiplication = multiplication * index;
    }
    return multiplication
}

const result = multiplicationNumber(10);
console.log(result);

