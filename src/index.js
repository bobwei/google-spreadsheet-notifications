import * as R from 'ramda';

import getEntry from './functions/getEntry';
import getMaxRow from './functions/getMaxRow';
import createRange from './functions/createRange';
import applyRule from './functions/applyRule';
import indexByCell from './functions/indexByCell';
import indexByRow from './functions/indexByRow';
import notify from './functions/notify';

function main() {
  const config = require('../dist/config.json');
  const { sheetJsonUrl, rules, nofitications } = config;
  getEntry(sheetJsonUrl)
    .then((entry) => {
      const maxRow = getMaxRow(entry);
      const entryByCell = indexByCell(entry);
      const entryByRow = indexByRow(entry);
      for (const rule of rules) {
        const { col1, col2 } = rule.params;
        const allRange = createRange({ maxRow }, rule);
        const range = allRange.filter((row) => col2 + row in entryByCell);
        for (const row of range) {
          const val1 = R.path([col1 + row, 'gs$cell', '$t'])(entryByCell);
          const val2 = R.path([col2 + row, 'gs$cell', '$t'])(entryByCell);
          if (applyRule(rule, val1, val2)) {
            const [id, name] = R.map(R.path(['gs$cell', '$t']))(entryByRow[row]);
            const msg = `${id} ${name} ${val1} ${rule.type} ${val2}`;
            notify(nofitications, msg);
          }
        }
      }
    })
    .catch(console.log);
}

if (require.main === module) {
  main();
}
