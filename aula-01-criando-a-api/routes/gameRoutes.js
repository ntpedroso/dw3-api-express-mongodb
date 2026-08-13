// Endpoints (rotas) de games
import express from 'express';

const gameRoutes = express.Router();

// importando o controller
import gameController from '../controllers/gameController.js';

// endpoint para listar todos os jogos
gameRoutes.get("/games", gameController.getAllGames);

export default gameRoutes;