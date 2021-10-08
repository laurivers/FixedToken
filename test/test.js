const Web3 = require("web3")
const web3 = new Web3("http://localhost:7545")
require('dotenv').config();


module.exports = async function () {
    console.log('Accounts', web3.eth.personal.getAccounts());
    // console.log('Accounts', accounts);
    await web3.eth.personal.unlockAccount(accounts[0], process.env.ETH_HOLDER_WALLET_PWD);
    console.log('Account to load with ETH: ', accounts[0]);
};
