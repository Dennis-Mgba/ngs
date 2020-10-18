// define a function
const func = () => {
  console.log('Hello after 4 seconds');
};

// set time to evoke the function after 4 seconds
setTimeout(func, 4 * 1000);


// For: func(arg1, arg2, arg3, ...)
// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)

// const runFunc = function(x, y, z) {
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
//
// setTimeout(runFunc, 4000, 'John', 'Doe', 'Benson');
