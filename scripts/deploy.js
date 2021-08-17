async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const TickerDao = await ethers.getContractFactory("TickerDao");
  const tickerDao = await TickerDao.deploy();

  console.log("TickerDao address", tickerDao.address);

  const Ticker = await ethers.getContractFactory("Ticker");
  const ticker = await Ticker.deploy("0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e");

  console.log("Ticker utility contract address:", ticker.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });