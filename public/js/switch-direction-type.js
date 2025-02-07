const directionType = {
  import: 'IMPORT',
  export: 'EXPORT',
}

const importBox = document.getElementById('importBox');
const exportBox = document.getElementById('exportBox');

const selectingButtons = document.querySelectorAll('#selectDirectionType > button');
const selectDirectionType = document.getElementById('selectDirectionType')

const buttonByType = {
  [directionType.import]: selectingButtons[0],
  [directionType.export]: selectingButtons[1],
}

const boxByType = {
  [directionType.import]: importBox,
  [directionType.export]: exportBox,
}

selectingButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const selectedType = event.target.dataset.type
    const direction = event.target.dataset.direction
    const reversedType = selectedType === directionType.import ? directionType.export : directionType.import

    if (buttonByType[selectedType].classList.contains('active')) return

    selectDirectionType.classList.remove('left', 'right');
    selectDirectionType.classList.add(direction);

    buttonByType[selectedType].classList.add('active')
    buttonByType[reversedType].classList.remove('active')

    boxByType[selectedType].style.display = ''
    boxByType[reversedType].style.display = 'none'
  })
})
