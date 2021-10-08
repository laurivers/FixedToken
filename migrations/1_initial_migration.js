// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const Migrations = artifacts.require("Migrations");

module.exports = async function (deployer, network, accounts) {
  // console.log('Accounts', accounts);
  await web3.eth.personal.unlockAccount(accounts[0], 'JNUEbsq73nsMQfTB');
  // console.log('Account to load with ETH: ', accounts[0]);
  deployer.deploy(Migrations);
};