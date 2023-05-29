import calculate from "./calculatorFunc"

describe("Calculate tests", () => {
    test('it should sum 2 + 3', () => {
        const res = calculate(2,'add', 3)

        expect(res).toBe(5)
    })

    test('it should sum decimal 2.5 + 3.5', () => {
        const res = calculate(2.5,'add', 3.5)

        expect(res).toBe(6)
    })

    test('it should sum negative number (-2) + (-3)', () => {
        const res = calculate(-2,'add', -3)
        expect(res).toBe(-5)
    })

    test('it should sub 10 - 5', () => {
        const res = calculate(10,'sub', 5)

        expect(res).toBe(5)
    })

    test('it should sub decimal 15.25 + 5.25', () => {
        const res = calculate(15.25,'sub', 5.25)

        expect(res).toBe(10)
    })

    test('it should sub negative number (-2) - (-3)', () => {
        const res = calculate(-2,'sub', -3)

        expect(res).toBe(1)
    })

    test('it should multiply 2 * 2.5', () => {
        const res = calculate(2,'multiply', 2.5)

        expect(res).toBe(5)
    })

    test('it should multiply decimal 2.25 + 3.2', () => {
        const res = calculate(2,'multiply', 3)

        expect(res).toBe(6)
    })

    test('it should multiply result is 0', () => {
        const res = calculate(2,'multiply', 0)

        expect(res).toBe(0)
    })

    test('it should multiply negative number (-2) * -3', () => {
        const res = calculate(-2,'multiply', -3)

        expect(res).toBe(6)
    })

    test('it should divide 10/2', () => {
        const res = calculate(10,'div', 2)

        expect(res).toBe(5)
    })

    test('it should divide result equal infinity', () => {
        const res = calculate(2,'div', 0)
        console.log(res)
        expect(res).toBe(Infinity)
    })

    
})