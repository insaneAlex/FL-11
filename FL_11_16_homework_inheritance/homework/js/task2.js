// const myCreate = (object) => {
//     return { __proto__: { ...object } }
// }

const myCreate = function (obj, props) {
    function F() {
        return
    }
    F.prototype = obj;
    if (typeof props === 'object') {
        for (let prop in props) {
            if (Object.prototype.hasOwnProperty.call(props, prop)) {
                F[prop] = props[prop];
            }
        }
    }
    return new F();
};

const obj1 = { prop: 5 };
const obj2 = myCreate(obj1);

Object.getPrototypeOf(obj2) === obj1; // => true
obj2.prop; // => 5