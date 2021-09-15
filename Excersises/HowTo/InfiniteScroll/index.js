
// const API = "https://picsum.photos/v2/list?limit=12&page=";
const imageContainer = document.getElementById('image-container');
const colDiv = document.querySelectorAll('.col');
const loadingEle = document.getElementById('loader')
let currentPage = 1;
let isFetching = false;
let currentCol = 1;
const gridColumnCount = 4;


const getImages = async () => {
    isFetching = true;
    loadingEle.style.visibility = "visible";
    const response = await fetch(`https://picsum.photos/v2/list?limit=12&page=${currentPage}`)
    const images = await response.json();
    isFetching = false;
    renderView(images);
    currentPage++;
    setTimeout(()=>{loadingEle.style.visibility = "hidden";}, 500)
    
}

const renderView = (images) => {
    images.forEach(image => {
        const childDiv = generateImage(image);
        imageContainer.appendChild(childDiv);
        
    });
}

const generateImage = (imgData) => {
    const imgDiv = document.createElement('div');
    imgDiv.className = "item image-div";
    imgDiv.innerHTML = `<img src=${imgData.download_url} alt=${imgData.author} />`;
    return imgDiv;
}

window.addEventListener('scroll', async () =>{

    if(isFetching) return;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight){
        await getImages();
    }
});