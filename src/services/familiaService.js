const { cadastrarFamilia } = require('../controllers/familiaController');
const database = require('../models');
const uuid = require('uuid');

// Criando a camada de serviço responsavel de ir no banco fazer as requisições e devolver para o controller.

class FamiliaService {

    // metodo que cadastra no banco um familia.
    async cadastrarFamilia(dto) {
        const verifyFamilia = await database.familia.findOne({
            where: {
                nomeFamilia: dto.nomeFamilia
            }
        })
        if (verifyFamilia) {
            throw new Error('Essa família já está cadastrada no Sistema.')
        }
        try {
            const familia = await database.familia.create({
                id: uuid.v4(),
                nomeFamilia: dto.nomeFamilia,
                endereco: dto.endereco,
                telefone: dto.telefone
            })
            return familia;

        } catch (error) {
            throw new Error('Erro ao cadastrar a Família.')
        }
    }


}

module.exports = FamiliaService;