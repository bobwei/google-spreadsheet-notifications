import * as R from 'ramda';

import getRowAndCol from '../getRowAndCol';

const fn = R.pipe(
  R.map((obj) => {
    const cell = R.path(['title', '$t'])(obj);
    const [row] = getRowAndCol(cell);
    return {
      [row]: [obj],
    };
  }),
  R.reduce(R.mergeWith(R.concat), {}),
);

export default fn;
