import { ethers } from "hardhat";

async function main() {
  const Storage = await ethers.getContractFactory("Storage");
  const storage = await Storage.deploy("Initial message");

  await storage.deployed();

  console.log("Deployed Storage at:", storage.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
