import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector('.gallery');

const renderGalleryItems = (images)  => 
    images.reduce(
        (acc, { preview, original, description }) => acc + ` 
    <div class="gallery__item">
        <a class="gallery__link" href='${original}'>
    <img class="gallery__image" src=${preview} data-source=${original} alt=${description} />
        </a>
        </div>`, ''
    );

const result = renderGalleryItems(galleryItems);
div.insertAdjacentHTML('beforeend', result);


const clickEvent = (event) => {
    event.preventDefault();
    if(event.target.classList.contains("gallery"))
    return;

    const sourceImg = event.target.dataset.source;

    const showImages = basicLightbox.create(`
    <img src="${sourceImg}"width="800" height="600">`, {
    onShow: () => {
        window.addEventListener("keydown", closeImages);
    },
    onClose: () => {
        window.removeEventListener("keydown", closeImages);
    },
    });
    function closeImages (event) {
    if (event.code === 'Escape') {
        showImages.close();
    }
    }
    showImages.show();
} 

div.addEventListener("click",clickEvent);

