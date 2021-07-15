import { generatePhotoArray } from './data.js';

const pictures = generatePhotoArray();

const getPicture = (element, item) => {
  const { url, comments, likes } = item;
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__comments').textContent = comments.length;
  element.querySelector('.picture__likes').textContent = likes;

  return element;
};

const pictureTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures.container');

const getPictures = (items) => {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const picture = getPicture(pictureTemplate.cloneNode(true), item);
    fragment.appendChild(picture);
  });

  return fragment;
};

const picturesFragment = getPictures(pictures);
picturesContainer.appendChild(picturesFragment);

export {getPictures};
