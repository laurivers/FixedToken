require('dotenv').config();

const Migrations = artifacts.require('./Migrations.sol');

module.exports = async function (deployer, network, accounts) {
  console.log('Accounts', accounts);
  console.log('Password', process.env.ETH_HOLDER_WALLET_PWD);
  await web3.eth.personal.unlockAccount(accounts[0], process.env.ETH_HOLDER_WALLET_PWD);
  console.log('Account to load with ETH: ', accounts[0]);
  await deployer.deploy(Migrations);
};