const a = Number(prompt('Enter a side: ', undefined));
const b = Number(prompt('Enter b side: ', undefined));
const c = Number(prompt('Enter c side: ', undefined));
if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    if (a === b === c) {
        console.log('Equivalent triangle!')
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle!')
    } else if (a !== b && b !== c) {
        console.log('Normal triangle!')
    }
} else {
    console.log(`Triangle doesn't exist!`)
}