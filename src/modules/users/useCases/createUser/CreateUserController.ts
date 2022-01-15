import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import mongoose from 'mongoose';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { email, firstName, lastName } = request.body;

    await this.createUserUseCase
      .execute({ email, firstName, lastName })
      .then(() => {
        return response.status(201).send();
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

export { CreateUserController };
