if (!Array.prototype.reduceN) {
    Array.prototype.reduceN = function (initialValue, reducer, context) {
      let array = this;
      let index = 0;
      while (index < array.length) {
        initialValue = reducer.call(context, initialValue, array[index]);
        index++;
      }
      return initialValue;
    };
  }
  
  let test = [1, 3, 5];
  const exe = (a, b) => a + b;
  
  console.log(test.reduceN(0, exe));