const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14,9)

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const {fromEuroToDollar} = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One dollar should be 146.3 yens", function() {
    // Importo la funcion desde app.js
    const {fromDollarToYen} = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(2)

    // Si 1 dolar son 146.2 yenes, entonces 2 dolares debe ser (2 * 146.3)
    const expected = 1 * 146.3;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(146.3); 
});


test('1000 yens deberian ser 5.6 libras', function() {
    
    // Importo la funcion desde app.js
    const {fromYenToPound} = require('./app.js');

    expect(fromYenToPound(1000)).toBe(5.6);
})




