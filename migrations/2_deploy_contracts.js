const ERC20FixedSupply = artifacts.require("ERC20FixedSupply");

module.exports = async function (deployer) {
  await deployer.deploy(ERC20FixedSupply, 'FixedToken', 'FIX', '10000000000000000000000');
};