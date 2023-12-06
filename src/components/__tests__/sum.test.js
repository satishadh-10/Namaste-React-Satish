import { sum } from "../sum"

test('Sum function should show the sum of two numbers', () => { 
    const result = sum(3,4)

    expect(result).toBe(7)
 })