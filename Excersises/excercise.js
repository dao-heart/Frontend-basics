let test =  {a: 1,b: {c: 2,d: -3, e: {f: {g: -4,}},h: {i: 5,j: 6,}}}


const executor = (n) => n>= 0; 

function flatternObj(obj){
let res = {}
for (let key in obj){
    if (typeof obj[key] === "object"){
        let retValue = flatternObj(obj[key])
        if (JSON.stringify(retValue) !==JSON.stringify({})){
            res[key] = retValue
        }
        
    }
    else{
        if (executor(obj[key])){
            res[key] = obj[key]
        }

    }

}
return res;
}