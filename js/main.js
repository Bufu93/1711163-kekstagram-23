import {generatePhotoArray} from './data.js';
import {getPictures} from './pictures.js';

const pictures = generatePhotoArray();
const picturesContainer = document.querySelector('.pictures.container');
const picturesFragment = getPictures(pictures);
picturesContainer.appendChild(picturesFragment);


