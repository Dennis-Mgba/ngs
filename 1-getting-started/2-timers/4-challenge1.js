const theOneFunc = (delay) => {
    console.log('Hello after '+ delay+' seconds');
};

setTimeout(theOneFunc, 4 * 1000, 4);
setTimeout(theOneFunc, 8 * 1000, 8);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function

// const delayRelay = () => {
//     setTimeout( () => {
//         console.log('Hello after 4 seconds');
//     }, 4000);
//
//     setTimeout( () => {
//         console.log('Hello after 8 seconds');
//     }, 8000);
// }
//
// delayRelay();
