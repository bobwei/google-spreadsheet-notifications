function fn(config, rule) {
  const { type, params } = rule;
  if (type === 'GT' || type === 'LT') {
    const { maxRow } = config;
    const { startRow } = params;
    return new Array(maxRow - startRow + 1).fill(null).map((_, i) => startRow + i);
  }
  return [];
}

export default fn;
