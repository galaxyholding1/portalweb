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
  // Formatea la fecha como "HH:mm - Mes Día"
  static formatDate(date) {
    const hora = date.getHours().toString().padStart(2, "0");
    const minutos = date.getMinutes().toString().padStart(2, "0");
    const dia = date.getDate();
    const mesNombre = meses[date.getMonth()];

    return `${hora}:${minutos} - ${mesNombre} ${dia}`;
  }

  // Formatea la fecha completa en formato literal EJ: "13 de mayo de 2025"
  static formatDateLiteral(date) {
    return new Intl.DateTimeFormat("es-CO", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  // Formatea un número como moneda colombiana con 2 decimales
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
