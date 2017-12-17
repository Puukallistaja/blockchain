// npm install crypto-js
const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(data, previousHash = '0') {
    this.previousHash = previousHash
    this.time = new Date().getTime().toString()
    this.data = JSON.stringify(data)
    this.hash = this.calculateHash()
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
function runTests() {
  console.log(new Block())
}
