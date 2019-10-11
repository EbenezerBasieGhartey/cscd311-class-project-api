const express=require('express');
var router=express.Router();

router.get('/',(req,res)=>{
	res.render("Student/hall",{
		viewTitle:"Select Hall"
	});
});

module.exports=router;