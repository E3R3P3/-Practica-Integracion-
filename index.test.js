const sayHello = require('../index');

test('Debería retornar "Hola Mundo"', () => {
    expect(sayHello()).toBe('Hola Mundo');
});
