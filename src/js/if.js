const a = 4;
const b = 7;
const c = 20;

if (a > b && a > c) {
    if (b > c) {
        console.log(a + ',' + b + ',' + c);
    } else {
        console.log(a + ',' + c + ',' + b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(b + ',' + a + ',' + c);
    } else {
        console.log(b + ',' + c + ',' + a);
    }
} else if (a > b) {
    console.log(c + ',' + a + ',' + b);
} else {
    console.log(c + ',' + b + ',' + a);
}

const arrayNum = [a, b, c];
console.log(arrayNum.sort((x, y) => y - x).join(', '));

const arrayNum2 = [a, b, c];
const arrayOrdenado = arrayNum2.sort((a, b) => b - a);
console.log(arrayOrdenado.join(', '));
