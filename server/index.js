var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash')
var _db = require('underscore-db')
var low = require('lowdb');
var jsonDataSource = require('./datasource/prezis.json');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

// Create database
var db = low();
db.object = jsonDataSource;
// Add underscore-db methods to db
db._.mixin(_db);

router.route('/presentations/:offset/:pagesize')
  .get(function(req, res) {
    res.json({
      total: db('presentations').size(),
      presentations: db('presentations').chunk(req.params.pagesize)[req.params.offset] || []
    });
  });

app.use('/api', router);

app.listen(port);
console.log('Server started on port ' + port);