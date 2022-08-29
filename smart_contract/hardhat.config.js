
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/vhGj14VRLlZ-Eq6_fFM5aukBfYS2zGKS',
      accounts:['512125083e251faad79961022b0b5533ba0c122b4c7c362dc2afd3e5b1ed0163']
    }
  }
} 