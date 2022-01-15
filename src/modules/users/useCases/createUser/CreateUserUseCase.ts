import { IUsersRepository } from '../../repositories/IUserRepository';

interface ICreateUserInput {
  email: string;
  firstName: string;
  lastName: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    firstName,
    lastName,
    email
  }: ICreateUserInput): Promise<void> {
    await this.usersRepository.create({ email, firstName, lastName });
  }
}

export { CreateUserUseCase };
