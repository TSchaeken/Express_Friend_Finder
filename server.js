const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORt || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes/API-routes.js')(app);

require('./app/routes/HTML-routes.js')(app);

app.use(express.static('./app/public'));

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
