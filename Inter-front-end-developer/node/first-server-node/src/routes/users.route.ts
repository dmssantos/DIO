
import { Router, Response, Request, NextFunction } from 'express';
import userRepository from '../repositories/user.repository';

import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  const users = await userRepository.findAllUsers();
  res.status(StatusCodes.OK).send(users)
})

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  const user = await userRepository.findById(uuid);
  res.status(StatusCodes.OK).send(user)
})

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser)
})

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({ uuid })
})

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  res.status(StatusCodes.OK)
})

export default usersRoute;