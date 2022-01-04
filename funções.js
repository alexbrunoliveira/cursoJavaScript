// Criando uma função chamada exibirNomeDeCarro que irá execultar um loop e imprimir todos os nomes de carros do array

function exibirNomeDeCarro() {
    // Criando um array de Carros
        var listaDeCarros = ['Fox','Celta', 'Uno', 'Astra' ]
    // Criando um for para percorrer o array de nomes

    for(var i=0; i < listaDeCarros.length; i++) {

        // A cada Loop o computador deverá exibir um nome de cada posição do array

        console.log("Nome do carro é : " + listaDeCarros[i])
    }
}