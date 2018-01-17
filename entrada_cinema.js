const nombreAdulto = 'Mario',
    nombreInfante = 'Alberto',
    edadAdulto = 21,
    edadMinima = 18,
    nombrePelicula = 'Insidous: The last key';
let edadInfante = 12;
const entradaCinema = (nombre, edad, acompañado = false) => {
    if (edad >= edadMinima) {
        alert(`${nombre} puede ver ${nombrePelicula} por que tiene ${edad} años.`);
    } else if (edad < edadMinima && acompañado) {
        alert(`${nombre} apesar de tener ${edad} años, puede ver ${nombrePelicula} por que esta acompañado por un adulto.`);
    } else {
        alert(`${nombre} no puede ver ${nombrePelicula} por que tiene ${edad} años y la edad minima es ${edadMinima} años`);
    }
}
/**
 * El primer llamado hace referencia al nombre Mario y la edad de 21 años
 */
entradaCinema(nombreAdulto, edadAdulto);
/**
 * La segunda llamada hace referencia al nombre Alberto con edad de 12 años pero acompañado por un adulto
 */
entradaCinema(nombreInfante, edadInfante, true);
/**
 * La tercera llamada hace refencia al nombre Alberto con edad de 12 años pero sin acompañamiento de un adulto
 */
entradaCinema(nombreInfante, edadInfante);