
const button = document.getElementsByClassName('popover')[0];
const popOver = document.getElementsByClassName("popover-content")[0];
let clicked = 0;
button.onclick = function(e){
e.preventDefault()
if (!clicked){
    popOver.style.display = "block";
    clicked=1;
}
else {
    popOver.style.display = "none";
    clicked=0;
}


}