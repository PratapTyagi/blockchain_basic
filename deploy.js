const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

let provider = new HDWalletProvider(
  "acoustic armor gain urge gesture wild furnace save nation range page excite",
  "https://rinkeby.infura.io/v3/18da8c6c0290455f8ad62a79264b6569"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hello World"] })
    .send({ gas: "1000000", from: accounts[0] });
};

deploy();
