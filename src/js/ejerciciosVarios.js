
/*const altura = 6;
let ast = "";
for (let i = 1; i <= altura; i++) {
    for (let j = (altura - 1); j >= (altura - i); j--) {
        ast += "* ";
    }
    ast += "\n";
}
console.log(ast);

const altura2 = 6;
let ast2 = "";
for (let i = 1; i <= altura2; i++) {
    for (let j = 1; j <= i; j++) {
        ast2 += "* ";
    }
    ast2 += "\n";
}
console.log(ast2);


const tam = 6;
let valor;
let serie = "";
for (let i = 1; i <= tam; i++) {
    for (let j = 1; j <= i; j++) {
        serie += (i * 2) - (j * 2 - 1) + " ";
    }
    serie += "\n";
}
console.log(serie);



const con1 = "hola";
let con2 = "Hola";


if (con1 === con2) {
    console.log("son iguales");
}
else {
    console.log("no son iguales");
}

const word = "otorrinolaringologo";


for (let i = 1; i <= word.length; i++) {
    console.log(word.charAt(word.length - i));
}

const arrayWord = word.split('');
const arrayReverse = arrayWord.reverse();
for (let i = 0; i < arrayReverse.length; i++) {
    console.log(arrayReverse[i]);
}
*/

const word = "otorrinolaringologo";
const letter = "o";
let letterReptit = 0;

for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
        letterReptit++;
    }
    console.log(word[word.length - (i + 1)]);
}
console.log(`El número de veces que repite la letra ${letter} es: ${letterReptit}`)