const plantImage = document.getElementById('plant-img');
const plant = document.querySelectorAll('.plant');
const plantDrag = document.getElementById('plant-drag');
const skop = document.querySelector('.skop');
const skopDrag = document.getElementById('skop-drag');
const canvas = document.querySelector('canvas');
canvas.style.width = field.offsetWidth + "px";
canvas.style.height = field.offsetHeight + "px";
ctx = canvas.getContext('2d');

const plantObj = [];

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
  constructor(obj, x, y, width, height) {
    this.obj = obj
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  draw() {
    // ctx.imageSmoothingEnabled = false;  
    this.obj.style.position = 'absolute';
    this.obj.style.width = this.width + "px";
    this.obj.style.top = this.y;
    this.obj.style.left = this.x;

    return this.obj;
  }

  die() {
    this.obj.remove();
  }

  log() {
    // console.log(this.box);
  }
}

let plantTarget;
let mousedown = false;
let mouseup = false;

window.addEventListener('mousedown', (e) => {
  if (e.target == plantImage) {
    plantDrag.style.width = plantImage.offsetWidth + "px";
    plantDrag.style.height = plantImage.offsetHeight + "px";
    plantDrag.style.display = 'block';
    plantTarget = e.target;
    console.log(plantTarget);
    window.addEventListener('mousemove', (event) => {
      plantDrag.style.top = event.clientY - (plantDrag.offsetHeight / 2) + "px";
      plantDrag.style.left = event.clientX - (plantDrag.offsetWidth / 2) + "px";
    });
  } else if (e.target == skop) {
    skopDrag.style.width = skop.offsetWidth + "px";
    skopDrag.style.height = skop.offsetHeight + "px";
    skopDrag.style.display = 'block';
    plantTarget = e.target;
    window.addEventListener('mousemove', (event) => {
      skopDrag.style.top = event.clientY - (skopDrag.offsetHeight / 2) + "px";
      skopDrag.style.left = event.clientX - (skopDrag.offsetWidth / 2) + "px";
    });
  }
});

let plantId = 0;

window.addEventListener('mouseup', (e) => {
  plantDrag.style.display = 'none';
  skopDrag.style.display = 'none';
  if (plantTarget == plantImage) {
    let box;
    for (i = 0; i < boxField.length; i++) {
      let boxY = boxField[i].offsetTop
      let boxX = boxField[i].offsetLeft;
      if (e.clientX >= boxX && e.clientX <= boxX + boxField[i].offsetLeft &&
        e.clientY >= boxY && e.clientY <= boxField[i].offsetHeight + boxY) {
        box = boxField[i];
        console.log(box);
      }
    }
    console.log(box.children.length);
    if (box.children.length <= 0) {
      let boxWidth = box.offsetWidth;
      let boxHeight = box.offsetHeight;
      let plant = plantImage.cloneNode(true);
      plant.id = plant.id + "-" + plantId++;
      plant.className = "plant-planted";
      let plantWidth = plantImage.offsetWidth;
      let plantHeight = plantImage.offsetHeight;
      let plantY = box.offsetTop + ((boxHeight - plantHeight) / 2) + "px";
      let plantX = box.offsetLeft + ((boxWidth - plantWidth) / 2) + "px";

      let obj = new Plant(plant, plantX, plantY, plantWidth, plantHeight);
      box.appendChild(obj.draw());
      plantTarget = null;
    }
  } else if (plantTarget == skop) {
    let plants = document.querySelectorAll('.plant-planted');
    for (let i = 0; i < plants.length; i++) {
      if (e.target == plants[i]) {
        e.target.remove();    
      }
    }
  }
});