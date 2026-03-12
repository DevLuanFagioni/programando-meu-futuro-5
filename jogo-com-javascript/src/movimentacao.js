function movimentacaoPlayer(parametro) {
	onKeyPress("w", () => {
		if (parametro.isGrounded()) {
			parametro.jump();
		}
	});

	onKeyDown("d", () => {
		parametro.move(400, 0);
	});

	onKeyDown("a", () => {
		parametro.move(-400, 0);
	});
}

export default movimentacaoPlayer