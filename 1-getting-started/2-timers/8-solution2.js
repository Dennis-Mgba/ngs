let counter = 0;

const intervalId = setInterval(() => {
  console.log('Hello World');
  counter += 1;

  if (counter === 5) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 1000);

// setTimeout( () => {
//     for (var count = 0; count <= 5; count++) {
//         console.log('Hello World');
//     }
//     console.log('done');
// }, 1000);
