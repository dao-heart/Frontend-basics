

document.querySelector(".grid").addEventListener('click', function(e){

    if (e.target.tagName === "IMG"){
        var howMany = this.querySelectorAll('li').length
        console.log(this.querySelectorAll('li'))
        if (howMany > 1){
            var removeNode = e.target.parentNode;
            removeNode.parentNode.removeChild(removeNode)
        } else {
            var photoTitle = e.target.alt;
            document.querySelector('#art p').textContent = "You have picked "+ photoTitle;
        } 
        

    
    }
    
},false);