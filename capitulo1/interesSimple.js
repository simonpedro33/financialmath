// Interes Simple: Es el pago del por el uso del dinero ajeno, o el rendimiento que se obtiene de algo.
const interesSimple = (valorFuturo, valorPresente) => {
  const interes = valorFuturo - valorPresente;
  return interes;
};

//Tasa de Interés en el tiempo (se mide en años)
const tasaInteres = (interes, capital, tiempo) => {
    const tasa = interes / (capital * tiempo);
    const tasaPorcentaje = tasa * 100;
    return tasaPorcentaje;
  };

// Interés con tasa Base
  const interesConTasaBase = (tasa, capital, tiempo) => {
    const interes = capital * (tasa / 100) * (tiempo);
    return interes.toFixed(2);
  };

module.exports = { interesSimple, tasaInteres, interesConTasaBase }; 