require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL ||
    "https://eth-sepolia.g.alchemy.com/v2/BkywNLkTDdrGM2fvoybJ5Hqz39E-BtAJ"

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"
const ETHERSCAN_API_KEY =
    process.env.ETHERSCAN_API_KEY || "P59I28Z4TCY9W368ZW2BKDP2C2HSJMPBSG"
const COINMARKETCAP_API_KEY =
    process.env.COINMARKETCAP_API_KEY || "43a412a7-45d2-4f73-b9d1-c59b46352ba2"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        sepolia: {
            chainId: 11155111,
            blockConfirmations: 6,
            url: SEPOLIA_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
        },
    },
    solidity: "0.8.18",
    etherscan: {
        apiKey: {
            sepolia: ETHERSCAN_API_KEY,
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },
}
