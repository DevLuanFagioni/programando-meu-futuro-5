/**
 * ===== OPERADOR TERNÁRIO =====
 * 
 * SINTAXE: condicao ? valor_se_verdadeiro : valor_se_falso
 * 
 * É uma forma compacta de criar um IF/ELSE em uma única linha.
 * Perfeito para atribuições simples e retornos de funções.
 * 
 * ? = SE (então faça isso)
 * : = SE NÃO (então faça aquilo)
 */

// ===== EXEMPLO 1: Validação de Idade =====
const idade = 18
const acesso = idade >= 18 ? "pode entrar" : "não pode entrar"
console.log(acesso) // Output: "pode entrar"

// ===== EXEMPLO 2: Ternário Aninhado =====
// Validar se a idade permite entrada em zona específica
const verificacao = idade >= 18 && idade <= 30 
    ? "pode entrar na zona restrita" 
    : "acesso negado"
console.log(verificacao)

// ===== EXEMPLO 3: Ternário com Template String =====
// Útil para construir mensagens dinâmicas
const mensagem = `Você ${idade >= 18 ? "pode" : "não pode"} entrar no estabelecimento`
console.log(mensagem) // Output: "Você pode entrar no estabelecimento"

// ===== EXEMPLO 4: Ternário com Retorno de Função =====
function verificarNumero(numero) {
    return numero > 20 ? "Número válido" : "Número inválido"
}
console.log(verificarNumero(25)) // Output: "Número válido"
console.log(verificarNumero(10)) // Output: "Número inválido"

// ===== EXEMPLO 5: Ternário com Operações =====
// Pode executar qualquer expressão nos dois lados
const valor = 15
const resultado = valor > 10 ? valor * 2 : valor + 5
console.log(resultado) // Output: 30 (15 * 2)

// ===== EXEMPLO 6: Ternário Aninhado (Use com Cuidado) =====
// Para múltiplas condições, considere usar IF/ELSE (mais legível)
const nota = 8
const conceito = nota >= 9 ? "A" : nota >= 7 ? "B" : nota >= 5 ? "C" : "F"
console.log(conceito) // Output: "B"

// ===== BOAS PRÁTICAS =====
// ✅ Use para condições simples
// ✅ Use para atribuições e retornos
// ❌ Evite ternários muito aninhados (difícil de ler)
// ❌ Não use para lógica complexa (use IF/ELSE)