// Test with supertest
import request from 'supertest';
import app from 'app';

test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        message: 'Hello World from TypeScript'
    });
});