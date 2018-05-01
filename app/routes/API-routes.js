const logg = require('.././public/assets/logic.js');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(logg.friends);
  });

  app.post('/api/formsubmit', function(req, res) {
    let arr = Object.values(req.body);
    res.json(logg.comparison(arr));
  });
};
