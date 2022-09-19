require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require('solidity-coverage');
require("./tasks/block-number");
require("dotenv").config();

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY ;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",//it is default if we not specify any then it is present
  networks: {//we can provide this 
    hardhat: {},//hardhat
    localhost: { //for ganache
      url: "http://localhost:7545",//8545(hardhat)
      chainId: 1337,//31337(hardhat)
    },
    /*goerli: { //goerli
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    */
  },
  solidity: "0.8.17",
  /*etherscan: {//it gives access to verify task
    apiKey: ETHERSCAN_API_KEY,
  },
  */
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
