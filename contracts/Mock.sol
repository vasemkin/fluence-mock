//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Mock {
    mapping (string => bool) public githubKeys;
    mapping (address => bool) public interactions;
    string public proof;
    string public key;
    address public delegatee;

    constructor() {
        console.log("Deploying Mock");
        githubKeys["test"]=true;
    }

    function setKey(string memory _key) public {
        githubKeys[_key]=true;
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function checkProof(string memory _proof) public pure returns (bool) {
        bool isEqual = compareStrings(_proof, 'proof');
        return isEqual;
    }

    function setInteraction() public {
        interactions[msg.sender]=true;
    }

    function checkInteraction() public view returns (bool) {
        return interactions[msg.sender];
    }

    function claimV2(string memory _proof, string memory _key, address _delegatee) public {
        proof=_proof;
        key=_key;
        delegatee=_delegatee;
        interactions[msg.sender]=true;
    }

    function claim(string memory _proof) public {
        proof=_proof;
        interactions[msg.sender]=true;
    }

    function checkKey(string memory _key) public view returns (bool){
        return githubKeys[_key];
    }
}
