'use strict'
if (!Array.prototype.map) {
    Array.prototype.map = function (executor, context) {
      let array = this;
      let res = [];
      let index = 0;
      while (index < array.length) {
        res.push(executor.apply(context, [array[index], index, array]));
        index++;
      }
  
      return res;
    };
  }
  
  let test = [1, 3, 5];
  const exe = (a) => a ** 2;
  
  console.log(test.map(exe));


