const MAX_WIDTH = 140;
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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1, 10);

const getTextWithEllipsis = function (value, withWrap) {
  if (value.length >= withWrap) {
    return `${value.substring(0, withWrap)}...`;
  }
  return value;
};

getTextWithEllipsis('1', MAX_WIDTH);

const getObj = () => {
  const obj = {
    id: getRandomIntInclusive(1, 25),
    url: `photos/${getRandomIntInclusive(1, 25)}.jpeg`,
    description: 'photo',
    likes: getRandomIntInclusive(15, 200),
  };
  return obj;
};

const generatePhotoArray = () => {
  const items = [];
  for (let i = 0; i < 25; i++) {
    const obj = getObj();
    items.push(obj);
  }
  return items;
};

generatePhotoArray();

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0 , elements.length -1)];

const getCommentsObj = () => {
  const commentsObj = {
    id: getRandomIntInclusive(1, 6),
    avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
  };
  return commentsObj;
};


const generateCommentsArray = () => {
  const commentsArrey = [];
  for (let i = 0; i < 6; i++) {
    const commentsObj = getCommentsObj();
    commentsArrey.push(commentsObj);
  }
  return commentsArrey;
};

generateCommentsArray();
