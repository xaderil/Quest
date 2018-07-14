var app = require('./app');
var config = require('./config');

app.listen(config.PORT, () =>
  console.log(`Forum app listening on port 3000!`)
);
