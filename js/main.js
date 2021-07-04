const MAX_WIDTH = 140;
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

function generateArray() {
  const arr = [];
  const newObj = [];
  for (let i = 0;i <= arr.length - 25;i++) {
    newObj[25] = {
      id: getRandomIntInclusive(1, 25),
      url: `photos/ ${getRandomIntInclusive(1, 25)} .jpeg`,
      description: 'photo',
      likes: getRandomIntInclusive(15, 200),
    };

  }
  return newObj;
}

generateArray();
