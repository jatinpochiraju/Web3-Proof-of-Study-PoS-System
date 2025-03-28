import { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const abi = [
  "function mintBadge(string memory tokenURI) public returns (uint256)"
];

export default function Home() {
  const [ipfsUrl, setIpfsUrl] = useState("");

  async function mintNFT() {
    if (!window.ethereum) return alert("Please install MetaMask!");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      const tx = await contract.mintBadge(ipfsUrl);
      await tx.wait();
      alert("NFT Minted Successfully!");
    } catch (error) {
      console.error(error);
      alert("Minting failed!");
    }
  }

  return (
    <div>
      <h1>Mint Your Study Badge</h1>
      <input
        type="text"
        placeholder="Enter IPFS URL"
        value={ipfsUrl}
        onChange={(e) => setIpfsUrl(e.target.value)}
      />
      <button onClick={mintNFT}>Mint Badge</button>
    </div>
  );
}
