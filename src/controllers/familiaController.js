// Vamos importar a camada de serviço e enviar as requisicoes para ela buscar no banco.
const FamiliaService = require('../services/familiaService');
const familiaService = new FamiliaService()

// Criando os controller para lidar com as requisicoes que chega aqui e enviar para o service.
class FamiliaController {

    static async cadastrarFamilia(req, res) {
        const { nomeFamilia, endereco, telefone } = req.body;

        console.log(nomeFamilia, endereco, telefone)

        // Em caso de sucesso vamos retornar um status 201, e um objeto da Familia Cadastrada
        try {

            // Vamos enviar para o metodo dentro do Service os paramentro para cadastrar uma familia.
            const familiaCadastrada = await familiaService.cadastrarFamilia({ nomeFamilia, endereco, telefone })

            // aqui Vamos ter o sucesso da familia cadastrada em JSON
            res.status(201).send(familiaCadastrada);

        } catch (error) {
            // Vamos enviar uma menssagem de erro se não dê certo.
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = FamiliaController;