function getMinMax(str) {

  let result = str.split(' ').filter(item => item == +item);
  let resultmax = Math.max.apply(null, result);
  let resultmin = Math.min.apply(null, result);
  let f = {
    min: resultmin,
    max: resultmax
  }
  return f;
}
