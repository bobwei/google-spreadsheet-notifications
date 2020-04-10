import axios from 'axios';
import * as R from 'ramda';

function fn(url) {
  return axios
    .get(url)
    .then(R.prop('data'))
    .then(R.path(['feed', 'entry']));
}

export default fn;
