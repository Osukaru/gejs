function FiguraGeometrica(posicion, dimensiones) {
	this.posicion = posicion; //la posición son las coordenadas de la esquina inferior izquierda del rectangulo en el que se inscribe la figura
	this.dimensiones = dimensiones; //las dimensiones son el ancho y el alto del rectángulo en el que se inscribe la figura
}

FiguraGeometrica.prototype.calculaArea = function() {
	return undefined;
};

FiguraGeometrica.prototype.calculaPerimetro = function() {
	return undefined;
};

FiguraGeometrica.prototype.getPosicion = function() {
	return this.posicion;
};

FiguraGeometrica.prototype.getDimensiones = function() {
	return this.dimensiones;
};

FiguraGeometrica.prototype.describe = function() {
	console.log(undefined);
};
