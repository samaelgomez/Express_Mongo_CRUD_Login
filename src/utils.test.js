const utils = require('./utils')

test("Encrypt works properly", () => {
    const result = utils.encrypt({"payload": "value"});
    expect(typeof result).toBe("string");
    expect(result.split(".").length).toBe(3);
});

test("Encrypt payload is empty", () => {
    expect(utils.encrypt()).toThrow("Payload is empty");
});

// El decrypt recibe header

// El token es un string

// Resultado de decrypt es un string