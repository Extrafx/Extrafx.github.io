let isMouseDown = false;
let lastX = 0;
let lastY = 0;
let currentSpeed = 0.01; // Initial rotation speed

const cube = document.querySelector('.cube');

// Function to handle mouse and touch events for rotation
function onMove(e) {
    if (!isMouseDown) return;

    const x = e.clientX || e.touches[0].clientX; // For touch event support
    const y = e.clientY || e.touches[0].clientY; // For touch event support

    const deltaX = x - lastX;
    const deltaY = y - lastY;

    const rotationX = (deltaY) * currentSpeed;
    const rotationY = (deltaX) * currentSpeed;

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    lastX = x;
    lastY = y;
}

// Start rotating on mouse/touch down
function onStart(e) {
    isMouseDown = true;
    lastX = e.clientX || e.touches[0].clientX; // Get the touch or mouse position
    lastY = e.clientY || e.touches[0].clientY;
}

// End rotating when mouse/touch is released
function onEnd() {
    isMouseDown = false;
}

// Add event listeners for both mouse and touch events
document.addEventListener('mousedown', onStart);
document.addEventListener('mousemove', onMove);
document.addEventListener('mouseup', onEnd);

document.addEventListener('touchstart', onStart);
document.addEventListener('touchmove', onMove);
document.addEventListener('touchend', onEnd);

// Optionally, add a speed control button for mobile as well
document.getElementById('increaseSpeed').addEventListener('click', () => {
    currentSpeed += 0.01; // Increase rotation speed
});

document.getElementById('decreaseSpeed').addEventListener('click', () => {
    currentSpeed = Math.max(0.01, currentSpeed - 0.01); // Decrease rotation speed
});
