const express = require('express');
const app = express();

app.get('/topic', function(req, res){
	var topic = [
		'javascript is...',
		'nodejs is...',
		'express is...'
	];
	var li = `
	<li><a href="/topic?id=0">js</a></li>
	<li><a href="/topic?id=1">nodejs</a></li>
	<li><a href="/topic?id=2">express</a></li>
	`
  // 선택한 링크에 따라서 다른 정보를 출력하는 동적인 애플리케이션의 기본골격
	res.send(li + '<br>' + topic[req.query.id]);
})