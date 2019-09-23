// time = 25:19
const list = [1, 2, 4, 7, 9];

function sumFor(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i];
  }
  return total;
}

console.log(sumFor(list));

function sumWhile(listb) {
  let total = 0;
  let i = 0;
  while (listb[i] < listb.length) {
    total += listb[i];
    i++;
  }
  return total;
}

console.log(sumWhile(list));

function sumRecursion(listc) {
  if (listc.length === 0) {
    return 0;
  }
  return listc[0] + sumRecursion(listc.slice(1, listc.length));
}

console.log(sumRecursion(list));

function sumTheSimpleWay(listd) {
  return _.reduce(listd, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(list));
