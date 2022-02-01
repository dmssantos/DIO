import { Request, Response, NextFunction, Router } from "express";
import ForbbidenError from "../models/errors/forbbiden.error.model";

const authorizationRoute = Router();

authorizationRoute.post('/token', (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers['authorization'];
  
    if(!authorizationHeader) {
      throw new ForbbidenError('Credenciais não informadas');
    }

    const [authenticationType, token] = authorizationHeader.split(' ');

    if(authenticationType !== 'Basic' || !token) {
      throw new ForbbidenError('Tipo de Autenticação inválida');
    }
  } catch (error) {
    next(error);
  }

});

export default authorizationRoute;