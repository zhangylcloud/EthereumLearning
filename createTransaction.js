let Web3 = require("web3");
let EthereumTransaction = require("ethereumjs-tx").Transaction;
let web3 = new Web3("http://127.0.0.1:8545");

let sendingAddress = "0x874F1f9435e101bDbF63A337C71C7b6acbcA60C1";
let receivingAddress = "0x330E018ee12dAc40D66c9f58F2aB42e3512fC627";

web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);


var rawTransaction = {
    nonce: 0,
    to: receivingAddress,
    gasPrice: 2000000,
    gasLimit: 30000,
    value: 100,
    data: ""
};

let privateKeySender = "fda3bbe6190c5e5ad2f74ccc1bfbac6804beb5209ee37fa2ec59b14913884c0f";
let privateKeySenderHex = Buffer.from(privateKeySender, 'hex');
let transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

let serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);