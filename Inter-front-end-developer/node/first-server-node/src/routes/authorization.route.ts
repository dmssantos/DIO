import { Request, Response, NextFunction, Router } from "express";
import jwt from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import ForbbidenError from "../models/errors/forbbiden.error.model";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";

const authorizationRoute = Router();

authorizationRoute.post('token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK)
});

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user;

    if(!user) {
      throw new ForbbidenError('Usuário não informado')
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