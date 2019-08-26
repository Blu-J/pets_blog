// @ts-check
/** @typedef {string & {__type: 'petName'}} PetName */
/** @typedef { number & {__t: 'petIndex'} } PetIndex */
/** @typedef {import('ramda')}  R*/
import {
  __,
  always,
  compose,
  equals,
  findIndex,
  identity,
  ifElse,
  isNil,
  lensIndex,
  map,
  match,
  mathMod,
  path,
  reject,
  view
} from "ramda";

const files = [
  "service-worker-index.html",
  "favicon.png",
  "global.css",
  "manifest.json",
  "pets/IMG_20190531_211627.jpg",
  "pets/IMG_20190617_201834.jpg",
  "pets/IMG_20190730_204943.jpg",
  "pets/IMG_20190731_220803.jpg",
  "pets/IMG_20190731_220809.jpg",
  "pets/IMG_20190731_220816.jpg",
  "pets/IMG_20190731_220821.jpg",
  "pets/IMG_20190731_220843.jpg",
  "pets/IMG_20190731_220847.jpg",
  "pets/IMG_20190731_220927.jpg",
  "pets/IMG_20190731_221115.jpg",
  "pets/IMG_20190731_221120.jpg",
  "pets/IMG_20190731_221144.jpg",
  "pets/IMG_20190731_221226.jpg",
  "pets/IMG_20190731_221721.jpg",
  "pets/IMG_20190731_221728.jpg"
];
/** @type {function(string[]): PetName[]} */
const getImages = compose(
  reject(isNil),
  map(path([1])),
  map(match(/pets\/(.*?).jpg/))
);
const pets = getImages(files);
export default pets;

const boundToIndex = /** @type {function(number): PetIndex} */ (mathMod(
  __,
  pets.length
));
/** @type {function(PetName): PetIndex} */
export const getFoundIndex = compose(
  ifElse(equals(-1), always(0), identity),
  // @ts-ignore
  findIndex(__, pets),
  equals
);
/** @type {function(number): PetName} */
export const getAtIndex = compose(
  // @ts-ignore
  view(__, pets),
  lensIndex,
  boundToIndex
);

console.assert(pets.length >= 2, "Expecting that we have more than 2 images");
console.assert(
  pets.length < files.length,
  "The images length should be less than input"
);

console.assert(boundToIndex(pets.length) === 0, "0 -> 0 for index mapping");
console.assert(
  boundToIndex(-1) === pets.length - 1,
  "should use modulo via math"
);

console.assert(getFoundIndex(pets[1]) === 1, "Should find first element");

console.assert(
  // @ts-ignore
  getFoundIndex("pets[1]") === 0,
  `getFoundIndex("pets[1]") should default to 0`
);

console.assert(
  getFoundIndex(getAtIndex(boundToIndex(1))) === 1,
  "getFoundIndex(getAtIndex(boundToIndex(1))) should be identity"
);
