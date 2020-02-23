const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined) {
      this.chain.push('( )');
    }
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
   if(!position || typeof position !== 'number' || position <= 0 || position > this.chain.length) {
    this.chain.length = 0;
    throw Error;
  } 
    this.chain.splice(position-1, 1);
   return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain=[];
    return result;
  }
};

module.exports = chainMaker;
