var express = require('express');
var url = require('url');
var router = express.Router();
var empModel = require('../models').de_tb_emp;
var loginModel = require('../models').de_tb_login;

var codeModel = require('../models').de_tb_code;



/* Join */
/* http://webframeworks.kr/tutorials/expressjs/expressjs_orm_three/  */
router.get('/', function(req, res, next) {

	empModel.hasMany(loginModel, {foreignKey: 'emp_no', as: 'loginModel' }); 
	
	empModel.find({
	    where: {emp_no: '123'}
	,   include: {model: loginModel, as: 'loginModel', attributes: ['emp_no', 'emp_nm']}
	}).then(function(result) {
	    res.json(result);
	}).catch(function(err){
	     //TODO: error handling
		console.error(err);
	});
});

router.get('/query', function(req, res, next) {
	
	codeModel.sequelize.query('SELECT mst_code, mst_code_nm from de_tb_code limit 1').then(function(result) {
	    res.json(result);
	}).catch(function(err){
	     //TODO: error handling
		console.error(err);
	});
});

router.get('/dquery', function(req, res, next) {
	
	codeModel.sequelize.query('SELECT mst_code, mst_code_nm from de_tb_code where mst_code=:mst_code limit 1', {replacements :{mst_code:'M0400'}} )
		.then(function(result) {
	    res.json(result);
	}).catch(function(err){
	     //TODO: error handling
		console.error(err);
	});
});

router.get('/join_query', function(req, res, next) {
	
	empModel.sequelize.query(' SELECT emp.emp_no, emp.emp_nm, login.emp_login_ip FROM de_tb_emp AS emp LEFT JOIN de_tb_login AS login ON emp.emp_no = login.emp_no limit 1')
	//loginModel.sequelize.query(' SELECT emp.emp_no, emp.emp_nm, login.emp_login_ip FROM de_tb_emp AS emp LEFT JOIN de_tb_login AS login ON emp.emp_no = login.emp_no limit 1')
		.then(function(result) {
	    res.json(result);
	}).catch(function(err){
	     //TODO: error handling
		console.error(err);
	});
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
