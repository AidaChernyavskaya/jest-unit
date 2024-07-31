const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 3, 5])).toEqual(['1', '3', '5']);
    })
    test('Мешанина', () => {
        expect(mapArrToStrings([1, 3, 5, null, undefined, 'sdsd'])).toEqual(['1', '3', '5']);
    })
    test('Пустое значение', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('Отрицание', () => {
        expect(mapArrToStrings([1, 3, 5])).not.toEqual([1, 2, 3, 4]);
    })
})