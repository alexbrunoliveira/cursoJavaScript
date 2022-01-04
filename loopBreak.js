var listaDeNomes = ["Cesar", "pamela", "Camila", "Hendy"]
var buscar = "Cesar"// Nome que iremos buscar"

for(var i = 0; i < listaDeNomes.length; i++) {
    if (listaDeNomes[i] == buscar) {
    console.log("Encontreo o nome ") 
    break // para a verificação do loop ao encontrar a pesquisa
    }
}