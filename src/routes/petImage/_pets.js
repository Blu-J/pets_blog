const all = "IMG_20190531_211627.jpg IMG_20190731_220809.jpg IMG_20190731_220847.jpg IMG_20190731_221144.jpg IMG_20190617_201834.jpg IMG_20190731_220816.jpg IMG_20190731_220927.jpg IMG_20190731_221226.jpg IMG_20190730_204943.jpg IMG_20190731_220821.jpg IMG_20190731_221115.jpg IMG_20190731_221721.jpg IMG_20190731_220803.jpg IMG_20190731_220843.jpg IMG_20190731_221120.jpg IMG_20190731_221728.jpg"
  .split(" ")
  .map(RegExp.prototype.exec.bind(/(.*?)\.jpg/))
  .filter(x => x.length)
  .map(([, value]) => value);
export default all;
