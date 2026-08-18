//importando o Express
import express, { urlencoded } from "express";
//importando o mongoose
import mongoose from "mongoose";
//importando o model
import Game from "./models/Games.js";
//importar as rotas
import gameRoutes from "./routes/gameRoutes.js";

//carregando o express
const app = express();

//configurações do express
app.use(express.json());
app.use(express.urlencoded({extend : false}));

app.use("/", gameRoutes);

//iniciando a conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apithegames");

//iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciada com sucesso na porta " + port);
    }
});