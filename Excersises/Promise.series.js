function randTask(){
    const value = Math.floor(Math.random() * 10)
    console.log(value)
    return function (callback){
        setTimeout(()=>{callback(value)}, 1000 );
    }
}

function asyncSeries(taskList, callback){
var arr = [];
let tasksCompleted = 0;



}


