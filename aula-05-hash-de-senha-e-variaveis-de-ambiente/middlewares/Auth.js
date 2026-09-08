// Middlewares de autentificação
import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

// Função que irá verificar se o usuário possuo um token válido
const Authorization = (req, res, next) => {
    // Capturando o token do cabeçalho da requisição
    const authToken = req.headers["authorization"];
    // Se o token não for vázio
    if (authToken != undefined){
        const bearer = authToken.split(' ');
        // Capturando somente o token
        const token = bearer[1];
        // Validando o token o com o JWT
        jwt.verify(token, userController.JWTSecret, (error, data) => {
            // Se o token for inválido
            if (error) {
                res.status(401).json({error: "Token inválido"});
                // Cod. 401 (UNAUTHORIZED)
                // Se o token for válido
            } else {
                req.token = token;
                req.loggedUser = {
                    id: data.id,
                    email: data.email,
                };
                // Permite prosseguir com a requisição
                next();
            }
        });
    } else {
        res.status(401).json({error: "Token não informado."})
    }
};

export default {Authorization};