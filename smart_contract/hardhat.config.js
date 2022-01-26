//https://eth-ropsten.alchemyapi.io/v2/vn615m-hSLLtV7uGdwrOWGdZC1nr8UtO

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
    url: 'https://eth-ropsten.alchemyapi.io/v2/vn615m-hSLLtV7uGdwrOWGdZC1nr8UtO',
    accounts: ['1c5443533a2c560244c0ba7deb9d66ac7eac009b45cc4781edc2210e12bf239b']
    }
  }
}

//0xc53c12C9943Cc9cd4AD31f73Fa86FFbcD89ba2D9