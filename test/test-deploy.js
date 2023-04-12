const { ethers } = require("hardhat")
const { assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })
    it("1- Contract should start with a favoriteNumber of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("2- Contract should update when calling store function", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("3- Contract add person and retrieve his favoriteNumber from mapping", async function () {
        const name = "ARK"
        const favoriteNumber = "4"
        const expectedFavoriteNumber = "4"
        const transactionResponse = await simpleStorage.addPerson(
            name,
            favoriteNumber
        )
        await transactionResponse.wait(1)
        const currentValue = await simpleStorage.nameToFavoriteNumber("ARK")
        assert.equal(currentValue.toString(), expectedFavoriteNumber)
    })
})
