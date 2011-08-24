function Circulo(centro, radio) {
	this.centro = centro;
	this.radio = radio;
}

Circulo.prototype = new FiguraGeometrica([0,0], [1,1]);

Circulo.prototype.calculaArea = function() {
	return Math.PI;
};

Circulo.prototype.calculaPerimetro = function() {
	return 2*Math.PI;
};
