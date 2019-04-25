const Block = require("./block.js");

class Blockchain {
  constructor() {
    this.chain = [new Block({ data: "I am the first of my kind" })];
  }

  getLatestBlock() {
    return this.chain.slice(-1)[0];
  }

  add(data) {
    const newBlock = new Block(data);

    newBlock.previousHash = this.getLatestBlock().hash || '0';
    newBlock.hash = newBlock.calculateHash();

    this.chain.push(newBlock);
  }
}

module.exports = Blockchain;

//=============================== tests ========================================
if (process.env.DEBUG) {
  runTests();
}

function runTests() {
  const batCoin = new Blockchain();

  batCoin.add(new Block({ data: "Abrakadabra" }));
  batCoin.add(new Block({ data: "To the Catmobile!" }));

  console.log(batCoin.chain);
  console.log(`========== Chain =============
    Expected batCoin height 3 - Received: ${
      batCoin.chain.length === 3 ? true : batCoin.chain.length
    }
  `);
}
