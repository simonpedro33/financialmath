const {interesSimple, tasaInteres, calcInteresPorPagar, calcTiempos} = require('./interesSimple');

//#1 EJERCICIO 1.2
//Un pequeño comerciante invierte 1000, después de un año recibe la cantidad de $1200.00 por su inversión.

//a) Calcular Interés
console.log('El Interés', '$' + interesSimple(valorFuturo = 1200, valorPresente = 1000))

//B) La Tasa de Interés
console.log('Tasa de Interés', tasaInteres(interes = 200, capital = 1000, tiempo = 1) + '%')

//C) Calcular el monto inicial
console.log('calcular Interés por pagar', '$' + calcInteresPorPagar(tasa = 20, capital = 1000, tiempo = 1))


//D) La Tasa de Interés automovil
console.log('calcular Interés por pagar', '$' + calcInteresPorPagar(tasa = 36, capital = 98500, tiempo = 2))

//1.5 Prestamos
console.log('Tasa de Interés', tasaInteres(interes = 3000, capital = 15000, tiempo = 1) + '%')

//1.6 Biciclistas
console.log('Tasa de Interés', tasaInteres(interes = 660000, capital = 2500000, tiempo = 3) + '%')

//1.8 banco
console.log('calcular Interés por pagar', '$' + calcInteresPorPagar(tasa = 8, capital = 3800, tiempo = 0.25 ))

//1.15 Ordinario vs Exacto
console.log(calcTiempos(tasa = 25, capital = 18500, dias = 30 ))

//1.16 Ordinario vs Exacto
console.log(calcTiempos(tasa = 19.75, capital = 250000, dias = 60 ))

//1.16 Ordinario vs Exacto
console.log(calcTiempos(tasa = 29.52, capital = 25000, dias = 340 ))