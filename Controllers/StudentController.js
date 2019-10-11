const express=require('express');
var router=express.Router();

router.get('/',(req,res)=>{
	res.render("Student/login",{
		viewTitle:"Insert Student"
	});
});

module.exports=router;