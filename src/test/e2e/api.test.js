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
        // get the first person id in the db
        const responseGet = await superTest(Server)
        .get('/pessoa')
        const dataGet = JSON.parse(responseGet.text)
        const personId = dataGet[0]._id

        // return the first person id
        const response = await superTest(Server)
        .get(`/pessoa/${personId}`)

        const data = JSON.parse(response.text)

        expect(data).toBeInstanceOf(Object)
        expect(data._id).toBe(personId)
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

    test('PATCH /pessoa/:id - should acess a pessoa id, edit the data and return status 200', async () => {
        // get the first person id in the db
        const responseGet = await superTest(Server)
        .get('/pessoa')
        const dataGet = JSON.parse(responseGet.text)
        const personId = dataGet[0]._id

        // edit the data in the determined id
        const response = await superTest(Server) 
        .patch(`/pessoa/${personId}`)
        .send({
            nome: 'Bora bill',
            salario: 50000,
            aprovado: true
        })

        const data = response.text

        expect(response.status).toBe(200)
        expect(data).toBe('{"message":"Usuário alterado com sucesso."}')
    })

    test('DELETE /pessoa/:id - should acesss the route with the id and return 200', async() => {
        // get the first person id in the db
        const responseGet = await superTest(Server)
        .get('/pessoa')
        const dataGet = JSON.parse(responseGet.text)
        const personId = dataGet[0]._id

        // delete the first id in the db
        const responseDelete = await superTest(Server)
        .delete(`/pessoa/${personId}`)

        const dataDelete = responseDelete.text

        expect(responseDelete.status).toBe(200)
        expect(dataDelete).toBe('{"message":"Usuário removido com sucesso!"}')
    })
})