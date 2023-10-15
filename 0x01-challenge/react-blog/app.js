const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const React = require('react/addons');
const Iso = require('iso');
const Router = require('react-router');
const alt = require('./src/alt');
const config = require('./config.js');
const posts = require('./routes/post.routes');
const routes = require('./src/routes.jsx');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Static files and middleware
app.use(express.static(path.join(__dirname, 'public'));
app.use(session({ secret: 'copy cat', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());

// Routes setup
app.use('/', posts);

app.use(function (req, res) {
  const data = res.locals.data || {};
  alt.bootstrap(JSON.stringify(data));
  const metaDescription = res.locals.metaDescription || '';
  const iso = new Iso();

  Router.run(routes, req.url, function (Handler) {
    const content = React.renderToString(React.createElement(Handler));
    iso.add(content, alt.flush());

    res.render('index', {
      content: iso.render(),
      pageTitle: config.pageTitle,
      metaDescription: metaDescription
    });
  });
});

// Production error handler
app.use(function (err, req, res, next) {
  if (!err.status || err.status !== 404) {
    err.status = 500;
  }
  console.error(err);
  res.status(err.status);
  res.sendFile(path.resolve(__dirname + '/views/error/' + err.status + '.html');
});

app.listen(config.port, function () {
  console.log('Listening on ' + config.baseUrl);
});
