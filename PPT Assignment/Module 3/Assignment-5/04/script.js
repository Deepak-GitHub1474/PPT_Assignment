console.log("Start");

function executeAfterDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delayed execution");
      resolve();
    }, 2000);
  });
}

async function main() {
  console.log("Next line of code");
  await executeAfterDelay();
  console.log("Last piece of code");
}

main();

console.log("End");
