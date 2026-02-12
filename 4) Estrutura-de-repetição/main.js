// ESTRUTURAS DE REPETIÇÃO: FOR E WHILE]

// ===== Estrutura de repetição: FOR =====
// USADO PARA REPETIR UM BLOCO DE CÓDIGOS UM NÚMERO DETERMINADO DE VEZES

const nomes = ["Luan", "Ana", "Carlos", "Maria", "João"]

// FORMA ERRADA DE BUSCAR OS DADOS DE UM ARRAY:
// IMAGINE QUE VOCE TEM UM ARRAY COM 1000 NOMES, NO CASO, TERÍAMOS QUE DIGITAR 1000 LINHAS DE CÓDIGOS PARA BUSCAR CADA DADO DO ARRAY
nomes[0] // "Luan"
nomes[1] // "Ana"
nomes[2] // "Carlos"
nomes[3] // "Maria"
nomes[4] // "João"

//FORMA CORRETA
// BUSCANDO OS DADOS DE MANEIRA DINAMICA COM O FOR, ONDE PODEMOS CONTROLAR O NÚMERO DE VEZES QUE O CÓDIGO VAI SER REPETIDO

// o length é uma propriedade dos arrays que retorna o número de elementos do array
nomes.length // 5   

//   inicio         condicao      soma
for (let i = 0; i < nomes.length; i++) {

    if ( nomes[i] === "Carlos") {
        //console.log("Olá carlos");
        break
    } else {
        //console.log(" Não encontrei o carlos");
    }
    
}

// Percorre por cada elemento do array e objeto tbm
for (const i in nomes) {

    if (nomes[i] === "Carlos" ) {
        //console.log("Encontrei o Carlos!");
        
        break
    } else {
        //console.log("Não encontrei o Carlos")
    }
    
}


// PERCORRENDO POR OBJETOS COM O FOR IN
let pessoa = {
//  chave: valor
    nome: "Luan",
    idade: 25,
    altura: 1.75,
    peso: 70
}
pessoa.nome // "Luan"
pessoa.idade // 25
pessoa.altura // 1.75
pessoa.peso // 70

for (const chave in pessoa) {
    if ( chave === "nome") {
        console.log( pessoa[chave] ) // "Luan";
    }
}

// ===== Estrutura de repetição: WHILE =====
// USADO PARA REPETIR UM BLOCO DE CÓDIGOS ENQUANTO UMA CONDIÇÃO FOR VERDADEIRA

let contador = 0
while (contador < 5) {
    console.log("teste");
    contador++
}