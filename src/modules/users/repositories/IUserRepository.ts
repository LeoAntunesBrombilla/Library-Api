import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  delete(email: string): Promise<void>;
}

export { IUsersRepository };
