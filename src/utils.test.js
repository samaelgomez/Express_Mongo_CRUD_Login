const utils = require('./utils')

test("Encrypt works properly", () => {
    const result = utils.encrypt({"payload": "value"});
    expect(typeof result).toBe("string");
    expect(result.split(".").length).toBe(3);
});