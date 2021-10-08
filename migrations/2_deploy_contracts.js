const ERC20FixedSupply = artifacts.require("ERC20FixedSupply");

module.exports = function(deployer) {
  return deployer.then(()=>{
      const decimals = web3.utils.toBN(18);
      const base = web3.utils.toBN(10);
      const initialSupply = web3.utils.toBN(100).mul(web3.utils.toBN(base).pow(decimals));
      return deployer.deploy(
        ERC20FixedSupply,initialSupply
      );
  });
};
