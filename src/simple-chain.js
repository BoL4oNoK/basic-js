const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.arrChain.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if ( typeof position === "number" && position > 0 && position <= this.arrChain.length ) {
      this.arrChain.splice(position - 1, 1);
    } else {
      this.arrChain = [];
      throw Error();   
    }
    return this;
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    var res = this.arrChain;
    this.arrChain = [];
    return res.join("~~");
  }
};

module.exports = chainMaker;
