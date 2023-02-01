// formula (miles * 160934) = 1km;

function milesToKilo(miles) {
    const kilo = miles * 1.60934
    return kilo;
}

const mile = 3;
const kilometers = milesToKilo(mile);

console.log(kilometers);

