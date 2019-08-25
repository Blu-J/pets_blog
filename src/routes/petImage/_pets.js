import { compose, match, map, reject, isNil, prop } from "ramda";
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
const getJpgs = compose(
  reject(isNil),
  map(prop(1)),
  map(match(/pets\/(.*?).jpg/))
);
const all = getJpgs(files);
export default all;
