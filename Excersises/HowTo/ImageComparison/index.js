function initFunction(){
    let clicked = 0;
    const imgList = document.getElementsByClassName("img-comp-overlay");
    const img = imgList[0];

    const slider = document.createElement("div");
    slider.classList.add('img-slider');
    //console.log(img.parentElement);
    img.parentElement.insertBefore(slider, img);
    const x = (img.offsetWidth)/2 - (slider.offsetWidth)/2; 
    const y = (img.offsetHeight)/2 - (slider.offsetHeight)/2;
    slide(x);
    slider.style.left = `${x}px`;
    slider.style.top = `${y}px`;


    slider.addEventListener("mousedown", slideStart);
    window.addEventListener("mouseup", slideEnd);



    function slideStart(e){
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove)
        
    }

    function slideEnd(e){
        clicked = 0;
    }

    function slideMove(e){
        let x = getCursorPoint(e)
        console.log(x, e.pageX, clicked, "moved");
        if (clicked == 0) return false;
        
        if (x < 0) {x = 0}
        if (x > img.offsetWidth) {x = img.offsetWidth};
        slide(x)

    }

    function slide(x){
        
        img.style.width = `${x + (slider.offsetWidth)/2}px`;
        slider.style.left = `${x}px`;

    }
    // Get cursor point relative to parentdiv
    function getCursorPoint(e){
        const a = img.getBoundingClientRect();
        let x = e.pageX - a.left;
        x = x - window.pageXOffset;
        return x

    }



}



initFunction();
