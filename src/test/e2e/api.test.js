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
    
    test.todo('GET /pessoa - should return an array with a person id, name, salary and situation', async () => {
        const response = await superTest(Server)
        .get('/pessoa')
        const data = JSON.parse(response.text)

        expect(data).toBeInstanceOf(Object)

        expect(data[0]._id).toBeInstanceOf(String)
        expect(data[0].nome).toBeInstanceOf(String)
        expect(data[0].salario).toBeInstanceOf(Number)
        expect(data[0].aprovado).toBeInstanceOf(Boolean)
    })
})