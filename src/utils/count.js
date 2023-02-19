/**
 * My version of Josh W Comeau's count. I just tried implementing it myself.
 *
 * @param {Number} from Start counting from
 * @param {Number} items How many items in the array
 * @param {Number} step Increments for each value
 * @returns {Array.<Number>} An array of the generated numbers
 */
function count(from = 0, items, step = 1) {
  const arr = [];

  if (from == null || items == null) return;

  for (let i = from; i <= items * step; i += step) {
    arr.push(i);
  }

  return arr;
}

export default count;
