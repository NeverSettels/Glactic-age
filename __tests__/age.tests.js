import { Planet } from '../src/age.logic.js'




describe('Planet class', () => {
  test('Checks that calculateYears multiplies argument by multiplier property', () => {
    let mars = new Planet('Mars', 1.88)
    expect(mars.calculateYears(1)).toBe(1.88)
  })
  test('Checks that calculateExpectancy returns the right age expectancy and wether its  under ', () => {
    let mars = new Planet('Mars', 1.88)
    expect(mars.calculateExpectancy(24, 35)).toBe([20.68, 'under'])
  })
  test('Checks that calculateExpectancy returns the right age expectancy and wether its  over ', () => {
    let mars = new Planet('Mars', 1.88)
    expect(mars.calculateExpectancy(35, 24)).toBe([20.68, 'over'])
  })
  test('Checks that calculateExpectancy returns the right age expectancy and wether its equal ', () => {
    let mars = new Planet('Mars', 1.88)
    expect(mars.calculateExpectancy(24, 24)).toBe([0, 'equal'])
  })
});
