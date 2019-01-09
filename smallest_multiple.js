/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function (ceiling) {

  var i = ceiling;

  function checkI(i) {
    for (var j = 1; j <= ceiling; j++) {
      if (i % j !== 0) {
        return false;
      }
    };
    return true;
  }

  while (!(checkI(i))) { i += ceiling; }
  return i;

};