export class Planet {
  constructor(name, multiplier) {
    this.name = name;
    this.multiplier = multiplier;
  }
  calculateYears(years) {
    return years * this.multiplier;
  }
}