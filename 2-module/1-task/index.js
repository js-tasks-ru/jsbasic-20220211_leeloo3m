function sumSalary(salaries) {
  let sum = 0;
  for (let values of Object.values(salaries)) {
 
    typeof values == "number" && Number.isFinite(values) ? 
    sum+=values : 0;
}
return sum;
}
