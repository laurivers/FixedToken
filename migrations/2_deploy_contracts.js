var ERC20FixedSupply = artifacts.require("ERC20FixedSupply");

module.exports = function(deployer) {
  deployer.deploy(ERC20FixedSupply);
};