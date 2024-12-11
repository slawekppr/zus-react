const list = [1, 2, 3, 4];
const list2 = [];

for (let l of list) console.log(l);

const isEven = (x: number) => x % 2 == 0;
const multBy = (factor: number) => (x: number) => x * factor;
const show = (x: number) => console.log(x);

const res = list
  .filter(isEven)
  //   .map((x) => multBy(2, x))
  //   .map((x) => multBy(2) (x))
  .map(multBy(2))
  .forEach(show);
