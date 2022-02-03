import { Request, Response, NextFunction, Router } from "express";
import ForbbidenError from "../models/errors/forbbiden.error.model";
import userRepository from "../repositories/user.repository";
import jwt from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";

const authorizationRoute = Router();

authorizationRoute.post('/token', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
      throw new ForbbidenError('Credenciais não informadas');
    }

    const [authenticationType, token] = authorizationHeader.split(' ');

    if (authenticationType !== 'Basic' || !token) {
      throw new ForbbidenError('Tipo de Autenticação inválida');
    }

    const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

    const [username, password] = tokenContent.split(":");

    if (!username || !password) {
      throw new ForbbidenError('Credenciais não preenchidas');
    };

    const user = await userRepository.findByUsernameAndPassword(username, password);

    if (!user) {
      throw new ForbbidenError('Usuário ou senha inválidos');
    }

    const jwtPayload = { username: user.username }
    const jwtOptions = { subject: user?.uuid }
    const secretKey = 'my_secret_key'

    const jwtToken = jwt.sign(jwtPayload, secretKey, jwtOptions)
    res.status(StatusCodes.OK).json({ token: jwtToken })
  } catch (error) {
    next(error);
  }

});

export default authorizationRoute;