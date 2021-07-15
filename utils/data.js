const fs = require("fs");
const _ = require("lodash");
const util = require("util");

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

module.exports = {
  getDentalClinics: async () => {
    const dataDentalPath = "./data/dental-clinics.json";

    // read dental file
    let dentals = JSON.parse(await readFile(dataDentalPath, "utf8"));
    return _.map(dentals, (d) => ({
      name: d.name,
      state: d.stateName,
    }));
  },
  getVetClinics: async () => {
    const dataVetPath = "./data/vet-clinics.json";

    // read vet file
    let vets = JSON.parse(await readFile(dataVetPath, "utf8"));

    return _.map(vets, (d) => ({
      name: d.clinicName,
      state: d.stateCode,
    }));
  },
};
