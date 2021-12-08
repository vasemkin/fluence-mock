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

    function checkKey(string memory _key) public view returns (bool){
        return githubKeys[_key];
    }
}
