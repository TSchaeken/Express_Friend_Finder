const path = require('path');

module.exports = function(app) {
  app.get('/api/survey', function(req, res) {
    console.log('going to survey form');
    res.sendFile(path.join(__dirname, '.././public/survey.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '.././public/home.html'));
  });
};
