let Web3 = require('web3');
let url = 'http://127.0.0.1:8545';
let web3 = new Web3(new Web3.providers.HttpProvider(url));
//console.log(web3);
var address = '0x89dda4d193Bc5d4599698f70dE77ec91a8Cf5f9B';
web3.eth.getBalance(address, (err, bal) => {
    balance = bal 
    let balanceEther = web3.utils.fromWei(balance, 'ether')
    console.log(balanceEther);
});
web3.eth.getTransactionCount(address).then(console.log);
//web3.eth.getAccounts().then(accounts => console.log(accounts));