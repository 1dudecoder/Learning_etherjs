//contract reading 
// private key here
// need of contract abi code for talking to contract 
const ethers = require("ethers");
const token = require("./token.json");

const rpc = "https://goerli.infura.io/v3/b469992c7e634517a07163d33ade9467";
const contract_address = "0xD7753F3F5E2AE31b0fE5B3bb65E8b6683B5D7178";
const provider = new ethers.providers.JsonRpcProvider(rpc);
const ABI = token.abi;

const main = async () => {
  let contract = new ethers.Contract(contract_address, ABI, provider);
  console.log("owner", await contract.tellowner());
  console.log("symbol", await contract.tellsymbol());
  console.log("totalbalance", ethers.utils.formatEther(await contract.tellbalance()));
  console.log("name", await contract.name());
};

main();
