const _ = require("lodash");
const ProviderStrategy = require("./ProviderStrategy");

class Extraction {
  providers = [];

  constructor() {
    this.addStrategy("Dental");
    this.addStrategy("Vet");
  }

  addStrategy(newStrategy) {
    this.providers = _.concat(this.providers, ProviderStrategy[newStrategy]());
  }

  async getClinics() {
    let allClinics = [];
    let results = await Promise.all(this.providers);
    results.forEach((r) => {
      allClinics = _.concat(allClinics, r);
    });
    return allClinics;
  }
}

module.exports = Extraction;
