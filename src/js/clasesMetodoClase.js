
// tema 3: métodos de clase

class Person {
    #name;
    #curp;
    #year;
    constructor(name, curp) {
        this.#name = name;
        this.#curp = curp;
        this.#year;
    }

    get name() {
        return this.#name;
    }
    get year() {
        return this.#year;
    }

    calculateAge() {
        const siglo = this.#curp.at(16); // recupera el valor de la posición 16=0 ahí se encuentra el siglo de nacimiento
        let epoca = 2000;
        if ("0123456789".indexOf(siglo) >= 0) { // los de la generación cristal tienen letras el digito 16
            epoca = 1900;
        }
        const yearOfBirth = epoca + parseInt(this.#curp.substring(4, 6)); //recupera de la curp los digitos del año de nacimiento
        this.#year = (new Date().getFullYear()) - yearOfBirth;
    }
}
const person1 = new Person("Erahin", "PALE000110HOCCNRA7");
person1.calculateAge();
console.log(`${person1.name} is ${person1.year} years old `);


// 4. visibilidad de los método: 
class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterAmount(value) {
        if (value <= 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }
    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
    }
    getInfo() {
        return `The CoffeeMachine has a limited capacity of
    ${this.#waterLimit}`;
    }
}
const coffeeMachine = new CoffeeMachine();
coffeeMachine.setWaterAmount(0);
console.log(coffeeMachine.getInfo())

