const container = document.getElementById('container');
const generateBtn = document.getElementById('generateBtn');
const body = document.getElementById('bdy');

generateBtn.addEventListener('click', generateBackgroundshape);
generateBtn.addEventListener('click', generateBackgroundcolor);

function generateBackgroundshape() {
  const numShapes = 50;

  while (container.firstChild) {
    container.firstChild.remove();
  }

  for (let i = 0; i < numShapes; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    shape.style.left = `${x}px`;
    shape.style.top = `${y}px`;

    const size = Math.floor(Math.random() * 200) + 50; 
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    shape.style.backgroundColor = `#${randomColor}`;

    container.appendChild(shape);
  }
}

function generateBackgroundcolor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = `#${randomColor}`;
}
