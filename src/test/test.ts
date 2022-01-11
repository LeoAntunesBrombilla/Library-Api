import request from 'supertest';
import app from '../index';

describe('GET /', () => {
  it('Responds with Hello World from the docker container!!', (done) => {
    request(app)
      .get('/')
      .expect('Hello World from the docker container!!', done);
  });
});
