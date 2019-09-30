(async function test() {
  console.log(1);

  let a;
  setTimeout(() => {
    console.log(2);
    a = 'twoooo';
  }, 1000);

  setTimeout(() => {
    console.log(a);
  }, 1500);

  console.log(a);
})()

const b = [1, 2, 3];
b.map()