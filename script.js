const div = document.createElement('div');
for (var i = 1; i < 45; i++) {
  const field = document.getElementById('field')
  div.className = "box";
  div.id = i
  field.appendChild(div.cloneNode(true));
} 
const box = document.querySelectorAll('.box');

box.forEach(element => {
  element.addEventListener('onmouseover', () => console.log())
});

const plantImage = document.getElementById('plant-img')
const plant = document.querySelectorAll('.plant');
const canvas = document.querySelector('canvas');
canvas.style.width = field.offsetWidth + "px";
canvas.style.height = field.offsetHeight + "px";
ctx = canvas.getContext('2d');

class Plant {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  draw() {
    // ctx.imageSmoothingEnabled = false;
    ctx.drawImage(plantImage, 10, 10, 30,15)
  }
}

const plants = new Plant();
plants.draw()