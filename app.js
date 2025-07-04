function sum(a, b) {
    return a + b
}

console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {

    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;

    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valorDolares) {

    // calculamos ecuantos euros serian X dolares
    let dolarEuro = valorDolares / oneEuroIs.USD

    // sabiendo cuantos euros serian X dolares aplicamos la tasa de euro a yen
    let valorYenes = dolarEuro * 156.5;

    return Math.round(valorYenes * 10) / 10
}

const fromYenToPound = function(valorYenes) {

    // calculamos cuantos euros serian X yenes
    let yenEuro = valorYenes / oneEuroIs.JPY

    // Sabiendo cuantos euros serian X yenes le damos la tasa de que 1 euros son 0.87 libras
    let valorPound = yenEuro * 0.87

    return Math.round(valorPound * 10) / 10;
}



module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

