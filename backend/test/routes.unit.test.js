const request = require('supertest');
const app = require('../app')


// eslint-disable-next-line no-undef
describe('USERS ROUTERS', function () {
    // eslint-disable-next-line no-undef
    it(' /login should return status code 200', async function () {
        const response = await request(app)
            .post('/api/login')
            .send({username: "tester", password: "password"})
            expect(response.statusCode).toEqual(200)
    })

    it(' /register should return status code 200', async function () {
        const response = await request(app)
            .post('/api/register')
            .send({username: "tester", password: "password"})
            expect(response.statusCode).toEqual(200)
    })
})
