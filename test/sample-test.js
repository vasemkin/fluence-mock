const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mock", function () {
  it("Should return true if checked for key that exists in the mapping", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();

    const mockKey = 'test';
    const setKeyTx = await mock.setKey(mockKey);

    // wait until the transaction is mined
    await setKeyTx.wait();

    expect(await mock.checkKey(mockKey)).to.equal(true);
  });

  it("Should return false if checked for key that does not exist in the mapping", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();
    const mockKey = 'test';
    expect(await mock.checkKey(mockKey)).to.equal(false);
  });

  it("Should return true if claim method is called with solid proof", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();
    const mockProof = 'proof';
    expect(await mock.claim(mockProof)).to.equal(true);
  });

  it("Should return false if claim method is called with not fitting proof", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();
    const mockProof = 'badProod';
    expect(await mock.claim(mockProof)).to.equal(false);
  });
});
