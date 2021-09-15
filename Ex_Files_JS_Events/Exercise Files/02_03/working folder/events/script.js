document.querySelector('.grid').addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'IMG') {
    console.log("in event", e)
    var myElement = document.createElement('div')
    myElement.className = 'preview'
    e.target.parentNode.appendChild(myElement)
    var myImg = document.createElement('img')
    var imageLoc =  e.target.src
    myImg.src = imageLoc.substr(0, imageLoc.length-7) +".jpg";
    myElement.appendChild(myImg)
    e.target.addEventListener('mouseout', function handler(d){
      var MyNode = d.target.parentNode.querySelector('div.preview');
      MyNode.parentNode.removeChild(MyNode)
      e.target.removeEventListener("mouseout", handler, false)

    }, false)

  } // check to see that I clicked on IMG only
}, false); // click event