/* kono number ke 4 and 400 diye vag korle vag ses jodi 0 hoy tahole oita leap year; and 100 diye vag korle jodi vag ses != 0 hoy tahole oita leap year */

function leapyear (year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log('This year is leap year');
    } else {
        console.log('This year is not a leap year');
    }
}

leapyear(2020);