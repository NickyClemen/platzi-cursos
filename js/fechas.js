function diasEntreFechas(fecha1, fecha2) {

    const unDia = 1000 * 60 * 60 * 24;

    const diferencia = Math.abs(fecha1 - fecha2);
    // Math.abs devuelve un valor absoluto. Si el número es negativo, lo transforma en positivo.

    return Math.floor(diferencia / unDia);
    // Redondea para abajo.

}

const hoy = new Date();
/* Date() tiene la fecha actual por defecto. */

const nacimiento = new Date(1991, 2, 13);
/* El constructor recibe el año, mes y día. */

diasEntreFechas();