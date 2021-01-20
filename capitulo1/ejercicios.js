const {interesSimple, tasaInteres, calcMontoInicial} = require('./interesSimple');

//#1 EJERCICIO 1.2
//Un pequeño comerciante invierte 1000, después de un año recibe la cantidad de $1200.00 por su inversión.

//a) Calcular Interés
console.log('El Interés', '$' + interesSimple(valorFuturo = 1200, valorPresente = 1000))

//B) La Tasa de Interés
console.log('Tasa de Interés', tasaInteres(interes = 200, capital = 1000, tiempo = 1) + '%')

// Calcular el monto inicial
console.log('calcular Monto Inicial', '$' + calcMontoInicial(tasa = 20, capital = 1000, tiempo = 1))