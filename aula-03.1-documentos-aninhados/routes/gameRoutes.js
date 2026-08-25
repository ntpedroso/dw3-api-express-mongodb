// Endpoints (rotas) de games
import express from 'express';

const gameRoutes = express.Router();

// importando o controller
import gameController from '../controllers/gameController.js';

// endpoint para listar todos os jogos
gameRoutes.get("/games", gameController.getAllGames);

//endpoint para cadastrar os jogos
gameRoutes.post("/games", gameController.createGame);

//endpoint para excluir os jogos
gameRoutes.delete("/games/:id", gameController.deleteGame);

//endpoint para alterar o jogo
gameRoutes.put("/games/:id", gameController.updateGame);

//endpoint para listar um jogo único
gameRoutes.get("/games/:id", gameController.getOneGame);

export default gameRoutes;