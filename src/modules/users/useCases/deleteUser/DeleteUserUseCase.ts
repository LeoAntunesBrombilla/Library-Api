import { IUsersRepository } from '../../repositories/IUserRepository';

interface IDeleteUserInput {
  email: string;
}

class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email }: IDeleteUserInput): Promise<void> {
    await this.usersRepository.delete(email);
  }
}

export { DeleteUserUseCase };
