const _ = require("lodash");

/**
 * Converts time to integer
 * @param {string} time - Hour in 24 hour format
 * @returns {int} - Integer distance of the time from 0
 */
function convertTimeToInt(time) {
  if (time) {
    let array = time.split(":");

    if (array.length > 1) {
      let hh = parseInt(array[0], 10);
      let mm = parseInt(array[1], 10);

      if (isNaN(hh) || isNaN(mm)) return null;
      if (hh < 0 || hh > 24) return null;
      if (mm < 0 || mm > 60) return null;

      let timeInt = hh * 60 * 60 + mm * 60;

      return timeInt;
    }
  }

  return null;
}

/**
 * Checks overlapping of openning time and searched time
 * @param {string} openingFromTime - Opening time of the clinic
 * @param {string} openingToTime - Ending time of the clinic
 * @param {string} targetFromTime - Searched starting time
 * @param {string} targetToTime - Searched ending time
 * @returns {boolean} - Represents the value whether opening and target time is overlapping
 */
module.exports.checkOverlapInTime = (
  openingFromTime,
  openingToTime,
  targetFromTime,
  targetToTime
) => {
  let oft = convertTimeToInt(openingFromTime);
  let ott = convertTimeToInt(openingToTime);
  let tft = convertTimeToInt(targetFromTime);
  let ttt = convertTimeToInt(targetToTime);

  //To is always bigger than From
  if (oft > ott) ott += 86400;
  if (tft > ttt) ttt += 86400;

  if (tft >= oft && tft < ott) return true;
  else if (ttt > oft && ttt < ott) return true;
  else if (tft <= oft && ott <= ttt) return true;

  return false;
};

/**
 *
 * @param {string} target - Subject to compare with
 * @param {string} keyword - Key to compare
 * @returns {string}
 */
module.exports.contains = (target, keyword) => {
  return _.includes(_.toLower(_.trim(target)), _.toLower(_.trim(keyword)));
};
