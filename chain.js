
const Block = require('./block.js')

class Blockchain {
  constructor() {
    this.chain = [new Block({title: 'Let there be Chain', description: 'I am the first of my kind'})]
  }

  getLatestBlock() {
    return this.chain.slice().pop()
  }

  add(data) {
    const newBlock = new Block(data)

    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
  }
}

module.exports = Blockchain


//=============================== tests ========================================
function runTests() {
  const batCoin = new Blockchain()

  console.log(`${batCoin} named batCoin is ${typeof batCoin}`)

  batCoin.add(new Block({title: 'Abrakadabra', info: 'Magic'}))
  batCoin.add(new Block({
    title: 'Transaction',
    amount: '1',
    sender: 'Arto',
    receiver: 'Arto',
    description: 'Arto built a blockchain'
  }))

  console.log(batCoin.add(new Block('Testing')))
}
// runTests()