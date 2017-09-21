var http = require("http");
var fs = require("fs");
var path = require('path');
var request = require('request');

 

var url = "http://s0.hao123img.com/res/img/logo/logonew.png";
request.get(url).pipe(fs.createWriteStream(path.join('./', 'aaa.jpg')));
// http.get(url, function(res){
//     var imgData = "";

//     res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开


//     res.on("data", function(chunk){
//         imgData+=chunk;
//     });

//     res.on("end", function(){
//         fs.writeFile("logonew.png", imgData, "binary", function(err){
//             if(err){
//                 console.log("down fail");
//             }
//             console.log("down success");
//         });
//     });
// });