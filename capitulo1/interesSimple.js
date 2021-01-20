// Interes Simple: Es el pago del por el uso del dinero ajeno, o el rendimiento que se obtiene de algo.
const interesSimple = (valorFuturo, valorPresente) => {
  const interes = valorFuturo - valorPresente;
  return interes.toFixed(2);
};

//Tasa de Interés en el tiempo (la unidad de tiempo es 1 año)
const tasaInteres = (interes, capital, tiempo) => {
    const tasa = interes / (capital * tiempo);
    const tasaPorcentaje = tasa * 100;
    return tasaPorcentaje;
  };

// Interés con tasa Base a una unidad monetaria (Calcular Monto Inicial)
  const calcMontoInicial = (tasa, capital, tiempo) => {
    const interes = capital * (tasa / 100) * (tiempo);
    return interes.toFixed(2);
  };

module.exports = { interesSimple, tasaInteres, calcMontoInicial }; 