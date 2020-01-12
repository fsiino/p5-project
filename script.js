const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const save = document.getElementById('save');
const open = document.getElementById('open');
const undo = document.getElementById('undo');

const paths = [];
let currentPath = [];

function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(255);
}

function draw() {
  noFill();

  if (mouseIsPressed) {
    const point = {
      x: mouseX,
      y: mouseY,
      color: colorInput.value,
      weight: weight.value
    };
    currentPath.push(point);
  }

  paths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      vertex(point.x, point.y);
    });
    endShape();
  });
}

function mousePressed() {
  currentPath = [];
  paths.push(currentPath);
}

clear.addEventListener('click', () => {
  paths.splice(0);
  background(255);
});

save.addEventListener('click', () => {
  saveCanvas(canvas, 'drawing', 'jpg')
});

open.addEventListener('click', () => {
  alert('Load image coming soon!')
});

undo.addEventListener('click', () => {
  alert('Undo coming soon!')
});

addEventListener('keydown', e => {
  if (e.keyCode === 17) {
    addEventListener('keydown', e => {
      if (e.keyCode === 90) {
        alert('Undo coming soon!')
      }
    })
  }
});