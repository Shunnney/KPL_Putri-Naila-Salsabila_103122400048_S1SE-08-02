import test from 'node:test';
import assert from 'node:assert';

test.describe("truth and falsy", () => {
    test.it("string kosong adalah falsy", () => {
        assert.ok(!"");
        assert.equal("", false);

    });   

    test.it("string dengan spasi adalah truthy", () => {
        assert.ok("Hello World");
    });
});