import * as R from 'ramda';

function fn(entry) {
  let max = 1;
  for (const cell of entry) {
    const row = R.path(['gs$cell', 'row'])(cell);
    max = Math.max(max, row);
  }
  return max;
}

export default fn;
