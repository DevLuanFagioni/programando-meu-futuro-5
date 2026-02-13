// DESAFIO: 
// CRIE UM SISTEMA DE CALCULO DE NOTAS PARA UMA ESCOLA
// DEVE RECEBER UMA LISTA COM AS NOTAS DO ALUNO
// CRIE UMA VARIAVEL PARA ARMAZENAR A MÉDIA DO ALUNO
// PERCORRAR PELA LISTA PARA CALCULAR A MÉDIA DO ALUNO
// PEGUE A MEDIA E VERIFIQUE SE O ALUNO FOI APROVADO, REPROVADO OU ESTÁ DE RECUPERAÇÃO E IMPRIMA O RESULTADO NO CONSOLE
// A MÉDIA PARA APROVAÇÃO É 7, PARA RECUPERAÇÃO É ENTRE 5 E 7, E PARA REPROVAÇÃO É MENOR QUE 5

const notasAluno = [8, 7, 9, 6, 10, 8, 6, 5, 3 ,9, 10, 7, 8, 6, 5, 4, 9, 10, 8, 7, 6]

let mediaAluno = 0

for (const nota in notasAluno) {
    mediaAluno = mediaAluno + notasAluno[nota]
}

mediaAluno = mediaAluno / notasAluno.length


if (mediaAluno >= 7) {
    console.log("SUA NOTA FOI: ", mediaAluno);
    console.log("PARABENS VOCE FOI APROVADO");
} else if (mediaAluno >= 5 && mediaAluno < 7) {
    console.log("SUA NOTA FOI: ", mediaAluno);
    console.log("VOCE ESTA DE RECUPERACAO");
} else {
    console.log("SUA NOTA FOI: ", mediaAluno);
    console.log("VOCE FOI REPROVADO");
}






