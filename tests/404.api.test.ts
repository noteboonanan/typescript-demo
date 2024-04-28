// Test with supertest
import request from 'supertest';
import app from 'app';

test('GET /404 Route not found', async () => {
    const response = await request(app).get('/404');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
        error: 'Route /404 not found'
    });
});