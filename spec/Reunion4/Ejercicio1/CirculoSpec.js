describe("Circulo", function() {
  	var circulo;

  	beforeEach(function() {
    	circulo = new Circulo();
  	});

  	describe("Un Circulo es una FiguraGeometrica", function() {
  		it("tiene definido un metodo para calcular el area", function() {
    		expect("calculaArea" in circulo).toBeTruthy()
		});

  		it("tiene definido un metodo para calcular el perimetro", function() {
    		expect("calculaPerimetro" in circulo).toBeTruthy()
  		});

  		it("tiene definido un metodo para obtener la posicion", function() {
			expect("getPosicion" in circulo).toBeTruthy()
  		}); 	

  		it("tiene definido un metodo para obtener las dimensiones", function() {
  			expect("getDimensiones" in circulo).toBeTruthy()
  		}); 	

  		it("tiene definido un metodo para describir el objeto por consola", function() {
  			expect("describe" in circulo).toBeTruthy()
  		}); 	
  	});
});
