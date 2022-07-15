const squareRoot = require('./getSquareRoot')

test('finds the correct square root of the given number', ()=> {

    expect(squareRoot(4)).toBe(2)
})
