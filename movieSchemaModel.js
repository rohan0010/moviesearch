const mongoose=require('mongoose').set('debug', true);


var movieSchema=new mongoose.Schema({
MovieName :{
    type:String,

  },
  Year:{
    type:Number

  },
  ImdbRating:{
    type:Number
  },
  NumberOfImdbVotes:{
    type:Number
  },
  Awards:{
    type:String
  },
  Language:{
    type:String
  },
  altText:{
    type:String
  }
});

mongoose.model('movie',movieSchema);
