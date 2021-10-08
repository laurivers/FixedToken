
var HDWalletProvider = require("truffle-hdwallet-provider");  // 导入模块
var mnemonic = "market cram speak focus cliff vague domain edge opinion thank sound copy";  //MetaMask的助记词。 
 
module.exports = {
  	networks: {
        test: {
          host: "localhost",
          port: 7545,
          network_id: "*",
          gas: 0,
          // gasPrice: 10000000000,
        },
        development: {
          host: "127.0.0.1",
          port: 7545,
          network_id: "*" // Match any network id
        },
        rinkeby: {
            provider: function() {
                // mnemonic表示MetaMask的助记词。 "ropsten.infura.io/v3/33..."表示Infura上的项目id
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/f133d97d2f6144c78e7aba3edd3e4a9b");   // 1表示第二个账户(从0开始)
            },
            network_id: "4",  // match any network
            gas: 4500000,
            gasPrice: 10000000000,
        },
  	},
    compilers: {
      solc: {
        version: "^0.8.0"
      }
    }
  }