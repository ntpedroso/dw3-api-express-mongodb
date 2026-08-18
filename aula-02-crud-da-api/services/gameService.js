// serviços de Games
// aqui serão inseridos os métodos para ler, cadastrar, alterar e excluir os dados games

import Game from "../models/Games.js";

class gameService {

    //serviço/método para ler os jogos
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

    //método para cadastrar jogos
    //parâmetros: chaves que estão no banco
    async Create(title,year,platform,price) {
        try {
            //enviando os dados a serem cadastrados para o model
            //Game() é o model
            const newGame = new Game({
                //title : title
                title,
                year,
                platform,
                price 
            });
            //aguardar a operação de cadastro
            await newGame.save(); //.save() é o método do mongoose para cadastrar as coisas
        } catch (error) {
            console.log(error);
        }
    }
}

// usar new quando for classe
export default new gameService();