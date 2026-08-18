// controller de games - tratará as requisições do cliente
// importando o service
import gameService from "../services/gameService.js";

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

//exportando as funções
export default { getAllGames, createGame };