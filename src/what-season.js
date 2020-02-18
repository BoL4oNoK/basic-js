module.exports = function getSeason( date ) {
  if (typeof date === 'undefined') return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw Error();
  else {
    var season = "winter";
    var month = date.getMonth() + 1;
    if (month > 2 && month < 6 ) season = "spring";
    if (month > 5 && month < 9 ) season = "summer";
    if (month > 8 && month < 12 ) season = "autumn";
    return season;
  }
};
