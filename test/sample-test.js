const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mock", function () {
  it("Should return true if checked for key that exists in the mapping", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();

    const mockKey = 'test1';
    const setKeyTx = await mock.setKey(mockKey);

    // wait until the transaction is mined
    await setKeyTx.wait();

    expect(await mock.checkKey(mockKey)).to.equal(true);
  });

  it("Should return false if checked for key that does not exist in the mapping", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();
    const mockKey = 'test2';
    expect(await mock.checkKey(mockKey)).to.equal(false);
  });

  it("The claim transaction should be a contract interaction", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();

    const mockProof = 'test';
    const setKeyTx = await mock.claim(mockProof);

    // wait until the transaction is mined
    await setKeyTx.wait();

    expect(await mock.proof()).to.equal(mockProof);
  });

  it("Should return true if checkProof method is called with solid proof", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();
    const mockProof = 'proof';
    expect(await mock.checkProof(mockProof)).to.equal(true);
  });

  it("Should return false if checkProof method is called with not fitting proof", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();
    const mockProof = 'badProof';
    expect(await mock.checkProof(mockProof)).to.equal(false);
  });

  it("Should return true if checkInteraction is called after setInteraction", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();
    
    const iterTx = await mock.setInteraction();
    await iterTx.wait()

    expect(await mock.checkInteraction()).to.equal(true);
  });

  it("Should return false if checkInteraction is called before setInteraction", async function () {
    const Mock = await ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();
    expect(await mock.checkInteraction()).to.equal(false);
  });
});
