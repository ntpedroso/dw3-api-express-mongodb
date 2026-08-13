// serviços de Games
// aqui serão inseridos os métodos para ler, cadastrar, alterar e excluir os dados games

import Game from "../models/Games.js";

class gameService {
    //serviço para ler os jogos
    async getAll() {
        //tentantiva da promessa (sucesso)
        try {
            // o método find do mongoose busca registros
            const games = await Game.find();
            return games;
        //caso ocorra um erro, será executado o catch
        } catch (error) {
            console.log(error);
        }
    }
}

// usar new quando for classe
export default new gameService();