window.onscroll = function()  {toggleNav()};

function toggleNav(){
    const nav = document.getElementById("nav")
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop){
        nav.style.top = 0;    
    }
    else {
        nav.style.top = "-50px";    
    }


}