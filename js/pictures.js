import { generatePhotoArray } from './data.js';

const picturesElement = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture');
const fragment = document.createDocumentFragment();
const getPictures = generatePhotoArray();

getPictures.forEach((picture) => {
  const usersPicture = picturesTemplate.cloneNode(true);
  usersPicture.querySelector('.picture__img').src = picture.url;
  usersPicture.querySelector('.picture__like').innerText = picture.likes;
  usersPicture.querySelector('picture__comments').innerText = picture.comments;
  picturesElement.appendChild(usersPicture);
  fragment.appendChild(usersPicture);
});
picturesElement.appendChild(fragment);

