import request from 'supertest';
import 'dotenv/config';
import { userRoutes } from '../users.routes';
import app from '../..';

describe('POST /', () => {
  it('should create a user', async () => {
    const response = await request(app.use(userRoutes))
      .post('/create')
      .type('json')
      .send({
        firstName: 'firstName test create User',
        lastName: 'lastName test create User',
        email: 'createUserTest@gmail.com'
      });

    expect(response.statusCode).toEqual(201);
  });

  it('should not create a user with the same email', async () => {
    const response = await request(app.use(userRoutes))
      .post('/create')
      .type('json')
      .send({
        firstName: 'firstName test create User 2',
        lastName: 'lastName test create User 2',
        email: 'createUserTest@gmail.com'
      });

    expect(response.statusCode).toEqual(404);
  });

  it('should delte a user with the same email', async () => {
    const response = await request(app.use(userRoutes))
      .post('/delete')
      .type('json')
      .send({
        email: 'createUserTest@gmail.com'
      });

    expect(response.statusCode).toEqual(201);
  });
});
