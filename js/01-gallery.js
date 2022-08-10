import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector('.gallery');



const makeGalleryItems = (images)  => 
    images.reduce(
        (acc, { preview, original, description }) => acc + ` 
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src=${preview} data-source=${original} alt=${description} />
        </a>
        </div>`, ''
    );


const result = makeGalleryItems(galleryItems);
div.insertAdjacentHTML('beforeend', result);


// console.log(makeGalleryItems);



// const container = document.querySelector('.gallery');

// container.addEventListener('click', onClick);
// function onClick(e) {
//     console.log(e.target.textContent);
// };

console.log(galleryItems);
