var express = require('express');
var url = require('url');
var router = express.Router();
var codeModel = require('../models').de_tb_code;

router.get('/', function(req, res, next) {
  try{
	var parseObj = url.parse(req.url, true);
	console.log(`req.url => "${req.url}"`);	
	
	
	
    const results = codeModel.findAll();
    res.json(results);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.get('/:mstCode', function(req, res, next) {	
	
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

router.get('/get', function(req, res, next) {
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
});


module.exports = router;
