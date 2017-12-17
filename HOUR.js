const BlockChain = require('./chain')

const HOUR = new BlockChain()

HOUR.add({
  title: 'I am your god', 
  description: 'You are mine to do as I wish'
})
console.log(HOUR)