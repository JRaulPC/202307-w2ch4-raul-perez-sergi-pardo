import CodersArray from "./coders-array.js";

describe("Given a CodersArray class", () => {
  describe("When it receives ''hola', 'mola''", () => {
    test("Then it should return true", () => {
      const names = ("hola", "mola");
      const valuesAreAnObject = new CodersArray(names);

      expect(valuesAreAnObject).toBeInstanceOf(CodersArray);
    });
  });
});
