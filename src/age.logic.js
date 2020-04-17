export class Planet {
  constructor(name, multiplier) {
    this.name = name;
    this.multiplier = multiplier;
  }
  calculateYears(years) {
    return years * this.multiplier;
  }
  calculatePlanetExpectancy(years, expectancy) {
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

export class User {
  constructor(age, sex, name) {
    this.age = age;
    this.sex = sex;
    this.name = name;
    this.expectancy = 0;
  }
  calculateExpectancy() {
    if (this.sex === "M") {
      //this.expectancy = 76.1 
    } else if (this.sex === 'F') {
      //this.expectancy = 81.1
    }

  }
}