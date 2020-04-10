import * as R from 'ramda';

const fn = R.indexBy(R.path(['title', '$t']));

export default fn;
