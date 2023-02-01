var student = {
    id: 213287,
    class: '2nd year',
    uniform: 'white', 
    mobile: {
        brand: 'remdi',
        camera: '7MP',
        ram: '4GB',
        storage: '64gb'
    }
}

const rk = student.mobile.brand = 'oppo';
console.log(rk); 

const student_properties = Object.keys(student.mobile);
const student_mobile_value = Object.values(student.mobile);
const nestedPropertyChange = [student.mobile.brand] = "realme";

console.log(nestedPropertyChange);
console.log(student);

// console.log(student_properties);
// console.log(student_mobile_value);

for (i = 0; i < student_mobile_value.length; i++) {
    const mobileValueElement =  student_mobile_value[i];
    console.log(mobileValueElement);
}

var propertyValueChange = student.mobile['brand'] = 'xiaomi';
console.log(propertyValueChange);