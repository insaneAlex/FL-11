const maxElement = arr => Math.max(...arr);

const copyArray = arr => new Array(...arr);

const addUniqueId = obj => new Object({ ...obj, id: Symbol('unique identifier') });

const regroupObject = oldObj => {
    let { name: firstName, details } = oldObj;
    let { age, university, id } = details;
    return new Object({
        university,
        user: { age, firstName, id }
    })
}

const findUniqueElements = arr => [...new Set(arr)];

const hideNumber = number => {
    if (number.length > 9) {
        const lastDigits = number.slice(-4);
        return lastDigits.padStart(number.length, '*');
    } else {
        console.log('This number is too short')
    }
}

const isRequired = () => { throw new Error('missing required param') }
const add = (num1 = isRequired(), num2 = isRequired()) => num1 + num2;

const getNames = url => {
    const namesArray = [];
    fetch(url)
        .then(response => response.json())
        .then(dataArray => {
            for (let el of dataArray) { namesArray.push(el.name.toLowerCase()) }
        })
    return namesArray.sort();
}
//getNames('https://api.github.com/users/insaneAlex/repos');

async function getNamesAsync(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const namesArrey = [];
        data.map(el => namesArrey.push(el.name.toLowerCase()));

        return namesArrey.sort();
    } catch (e) {
        console.log(e);
    }
}