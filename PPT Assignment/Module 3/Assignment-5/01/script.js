let count = 1;

console.log(`First console count: ${count++}`);

setTimeout(() => {
  console.log(`Inside setTimeout, Second log count: ${count++}`);
}, 10000);

console.log(`Third log count: ${count++}`);

/**
 * OUTPUT:
 * 
 * First console count: 1
 * Third log count: 2
 * Inside setTimeout, Second log count: 3
 */