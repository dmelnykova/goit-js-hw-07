import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

list.insertAdjacentHTML('beforeend', markup);

list.addEventListener('click', handlerClick);

function createMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </li>`;
    }).join('');  
    }

    //click

function handlerClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
}

    //modal
// const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" alt="${event.target.alt}"/>
// `, {
//     onShow: () => {}
// })

// instance.show()
    //escape

// console.log(galleryItems);
