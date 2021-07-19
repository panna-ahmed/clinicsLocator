const {
  retrieveStateInformation,
  isValidStateInput,
} = require("usa-state-validator");

/**
 * Creates a Clinic
 * @param {string} name - Name of the clinic
 * @param {string} state - State Name / Abbreviation
 */
function Clinic(name, state, availability) {
  this.name = name;

  if (state && isValidStateInput(state)) {
    let stateInfo = retrieveStateInformation(state);
    this.stateCode = stateInfo.abbreviation;
    this.stateName = stateInfo.name;
  }

  this.availability = availability;
}

module.exports = { Clinic };
