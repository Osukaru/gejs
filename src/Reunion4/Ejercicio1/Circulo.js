function Circulo(centro, radio) {
	this.centro = centro;
	this.radio = radio;
}

Circulo.prototype = new FiguraGeometrica([0,0], [0,0]);

Circulo.prototype.calculaArea = function() {
	return Math.PI*Math.pow(this.radio, 2);
};

Circulo.prototype.calculaPerimetro = function() {
	return 2*Math.PI*this.radio;
};


Circulo.prototype.getPosicion = function() {
	return [this.centro[0]-this.radio,this.centro[1]-this.radio];
};

Circulo.prototype.getDimensiones = function() {
	return [2*this.radio,2*this.radio];
};
