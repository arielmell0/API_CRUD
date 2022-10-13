const Server = require('../../server.js')
const superTest = require('supertest')

describe('API E2E Test Suite', () => {
    test('GET / - should return a object with a welcome message', async () => {
        const response = await superTest(Server)
        .get('/')
        const data = JSON.parse(response.text)

        expect(data).toBeInstanceOf(Object)
        expect(data.message).toBe('Bem vindo a API de CRUD')
    })
})