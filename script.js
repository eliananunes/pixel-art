function selectColor(event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', selectColor);