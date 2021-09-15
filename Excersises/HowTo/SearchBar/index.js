const menuListElements = document.querySelectorAll("a"); 

let menuItems = [];
menuListElements.forEach(menuItem => {
    menuItems.push(menuItem.textContent)
});
console.log(menuItems,"menuItems");

function searchTerm(word){
    

}


