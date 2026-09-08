// controller de games - tratará as requisições do cliente
// importando o service
import gameService from "../services/gameService.js";

//importando o ObjectId do mongodb
import { ObjectId } from 'mongodb';

// função que irá tratar a requisição para listar os jogos
const getAllGames = async (req,res) => {
    try {
        const games = await gameService.getAll();
        //código 200 = ok - requisição feita com sucesso
        res.status(200).json({games : games});
    } catch (error) {
        console.log(error);
        // tratando a resposta que a api irá enviar em caso de erro
        res.status(500).json({error: 'Ocorreu um erro ao listar os jogos. Erro interno no servidor.'});
    }
}

//função que tratará a requisição para cadastrar os jogos
const createGame = async (req,res) => {
    try{
        //const title = req.body.title;
        //coletando dados enviados (formulário, da requisição, etc) e gravando nas variáveis
        const {title,year,platform,price} = req.body;
        //enviando dados para o Service cadastrar
        await gameService.Create(title,year,platform,price);
        res.status(201).json({message: 'Jogo cadastrado com sucesso!'});
        //cod. 201 (created) - recurso criado com sucesso no servidor
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Ocorreu um erro ao cadastrar os jogos. Erro interno no servidor.'});
    }
}

//função que trata a requisição para excluir um jogo
const deleteGame = async (req,res) => {
    try {
        //coletando a id da rota
        const id = req.params.id;
        //fazendo a validação do ObjectId
        if (ObjectId.isValid(id)) {
            await gameService.Delete(id);
            //204: código no content - requisição bem sucedida, mas não há conteúdo para enviar
            //sendStatus apenas para o código de status - não permite enviar conteúdo json junto com ele
            res.sendStatus(204);
        } else {
            //código 400 - bad request
            res.status(400).json({error: 'Requisição mal formada, ID inválido.'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Ocorreu um erro ao deletar o jogo. Erro interno no servidor.'});
    }
}

//função que trata a requisição para alterar um jogo
const updateGame = async (req, res) => {
    try {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            //coletando os dados que serão alterados
            const {title, year, platform, price} = req.body;
            await gameService.Update(id, title, year, platform, price);
            res.status(200).json({message: 'Jogo atualizado com sucesso!'});
        } else {
            res.status(400).json({error: 'Requisição mal formada, ID inválido.'})
        }
    } catch (error) {
        console.log(error);
        res.Status(500).json({error: 'Ocorreu um erro ao alterar o jogo. Erro interno no servidor.'});
    }
}

//função que trata a requisição para listar um jogo único
const getOneGame = async (req, res) => {
    try {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            const game = await gameService.getOne(id);
            //verificando se houve retorno na busca
            if (!game) {
                res.status(404).json({error:'Jogo não encontrado!'});
                //código 404 - not found
            } else {
                res.status(200).json({game});
            }
        //se o id não for válido
        } else {
            res.status(400).json({error: 'O ID informado é inválido.'});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({error:'Erro interno do servidor.'});
    }
}
//exportando as funções
export default { getAllGames, createGame, deleteGame, updateGame, getOneGame};