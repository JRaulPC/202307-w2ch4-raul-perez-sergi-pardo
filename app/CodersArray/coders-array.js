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
}

export default CodersArray;
