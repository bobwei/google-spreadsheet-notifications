import axios from 'axios';

function fn(url, msg) {
  return axios.post(url, { text: msg });
}

export default fn;
