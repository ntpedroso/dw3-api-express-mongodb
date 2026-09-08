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

    //método para excluir o jogo
    async Delete(id) {
        try {
            await Game.findByIdAndDelete(id);
            //esse método de cima busca um registro pela id e deleta
            console.log(`O jogo com a id ${id} foi deletado.`);
        } catch (error) {
            console.log(error);
        }
    }

    //método para alterar um jogo
    async Update(id, title, year, platform, price) {
        try {
            await Game.findByIdAndUpdate(id, {
                title, 
                year,
                platform,
                price
            });
            console.log(`O jogo com a id ${id} foi alterado.`);
        } catch (error) {
            console.log(error);
        }
    }

    //método para listar um registro único
    async getOne(id) {
        try {
            //findOne é um método do mongoose para selecionar um registro único
            //o _id é o campo que está no banco, comparando se bate com o id que está no parâmetro
            const game = await Game.findOne({_id : id})
            return game
        } catch (error) {
            console.log(error);
        }
    }
}

// usar new quando for classe
export default new gameService();