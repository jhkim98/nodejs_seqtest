var express = require('express');
var url = require('url');
var router = express.Router();
var codeModel = require('../models').de_tb_code;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
  //models.De_tb_code.findAll().then(results => res.json(results));

});
/*

router.get('/code', function(req, res, next) {
  try{
    const users = codeModel.findAll();
    //res.render('index', {users});
    //console.log({users});
    res.json(users);
  } catch(error) {
    console.error(error);
    next(error);
  }
});
router.get('/code/:mstCode', function(req, res, next) {	
	const mstCode = req.params.mstCode;	
	console.log(`mst_code => "${mstCode}"`);	
	codeModel.findAll({
				  where: {
				    mst_code: `${mstCode}`
				  }
				}).then(results => {
	     res.json(results);
	  }).catch(err => {
	     console.error(err);
	  });
	});

router.get('/code', function(req, res, next) {
	var parseObj = url.parse(req.url, true);
	//var id = parseObj.query.id;
	var mstCode = parseObj.query.mst_code;
	
//	console.log(`id:"%s", name : "%s"`, id, name);	
	
	codeModel.findAll({
				  where: {
				    mst_code: `${mstCode}`
				  }
				}).then(results => {
	     res.json(results);
	  }).catch(err => {
	     console.error(err);
	  });
	});*/


module.exports = router;
