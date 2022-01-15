import { Router } from 'express';
import User from '../modules/users/model/User.model';
import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository';

import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { CreateUserUseCase } from '../modules/users/useCases/createUser/CreateUserUseCase';
import { DeleteUserController } from '../modules/users/useCases/deleteUser/DeleteUserController';
import { DeleteUserUseCase } from '../modules/users/useCases/deleteUser/DeleteUserUseCase';

const userRoutes = Router();

const usersRepository = new UsersRepository(User);
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

userRoutes.post('/create', async (request, response) => {
  try {
    await createUserController.handle(request, response);
  } catch (error) {
    response.status(404).send(error);
  }
});

userRoutes.post('/delete', async (request, response) => {
  try {
    await deleteUserController.handle(request, response);
  } catch (error) {
    response.status(404).send(error);
  }
});

export { userRoutes };
