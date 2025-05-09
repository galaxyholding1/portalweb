const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export class Formatter {
  static formatDate(date) {
    const hora = date.getHours().toString().padStart(2, "0");
    const minutos = date.getMinutes().toString().padStart(2, "0");
    const dia = date.getDate();
    const mesNombre = meses[date.getMonth()];

    const result = `${hora}:${minutos} - ${mesNombre} ${dia}`;
    return result;
  }

  static formatCurrency(amount) {
    return (
      "$" +
      new Intl.NumberFormat("es-CO", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    );
  }
}
