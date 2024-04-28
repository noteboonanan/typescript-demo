import request from 'supertest';
import app from 'app';

jest.mock('../src/client', () => ({
  __esModule: true, // this property makes it work
  default: {
    $connect: jest.fn(),
    post: {
      findMany: jest.fn().mockImplementation(() => {
        throw new Error('Database error');
      }),
    },
  },
}));

test('GET /posts :: Get all posts with error = 500', async () => {
  const response = await request(app).get('/posts');
  expect(response.status).toBe(500);
  expect(response.body).toHaveProperty('error');
});