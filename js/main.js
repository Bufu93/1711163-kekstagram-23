const MAX_WIDTH = 140;
const NAMES = [
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const MESSAGE = "В целом всё неплохо. Но не всё.";

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

let newObj = () => ({
  id: getRandomIntInclusive(1, 25),
  url: `${"photos/" + getRandomIntInclusive(1, 25) + ".jpg"}`,
  description: "photo",
  likes: getRandomIntInclusive(15, 200),

});


let newArr = Array.from({length: 25}).map(_ => newObj());




let comments = () => ({
  id: getRandomIntInclusive(1, 6),
  avatar: `${"img/avatar-" + getRandomIntInclusive(1, 6) + ".svg"}`,
  message: MESSAGE,
  name: Math.floor(Math.random()*NAMES.length)
});

let newArrComments = Array.from({length: 6}).map(_ => comments());


console.log(newArr);
console.log(newArrComments);
