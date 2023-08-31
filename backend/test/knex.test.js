const request = require("supertest")
const db = require("../knex/knex")

const mockRequest = () => {
    return {}
};


const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    res.req = jest.fn().mockReturnValue(res)
    return res;
};

describe("should implement a knex select operation", function () {
    beforeAll(async () => {
        await db.migrate.latest();
    })
    // eslint-disable-next-line no-undef
    test("select users", async () => {
        let users = await db.from("players").select("name")
        expect(users.length).toEqual(0)
    })
});
