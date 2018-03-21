const express = require('express');
const path = require('path')
const qr = require('qr-image');

const app = express();
const router = express.Router();

// 静态页面
app.use(express.static(path.join(__dirname, 'public')));

app.get('/qrcode', function (req, res, next) {
  let text = req.query.text || 'https://api.oonnnoo.com/qr/';
  let ec_level = req.query.level || 'M';
  let size = parseInt(req.query.size / 23) || 1;
  console.log(size)
  code = qr.image(text, {
    type: 'png',
    ec_level: ec_level,
    size: size,
    margin: 1
  });
  res.setHeader('Content-type', 'image/png'); //sent qr image to client side
  code.pipe(res);
});

app.listen(3000, function () {
  console.log('server is running')
})
