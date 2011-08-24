describe("Circulo", function() {
  	var circulo;

  	beforeEach(function() {
    	circulo = new Circulo([0,0], 0);
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
  			beforeEach(function() {
    			circulo = new Circulo([1,1], 1);
  			});

			it("...la posicion es (0,0)", function() {	
				expect(circulo.getPosicion()).toEqual([0,0]);
			});

			it("...las dimensiones son (2, 2)", function() {
				expect(circulo.getDimensiones()).toEqual([2,2]);
			});
			
			it("...el area es Pi", function() {
				expect(circulo.calculaArea()).toEqual(Math.PI);
			});
			
			it("...el perimetro es 2Pi", function() {
				expect(circulo.calculaPerimetro()).toEqual(2*Math.PI);
			});
		});
		describe("Si el centro es (1,1) y el radio es 2...", function() {
  			beforeEach(function() {
    			circulo = new Circulo([1,1], 2);
  			});

			it("...la posicion es (-1,-1)", function() {	
				expect(circulo.getPosicion()).toEqual([-1,-1]);
			});

			it("...las dimensiones son (4, 4)", function() {
				expect(circulo.getDimensiones()).toEqual([4,4]);
			});
			
			it("...el area es 4Pi", function() {
				expect(circulo.calculaArea()).toEqual(4*Math.PI);
			});
			
			it("...el perimetro es 4Pi", function() {
				expect(circulo.calculaPerimetro()).toEqual(4*Math.PI);
			});
		});
	});
});
