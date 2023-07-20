class CodersArray {
  Length = 0;
  static push;
  static values;

  constructor(...values) {
    for (const value of values) {
      this[this.Length] = value;
      this.Length++;
    }
  }

  length() {
    return this.Length;
  }

  pushMethod(element, ...values) {
    for (let i = 0; i < values.length; i++) {
      values[i] + element;
    }

    const pushedValue = values + element;

    pushedValue;
  }
}

export default CodersArray;
