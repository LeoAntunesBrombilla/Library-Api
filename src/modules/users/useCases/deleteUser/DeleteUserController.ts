import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';
import mongoose from 'mongoose';

class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { email } = request.body;

    await this.deleteUserUseCase
      .execute({ email })
      .then(() => {
        return response.status(201).send();
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

export { DeleteUserController };
