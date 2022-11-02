
const ethers = require("ethers");
const token = require("./token.json");

const rpc = "https://goerli.infura.io/v3/b469992c7e634517a07163d33ade9467";
const contract_address = "0xA6ec76B04B844551678C18c3848F8F852BaAACb6";
const provider = new ethers.providers.JsonRpcProvider(rpc);
const ABI = token.abi;

const main = async () => {
    const contract = new ethers.Contract(contract_address,ABI,provider);
    console.log('contract func',await contract.name());

    // const eve = await contract.queryFilter('myeve');
    // console.log(eve[0].args);


    const fil = await contract.filters.myeve('0x5bf21Dc172A09D1E24AF50194FD079aEC032bBE4',null);
    console.log('filter data ',fil)

    const trans = contract.filters.myeve(null, '1000000000000000000');
    const transactions = await contract.queryFilter(trans)
}

main();
