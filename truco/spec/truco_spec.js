require("../truco.js")


describe("Truco", function() {
  describe("hand", function() {

    it("retorna Player 1 quando ele ganha", function() {
      expect(truco.hand(["4s", "2c", "3d"])).toEqual("Player 1");
    });

    it("retorna Player 2 quando ele ganha", function() {
      expect(truco.hand(["4s", "3d", "2c"])).toEqual("Player 1");
    });


    it("retorna uma mensagem se um array estiver errado", function() {
      expect(truco.hand(["4s", "5c"])).toEqual("array errado");
    });
  });

  describe("Greater", function() {

    it("3d é maior que 4s", function() {
      expect(truco.greater(["4s", "3d"])).toEqual("3d");
    });

    it("6d é maior que 4s", function() {
      expect(truco.greater(["6d", "4s"])).toEqual("6d");
    });

    it("5s é maior que 4s", function() {
      expect(truco.greater(["4s", "5s"])).toEqual("5s");
    });

    it("3d é maior que 4s", function() {
      expect(truco.greater(["3d", "4s"])).toEqual("3d");
    });


    it("Qd é maior que 4s", function() {
      expect(truco.greater(["Qd", "4s"])).toEqual("Qd");
    });


    it("Jd é maior que Qs", function() {
      expect(truco.greater(["Jd", "Qs"])).toEqual("Jd");
    });

    it("Jd é menor que Jc", function() {
      expect(truco.greater(["Jd", "Jc"])).toEqual("Jc");
    });

  });


});


