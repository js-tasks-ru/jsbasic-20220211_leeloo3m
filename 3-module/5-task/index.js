function getMinMax(str) {
  let arr = str.split(' ').filter(item=>item == +item);
  arr.reduce((acc, rec) => {
    return {min: acc < rec ? acc: rec, max: acc > rec? acc : rec}
         
  }, {})


}
