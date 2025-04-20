/**
 * Write your challenge solution here
 */
const body = document.getElementById('body');
const bulb = document.getElementById('bulb');
const toggleBtn = document.getElementById('toggleButton');
const statusElement = document.getElementById('status');
const toggleSound = new Audio('sound/sound.wav')
let isLightOn;

isLightOn = false;

toggleBtn.addEventListener('click', () => {
    isLightOn = !isLightOn;
    colorTheme(isLightOn);
})

function colorTheme(isLightOn) {
    toggleSound.currentTime = 0; 
    toggleSound.play();
    
    toggleBtn.innerText = isLightOn ? 'Turn Off' : 'Turn On';
    statusElement.textContent = `Status: ${ isLightOn ? 'On' : 'Off' }`;
    bulb.className = isLightOn ? 'bulb' : "bulb off";
    body.classList.toggle( 'dark-mode', isLightOn );
}