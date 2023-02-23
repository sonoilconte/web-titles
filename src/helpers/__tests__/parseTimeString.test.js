import parseTimeString from '../parseTimeString';

describe('Handling time strings that may be entered into inputs', () => {
    test('0', () => {
        expect(parseTimeString('0')).toBe('0');
    });

    test('0.', () => {
        expect(parseTimeString('0.')).toBe('0.');
    });

    test('.', () => {
        expect(parseTimeString('.')).toBe('0.');
    });

    test('00', () => {
        expect(parseTimeString('00')).toBe('0');
    });

    test('0000', () => {
        expect(parseTimeString('0000')).toBe('0');
    });

    test('0.0', () => {
        expect(parseTimeString('0.0')).toBe('0.0');
    });

    test('0.01', () => {
        expect(parseTimeString('0.01')).toBe('0.0');
    });

    test('2.', () => {
        expect(parseTimeString('2.')).toBe('2.');
    });

    test('2.0', () => {
        expect(parseTimeString('2.0')).toBe('2.0');
    });

    test('2.3', () => {
        expect(parseTimeString('2.3')).toBe('2.3');
    });

    test('2.37', () => {
        expect(parseTimeString('2.37')).toBe('2.3');
    });

    test('2.3789', () => {
        expect(parseTimeString('2.3789')).toBe('2.3');
    });

    test('09.1', () => {
        expect(parseTimeString('09.1')).toBe('9.1');
    });

    test('09', () => {
        expect(parseTimeString('09')).toBe('9');
    });
});