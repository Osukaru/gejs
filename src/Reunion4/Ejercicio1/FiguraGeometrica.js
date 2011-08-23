function FiguraGeometrica(posicion, dimensiones) {
	console.log("FiguraGeometrica");
	this.posicion = posicion;
	this.dimensiones = dimensiones;
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
