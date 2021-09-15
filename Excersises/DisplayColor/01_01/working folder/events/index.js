'use strict'
// Instead of adding the click events to all li
// We can add the event to ul and propogate the event to 
// children 


// 1. Approach 
// Add to event to every single li using id/or some get elememt 

// 2. Add to ul
// add event listener or 

// target -> target of the event
// currentTarget -> the current element on which the event is firing 

if (window.addEventListener){
document.getElementById("menu").addEventListener('click', function(e){

    alert("Clicked ul")
}),false // bubbling

document.getElementById("pink").addEventListener('click', function(e){
    
    alert("pink")
    e.stopPropagation()
}),false

}


/// Capturing(Top down, True) vs Bubbling(Bottom Up, false) - diff browser

/// Prevent default behavior