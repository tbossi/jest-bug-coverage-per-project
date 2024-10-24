const {bar} = require("./file-with-test-2");

describe('bar', () => {
    it('works', () => {
        expect(bar(100)).toBe(196)
    })
})