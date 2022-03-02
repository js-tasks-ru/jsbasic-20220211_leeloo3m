function camelize(str) {
  let arr = str.split('-')
  .reduce((acc, rec, idx) => {
    return idx == 0 ? [...acc, rec] : [...acc,rec[0].toUpperCase + rec.slice(1)]
  }, [])
  
  .join('');
  return arr;
}
