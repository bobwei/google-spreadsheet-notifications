const pattern = /([A-Z]+)(\d+)/g;

function fn(cell) {
  const [, col, row] = cell.split(pattern);
  return [row, col];
}

export default fn;
