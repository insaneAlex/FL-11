const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    }, {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    }, {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    }, {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
]
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const SEVEN = 7;
const EIGHT = 8;


// 0 done
const getNumbers = (str) => {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        if (isNaN(Number(str[i])) !== true) {
            newArr.push(Number(str[i]));
        }
    }
    return newArr;
};
// 1
const findTypes = (...types) => {
    let typesObj = {};
    for (let i = 0; i < types.length; i++) {
        if (typeof types[i] in typesObj) {
            typesObj[typeof types[i]] += 1;
        } else {
            typesObj[typeof types[i]] = 1;
        }
    }
    return typesObj;
}
// 2
const executeForEach = (arr, foo) => {
    for (let i = 0; i < arr.length; i++) {
        foo(arr[i]);
    }
}
// 3
const mapArray = (arr, foo) => {
    const newArr = [];
    executeForEach(arr, (e) => newArr.push(foo(e)))
    return newArr;
}
// 4
const filterArray = (arr, foo) => {
    const newArr = [];
    executeForEach(arr, e => {
        if (foo(e)) {
            newArr.push(e);
        }
    })
    return newArr;
}
// 5
const showFormattedDate = date => {
    const dateObj = {
        year: date.getFullYear(),
        month: date.toDateString().slice(FOUR, SEVEN),
        day: date.getDate()
    }
    return `Date: ${dateObj.month} ${dateObj.day} ${dateObj.year}`;
}
// 6
const canConvertToDate = str => {
    return !!Date.parse(str);
}
// 7
const daysBetween = (date1, date2) => {
    const mSec = 1000;
    const sec = 60;
    const min = 60;
    const hours = 24;
    const differentTime = date2.getTime() - date1.getTime();
    return Math.round(differentTime / (mSec * sec * min * hours));
}
// 8
const getAmountOfAdultPeople = data => {
    const daysForAdult = 6570;
    const today = new Date();
    let result = filterArray(data, function (el) {
        return daysBetween(new Date(el['birthday']), today) >= daysForAdult;
    });
    return result.length;
}
// 9
const keys = obj => {
    const keys = []; //Object.keys(obj);
    for (let key in obj) {
        keys.push(key)
    }
    return keys;
}
// 10
const values = obj => {
    const values = []; //Object.values(obj)
    for (let key in obj) {
        values.push(obj[key])
    }
    return values;
}