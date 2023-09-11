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


const plant = document.querySelectorAll('.plant');
const canvas = document.querySelector('canvas');
canvas.style.width = field.offsetWidth + "px";
canvas.style.height = field.offsetHeight + "px";
// ctx.style.top = field.offsetTop + "px";
ctx = canvas.getContext('2d');

class Plant {
  constructor(x, y, width, height) {

  }
}