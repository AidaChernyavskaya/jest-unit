const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 3, 5])).toEqual(['1', '3', '5']);
    })
    test('Корректное значение 2', () => {
        expect(mapArrToStrings(['1', 3, 5])).toEqual(['3', '5']);
    })
})