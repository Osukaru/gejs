describe("FiguraGeometrica", function() {
  var figuraGeometrica;

  beforeEach(function() {
    figuraGeometrica = new FiguraGeometrica();
  });

  it("tiene un metodo para calcular el area", function() {
    expect("calculaArea" in figuraGeometrica).toBeTruthy()
  });

  it("tiene un metodo para calcular el perimetro", function() {
    expect("calculaPerimetro" in figuraGeometrica).toBeTruthy()
  });
});
