const p1 = {
    x: 0,
    y: 4
}
const p2 = {
    x: 3,
    y: 0
}
const distancia = (p1, p2) => {
    const x = p1.x - p2.x
    const y = p1.y - p2.y
    return Math.sqrt((Math.pow(x, 2)) + (Math.pow(y, 2)))
}
console.log(distancia(p1, p2))