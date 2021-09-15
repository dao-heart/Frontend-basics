function memoize(fn) {
    let memo = new Map();
    return function(num){
        let key = num;
        
        if (!memo.has(key)){
            memo.set(key, fn.call(this, num));
        }
        return memo.get(key)
    }
}
// 0 1 1 
let count = 1
function fib(n) {
    // fibonacci
    
    if (n<=0){
        return 0
    }
    if (n<=1){
        return 1
    }
    ++count
    return fib(n-1)+fib(n-2);
}

let memoizedFib = memoize(fib);
memoizedFib(1)
console.log(count, 1);
memoizedFib(1);
console.log(count, 1);
memoizedFib(1);
console.log(count, 1);
memoizedFib(1);
console.log(count, 1);
memoizedFib(1);
console.log(count, 1);
memoizedFib(2)
console.log(count, 2);
memoizedFib(2)
console.log(count, 2);
memoizedFib(2)
console.log(count, 2);
memoizedFib(3)
console.log(count, 3);