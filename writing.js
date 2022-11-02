// send transaction
// comes in writing in blockchain
// for transaction we need a private key as a signer
// wallet for doing transaction
// rpc provider for talking with etheriumn mainnet
const ethers = require("ethers");
const rpc = "https://goerli.infura.io/v3/b469992c7e634517a07163d33ade9467";
const private_key = "54d76f43daeff37e0d9599d429e25fb0d799760ce69d97d6a9b36418f9f150bc";
const provider = new ethers.providers.JsonRpcProvider(rpc);
const wallet = new ethers.Wallet(private_key, provider);

const main = async () => {
  const balance = await wallet.getBalance();
  const ashu = await provider.getBalance(
    "0x5bf21Dc172A09D1E24AF50194FD079aEC032bBE4"
  );

  console.log("Wallet balance nitin:", ethers.utils.formatEther(balance));
  console.log("Wallet balance ashu:", ethers.utils.formatEther(ashu));

  const trans = await wallet.sendTransaction({
    to: "0x5bf21Dc172A09D1E24AF50194FD079aEC032bBE4",
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
