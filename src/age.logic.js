export class Planet {
  constructor(name, multiplier) {
    this.name = name;
    this.multiplier = multiplier;
  }
  calculateYears(years) {
    return years * this.multiplier;
  }
  calculateExpectancy(years, expectancy) {
    let planetYears = this.calculateYears(years);
    let planetExpectancy = this.calculateYears(expectancy)
    return planetYears;
  }
}