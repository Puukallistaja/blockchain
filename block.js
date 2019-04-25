// npm install crypto-js
const SHA256 = require('crypto-js/sha256')

class Block {
  constructor({ data }) {
    this.data = data
  }

  calculateHash() {
    return SHA256 (
      this.time +
      this.data + 
      this.previousHash
    )
    .toString()
  }
}

module.exports = Block

//=============================== tests ========================================
if (process.env.DEBUG) {
  runTests();
}

function runTests() {
  let block = new Block({ data: 'Some string' })
  console.log(block)
  console.log(`========== Block =============
    Expected block data to be 'Some string' - Received: ${
      block.data === 'Some string' ? true : block.data
    }
  `);
}
