function adicionaLevel() {
    addLevel([
    "            ",
    "            ",
    "            ",
    "         $$$",
    "         ===",
    "     ^^     ",
    "============",
    ], {
        
        tileWidth: 128,
        tileHeight: 128,
        tiles: {
            "=": () => [
                sprite("floor"),
                area(),
                body({ isStatic: true })
            ],
            "$": () => [
                sprite("coin"),
                area(),
                scale(0.35)
            ],
            "^": () => [
                sprite("spike"),
                area(),
                body({ isStatic: true })
            ],
        }
    })
}

export default adicionaLevel