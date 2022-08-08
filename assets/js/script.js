// get canvas from DOM
const canvas = document.querySelector('#drawing-canvas');

// get other elements from DOM
const resetBtn = document.querySelector('.reset-btn');
const clrBlack = document.querySelector('.color-black');
const clrRed = document.querySelector('.color-red');
const clrBlue = document.querySelector('.color-blue');
const clrGreen = document.querySelector('.color-green');

// set canvas size
const docWidth = document.body.clientWidth;
    // -50 takes into account the 50px header
const docHeight = document.body.clientHeight - 50;
canvas.height = docHeight;
canvas.width = docWidth;

// set up drawing object
const ctx = canvas.getContext('2d');

// line properties
ctx.lineWidth = 10;
ctx.lineCap = 'round';

// is user drawing (false by default)
let isDrawing = false;

// mouse down/up functions
const mouseDown = () => {
    isDrawing = true;
};

const mouseUp = () => {
    isDrawing = false;
    ctx.beginPath();
};

// draw when mouse is down and moving
const draw = e => {
        // -50 takes into account the 50px header
    if (isDrawing) {
        ctx.lineTo(e.clientX, e.clientY - 50);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY - 50);
    };
};

// event listeners
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mousemove', draw);

resetBtn.addEventListener('click', () => window.location.reload());

clrBlack.addEventListener('click', () => ctx.strokeStyle = 'black');
clrRed.addEventListener('click', () => ctx.strokeStyle = 'red');
clrBlue.addEventListener('click', () => ctx.strokeStyle = 'blue');
clrGreen.addEventListener('click', () => ctx.strokeStyle = 'green');