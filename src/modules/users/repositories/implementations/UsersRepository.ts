/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUserRepository';
import mongoose from 'mongoose';

class UsersRepository implements IUsersRepository {
  public repository: mongoose.Model<any>;

  constructor(schemaModel: mongoose.Model<any>) {
    this.repository = schemaModel;
  }

  async create({ email, firstName, lastName }: ICreateUserDTO): Promise<void> {
    await this.repository.create({
      firstName,
      lastName,
      email
    });
  }

  async delete(email: string): Promise<void> {
    await this.repository.deleteOne({ email });
  }
}

export { UsersRepository };
