const express=require('express');
var app=express();
require('./db.js');
const path=require('path');
const mongoose=require('mongoose');

const movieData=mongoose.model('movie');
const exphbs=require('express-handlebars');
const session=require('express-session');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs'}));
app.set('view engine','hbs');
app.use(express.static(__dirname + '/views/'));
const port=process.env.PORT || 3000;

app.listen(port,()=>{
  console.log("server is running on port 3000");
});

app.get('/',(req,res)=>{
  res.render('main')
});
app.post('/',(req,res)=>{
  console.log(req.body.search);
var docs={};

  movieData.find({MovieName:{$regex:  req.body.search, $options: 'i'}}).limit(10).exec((err,doc)=>{
    if(!err)
    {

      res.send(doc);
      docss=doc;
      console.log(doc);



    }
  });

});
