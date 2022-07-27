const colorPalette = document.querySelector('#color-palette');
const pixel = document.getElementsByClassName('pixel');
const button = document.getElementById('clear-board');

function selectColor(e) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    e.target.classList.add('selected');
}

colorPalette.addEventListener('click', selectColor);


function paintPixel(e) {
    const selectedColor = document.querySelector('.selected').id;
    e.target.style.backgroundColor = selectedColor;
}

for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', paintPixel);
}

function clearBoard() {
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor= 'white';
    }
}

button.addEventListener('click', clearBoard);