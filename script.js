function selectColor(event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', selectColor);


function paintPixel(e) {
    const selectedColor = document.querySelector('.selected').id;
    e.target.style.backgroundColor = selectedColor;
  }
  
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', paintPixel);
}

function clearBoard() {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor= 'white';
    }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clearBoard);