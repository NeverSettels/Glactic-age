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
    let overUnderEqual = ""
    let calculatedExpectancy = planetExpectancy - planetYears;
    if (calculatedExpectancy > 0) {
      overUnderEqual = 'under'
    } else if (calculatedExpectancy < 0) {
      overUnderEqual = "over";
      calculatedExpectancy *= -1
    } else {
      overUnderEqual = "equal";
    }
    return [calculatedExpectancy, overUnderEqual];
  }
}