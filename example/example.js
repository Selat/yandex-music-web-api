var api = require('../yandex-music-web-api')
var fs = require('fs')
var secrets = require('./secrets')

var yapi = new api.YandexMusicWebApi()
yapi.setCookie(secrets.cookie)

yapi.getAlbum(599671, (js) => {
  // console.log(js)
})

yapi.getTrack(5450573, 599671, (js) => {
  // console.log(js)
})

yapi.getArtist(519187, (js) => {
  // console.log(js)
})

yapi.searchAlbums('краснознамённая дивизия', (js) => {
  console.log('The first album: ', js.items[0])
})

var data = []
yapi.downloadTrack(5450573, 599671, (chunk) => data.push(chunk), () => {
  console.log('downloaded ', data.length, ' chunks')
  fs.writeFileSync('track.mp3', Buffer.concat(data))
})

yapi.getFeed((js) => console.log(js.days[0].tracksToPlay))

yapi.getUserArtists('selatnick', (js) => {
  console.log(js)
})
