// Interes Simple: Es el pago del por el uso del dinero ajeno, o el rendimiento que se obtiene de algo.
const interesSimple = (valorFuturo, valorPresente) => {
  const interes = valorFuturo - valorPresente;
  return interes.toFixed(2);
};

//Tasa de Interés en el tiempo (la unidad de tiempo es 1 año)
const tasaInteres = (interes, capital, tiempo) => {
  const tasa = interes / (capital * tiempo);
  const tasaPorcentaje = tasa * 100;
  return tasaPorcentaje.toFixed(1);
};

// Interés con tasa Base a una unidad monetaria (Calcular Monto Inicial)
const calcInteresPorPagar = (tasa, capital, tiempo) => {
  const interes = capital * (tasa / 100) * tiempo;
  return interes.toFixed(2);
};

// Relacion entre interés exacto 365 días y ordinario 360 días
const calcTiempos = (tasa, capital, dias) => {
  const tOrdinario = dias / 360;
  const tExacto = dias / 365;
  const ordinario = calcInteresPorPagar(tasa, capital, tOrdinario);
  const exacto = calcInteresPorPagar(tasa, capital, tExacto);
  const diferencia = ordinario - exacto;

  return `El interés ordinario(comercial) es $${ordinario} y el interés exacto(real) es $${exacto} con una diferencia de $${diferencia.toFixed(
    2
  )} `;
};

module.exports = {
  interesSimple,
  tasaInteres,
  calcInteresPorPagar,
  calcTiempos,
};
