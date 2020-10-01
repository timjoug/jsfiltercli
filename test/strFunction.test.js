const app = require('./../app')

test('If the string to check and the filter are equal, it returns true', () => {
    const input = { filterStr: 'test', checkStr: 'test' }

    expect(app.strFilter(input.filterStr, input.checkStr)).toBe(true);
});

test('If the string to check includes the filter, it returns true', () => {
    const input = { filterStr: 'es', checkStr: 'test' }

    expect(app.strFilter(input.filterStr, input.checkStr)).toBe(true);
});

test('If the string to check does not include the filter, it returns false', () => {
    const input = { filterStr: 'h', checkStr: 'test' }

    expect(app.strFilter(input.filterStr, input.checkStr)).toBe(false);
});

test('If the check and/or the filter value set is not a string, the variables will be convert into string and the function will be executed', () => {
    const input = { filterStr: 27, checkStr: 27 }

    expect(app.strFilter(input.filterStr, input.checkStr)).toBe(true);
});