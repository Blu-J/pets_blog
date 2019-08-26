// @ts-check
/** @typedef {string & {__type: 'petName'}} PetName */
import { compose, match, map, reject, isNil, path } from "ramda";
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
const all = getImages(files);
export default all;

console.assert(all.length >= 2, "Expecting that we have more than 2 images");
console.assert(
  all.length < files.length,
  "The images length should be less than input"
);
