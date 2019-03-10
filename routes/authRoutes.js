// note this is the module not the file
const passport = require('passport');

// see this as exporting a function that takes one arg. In index we make the express app the arg so it is accessable here
module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
oPb4S50Nhz5tBkYj;
