let isMouseDown = false;
let lastX = 0;
let lastY = 0;
let currentSpeed = 0.01; // Rotation speed

const cube = document.querySelector('.cube');

// This function will handle both mouse and touch events for rotating the cube
function onMove(e) {
    if (!isMouseDown) return;

    // For touch events
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    const deltaX = x - lastX;
    const deltaY = y - lastY;

    const rotationX = (deltaY) * currentSpeed;
    const rotationY = (deltaX) * currentSpeed;

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    lastX = x;
    lastY = y;
}

// Function to start rotation on mouse/touch down
function onStart(e) {
    isMouseDown = true;
    lastX = e.clientX || e.touches[0].clientX;
    lastY = e.clientY || e.touches[0].clientY;
}

// Function to stop rotation on mouse/touch up
function onEnd() {
    isMouseDown = false;
}

// Mouse events
document.addEventListener('mousedown', onStart);
document.addEventListener('mousemove', onMove);
document.addEventListener('mouseup', onEnd);

// Touch events
document.addEventListener('touchstart', onStart);
document.addEventListener('touchmove', onMove);
document.addEventListener('touchend', onEnd);

// Speed control buttons
document.getElementById('i
