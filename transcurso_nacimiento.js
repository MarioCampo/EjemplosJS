const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const mesesAno = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const nacimiento = new Date(1996, 4, 16)
const hoy = new Date()
const tiempoMilisegundos = hoy - nacimiento
const tiempoSegundos = tiempoMilisegundos / 1000
const tiempoMinutos = tiempoSegundos / 60
const tiempoHoras = tiempoMinutos / 60
const proximoCumpleanos = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(`Desde mi fecha de nacimiento, han transcurrido ${tiempoMilisegundos} milisegundos`)
console.log(`Desde mi fecha de nacimiento, han transcurrido ${tiempoSegundos} segundos`)
console.log(`Desde mi fecha de nacimiento, han transcurrido ${tiempoMinutos} minutos`)
console.log(`Desde mi fecha de nacimiento, han transcurrido ${tiempoHoras} horas`)
console.log(`Mi próximo cumpleaños es el dia ${diasSemana[proximoCumpleanos.getDay()]} ${nacimiento.getDate()} de ${mesesAno[proximoCumpleanos.getMonth()]} del año ${proximoCumpleanos.getFullYear()}`)