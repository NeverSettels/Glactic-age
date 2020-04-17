import { Planet } from '../src/age.logic.js'




describe('Planet class', () => {
  test('Checks that calculateYears multiplies argument by multiplier property', () => {
    let mars = new Planet('Mars', 1.88)
    expect(mars.calculateYears(1)).toBe(1.88)
  })
});
