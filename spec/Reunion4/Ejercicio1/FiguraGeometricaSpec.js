describe("FiguraGeometrica", function() {
  	var figuraGeometrica;

  	beforeEach(function() {
    	figuraGeometrica = new FiguraGeometrica([0,0], [0,0]);
  	});

  	it("tiene definido un metodo para calcular el area", function() {
    	expect("calculaArea" in figuraGeometrica).toBeTruthy()
  	});

  	it("tiene definido un metodo para calcular el perimetro", function() {
    	expect("calculaPerimetro" in figuraGeometrica).toBeTruthy()
  	});

  	it("tiene definido un metodo para obtener la posicion", function() {
  		expect("getPosicion" in figuraGeometrica).toBeTruthy()
  	}); 	

  	it("tiene definido un metodo para obtener las dimensiones", function() {
  		expect("getDimensiones" in figuraGeometrica).toBeTruthy()
  	}); 	

  	it("tiene definido un metodo para describir el objeto por consola", function() {
  		expect("describe" in figuraGeometrica).toBeTruthy()
  	}); 	
});
