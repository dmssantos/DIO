import { Request, Response, NextFunction } from "express";
import ForbbidenError from "../models/errors/forbbiden.error.model";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/user.repository";

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {

  try {

    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
      throw new ForbbidenError('Credenciais não informadas');
    }

    const [authenticationType, token] = authorizationHeader.split(' ');

    if (authenticationType !== 'Bearer' || !token) {
      throw new ForbbidenError('Tipo de authenticação inválido');
    }

    try {
      const tokenPayload = jwt.verify(token, 'my_secret_key');

      if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
        throw new ForbbidenError('Token inválido');
      }

      const user = {
        uuid: tokenPayload.sub,
        username: tokenPayload.username
      };

      req.user = user;
      next()

    } catch (error) {
      throw new ForbbidenError('Token inválido');
    }

  } catch (error) {
    next(error)
  }

};

export default jwtAuthenticationMiddleware;
