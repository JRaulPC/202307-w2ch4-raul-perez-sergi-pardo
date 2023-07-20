import CodersArray from "./CodersArray.js";

describe("Given a CodersArray class", () => {
  describe("When it receives ''hola', 'mola''", () => {
    test("Then it should return true", () => {
      const names = ("hola", "mola");
      const valuesAreAnObject = new CodersArray(names);

      const expectedToBeAnObject = typeof valuesAreAnObject;

      expect(valuesAreAnObject).toMatchObject(expectedToBeAnObject);
    });
  });
});
