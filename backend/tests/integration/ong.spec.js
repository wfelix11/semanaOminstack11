const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe ('ONG', ()=>{

    beforeEach( async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    if('Testar se é possivel a criação de nova ONG', async () =>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD3",
            email: "teste@teste.com",
            whatsapp: "11000000000",
            city: "São Paulo",
            uf: "SP"
        });
    });
});