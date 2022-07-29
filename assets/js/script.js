// get canvas from DOM
const canvas = document.querySelector('#drawing-canvas');

// set canvas size
const docWidth = document.body.clientWidth;
const docHeight = document.body.clientHeight;
canvas.height = docHeight;
canvas.width = docWidth;

// set up drawing object
const ctx = canvas.getContext('2d');

// is user drawing (false by default)
let isDrawing = false;

// mouse down/up functions
const mouseDown = () => {
    isDrawing = true;
};

const mouseUp = () => {
    isDrawing = false;
};

// event listeners
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);