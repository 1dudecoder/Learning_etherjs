// for writing in contract we have to pass wallet
// for reading form contract we need provider
const ethers = require("ethers");
const ABI = require("./token.json");
const contract_add = "0x9BDc9027D9408f78DB2fC7A7Fd48A8d5BD8e2793";
const rpc = "https://goerli.infura.io/v3/b469992c7e634517a07163d33ade9467";
const provider = new ethers.providers.JsonRpcProvider(rpc);
const private_key =
  "54d76f43daeff37e0d9599d429e25fb0d799760ce69d97d6a9b36418f9f150bc";
const wallet = new ethers.Wallet(private_key, provider);
const Abi = ABI.abi;
const ikka = "0x5bf21Dc172A09D1E24AF50194FD079aEC032bBE4";

const main = async () => {
  const contract = new ethers.Contract(contract_add, Abi, wallet);
  console.log("owner of ther contract", await contract.tellowner());

  const balance = await wallet.getBalance();
  const ashu = await provider.getBalance(
    "0x5bf21Dc172A09D1E24AF50194FD079aEC032bBE4"
  );

  console.log("Wallet balance nitin:", ethers.utils.formatEther(balance));
  console.log("Wallet balance ashu:", ethers.utils.formatEther(ashu));

  const trans = await contract.sendtrans(ikka, {
    value: ethers.utils.parseEther("0.1"),
  });

  await trans.wait();

  const balance1 = await wallet.getBalance();
  const ashu1 = await provider.getBalance(
    "0x5bf21Dc172A09D1E24AF50194FD079aEC032bBE4"
  );
  console.log("Wallet balance nitin:", ethers.utils.formatEther(balance1));
  console.log("Wallet balance ashu:", ethers.utils.formatEther(ashu1));
};

main();
