
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/StudentDB',{useNewUrlParser:true},(err)=>{
	if(!err){
		console.log('mongodb connectin successful');
	}
	else{
		console.log('error:DB nt connected:'+err);
	}
}); 

require('./Student.model');