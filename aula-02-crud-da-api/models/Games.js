// MODEL DE GAMES
// Importando o mogoose
import mongoose from "mongoose";

// Criando o schema de Games
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    platform: String,
    price: Number
});

const Game = mongoose.model('Game', gameSchema) // Cria a coleção

export default Game;