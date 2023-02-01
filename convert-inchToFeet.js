// we know 1 feet == 12 inches

// const myInchec = 12;
// const myFeet = myInchec / 12

// console.log(myFeet);

// const dadaInche = 144;
// const dadaFeet = dadaInche / 12;
// console.log(dadaFeet);

// const dadiInches = 200;
// const dadiFeet = dadiInches / 12;

// var dadiFeets = dadiFeet.toFixed(2)

// console.log(dadiFeets);


function inchToFeet(num) {
    const feet = num / 12
    return feet;
}

const dadaInche = 144;
const dadaFeet = inchToFeet(dadaInche);
console.log('dada feet', dadaFeet);


const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet', nanaFeet);

function mileToKm (miles) {
    const km = miles * 1.60934;
    return km;
}

const mile = 2;
const kilo = mileToKm(mile);

console.log('2 miles ==', kilo);






