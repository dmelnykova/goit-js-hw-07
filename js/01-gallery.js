import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', handlerItemClick);




function createMarkup(arr) {
    return arr.map((id, preview, original, description) => {
        return `<li class="gallery__item gallery__image js-list-item">
        <img src="${original}" alt="${description}"/>
        </li>`
    }).join('');    
}

function handlerItemClick(event) {
    console.log(event.target);
    
}

console.log(galleryItems);
