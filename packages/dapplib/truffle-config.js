require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remind equip guess private bottom gaze'; 
let testAccounts = [
"0x1da56ee01ef90767e4c91df4aa6c48d431b9bbbcaa9461357c99803a6da5cbe2",
"0x2cc549af89b59e64edcb8299ddf15f5e63fd3fac567f29408bf988177805ebeb",
"0xe6200fbf9a7345cee9156cc2bf308efdc4a5f971d961c3590806b72f462e298f",
"0x70764e00a85799c3cd5843094cfe60105a97af95f385d3923275002b7a66353f",
"0x3e06e6f8798759a421f6dc281c92b7febf5d7aef84097d010339b7a1e469f40b",
"0x09dd93ed717839f664114c3af5d44a3a1b51f22fdd1b91bbffb33a0be7ab42f1",
"0x00233daf8c4543601aad2644b9df3369e001e5c7cff449d56c7d55ca92c7cc7b",
"0x5a025216f474c8aca48459f79d502de8c1a15eeb05523909efaeb524f6fa7f5c",
"0xd5b5a39d20fa5386ae3c83e531342c1c91c81fba828c08d2396267f5e26424ad",
"0x5ef36b22c529b9f7d5f683f651bc52b23ea601f198d13e5da1ba935d54061b36"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


