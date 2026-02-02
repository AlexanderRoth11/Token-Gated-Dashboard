async function main() {
  const SimpleContract = await ethers.getContractFactory("SimpleContract");
  const simple_contract = await SimpleContract.deploy();
  console.log("Contract Deployed to Address:", simple_contract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
