
window.onscroll = function(){toggleSticky()}

let nav = document.getElementById('navbar');

function toggleSticky(){
    if (nav.offsetTop < document.documentElement.scrollTop){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
}