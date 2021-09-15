
// Make an API call with xmlhttpRequest

const httpsAPI = "https://swapi.dev/api/";

let xhr = new XMLHttpRequest();

xhr.onload = () => {
const data = JSON.parse(xhr.response)
console.log(data.people)
}
xhr.open("GET", httpsAPI, true);
xhr.send()


// xhr.addEventListener('onreadystatechange', processRequest, false);


// function processRequest(e){
//     if(xhr.readyState === 4 && xhr.status === 200)
// }


// fetch data 

async function getData(){
    const resp =  await fetch(`${httpsAPI}`);

    if (!resp.ok){
        const message = `An error has occured: ${resp.status}`;
        throw new Error(message)
    }
    const data = await resp.json()
    return data
}

getData().then(resp => console.log(resp)).catch(err => console.log(err.message))


// Promise Usage 

function apiCall(ms) {

    return new Promise((resolve, reject) => {
        if (ms){
            setTimeout(()=>console.log("Run Program"), ms)
            resolve();
        }
        else{
            reject("missing duration")
        }
        
    })


}

apiCall(100).then(res => console.log("done")).catch(err => console.error(err))
