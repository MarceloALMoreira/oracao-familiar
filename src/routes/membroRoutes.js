

const { Router } = require('express');
const FamiliaController = require('../controllers/familiaController');

const Membro = [
    {
        id: 1,
        Nome: "Marcelo Almeida",
        Cargo: "Evangelista",
        Telefone: "73 98122-1850",
        FamiliaID: 3
    },
    {
        id: 2,
        Nome: "Marcos Ribeiro",
        Cargo: "Pastor",
        Telefone: "73 9999-9999",
        FamiliaID: 2
    },
    {
        id: 3,
        Nome: "Neuma Santos de freitas",
        Cargo: "Evangelista",
        Telefone: "73 9999-9999",
        FamiliaID: 6
    },
    {
        id: 4,
        Nome: "Maria de Jesus",
        Cargo: "Recepcionista",
        Telefone: "73 9999-9999",
        FamiliaID: 4
    }
]

// Criando a Route de Membros:


const router = Router();

router
    .post('/registre/familia', FamiliaController.cadastrarFamilia)
    .get('/membro', (req, res) => {
        res.status(201).send(Membro)
    });
    



module.exports = router;


