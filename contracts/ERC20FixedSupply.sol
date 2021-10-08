// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20FixedSupply is ERC20 {
  string public name = "FixedToken";
  string public symbol = "FIX";
  uint public decimals = 18;

  constructor(uint256 initialSupply) public {
    _mint(msg.sender, initialSupply);
  }
}
