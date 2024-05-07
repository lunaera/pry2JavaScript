// try-catch



try {
    throw new Error('Éste es mi error');
} catch (erro) { // se declara una variable para capturar el error
    console.error(erro.message);
}



// try finally

try {
    throw new Error('mi error');
} catch (error) { }
finally {
    console.error('finally se ejecuta haya o no haya errores');
}


// try-catch-finally
try {
    throw new Error('mi error');
} catch (err) {
    console.error("error try-catch-finally", err.message);
} finally {
    console.error('finally');
}

try {
    try {
        throw new Error('mi error');
    } catch (err) {  // aqui se declara la variable err
        console.error('interno', err.message);
        throw err;  // aquí se lanza nuevamente ese err para que lpo atrape el últoimo catch
    } finally {
        console.log('finally interno');
    }
} catch (err) {
    console.error('externo', err.message);
    //alert('externo' + err.message);
}


// ejemplo:


function scope() {
    if (true) {
        let miVariable = 34;
    }
    return miVariable * 2;
}

try {
    console.log(scope());
} catch (error) {
    console.error(error.message);
}


try {
    let x = 45;
    let y = 0;
    let division = x / y
    if (division == "Infinity") {
        throw "División por cero no aceptado";
    }
    console.log(division);
} catch (error) {
    console.error(error);
}



let cliente = {
    nombre: "Pedro",
    id: 3,
    saldo: 0,
    retirar: (importe) => {
        if (cliente.saldo < importe) {
            //throw new Error("saldo insuficiente!!"); //se crea una nueva instancia de Error
            throw "saldo insuficiente!!";
        }
        cliente.saldo -= importe;
    }
}

try {
    cliente.retirar(500);
    console.log("Retiro realizado con éxito, tu saldo es:", cliente.saldo);
} catch (erro) {
    //console.error(erro.message); // se usa cuando ocupamos throw new Error()
    console.error(erro); // se ocupa cuando solo usamos throw "mensaje"
}


let clienteBanco = {
    nombre: "Pedro",
    id: 3,
    saldo: 0,
    abonar: (importe) => {
        clienteBanco.saldo += importe;
    },
    retirar: (importe) => {
        if (clienteBanco.saldo < importe) {
            //throw new Error("saldo insuficiente!!"); //se crea una nueva instancia de Error
            throw "saldo insuficiente!!";
        }
        clienteBanco.saldo -= importe;
    }
}

try {
    clienteBanco.abonar(5000);
    clienteBanco.retirar(500);
    console.log("Retiro realizado con éxito, tu saldo es:", clienteBanco.saldo);
} catch (erro) {
    //console.error(erro.message); // se usa cuando ocupamos throw new Error()
    console.error(erro); // se ocupa cuando solo usamos throw "mensaje"
}


