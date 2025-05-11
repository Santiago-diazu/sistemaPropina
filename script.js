
let totalCuenta = prompt("Ingrese el valor total de la cuenta:");
let nivelServicio = prompt("Ingrese el nivel de servicio: \n 1. Excelente. \n 2. Bueno. \n 3. Regular.");

let cuenta = parseFloat(totalCuenta);

if (isNaN(cuenta) || cuenta <= 0) {
  console.error("El valor total de la cuenta no es válido.");
} else {
  let porcentajePropina = 0;
  switch (nivelServicio.toLowerCase()) {
    case "1":
      porcentajePropina = 0.20;
      break;
    case "2":
      porcentajePropina = 0.15;
      break;
    case "3":
      porcentajePropina = 0.10;
      break;
    default:
      console.warn("Nivel de servicio no reconocido. Se aplicará propina del 0%.");
  }

  let propina = cuenta * porcentajePropina;

  let descuento = 0;
  if (cuenta > 200000) {
    descuento = cuenta * 0.20;
  } else if (cuenta > 100000) {
    descuento = cuenta * 0.10;
  }

  let cuentaConDescuento = cuenta - descuento;
  let totalFinal = cuentaConDescuento + propina;

  console.log("Resumen de pago");
  console.log("Monto original: $" + cuenta.toFixed(2));
  console.log("Nivel de servicio: " + nivelServicio);
  console.log("Propina: $" + propina.toFixed(2));
  console.log("Descuento aplicado: $" + descuento.toFixed(2));
  console.log("Total final a pagar: $" + totalFinal.toFixed(2));
}
