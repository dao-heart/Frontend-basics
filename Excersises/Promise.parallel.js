function randTask(){
const value = Math.floor(Math.random() * 10)
console.log(value)
return function (callback){
    setTimeout(()=>{callback(value)}, 1000 );
}
}

const taskList = [randTask(), randTask(),randTask()];

const asyncParallel = (taskList, resultCallBack) => {
    let results = []
    let completed = 0
    const cb = (value) => {
        results.push(value);
        completed++;
        if (completed >=taskList.length){
            resultCallBack.call(null, results)
        }
    }
    taskList.forEach(task => {
        task(cb)
    });
}

asyncParallel(taskList, result => {
    console.log('got the results', result);
  });
  
