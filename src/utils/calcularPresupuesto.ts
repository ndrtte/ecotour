export function calcularPresupuesto(precioTransporte: number, numeroPersonas: number) {
  const PRECIO_BASE: number = 500;
  const DESCUENTO = 0.15;
  let resultado: number;

  resultado = PRECIO_BASE * numeroPersonas + precioTransporte;
  if (numeroPersonas >= 6) {
    resultado = resultado - resultado*DESCUENTO;
  }
  return resultado;
}