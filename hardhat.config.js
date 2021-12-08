require("@nomiclabs/hardhat-waffle");
const { ALCHEMY_KEY, METAMASK_KEY } = require('./keys');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_KEY}`,
        blockNumber: 26142393
      },
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,      
      allowUnlimitedContractSize: true,
      blockGasLimit: 0x1fffffffffff,
      accounts: [
        {
          privateKey: METAMASK_KEY,
          balance: '1000000000000000000000000'
        }
      ],
      mining: {
        auto: false,
        interval: 100
      }
    }
  }
};
