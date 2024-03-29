const sha256 = require('crypto-js/sha256');

class Block {

    constructor(timestamp, transactions) {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = '0';
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash);
    }

}

module.exports = Block;
