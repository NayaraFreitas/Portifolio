
const controls = document.querySelectorAll('.control'); //selecionei os buttons

let currentItem = 0; // o current como zero
const items = document.querySelectorAll('.item'); // selecionei o item
const maxItem = items.length; // para saber quantas itens tem 

controls.forEach(controls => {
  controls.addEventListener('click', () => {
    const isLeft = controls.classList.contains('left');
  
    if(isLeft) {
      currentItem -= 1;
    }else {
      currentItem += 1;
    }

    if(currentItem >= maxItem) {
      currentItem = 0
    }

    if(currentItem  < 0) {
      currentItem = maxItem - 1;
    }

    items.forEach(item => item.classList.remove('current-item'));

    items[currentItem].scrollIntoView({
      inline: "center",
      behavior:"smooth"
    })

    items[currentItem].classList.add('current-item');

    console.log('controls', isLeft , currentItem)
  })
})