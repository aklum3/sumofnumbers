const testList = [1, 2, 3];

function sumFor(list) {
  let total = 0;
  for (const num of list) {
    total += num;
  }
  return total;
}
console.log(sumFor(testList));

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testList));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}
console.log(sumRecursion(testList));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(testList));
