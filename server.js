require('./models/db');

const express=require('express');
const path=require('path');
const exphtml=require('express-handlebars');

const StudentController=require('./Controllers/StudentController');
const HallController=require('./Controllers/HallController');

var app=express();
app.use(express.static('/Residence/views/Student'))
app.set('views',path.join(__dirname,'/views/'));
app.engine('html',exphtml({ extname:'html',defaultLayout: 'app',layoutsDir:__dirname + '/views/layouts/'}));
app.set('view engine','html');

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname + '/views/Student/login.html'))
})

app.post('/login', (req,res)=>{
	res.sendFile(path.join(__dirname + '/views/Student/hall.html'))
})

app.listen(3000,()=>{
	console.log('Express server started at port:3000');
});

app.use('/Student',StudentController);
app.use('/hall',HallController);