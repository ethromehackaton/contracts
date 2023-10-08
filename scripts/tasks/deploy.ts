import { setDeploymentAddress } from "../../.deployment/deploymentManager";
import { task } from "hardhat/config";
import { verifyAddress } from "../../utils/verifyAddress";

task("deploy", "Deploy all contracts")
  .addFlag("verify", "verify contracts on etherscan")
  .setAction(async (args, { ethers, network }) => {
    const { verify } = args;
    console.log("Network:", network.name);

    const [deployer] = await ethers.getSigners();
    console.log("Using address: ", deployer.address);

    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Balance: ", ethers.utils.formatEther(balance));

    const GreatGrants = await ethers.getContractFactory("GreatGrants");
    const greatGrants = await GreatGrants.deploy();

    await greatGrants.deployed();

    console.log(greatGrants)

    console.log("Deployed  GreatGrants at", greatGrants.address);
    
    // const balance = await ethers.provider.getBalance(deployer.address);
    // console.log("Balance: ", ethers.utils.formatEther(balance));

    // const GreatGrants = await ethers.getContractFactory("GreatGrants");
    // const greatGrants = await GreatGrants.deploy();

    // await greatGrants.deployed();

    // if (verify) {
    //   await verifyAddress(greatGrants.address);
    // }

    // console.log("Deployed greatGrants at", greatGrants.address);
    // setDeploymentAddress(network.name, "greatGrants", greatGrants.address);
  });
