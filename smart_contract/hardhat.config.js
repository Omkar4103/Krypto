require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/R8BN8OPE8f63MJZUcKYM56ieJSwOHBS4',
      accounts: ['0f9fb7e4eab4e5d8d7f3c18939ee95b8d023aaac122a3db4dafff54e5c4202c5'],
    },
  },
};
