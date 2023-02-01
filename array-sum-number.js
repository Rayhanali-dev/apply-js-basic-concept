function getNumber(numbers) {
    var result = 0;

   for (i = 0; i < numbers.length; i++) {
        var element = myNumber[i]
        result = result + element;
        console.log(element, result);
   }
   return result
}

const myNumber = [13, 15, 12, 10, 36, 25, 40, 36, 84];
(getNumber(myNumber));