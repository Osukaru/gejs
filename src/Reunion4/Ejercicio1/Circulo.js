function Circulo(centro, radio) {
	console.log("Circulo");
	this.centro = centro;
	this.radio = radio;
}

Circulo.prototype = new FiguraGeometrica([0,0], [0,0]);
