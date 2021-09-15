


function displayActive(){
    const tabs = document.querySelectorAll('.tab');
    const content = document.querySelectorAll('.tab-content')
    tabs.forEach((tab,index) =>{

        if (tab.className.indexOf('active') > -1){
            content[index].style.display = "block";
        }
        else{
            content[index].style.display = "none";
        }
    })


}

displayActive();

function openCity(event, city){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab == event.target){
            tab.className += ' active'
        }
        else {
            tab.className = tab.className.split(' active')[0]
        }
    })
    displayActive()
}

