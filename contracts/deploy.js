const { ethers } = require("hardhat");

async function main() {
  const StudyBadge = await ethers.getContractFactory("StudyBadge");
  const studyBadge = await StudyBadge.deploy();
  await studyBadge.deployed();

  console.log("StudyBadge contract deployed to:", studyBadge.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
