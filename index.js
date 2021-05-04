const express = require('express');

const appid = process.env.APPID;
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send(`appid: ${appid} home page says hello!`);
});

app.get('/app1', (req, res) => {
  res.send(`appid: ${appid} app1 page says hello!`);
});

app.get('/app2', (req, res) => {
  res.send(`appid: ${appid} app2 page says hello!`);
});

app.get('/admin', (req, res) => {
  res.send(`appid: ${appid} ADMIN page`);
});

app.listen(appid, () => console.log(`${appid} is listening`));
