const sharp = require('sharp')

const sharpStream = sharp({
  create: {
    width: 100,
    height: 100,
    channels: 4,
    background: { r: 255, g: 0, b: 0, alpha: 0.5 }
  }
})

const promises = []

promises.push(
  sharpStream
    .clone()
    .jpeg()
    .toFile('./output/image.jpg')
)

promises.push(
  sharpStream
    .clone()
    .png()
    .toFile('./output/image.png')
)

promises.push(
  sharpStream
    .clone()
    .webp()
    .toFile('./output/image.webp')
)

promises.push(
  sharpStream
    .clone()
    .tiff()
    .toFile('./output/image.tiff')
)

Promise.all(promises)
  .then(res => { console.log('Done!', res) })
  .catch(err => console.log(err))
