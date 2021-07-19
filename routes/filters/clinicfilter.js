const { contains, checkOverlapInTime } = require("../../lib");
const Clinic = require("../../models/Clinic");
const _ = require("lodash");

/**
 * Handles filters for clinics
 */
const filters = {
  byName: (c = Clinic, { name }) => {
    return name ? contains(c.name, name) : true;
  },
  byState: (c = Clinic, { state }) => {
    if (state) {
      return state.length <= 2
        ? _.toLower(_.trim(state)) == _.toLower(c?.stateCode)
        : _.toLower(_.trim(state)) == _.toLower(c?.stateName);
    }
    return true;
  },
  byTime: (c = Clinic, { from, to }) => {
    return from && to
      ? checkOverlapInTime(c.availability.from, c.availability.to, from, to)
      : true;
  },
};

const handleFilters = (clinics = [Clinic], filterParams) => {
  return clinics.filter((c) =>
    Object.values(filters).every((f) => f(c, filterParams))
  );
};

module.exports = handleFilters;
