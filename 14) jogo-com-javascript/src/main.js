import kaboom from "kaboom"
import movimentacaoPlayer from "./movimentacao"
import adicionaLevel from "./adicionaLevel"

// INICIA A LIB NO PROJETO
kaboom()

// ADICIONA GRAVIDADE
setGravity(1600)

// CARREGAR SPRITES
//            NOME       ENDEREÇO
loadSprite("player", "sprites/bean.png")
loadSprite("coin", "sprites/coin.png")
loadSprite("spike", "sprites/spike.png")
loadSprite("floor", "sprites/tile/2.png")

adicionaLevel()

// ADICIONAR PARA O JOGO
const player = add([
	pos(120, 80), 
	sprite("player"), // vincula um sprite ao elemento
	body(), // adiciona fisica para o elemento
	area() // adiciona um corpo para colisao
])

// EMISSAO DE EVENTOS
movimentacaoPlayer(player)