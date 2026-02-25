## DESAFIO 1
Gerenciador de Lista de Espera
Crie uma função que simula uma fila de espera (um array). A função deve receber a fila atual e o nome de uma pessoa.
    deve adicionar o novo nome ao final da fila.
    Remover a primeira pessoa da fila (o atendimento).
    Retornar uma string formatada: "Atendido: [pessoa_removida]. Próximo: [nova_primeira_pessoa]."
    Input: fila = ["Maria", "João", "Ana"], nome = "Pedro"
    Output: "Atendido: Maria. Próximo: João."
    (E a fila, após a função, deve ter se tornado ["João", "Ana", "Pedro"])

## DESAFIO 2
Verificador de Palíndromo
Crie uma função que verifica se uma string é um palíndromo (lê-se igual de trás para frente), ignorando maiúsculas/minúsculas/espaços/caracteresEspeciais(opcional).
    Compare a string original (limpa) com a string invertida.
    Input: "Arara"
    Output: "É palindromo"
    Input: "Banana"
    Output: "Não é palindromo"

## DESAFIO 3   
Cifra de César
Crie uma função que "criptografa" uma string usando a Cifra de César, com um deslocamento fixo de 3 posições. (A -> D, B -> E, ..., Z -> C).
 - deve receber como parametro uma string
    Input: "ABC"
    Output: "DEF"
    Input: "XYZ"
    Output: "ABC"
    Input: "TESTE Z"
    Output: "WHVWH C"
    
## DESAFIO 4
Análise de Dados
Crie uma função que analisa os dados financeiros de uma lista de usuários. A função deve receber um array de objetos (representando os usuários com nome e saldo) e um parâmetro indicando o tipo de análise ("devedor" ou "positivo").
 - Filtrar os usuários com base no tipo escolhido (saldos menores que zero para "devedor", e maiores que zero para "positivo").
 - Deve filtrar apenas por usuarios ativos.
 - Calcular a média de valor do grupo filtrado.
 - Retornar uma string formatada com o total de usuários encontrados nessa condição e a média dos seus saldos.
    Input: usuarios e tipo
    Output: "Total de usuários: 2. Média do valor devedor: -100"

// Mock de usuarios
const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 28, email: "ana.silva@email.com", banco: "Nubank", saldo: 1500.50, ativo: true },
  { id: 2, nome: "João Souza", idade: 35, email: "joao.souza@email.com", banco: "Itaú", saldo: -450.00, ativo: true },
  { id: 3, nome: "Maria Oliveira", idade: 42, email: "maria.o@email.com", banco: "Bradesco", saldo: 3200.75, ativo: true },
  { id: 4, nome: "Pedro Santos", idade: 21, email: "pedro.santos@email.com", banco: "Inter", saldo: -150.20, ativo: false },
  { id: 5, nome: "Lucas Fernandes", idade: 30, email: "lucas.f@email.com", banco: "Banco do Brasil", saldo: 8500.00, ativo: true },
  { id: 6, nome: "Juliana Costa", idade: 25, email: "juli.costa@email.com", banco: "C6 Bank", saldo: -890.50, ativo: true },
  { id: 7, nome: "Marcos Paulo", idade: 50, email: "marcos.p@email.com", banco: "Santander", saldo: 450.00, ativo: true },
  { id: 8, nome: "Camila Rocha", idade: 29, email: "camila.rocha@email.com", banco: "Nubank", saldo: 2750.10, ativo: true },
  { id: 9, nome: "Rafael Lima", idade: 38, email: "rafa.lima@email.com", banco: "Itaú", saldo: -3200.00, ativo: false },
  { id: 10, nome: "Beatriz Almeida", idade: 24, email: "bia.almeida@email.com", banco: "Inter", saldo: 120.00, ativo: true },
  { id: 11, nome: "Carlos Eduardo", idade: 45, email: "carlos.edu@email.com", banco: "Bradesco", saldo: -15.50, ativo: true },
  { id: 12, nome: "Fernanda Gomes", idade: 31, email: "fe.gomes@email.com", banco: "Banco do Brasil", saldo: 5400.90, ativo: true },
  { id: 13, nome: "Diego Martins", idade: 27, email: "diego.m@email.com", banco: "C6 Bank", saldo: -600.00, ativo: false },
  { id: 14, nome: "Patrícia Ribeiro", idade: 39, email: "patricia.r@email.com", banco: "Santander", saldo: 18000.00, ativo: true },
  { id: 15, nome: "Thiago Carvalho", idade: 33, email: "thiago.c@email.com", banco: "Nubank", saldo: -1250.75, ativo: true },
  { id: 16, nome: "Letícia Mendes", idade: 22, email: "leticia.mendes@email.com", banco: "Itaú", saldo: 340.00, ativo: true },
  { id: 17, nome: "Gustavo Henrique", idade: 26, email: "gustavo.h@email.com", banco: "Inter", saldo: 980.25, ativo: true },
  { id: 18, nome: "Amanda Castro", idade: 41, email: "amanda.castro@email.com", banco: "Bradesco", saldo: -4500.00, ativo: false },
  { id: 19, nome: "Rodrigo Alves", idade: 34, email: "rodrigo.alves@email.com", banco: "Banco do Brasil", saldo: 210.50, ativo: true },
  { id: 20, nome: "Bruna Nogueira", idade: 28, email: "bruna.n@email.com", banco: "C6 Bank", saldo: 6700.00, ativo: true },
  { id: 21, nome: "Felipe Moraes", idade: 47, email: "felipe.m@email.com", banco: "Santander", saldo: -300.00, ativo: true },
  { id: 22, nome: "Vanessa Pires", idade: 36, email: "vanessa.pires@email.com", banco: "Nubank", saldo: 4150.80, ativo: true },
  { id: 23, nome: "André Teixeira", idade: 52, email: "andre.t@email.com", banco: "Itaú", saldo: -85.00, ativo: true },
  { id: 24, nome: "Natália Farias", idade: 23, email: "natalia.f@email.com", banco: "Inter", saldo: 15.00, ativo: false },
  { id: 25, nome: "Roberto Nunes", idade: 55, email: "roberto.nunes@email.com", banco: "Bradesco", saldo: 12500.00, ativo: true },
  { id: 26, nome: "Carolina Dias", idade: 32, email: "carol.dias@email.com", banco: "Banco do Brasil", saldo: -2100.40, ativo: true },
  { id: 27, nome: "Eduardo Cardoso", idade: 29, email: "edu.cardoso@email.com", banco: "C6 Bank", saldo: 890.00, ativo: true },
  { id: 28, nome: "Tatiane Vieira", idade: 37, email: "tati.vieira@email.com", banco: "Santander", saldo: 3000.00, ativo: true },
  { id: 29, nome: "Marcelo Batista", idade: 44, email: "marcelo.b@email.com", banco: "Nubank", saldo: -550.00, ativo: false },
  { id: 30, nome: "Isabela Moura", idade: 20, email: "isa.moura@email.com", banco: "Itaú", saldo: 75.50, ativo: true }
];