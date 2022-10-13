## cadastrar uma pessoa
curl -X POST http://localhost:3030/pessoa -H 'Content-Type: application/json' -d '{"nome": "Ariel", "salario": 8300, "aprovado": false}'