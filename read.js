const ethers = require('ethers');

const rpc = "https://goerli.infura.io/v3/b469992c7e634517a07163d33ade9467";
const provider = new ethers.providers.JsonRpcProvider(rpc);
const account = "0x5bf21Dc172A09D1E24AF50194FD079aEC032bBE4";

const main = async () => {
    let balance = await provider.getBalance(account);
    console.log("nitin balance:", ethers.utils.formatEther(balance));

    let blockNumber = await provider.getBlockNumber();
    console.log("blockNumber:",blockNumber);
}

main();