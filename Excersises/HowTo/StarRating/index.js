
const count = 5;
const parentDiv = document.getElementById('app')
function generateStar(){
    const star = document.createElement('span');
    star.className = "fa fa-star";
    return star;   
}

function generateView(selected = 0){
    parentDiv.innerHTML="";
    for (let i = 0; i <count; i++ ){
        const star = generateStar();
        star.setAttribute('index', i);
        if (i<selected){
            star.classList.add("selected");
        }
        parentDiv.append(star)

    }

}
generateView();


parentDiv.addEventListener('click', function(e){
    const target = e.target;
    if (target.tagName ==="SPAN"){
        const selected = parseInt(target.getAttribute('index'));
        generateView(selected+1);
    }})
