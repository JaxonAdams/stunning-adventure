// Get canvas from DOM
const canvas = document.querySelector('#drawing-canvas');

// Set canvas size
const docWidth = document.body.clientWidth;
const docHeight = document.body.clientHeight;
canvas.height = docHeight;
canvas.width = docWidth;

// Set up drawing object
const ctx = canvas.getContext('2d');

// test draw line
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.stroke();