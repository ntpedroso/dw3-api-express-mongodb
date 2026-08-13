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

//exportando as funções
export default { getAllGames };