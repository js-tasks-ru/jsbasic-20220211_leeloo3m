function filterRange(arr, a, b) {
  return arr.reduce((acc, rec) => {
    return rec >= a && rec <= b ? [...acc, rec] : [...acc];

  }, []);
}
