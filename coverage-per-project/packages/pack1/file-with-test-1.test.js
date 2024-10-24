const {foo} = require("./file-with-test-1");

describe('foo', () => {
    it('works', () => {
        expect(foo(100)).toBe(142)
    })
})