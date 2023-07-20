import CodersArray from "./coders-array.js";

describe("Given a CodersArray class", () => {
  describe("When it receives ''hola', 'mola''", () => {
    test("Then it should create an object of the instanced class", () => {
      const names = ("hola", "mola");
      const valuesAreAnObject = new CodersArray(names);

      expect(valuesAreAnObject).toBeInstanceOf(CodersArray);
    });
  });
});

describe("Given a CodersArray class", () => {
  describe("When it receives ''1', 1'", () => {
    test("Then it should create an object of the instanced class", () => {
      const numbers = (1, 1);
      const valuesAreAnObject = new CodersArray(numbers);

      expect(valuesAreAnObject).toBeInstanceOf(CodersArray);
    });
  });
});
