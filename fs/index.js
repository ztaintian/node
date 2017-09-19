let fs = require('fs');

// fs.readFile('text.txt',(err,data)=>{
// 	if(err){console.log(err)}
// 		fs.writeFile('message.txt', data, (err) => {
//   		if (err) throw err;
//   		console.log('The file has been saved!');
// 		});
// })
// https://www.baidu.com/img/bd_logo1.png  百度图片


fs.readFile('logo.png',(err,data)=>{
	if(err){console.log(err)}
	fs.writeFile('copy.png', data, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	});
})
