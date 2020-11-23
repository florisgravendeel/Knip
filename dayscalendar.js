var dayjs = require('dayjs');
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

var now = new Date();
var today = dayjs(now);

var today = dayjs();
date1 = today.add(7, 'day');

document.getElementById("text1").innerText = today;
document.getElementById("text2").innerText = date1;

