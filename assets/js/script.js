// get canvas from DOM
const canvas = document.querySelector('#drawing-canvas');

// set canvas size
const docWidth = document.body.clientWidth;
const docHeight = document.body.clientHeight;
canvas.height = docHeight;
canvas.width = docWidth;

// set up drawing object
const ctx = canvas.getContext('2d');

// line properties
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = 'black';

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
    if (isDrawing) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    };
};

// event listeners
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mousemove', draw);