//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Mock {
    constructor() {
        console.log("Deploying Mock");
    }

    mapping (string => bool) public githubKeys;

    function setKey(string memory _key) public {
        githubKeys[_key]=true;
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function claim(string memory _proof) public pure returns (bool) {
        bool isEqual = compareStrings(_proof, 'proof');
        return(isEqual);
    }

    function checkKey(string memory _key) public view returns (bool){
        return githubKeys[_key];
    }
}
