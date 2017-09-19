 var object = {
 		name:'kk',
 		sayname:function(){
 			console.log('1')
 		}
 }

 object.prototype.name = 'hh'
 object.prototype.sayname = function(){
 	console.log('2')
 }

 