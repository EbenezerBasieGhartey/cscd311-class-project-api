const mongoose =require('mongoose');

var StudentSchema=new mongoose.Schema({
	fullname:{
		type:String
	},
	Id:{
		type:String
	},
	password:{
		type:String
	}
})

mongoose.model('Student',StudentSchema);

//email validation
// StudentSchema.path('email').validate{(val)=>{
// 	emailRegex=/^(([^<>]))
// }}