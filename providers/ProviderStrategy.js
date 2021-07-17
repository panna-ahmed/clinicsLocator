const fs = require("fs");
const _ = require("lodash");
const util = require("util");
const config = require("config");

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

/**
 * Strategies to get data from different sources
 */
class ProviderStrategy {
  /**
   * Strategy to get data from dental file
   * @returns array of dental clinics
   */
  static async Dental() {
    // read dental file
    let dentals = JSON.parse(
      await readFile(config.get("dataDentalPath"), "utf8")
    );

    return _.map(dentals, (d) => ({
      name: d.name,
      state: d.stateName,
    }));
  }

  /**
   * Strategy to get data from clinic file
   * @returns array of vet clinics
   */
  static async Vet() {
    // read vet file
    let vets = JSON.parse(await readFile(config.get("dataVetPath"), "utf8"));

    return _.map(vets, (d) => ({
      name: d.clinicName,
      state: d.stateCode,
    }));
  }
}

module.exports = ProviderStrategy;
