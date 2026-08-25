// MODEL DE GAMES
// Importando o mogoose
import mongoose from "mongoose";

//schema para documento aninhado

const descriptionSchema = new mongoose.Schema({
    genre: String,
    platform: String,
    rating: String
});

// Criando o schema de Games
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: descriptionSchema
});

const Game = mongoose.model('Game', gameSchema) // Cria a coleção

export default Game;