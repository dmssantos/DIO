
import express from 'express';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// Configuração da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuração de rotas
app.use(jwtAuthenticationMiddleware, usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);

// Configuração dos Handles de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000');
})
