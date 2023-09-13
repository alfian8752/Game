const plantImage = document.getElementById('plant-img');
const plant = document.querySelectorAll('.plant');
const plantDrag = document.getElementById('plant-drag');
const canvas = document.querySelector('canvas');
canvas.style.width = field.offsetWidth + "px";
canvas.style.height = field.offsetHeight + "px";
ctx = canvas.getContext('2d');


const div = document.createElement('div');
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 9; j++) {
    const field = document.getElementById('field')
    div.className = "box";
    div.id = i + "-" + j;
    field.appendChild(div.cloneNode(true));
  }
}

const boxField = document.querySelectorAll('.box');

class Plant {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  draw() {
    // ctx.imageSmoothingEnabled = false;  
  }
}

let plantTarget;

window.addEventListener('mousedown', (e) => {
  if (e.target == plantImage) {
    plantTarget = e.target
    console.log(plantTarget);
  }
});

window.addEventListener('mouseup', (e) => {
  if (plantTarget == plantImage) {
    let box = document.getElementById(e.target.id);
    let plant = plantImage.cloneNode(true);
    let plantWidth = plantImage.offsetWidth;
    let plantHeight = plantImage.offsetHeight;
    let boxWidth = box.offsetWidth;
    let boxHeight = box.offsetHeight;
    plant.style.position = 'absolute';
    plant.style.width = plantWidth + "px";
    plant.style.top = box.offsetTop + ((boxHeight - plantHeight) / 2) + "px";
    plant.style.left = box.offsetLeft + ((boxWidth - plantWidth) / 2) + "px";
    box.appendChild(plant);
    plantTarget = null;
  }
})

// window.addEventListener('mousedown', (e) => {
//   console.log(e.target);
// })