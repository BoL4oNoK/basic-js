const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  var res = false;
  if ( typeof sampleActivity === 'string' ) {
    if ( /^[0-9.]+$/.test(sampleActivity) ) {
      var activity = parseFloat(sampleActivity);
      if ( activity > 0 && activity <= MODERN_ACTIVITY ) {
        var k = (Math.log(MODERN_ACTIVITY / activity)) / HALF_LIFE_PERIOD;
        res = Math.ceil((Math.log(MODERN_ACTIVITY / activity)) / (0.693 / HALF_LIFE_PERIOD));
        res = Math.abs(res);
      }
    }
  }
  return res;
};