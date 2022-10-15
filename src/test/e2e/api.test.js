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
    
    test('GET /pessoa - should return an array with a person id, name, salary and situation', async () => {
        const response = await superTest(Server)
        .get('/pessoa')
        const data = JSON.parse(response.text)

        expect(data).toBeInstanceOf(Object)

        expect(typeof data[0]._id).toBe('string')
        expect(typeof data[0].nome).toBe('string')
        expect(typeof data[0].salario).toBe('number')
        expect(typeof data[0].aprovado).toBe('boolean')
    })
})