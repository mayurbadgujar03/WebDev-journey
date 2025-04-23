/**
 * Write your challenge solution here
 */
document.querySelectorAll('input', (inputTrack) => {
    let display = document.getElementById(`${inputTrack.target.id.slice(0, -5)}Display`);
    inputTrack.addEventListener('input', () => {
        display.textContent = e.target.value; 
    })
    
    inputTrack.addEventListener('blur', () => {
        if(inputTrack?.value == ""){
            document.getElementById(display.id).textContent = "Not provided";
        } 
    });    
});