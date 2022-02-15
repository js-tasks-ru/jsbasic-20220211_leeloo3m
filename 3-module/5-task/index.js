function getMinMax(str) {

  let result = str.split(' ');
  let result2 = result.filter(item => item == +item);
  let resultmax = Math.max.apply(null, result2);
  let resultmin = Math.min.apply(null, result2);
  let f = {
    min: resultmin,
    max: resultmax
  }
  return f;
}
