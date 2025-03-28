// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StudyBadge is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;

    mapping(address => bool) public hasMinted;

    constructor() ERC721("StudyBadge", "STB") {}

    function mintBadge(string memory tokenURI) public returns (uint256) {
        require(!hasMinted[msg.sender], "You already received a study badge!");

        _tokenIds++;
        uint256 newItemId = _tokenIds;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        hasMinted[msg.sender] = true;

        return newItemId;
    }
}
