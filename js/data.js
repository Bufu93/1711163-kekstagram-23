import {getRandomIntInclusive} from './util.js';

const NAMES = [
  'Иван',
  'Виктор',
  'Юлия',
  'Денис',
  'Дмитрий',
  'Ольга',
  'Алла',
];

const MESSAGE = [
  'В целом всё неплохо. Но не всё.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0 , elements.length -1)];

const getCommentsObj = (noRepInt) => {
  const commentsObj = {
    id: noRepInt,
    avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
  };
  return commentsObj;
};

const generateCommentsArray = () => {
  const commentsArrey = [];
  for (let i = 0; i < 6; i++) {
    const commentsObj = getCommentsObj(i);
    commentsArrey.push(commentsObj);
  }
  return commentsArrey;
};

const getObj = (noRepInt) => {
  const obj = {
    id: noRepInt,
    url: `photos/${noRepInt +1}.jpg`,
    description: 'photo',
    likes: getRandomIntInclusive(15, 200),
    comments: generateCommentsArray(),
  };
  return obj;
};

const generatePhotoArray = () => {
  const items = [];
  for (let i = 0; i < 25; i++) {
    const obj = getObj(i);
    items.push(obj);
  }
  return items;
};


export {generatePhotoArray};
