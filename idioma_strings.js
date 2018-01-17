function platzom(str) {
    let translation = str
    /**
     * Si la palabra termina en ar se le quitan esos dos caracteres
     */
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
    }
    /**
     * Si la palabra inicia con z se le agrega pe al final
     */
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }
    /**
     * Si la palabra traducida tiene 10 o más letras se debe partir a la mitad y unir con un guión del medio
     */
    const length = translation.length
    if (length >= 10) {
        const firstHalf = translation.slice(0, Math.round(length / 2)),
            secondHalf = translation.slice(Math.round(length / 2));
        translation = `${firstHalf}-${secondHalf}`
    }
    /**
     * Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
     */
    const reverse = (str) => str.split('').reverse().join('')

    function minMay(str) {
        const length = str.length
        let translation = ''
        let capitalize = true
        for (let i = 0; i < length; i++) {
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }
        return translation
    }
    if (str == reverse(str)) {
        return minMay(str)
    }
    return translation
}
console.log(platzom('Programar'))
console.log(platzom('Zorro'))
console.log(platzom('Zarpar'))
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))