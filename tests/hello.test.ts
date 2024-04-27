import { sayHi } from 'hello';

test('Hello world with sayHi', () => {
    expect(sayHi()).toBe('Hello world!');
});