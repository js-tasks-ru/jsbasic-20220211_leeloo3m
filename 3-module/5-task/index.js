function getMinMax(str) {
  let arr = str.split(' ').map(item => +item).filter(item => isFinite(item));
  let obj = arr.reduce((acc, rec) => {
    return {min: acc.min < rec ? acc.min : rec, 
            max: acc.max > rec ? acc.max : rec};
  }, {min: 0, max: 0});
  return obj;
}
