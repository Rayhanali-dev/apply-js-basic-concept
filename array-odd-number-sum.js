
function getSumNumber(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        sum += element
        console.log(element, sum);
    }
    return sum;
}

function oddNumber (numbers) {
    let oddArray = [];
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const oddElement = numbers[index];
        // console.log(oddElement);
        if (oddElement % 2 === 1) {
            oddArray.push(oddElement);
        }
    }
    return oddArray
}

const myNumbers = [12, 15, 18, 21, 32, 25, 7, 5, 23, 25];

const allArraySumNumber = getSumNumber(myNumbers);
console.log(allArraySumNumber);

const odd = oddNumber(myNumbers)
console.log(odd);

const oddAdd = getSumNumber(odd);
console.log(oddAdd);
// getSumNumber(odd);

