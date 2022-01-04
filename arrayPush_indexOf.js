var frutas = ['Bananas', 'Uva', 'Maçã', 'Laranja']
// A função push inclui um item no array
frutas.push('Goiaba')

console.log(frutas)

// Função array.indexOf()
// Usado para descobrir se o elemento existe no array, caso ele encontre o resultado será a posição do array. Caso contrário o resultado será -1


console.log(frutas.indexOf('Melancia') + " Item não Localizado") // Resultado será -1
console.log(frutas.indexOf('Uva') + " Item  Localizado") // Resultado será 1, pois é a posição em q o resultado se encontra
