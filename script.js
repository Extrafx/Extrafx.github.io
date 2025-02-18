const speedSlider = document.getElementById('speed');
const speedValue = document.getElementById('speed-value');
const cube = document.querySelector('.cube');

// When the slider value changes, update the cube's rotation speed
speedSlider.addEventListener('input', function() {
    const speed = speedSlider.value;
    speedValue.textContent = speed;  // Update the display of the current speed
    cube.style.animationDuration = `${speed}s`;  // Adjust the animation speed
});
