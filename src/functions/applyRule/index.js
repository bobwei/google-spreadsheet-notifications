function fn(rule, arg1, arg2) {
  if (rule.type === 'GT') {
    return arg1 > arg2;
  }
  if (rule.type === 'LT') {
    return arg1 < arg2;
  }
  return false;
}

export default fn;
