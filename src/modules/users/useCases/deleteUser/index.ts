import User from '../../model/User.model';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export default (): DeleteUserController => {
  const usersRepository = new UsersRepository(User);

  const deleteUserUseCase = new DeleteUserUseCase(usersRepository);

  const createUserController = new DeleteUserController(deleteUserUseCase);

  return createUserController;
};
