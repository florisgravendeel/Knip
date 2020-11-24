var dayjs = require('dayjs');
dayjs().format()
var now = new Date();
var today = dayjs(now);

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end("123231231");
}).listen(8080);



//import dayjs from 'dayjs' // ES 2015


//date1 = today.add(7, 'day');

//document.getElementById("text1").innerText = today;
//document.getElementById("text2").innerText = date1;*/

