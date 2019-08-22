//TASK 1
const maxElement = arr => Math.max(...arr);

//TASK 2
const copyArray = arr => new Array(...arr);

//TASK 3
const addUniqueId = obj => new Object({ ...obj, id: Symbol('unique identifier') });

//TASK 4
const oldObj = { name: 'Someone', details: { id: 1, age: 11, university: 'UNI' } }
const regroupObject = oldObj => {
    let { name: firstName, details } = oldObj;
    let { age, university, id } = details;
    return new Object({
        university,
        user: { age, firstName, id }
    })
}
//regroupObject(oldObj)

//TASK 5
const findUniqueElements = arr => [...new Set(arr)];

//TASK 6
const hideNumber = number => {
    if (number.length > 9) {
        const lastDigits = number.slice(-4);
        return lastDigits.padStart(number.length, '*');
    } else {
        console.log('This number is too short')
    }
}

//TASK 7


//TASK 8

//TASK 9
