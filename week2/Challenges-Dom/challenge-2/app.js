/**
 * Write your challenge solution here
 */
const mainHeading = document.getElementById('mainHeading');

document.addEventListener('click', (e) => {
    if(e.target.tagName == 'BUTTON'){
        const clickedElement = e.target.id;
    
        if (clickedElement == "resetButton"){
            mainHeading.style.color = "black";
        }
    
        let color = clickedElement.slice(0, -6);
        mainHeading.style.color = color
    };

});