const _ = require("lodash");

module.exports.contains = (target, keyword) => {
  return _.includes(_.toLower(_.trim(target)), _.toLower(_.trim(keyword)));
};
