const mongoose=require('mongoose').set('debug', true);;

mongoose.connect('mongodb+srv://nilesh:123@cluster0-6bxip.mongodb.net/flickzeee?retryWrites=true',{useNewUrlParser:true},(err)=>{
  if(!err)
  {
    console.log("mongo db connected");
  }
  else{
    console.log("error in DB connection"+err);
  }
});
require('./movieSchemaModel.js')
