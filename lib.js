const _ = require("lodash");

/**
 *
 * @param {string} target - Subject to compare with
 * @param {string} keyword - Key to compare
 * @returns {string}
 */
module.exports.contains = (target, keyword) => {
  return _.includes(_.toLower(_.trim(target)), _.toLower(_.trim(keyword)));
};
