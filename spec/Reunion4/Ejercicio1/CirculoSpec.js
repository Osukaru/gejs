describe("Circulo", function() {
  	var circulo;

  	beforeEach(function() {
    	circulo = new Circulo([1,1], 1);
  	});

  	describe("Un Circulo es una FiguraGeometrica puesto que...", function() {
  		it("...tiene definido un metodo para calcular el area", function() {
    		expect("calculaArea" in circulo).toBeTruthy()
		});

  		it("...tiene definido un metodo para calcular el perimetro", function() {
    		expect("calculaPerimetro" in circulo).toBeTruthy()
  		});

  		it("...tiene definido un metodo para obtener la posicion", function() {
			expect("getPosicion" in circulo).toBeTruthy()
  		}); 	

  		it("...tiene definido un metodo para obtener las dimensiones", function() {
  			expect("getDimensiones" in circulo).toBeTruthy()
  		}); 	

  		it("...tiene definido un metodo para describir el objeto por consola", function() {
  			expect("describe" in circulo).toBeTruthy()
  		}); 	
	});

	describe("Un circulo se define con un centro y un radio", function() {
		describe("Si el centro es (1,1) y el radio es 1...", function() {
			it("...la posicion es (0,0)", function() {	
				expect(circulo.getPosicion()).toEqual([0,0]);
			});
		});
	});
});
