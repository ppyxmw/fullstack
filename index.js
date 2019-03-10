const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); // order is important
require('./services/passport');

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);

//we take the function snd provide app are the arguement
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log('Server is runing on port' + PORT);
});
