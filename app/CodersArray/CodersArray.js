class CodersArray {
  length = 0;

  constructor(...values) {
    for (const value of values) {
      this[this.length] = value;
      this.length++;
    }
  }
}

export default CodersArray;
