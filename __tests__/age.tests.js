import { Planet, User } from '../src/age.logic.js'




describe('Planet class', () => {
  test('Checks that calculateYears multiplies argument by multiplier property', () => {
    let mars = new Planet('Mars', 1.88)
    expect(mars.calculateYears(1)).toBe(1.88)
  })
  test('Checks that calculateExpectancy returns the right age expectancy and wether its  under ', () => {
    let mars = new Planet('Mars', 1.88)
    expect(mars.calculatePlanetExpectancy(24, 35)).toEqual([20.68, 'under'])
  })
  test('Checks that calculatePlanetExpectancy returns the right age expectancy and wether its  over ', () => {
    let mars = new Planet('Mars', 1.88)
    expect(mars.calculatePlanetExpectancy(35, 24)).toEqual([20.68, 'over'])
  })
  test('Checks that calculatePlanetExpectancy returns the right age expectancy and wether its equal ', () => {
    let mars = new Planet('Mars', 1.88)
    expect(mars.calculatePlanetExpectancy(24, 24)).toEqual([0, 'equal'])
  })
});


describe('User class', () => {
  test('Checks that calculateExpectancy returns right expectancy for male', () => {
    let user = new User(24, "M", "Eric")
    user.calculateExpectancy()
    expect(user.expectancy).toBe(76.1)
  })
  test('Checks that calculateExpectancy returns right expectancy for female', () => {
    let user = new User(24, "F", "Erica")
    user.calculateExpectancy()
    expect(user.expectancy).toBe(81.1)
  })
  test('Checks that calculateExpectancy returns right expectancy for Rather not say', () => {
    let user = new User(24, "RN", "Erica")
    user.calculateExpectancy()
    expect(user.expectancy).toBe(78.6)
  })
});
