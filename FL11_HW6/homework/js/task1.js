const a1 = Number(prompt('Enter a1: '));
const a2 = Number(prompt('Enter a2: '));
const b1 = Number(prompt('Enter b1: '));
const b2 = Number(prompt('Enter b2: '));
const c1 = Number(prompt('Enter c1: '));
const c2 = Number(prompt('Enter c2: '));
const TWO = 2;
if ((a1 + b1) / TWO === c1 && (a2 + b2) / TWO === c2) {
    console.log(true);
} else {
    console.log(false)
}