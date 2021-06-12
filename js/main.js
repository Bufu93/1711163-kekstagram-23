function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1, 10);


const MAX_WIDTH = 140;

const getTextWithEllipsis = function (value, withWrap) {
  if (value.length >= withWrap) {
    return `${value.substring(0, withWrap)}...`;
  }
  return value;
};

getTextWithEllipsis('asdsadsadsadsaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddаsdsadsadsadsadddddddddddddddddddddddddddddddddddddddddddddddddddddd', MAX_WIDTH);
