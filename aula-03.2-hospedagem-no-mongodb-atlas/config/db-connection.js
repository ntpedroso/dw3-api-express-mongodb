import mongoose from "mongoose";
import dns from "dns";
// Força o Node a usar o DNS do Google em vez do DNS do roteador
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const dbUser = "natashapedroso18_db_user";
const dbPassword = "7LcoiobdlQ56OON7";

const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.oygkfnt.mongodb.net/apithegames?retryWrites=true&w=majority&appName=Cluster0`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });
    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!");
    });
};
connect();
export default mongoose;
