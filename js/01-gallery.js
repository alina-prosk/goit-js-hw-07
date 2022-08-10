import { galleryItems } from './gallery-items.js';
// Change code below this line

const insertGallery = (img) => {
    const div = document.querySelector('.gallery__item');
    div.insertAdjacentHTML('beforeend', img);
};

const result = makeGalleryItems(galleryItems);
insertGallery(result);

const makeGalleryItems = (images)  => 
    images.reduce(
        (acc, { preview, original, description }) => acc + ` 
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src=${preview} data-source=${original} alt=${description} />
        </a>
        </div>`, ''
    );





// const galleryItemEl = document.querySelector('.gallery__item');
// const makeGalleryImage = galleryItems
//     .map(makeGalleryItems).join('');

// galleryItemEl.insertAdjacentHTML('beforeend', makeGalleryImage);
// console.log(makeGalleryImage);



// const container = document.querySelector('.gallery');

// container.addEventListener('click', onClick);
// function onClick(e) {
//     console.log(e.target.textContent);
// };

console.log(galleryItems);
