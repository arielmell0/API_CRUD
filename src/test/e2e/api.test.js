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

    test('GET /pessoa/id - should return a object with a unique person and status 200', async () => {
        const personId = '6345b24ed4e74c38e2303edc'

        const response = await superTest(Server)
        .get(`/pessoa/${personId}`)

        const data = JSON.parse(response.text)

        expect(data).toBeInstanceOf(Object)
        expect(data._id).toBe('6345b24ed4e74c38e2303edc')
        expect(response.status).toBe(200)
    })

    test('POST /pessoa - should save an item and return status 200 with a message of sucess', async () => {
        const response = await superTest(Server)
        .post('/pessoa')
        .send({
            nome: 'João',
            salario: 1375,
            aprovado: false
        })

        const data = response.text.trim()

        expect(response.status).toBe(201)
        expect(data).toBe('{"message":"Pessoa inserida no sistema com sucesso!"}')
    })
})