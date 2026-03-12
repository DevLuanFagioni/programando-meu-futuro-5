import kaboom from "kaboom"
import movimentacaoPlayer from "./movimentacao"

// INICIA A LIB NO PROJETO
kaboom()

// ADICIONA GRAVIDADE
setGravity(1600)

// CARREGAR SPRITES
//            NOME       ENDEREÇO
loadSprite("player", "sprites/bean.png")

// ADICIONAR PARA O JOGO
const player = add([
	pos(120, 80), 
	sprite("player"), // vincula um sprite ao elemento
	body(), // adiciona fisica para o elemento
	area() // adiciona um corpo para colisao
])

const chao = add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    body({ isStatic: true }),
    color(127, 200, 255),
])

// EMISSAO DE EVENTOS
movimentacaoPlayer(player)