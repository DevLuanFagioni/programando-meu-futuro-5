function mostrarNome() {
  const nome = "Luan"
  const sobreNome = " Fagioni"
  return [nome, sobreNome]
}
// SE NAO ESTIVER RETORTANDO EU APENAS EXECUTO
mostrarNome()

// SE ESTIVER RETORNANDO VALOR EU QUERO GUARDAR EM UMA VARIAVEL PARA PODER USAR DEPOIS
const nomeCompleto = mostrarNome()
console.log(nomeCompleto)